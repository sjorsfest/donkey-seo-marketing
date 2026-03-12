// Blog Data Access Layer
// Handles all database queries for blog articles

import { sql } from "drizzle-orm"
import { getDb } from "~/lib/db.server"
import { withCache } from "~/lib/cache.server"
import type { ModularDocument } from "~/lib/donkey-seo-client.server"

// Cache TTLs (in seconds)
const ARTICLE_CACHE_TTL = 3600 // 60 minutes
const ARTICLES_LIST_CACHE_TTL = 3600 // 60 minutes
const SITEMAP_CACHE_TTL = 3600 // 60 minutes

function safeString(value: unknown): string {
  if (value === null || value === undefined) return ""
  return String(value)
}

function safeArray<T>(value: unknown): T[] {
  return Array.isArray(value) ? (value as T[]) : []
}

function collectTargetBriefIds(document: ModularDocument | undefined): string[] {
  const briefIds = new Set<string>()
  const blocks = safeArray<{ links?: unknown }>(document?.blocks)

  for (const block of blocks) {
    const links = safeArray<{ href?: unknown; target_brief_id?: unknown }>(block.links)
    for (const link of links) {
      const href = safeString(link.href).trim()
      if (href) continue

      const targetBriefId = safeString(link.target_brief_id).trim()
      if (targetBriefId) {
        briefIds.add(targetBriefId)
      }
    }
  }

  return Array.from(briefIds)
}

async function getSlugMapByBriefIds(
  projectId: string,
  briefIds: string[]
): Promise<Map<string, string>> {
  if (!projectId || briefIds.length === 0) {
    return new Map()
  }

  const db = getDb()
  const briefIdLiterals = briefIds.map((briefId) => sql`${briefId}`)
  const result = await db.execute(sql`
    SELECT
      slug,
      webhook_payload->'article'->>'brief_id' AS brief_id
    FROM donkey_articles
    WHERE project_id = ${projectId}
      AND webhook_payload->'article'->>'brief_id' IN (${sql.join(briefIdLiterals, sql`, `)})
  `)

  const slugMap = new Map<string, string>()
  for (const row of result.rows) {
    const record = row as Record<string, unknown>
    const briefId = safeString(record.brief_id).trim()
    const slug = safeString(record.slug).trim()
    if (briefId && slug) {
      slugMap.set(briefId, slug)
    }
  }

  return slugMap
}

function hydrateInternalLinks(
  document: ModularDocument | undefined,
  slugMap: Map<string, string>
): ModularDocument | undefined {
  if (!document || slugMap.size === 0) return document

  let hasChanges = false
  const nextBlocks = safeArray<Record<string, unknown>>(document.blocks).map((block) => {
    const links = safeArray<Record<string, unknown>>(block.links)
    if (links.length === 0) return block

    let blockChanged = false
    const nextLinks = links.map((link) => {
      const href = safeString(link.href).trim()
      if (href) return link

      const targetBriefId = safeString(link.target_brief_id).trim()
      if (!targetBriefId) return link

      const slug = slugMap.get(targetBriefId)
      if (!slug) return link

      blockChanged = true
      return {
        ...link,
        href: `/blog/${slug}`,
      }
    })

    if (!blockChanged) return block
    hasChanges = true
    return {
      ...block,
      links: nextLinks,
    }
  })

  if (!hasChanges) return document
  return {
    ...document,
    blocks: nextBlocks as ModularDocument["blocks"],
  }
}

export interface BlogArticle {
  article_id: string
  project_id: string
  slug: string
  title: string
  excerpt: string | null
  seo_title: string | null
  seo_description: string | null
  seo_h1: string | null
  featured_image_url: string | null
  featured_image_alt: string | null
  pillar_slug: string | null
  pillar_name: string | null
  webhook_payload: {
    modular_document: ModularDocument
  }
  published_at: string
  updated_at: string
}

export interface BlogArticleSummary {
  article_id: string
  slug: string
  title: string
  excerpt: string | null
  featured_image_url: string | null
  featured_image_alt: string | null
  pillar_slug: string | null
  pillar_name: string | null
  published_at: string
}

export interface BlogArticleForSitemap {
  slug: string
  updated_at: string
}

/**
 * Get a single published article by slug
 * Returns null if not found or not published
 * Cached for 2 minutes
 */
export async function getPublishedArticleBySlug(
  slug: string
): Promise<BlogArticle | null> {
  return withCache(`article:${slug}`, ARTICLE_CACHE_TTL, async () => {
    const db = getDb()

    const result = await db.execute(sql`
      SELECT
        article_id, project_id, slug, title, excerpt,
        seo_title, seo_description, seo_h1,
        featured_image_url, featured_image_alt,
        pillar_slug, pillar_name,
        webhook_payload, published_at, updated_at
      FROM donkey_articles
      WHERE slug = ${slug} AND publish_status = 'published'
    `)

    if (result.rows.length === 0) {
      return null
    }

    const article = result.rows[0] as unknown as BlogArticle
    const briefIds = collectTargetBriefIds(article.webhook_payload?.modular_document)
    if (briefIds.length === 0) {
      return article
    }

    const slugMap = await getSlugMapByBriefIds(article.project_id, briefIds)
    if (slugMap.size === 0) {
      return article
    }

    const hydratedDocument = hydrateInternalLinks(
      article.webhook_payload?.modular_document,
      slugMap
    )

    if (!hydratedDocument) {
      return article
    }

    return {
      ...article,
      webhook_payload: {
        ...article.webhook_payload,
        modular_document: hydratedDocument,
      },
    }
  })
}

/**
 * Get all published articles ordered by publish date (newest first)
 * Cached for 1 minute
 */
export async function getAllPublishedArticles(
  limit?: number
): Promise<BlogArticleSummary[]> {
  const limitClause =
    typeof limit === "number" ? sql`LIMIT ${limit}` : sql``

  return withCache(`articles:all:${limit}`, ARTICLES_LIST_CACHE_TTL, async () => {
    const db = getDb()

    const result = await db.execute(sql`
      SELECT
        article_id, slug, title, excerpt,
        featured_image_url, featured_image_alt,
        pillar_slug, pillar_name, published_at
      FROM donkey_articles
      WHERE publish_status = 'published'
      ORDER BY published_at DESC
      ${limitClause}
    `)

    return result.rows as unknown as BlogArticleSummary[]
  })
}

/**
 * Get all published articles for sitemap generation
 * Cached for 5 minutes
 */
export async function getPublishedArticlesForSitemap(): Promise<
  BlogArticleForSitemap[]
> {
  return withCache("articles:sitemap", SITEMAP_CACHE_TTL, async () => {
    const db = getDb()

    const result = await db.execute(sql`
      SELECT slug, updated_at
      FROM donkey_articles
      WHERE publish_status = 'published'
      ORDER BY published_at DESC
    `)

    return result.rows as unknown as BlogArticleForSitemap[]
  })
}

/**
 * Get articles in a specific pillar
 * Cached for 1 minute
 */
export async function getArticlesByPillar(
  pillarSlug: string
): Promise<BlogArticleSummary[]> {
  return withCache(`articles:pillar:${pillarSlug}`, ARTICLES_LIST_CACHE_TTL, async () => {
    const db = getDb()

    const result = await db.execute(sql`
      SELECT
        article_id, slug, title, excerpt,
        featured_image_url, featured_image_alt, published_at
      FROM donkey_articles
      WHERE pillar_slug = ${pillarSlug} AND publish_status = 'published'
      ORDER BY published_at DESC
    `)

    return result.rows as unknown as BlogArticleSummary[]
  })
}
