import type { Route } from "./+types/blog.$slug";
import { data } from "react-router";
import { ArticleRenderer } from "~/components/blog/ArticleRenderer";
import { Footer } from "~/components/layout/footer";
import { Navbar } from "~/components/layout/navbar";
import { getPublishedArticleBySlug } from "~/lib/blog-data.server";
import {
  BRAND_LOGO_URL,
  buildJsonLdGraph,
  buildMeta,
  CANONICAL_ORIGIN,
} from "~/lib/seo";

const HTML_CACHE_CONTROL =
  "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400";

export async function loader({ params }: Route.LoaderArgs) {
  const article = await getPublishedArticleBySlug(params.slug);
  if (!article) {
    throw data({ message: "Article not found" }, { status: 404 });
  }

  return data(
    {
      article,
      modularDocument: article.webhook_payload.modular_document,
    },
    {
      headers: {
        "Cache-Control": HTML_CACHE_CONTROL,
      },
    },
  );
}

export function meta({ data }: Route.MetaArgs) {
  if (!data) {
    return [{ title: "Article Not Found | Donkey SEO" }];
  }

  return buildMeta({
    path: `/blog/${data.article.slug}`,
    title: data.article.seo_title ?? data.article.title,
    description:
      data.article.seo_description ??
      data.article.excerpt ??
      "SEO guidance and implementation playbooks from Donkey SEO.",
    ogType: "article",
    socialImagePath: data.article.featured_image_url ?? undefined,
    socialImageAlt: data.article.featured_image_alt ?? undefined,
  });
}

export default function BlogArticlePage({ loaderData }: Route.ComponentProps) {
  const { article, modularDocument } = loaderData;
  const authorName = modularDocument.author?.name ?? "Donkey SEO";
  const authorType = modularDocument.author?.name ? "Person" : "Organization";

  const structuredData = buildJsonLdGraph({
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image:
      modularDocument.featured_image?.signed_url ??
      article.featured_image_url ??
      `${CANONICAL_ORIGIN}/og/og-image.png`,
    datePublished: article.published_at,
    author: {
      "@type": authorType,
      name: authorName,
      ...(authorType === "Organization" ? { url: CANONICAL_ORIGIN } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: "Donkey SEO",
      url: CANONICAL_ORIGIN,
      logo: {
        "@type": "ImageObject",
        url: BRAND_LOGO_URL,
      },
    },
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Navbar />
      <main className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="section-container max-w-4xl">
          <div className="mb-8">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-yellow-700 hover:text-yellow-800 transition-colors"
            >
              <span>←</span>
              <span>Back to blog</span>
            </a>
          </div>

          <ArticleRenderer
            document={modularDocument}
            featuredImageUrl={article.featured_image_url}
            featuredImageAlt={article.featured_image_alt}
            publishedAt={article.published_at}
            updatedAt={article.updated_at}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
