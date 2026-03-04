export type QuickstartStep = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
};

export type RendererExample = {
  id: "react" | "angular" | "plain-js";
  label: string;
  language: string;
  summary: string;
  code: string;
};

export type ClientExample = {
  id: "node" | "python" | "curl";
  label: string;
  language: string;
  summary: string;
  code: string;
};

export type EndpointReference = {
  method: "GET" | "PATCH";
  path: string;
  auth: "Public" | "X-API-Key";
  description: string;
  query: string[];
};

export type ChecklistItem = {
  id: string;
  title: string;
  requirement: "Required" | "Recommended";
  detail: string;
};

export type DocsSection = {
  id: string;
  label: string;
};

export type FlowStep = {
  id: string;
  title: string;
  detail: string;
};

export type CodeExample = {
  id: string;
  label: string;
  language: string;
  summary: string;
  code: string;
};

export const integrationBaseUrl = "https://api.donkeyseo.io";

export const docsSections: DocsSection[] = [
  { id: "what-to-build", label: "What to build" },
  { id: "quickstart", label: "Quickstart" },
  { id: "architecture", label: "Architecture flow" },
  { id: "renderer", label: "Article renderer" },
  { id: "clients", label: "API clients" },
  { id: "webhook", label: "Webhook security" },
  { id: "endpoints", label: "Endpoint reference" },
  { id: "payloads", label: "Payloads + checklist" },
];

export const whatToBuildPoints: string[] = [
  "A signed webhook endpoint that receives content.article.publish_requested, validates signatures, and processes idempotently via event_id.",
  "A webhook-first storage model with one canonical local row per article_id and no separate local article-version rows.",
  "A modular_document block renderer that maps by block_type, preserves order, and safely renders markdown fields.",
  "Publication sync callbacks that PATCH publish_status, published_at, and published_url to Donkey SEO.",
  "Pillar-aware navigation that renders active pillars in the footer and links to disambiguation routes.",
];

export const quickstartSteps: QuickstartStep[] = [
  {
    id: "qs-1",
    title: "Set credentials",
    description: "Generate integration credentials in Donkey SEO and keep them server-side only.",
    bullets: [
      "DONKEY_SEO_API_KEY is sent as X-API-Key to protected integration endpoints.",
      "DONKEY_SEO_WEBHOOK_SECRET is only used for HMAC signature verification on webhooks.",
      "Never expose either secret in browser bundles.",
    ],
  },
  {
    id: "qs-2",
    title: "Implement webhook-first ingestion",
    description: "Treat webhook payloads as canonical records and process retries safely.",
    bullets: [
      "Verify signature: HMAC SHA256 over {X-Donkey-Timestamp}.{raw_request_body}.",
      "Upsert article storage by article_id and keep modular_document raw and unchanged.",
      "Use event_id idempotency records to discard duplicate deliveries.",
    ],
  },
  {
    id: "qs-3",
    title: "Render and publish",
    description: "Build your own modular renderer and publish from structured data, not rendered_html.",
    bullets: [
      "Render by block_type with semantic HTML and markdown-safe parsing.",
      "Emit modular_document.structured_data entries as JSON-LD script tags without transforming keys.",
      "Copy signed image URLs to your own permanent bucket because signed URLs expire.",
    ],
  },
  {
    id: "qs-4",
    title: "Sync publication state",
    description: "After scheduling/publishing/failure, callback Donkey SEO with the latest state.",
    bullets: [
      "PATCH /api/v1/integration/article/{article_id}/publication?project_id=...",
      "Set publish_status to scheduled, published, or failed.",
      "When published, include published_at (ISO datetime) and published_url.",
    ],
  },
];

export const architectureFlow: FlowStep[] = [
  {
    id: "flow-1",
    title: "Receive publish request webhook",
    detail:
      "Accept raw JSON, verify X-Donkey-Signature, and reject invalid signatures with non-2xx.",
  },
  {
    id: "flow-2",
    title: "Run idempotency gate",
    detail:
      "Check event_id before doing work. Duplicate event_id values are retries and should return success without reprocessing.",
  },
  {
    id: "flow-3",
    title: "Persist canonical article",
    detail:
      "Upsert one local article record by article_id. Store modular_document raw for replay, auditing, and deterministic rendering.",
  },
  {
    id: "flow-4",
    title: "Render modular blocks",
    detail:
      "Parse block_type -> component mapping, preserve order, and render markdown fields safely without raw HTML injection.",
  },
  {
    id: "flow-5",
    title: "Publish and store stable assets",
    detail:
      "Push content to CMS/viewer, copy signed assets to your own permanent storage, and save stable public URLs.",
  },
  {
    id: "flow-6",
    title: "PATCH publication callback",
    detail:
      "Send scheduled/published/failed status back to Donkey SEO with timestamps/URLs to close the publication loop.",
  },
];

export const supportedBlockTypes = [
  "hero",
  "summary",
  "section",
  "list",
  "comparison_table",
  "steps",
  "faq",
  "cta",
  "conclusion",
  "sources",
] as const;

export const envTemplate = `DONKEY_SEO_API_KEY=replace-with-project-integration-api-key\nDONKEY_SEO_WEBHOOK_SECRET=replace-with-project-webhook-signing-secret`;

export const rendererExamples: RendererExample[] = [
  {
    id: "react",
    label: "React",
    language: "tsx",
    summary:
      "Production-safe renderer with safe extractors, semantic block components, and JSON-LD guards.",
    code: `import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

type BlockType =
  | "hero"
  | "summary"
  | "section"
  | "list"
  | "comparison_table"
  | "steps"
  | "faq"
  | "cta"
  | "conclusion"
  | "sources";

type LinkItem = { anchor?: string; href?: string };
type FaqItem = { question?: string; answer?: string };
type CtaItem = { label?: string; href?: string } | null;

type Block = {
  block_type?: string | null;
  semantic_tag?: string | null;
  heading?: string | null;
  level?: number | null;
  body?: string | null;
  items?: unknown;
  ordered?: boolean;
  links?: unknown;
  faq_items?: unknown;
  table_columns?: unknown;
  table_rows?: unknown;
  cta?: unknown;
  // Keep extension fields for schema evolution.
  [key: string]: unknown;
};

type ModularDocument = {
  seo_meta?: { h1?: unknown };
  structured_data?: unknown;
  blocks?: unknown;
};

function safeString(value: unknown): string {
  if (value === null || value === undefined) return "";
  return String(value);
}

function safeArray<T>(value: unknown): T[] {
  return Array.isArray(value) ? (value as T[]) : [];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isJsonLdObject(value: unknown): value is Record<string, unknown> {
  if (!isRecord(value)) return false;
  return typeof value["@type"] === "string" || typeof value["@context"] === "string";
}

function safeStructuredData(value: unknown): Array<Record<string, unknown>> {
  if (Array.isArray(value)) return value.filter(isJsonLdObject);
  return isJsonLdObject(value) ? [value] : [];
}

function serializeJsonLd(data: Record<string, unknown>): string {
  // Prevent script breakouts while keeping values intact.
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function normalizeHeadingLevel(level: unknown): 2 | 3 | 4 {
  const raw = typeof level === "number" ? level : 2;
  if (raw <= 2) return 2;
  if (raw === 3) return 3;
  return 4;
}

function toBlockType(value: unknown): BlockType | "unknown" {
  const blockType = safeString(value);
  switch (blockType) {
    case "hero":
    case "summary":
    case "section":
    case "list":
    case "comparison_table":
    case "steps":
    case "faq":
    case "cta":
    case "conclusion":
    case "sources":
      return blockType;
    default:
      return "unknown";
  }
}

function MarkdownText({ text }: { text?: unknown }) {
  const normalized = safeString(text).trim();
  if (!normalized) return null;

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]}>
      {normalized}
    </ReactMarkdown>
  );
}

function Heading({ heading, level }: { heading: unknown; level: unknown }) {
  const text = safeString(heading).trim();
  if (!text) return null;

  const normalized = normalizeHeadingLevel(level);
  if (normalized === 2) return <h2>{text}</h2>;
  if (normalized === 3) return <h3>{text}</h3>;
  return <h4>{text}</h4>;
}

function BlockLinks({ links }: { links: unknown }) {
  const safeLinks = safeArray<LinkItem>(links).filter(
    (link) => safeString(link?.href).trim().length > 0
  );
  if (safeLinks.length === 0) return null;

  return (
    <nav aria-label="Related links">
      <ul>
        {safeLinks.map((link, index) => {
          const href = safeString(link.href);
          const label = safeString(link.anchor) || href;
          return (
            <li key={href + "-" + index}>
              <a href={href}>{label}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function SharedContent({ block }: { block: Block }) {
  const items = safeArray<string>(block.items).map((item) => safeString(item)).filter(Boolean);
  const ordered = block.ordered === true;

  return (
    <>
      <Heading heading={block.heading} level={block.level} />
      <MarkdownText text={block.body} />

      {items.length > 0
        ? ordered
          ? (
            <ol>
              {items.map((item, index) => (
                <li key={index}>
                  <MarkdownText text={item} />
                </li>
              ))}
            </ol>
          )
          : (
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <MarkdownText text={item} />
                </li>
              ))}
            </ul>
          )
        : null}

      <BlockLinks links={block.links} />
    </>
  );
}

function ComparisonTableBlock({ block }: { block: Block }) {
  const columns = safeArray<string>(block.table_columns).map((col) => safeString(col)).filter(Boolean);
  const rows = safeArray<unknown[]>(block.table_rows);
  if (columns.length === 0) return null;

  return (
    <section>
      <Heading heading={block.heading} level={block.level} />
      <table>
        <thead>
          <tr>{columns.map((col, index) => <th key={index}>{col}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => {
            const cells = safeArray<string>(row).map((cell) => safeString(cell));
            return (
              <tr key={rowIndex}>
                {cells.map((cell, cellIndex) => (
                  <td key={cellIndex}>
                    <MarkdownText text={cell} />
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <BlockLinks links={block.links} />
    </section>
  );
}

function FaqBlock({ block }: { block: Block }) {
  const faqItems = safeArray<FaqItem>(block.faq_items).filter(
    (item) => safeString(item?.question).trim().length > 0
  );
  if (faqItems.length === 0) return null;

  return (
    <section>
      <Heading heading={block.heading} level={block.level} />
      {faqItems.map((item, index) => (
        <details key={index}>
          <summary>{safeString(item.question)}</summary>
          <MarkdownText text={item.answer} />
        </details>
      ))}
      <BlockLinks links={block.links} />
    </section>
  );
}

function CtaBlock({ block }: { block: Block }) {
  const cta = isRecord(block.cta) ? (block.cta as CtaItem) : null;
  const label = safeString(cta?.label);
  const href = safeString(cta?.href);

  return (
    <aside>
      <SharedContent block={block} />
      {label && href ? <a href={href}>{label}</a> : null}
    </aside>
  );
}

function FallbackBlock({ block }: { block: Block }) {
  if (!safeString(block.heading) && !safeString(block.body)) return null;
  return (
    <section data-block-type={safeString(block.block_type)}>
      <p>Unknown block type: {safeString(block.block_type)}</p>
      <SharedContent block={block} />
    </section>
  );
}

function renderBlock(block: Block, index: number, articleHasH1: boolean) {
  const blockType = toBlockType(block.block_type);

  switch (blockType) {
    case "comparison_table":
      return <ComparisonTableBlock key={index} block={block} />;
    case "faq":
      return <FaqBlock key={index} block={block} />;
    case "cta":
      return <CtaBlock key={index} block={block} />;
    case "hero":
      return (
        <header key={index}>
          {articleHasH1 ? (
            <>
              <MarkdownText text={block.body} />
              <BlockLinks links={block.links} />
            </>
          ) : (
            <SharedContent block={block} />
          )}
        </header>
      );
    case "summary":
    case "section":
    case "list":
    case "steps":
    case "conclusion":
    case "sources": {
      const semantic = safeString(block.semantic_tag);
      const tagName =
        semantic === "header" || semantic === "section" || semantic === "aside" || semantic === "footer"
          ? semantic
          : "section";
      return React.createElement(tagName, { key: index }, <SharedContent block={block} />);
    }
    default:
      return <FallbackBlock key={index} block={block} />;
  }
}

export function ArticleRenderer({ document }: { document: ModularDocument }) {
  const h1 = safeString(document.seo_meta?.h1).trim();
  const blocks = safeArray<Block>(document.blocks);
  const structuredData = safeStructuredData(document.structured_data);

  return (
    <>
      <article>
        {h1 ? <h1>{h1}</h1> : null}
        {blocks.map((block, i) => renderBlock(block, i, Boolean(h1)))}
      </article>

      {structuredData.map((schema, i) => (
        <script
          key={"jsonld-" + i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(schema),
          }}
        />
      ))}
    </>
  );
}`,
  },
  {
    id: "angular",
    label: "Angular",
    language: "ts",
    summary:
      "Robust Angular renderer with safe parsing, guarded JSON-LD output, and unknown block fallback.",
    code: `import { Component, Input } from "@angular/core";
import DOMPurify from "dompurify";
import { marked } from "marked";

type LinkItem = { href: string; anchor: string };
type FaqItem = { question: string; answer: string };
type CtaItem = { label: string; href: string };

type Block = {
  block_type?: string | null;
  semantic_tag?: string | null;
  heading?: string | null;
  body?: string | null;
  items?: unknown;
  ordered?: boolean;
  links?: unknown;
  faq_items?: unknown;
  table_columns?: unknown;
  table_rows?: unknown;
  cta?: unknown;
  [key: string]: unknown;
};

@Component({
  selector: "donkey-article-renderer",
  template: \`
    <article>
      <h1 *ngIf="h1">{{ h1 }}</h1>

      <ng-container *ngFor="let block of blocks; index as i">
        <ng-container [ngSwitch]="blockType(block)">
          <section *ngSwitchCase="'comparison_table'">
            <h2 *ngIf="safeString(block.heading)">{{ safeString(block.heading) }}</h2>
            <table>
              <thead>
                <tr>
                  <th *ngFor="let col of tableColumns(block)">{{ col }}</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let row of tableRows(block)">
                  <td *ngFor="let cell of row" [innerHTML]="renderMarkdownSafe(cell)"></td>
                </tr>
              </tbody>
            </table>
            <ng-container *ngTemplateOutlet="linkList; context: { links: relatedLinks(block.links) }"></ng-container>
          </section>

          <section *ngSwitchCase="'faq'">
            <h2 *ngIf="safeString(block.heading)">{{ safeString(block.heading) }}</h2>
            <details *ngFor="let item of faqItems(block.faq_items)">
              <summary>{{ item.question }}</summary>
              <div [innerHTML]="renderMarkdownSafe(item.answer)"></div>
            </details>
            <ng-container *ngTemplateOutlet="linkList; context: { links: relatedLinks(block.links) }"></ng-container>
          </section>

          <aside *ngSwitchCase="'cta'">
            <ng-container *ngTemplateOutlet="shared; context: { block: block }"></ng-container>
            <a *ngIf="ctaFor(block.cta).href && ctaFor(block.cta).label" [href]="ctaFor(block.cta).href">
              {{ ctaFor(block.cta).label }}
            </a>
          </aside>

          <header *ngSwitchCase="'hero'">
            <ng-container *ngIf="!h1; else heroBodyOnly">
              <ng-container *ngTemplateOutlet="shared; context: { block: block }"></ng-container>
            </ng-container>
            <ng-template #heroBodyOnly>
              <div [innerHTML]="renderMarkdownSafe(block.body)"></div>
              <ng-container *ngTemplateOutlet="linkList; context: { links: relatedLinks(block.links) }"></ng-container>
            </ng-template>
          </header>

          <section *ngSwitchCase="'summary'">
            <ng-container *ngTemplateOutlet="shared; context: { block: block }"></ng-container>
          </section>
          <section *ngSwitchCase="'section'">
            <ng-container *ngTemplateOutlet="shared; context: { block: block }"></ng-container>
          </section>
          <section *ngSwitchCase="'list'">
            <ng-container *ngTemplateOutlet="shared; context: { block: block }"></ng-container>
          </section>
          <section *ngSwitchCase="'steps'">
            <ng-container *ngTemplateOutlet="shared; context: { block: block }"></ng-container>
          </section>
          <section *ngSwitchCase="'conclusion'">
            <ng-container *ngTemplateOutlet="shared; context: { block: block }"></ng-container>
          </section>
          <section *ngSwitchCase="'sources'">
            <ng-container *ngTemplateOutlet="shared; context: { block: block }"></ng-container>
          </section>

          <section *ngSwitchDefault [attr.data-block-type]="safeString(block.block_type)">
            <p>Unknown block type: {{ safeString(block.block_type) }}</p>
            <ng-container *ngTemplateOutlet="shared; context: { block: block }"></ng-container>
          </section>
        </ng-container>
      </ng-container>
    </article>

    <ng-template #shared let-block="block">
      <h2 *ngIf="safeString(block.heading)">{{ safeString(block.heading) }}</h2>
      <div [innerHTML]="renderMarkdownSafe(block.body)"></div>

      <ol *ngIf="listItems(block.items).length > 0 && block.ordered === true">
        <li *ngFor="let item of listItems(block.items)" [innerHTML]="renderMarkdownSafe(item)"></li>
      </ol>

      <ul *ngIf="listItems(block.items).length > 0 && block.ordered !== true">
        <li *ngFor="let item of listItems(block.items)" [innerHTML]="renderMarkdownSafe(item)"></li>
      </ul>

      <ng-container *ngTemplateOutlet="linkList; context: { links: relatedLinks(block.links) }"></ng-container>
    </ng-template>

    <ng-template #linkList let-links="links">
      <nav *ngIf="links.length > 0" aria-label="Related links">
        <ul>
          <li *ngFor="let link of links">
            <a [href]="link.href">{{ link.anchor || link.href }}</a>
          </li>
        </ul>
      </nav>
    </ng-template>

    <ng-container *ngFor="let schema of structuredData">
      <script type="application/ld+json">{{ serializeJsonLd(schema) }}</script>
    </ng-container>
  \`,
})
export class DonkeyArticleRendererComponent {
  @Input() document?: {
    seo_meta?: { h1?: unknown };
    blocks?: unknown;
    structured_data?: unknown;
  };

  get h1(): string {
    return this.safeString(this.document?.seo_meta?.h1).trim();
  }

  get blocks(): Block[] {
    return this.safeArray<Block>(this.document?.blocks).filter((item) => this.isRecord(item));
  }

  get structuredData(): Record<string, unknown>[] {
    return this.safeStructuredData(this.document?.structured_data);
  }

  safeString(value: unknown): string {
    if (value === null || value === undefined) return "";
    return String(value);
  }

  safeArray<T>(value: unknown): T[] {
    return Array.isArray(value) ? (value as T[]) : [];
  }

  isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null && !Array.isArray(value);
  }

  listItems(value: unknown): string[] {
    return this.safeArray<unknown>(value).map((item) => this.safeString(item)).filter(Boolean);
  }

  tableColumns(block: Block): string[] {
    return this.safeArray<unknown>(block.table_columns)
      .map((col) => this.safeString(col))
      .filter(Boolean);
  }

  tableRows(block: Block): string[][] {
    return this.safeArray<unknown>(block.table_rows).map((row) =>
      this.safeArray<unknown>(row).map((cell) => this.safeString(cell))
    );
  }

  faqItems(value: unknown): FaqItem[] {
    return this.safeArray<Record<string, unknown>>(value)
      .map((item) => ({
        question: this.safeString(item["question"]),
        answer: this.safeString(item["answer"]),
      }))
      .filter((item) => item.question.length > 0);
  }

  relatedLinks(value: unknown): LinkItem[] {
    return this.safeArray<Record<string, unknown>>(value)
      .map((link) => ({
        href: this.safeString(link["href"]),
        anchor: this.safeString(link["anchor"]),
      }))
      .filter((link) => link.href.length > 0);
  }

  ctaFor(value: unknown): CtaItem {
    if (!this.isRecord(value)) return { label: "", href: "" };
    return {
      label: this.safeString(value["label"]),
      href: this.safeString(value["href"]),
    };
  }

  blockType(block: Block): string {
    const type = this.safeString(block.block_type);
    const supported = new Set([
      "hero",
      "summary",
      "section",
      "list",
      "comparison_table",
      "steps",
      "faq",
      "cta",
      "conclusion",
      "sources",
    ]);
    return supported.has(type) ? type : "unknown";
  }

  isJsonLdObject(value: unknown): value is Record<string, unknown> {
    if (!this.isRecord(value)) return false;
    return typeof value["@type"] === "string" || typeof value["@context"] === "string";
  }

  safeStructuredData(value: unknown): Array<Record<string, unknown>> {
    if (Array.isArray(value)) {
      return value.filter((item): item is Record<string, unknown> => this.isJsonLdObject(item));
    }
    return this.isJsonLdObject(value) ? [value] : [];
  }

  renderMarkdownSafe(text?: unknown): string {
    const value = this.safeString(text).trim();
    if (!value) return "";
    return DOMPurify.sanitize(marked.parse(value) as string);
  }

  serializeJsonLd(schema: Record<string, unknown>): string {
    return JSON.stringify(schema).replace(/</g, "\\u003c");
  }
}`,
  },
  {
    id: "plain-js",
    label: "Plain JS",
    language: "js",
    summary:
      "Robust plain JS renderer with safe normalization, explicit block dispatch, and JSON-LD guarding.",
    code: `import DOMPurify from "dompurify";
import { marked } from "marked";

function safeString(value) {
  if (value === null || value === undefined) return "";
  return String(value);
}

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isJsonLdObject(value) {
  return isRecord(value) && (typeof value["@type"] === "string" || typeof value["@context"] === "string");
}

function safeStructuredData(value) {
  if (Array.isArray(value)) return value.filter(isJsonLdObject);
  return isJsonLdObject(value) ? [value] : [];
}

function serializeJsonLd(schema) {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

function markdownToHtml(text) {
  const value = safeString(text).trim();
  if (!value) return "";
  return DOMPurify.sanitize(marked.parse(value));
}

function listItems(value) {
  return safeArray(value).map((item) => safeString(item)).filter(Boolean);
}

function relatedLinks(value) {
  return safeArray(value)
    .filter((link) => isRecord(link) && safeString(link.href).trim().length > 0)
    .map((link) => ({ href: safeString(link.href), anchor: safeString(link.anchor) }));
}

function appendLinks(parent, links) {
  const normalized = relatedLinks(links);
  if (normalized.length === 0) return;

  const nav = document.createElement("nav");
  nav.setAttribute("aria-label", "Related links");
  const ul = document.createElement("ul");

  normalized.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.anchor || link.href;
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  parent.appendChild(nav);
}

function appendSharedContent(section, block, options) {
  const skipHeading = options && options.skipHeading === true;
  if (!skipHeading && safeString(block.heading).trim()) {
    const h2 = document.createElement("h2");
    h2.textContent = safeString(block.heading);
    section.appendChild(h2);
  }

  const body = markdownToHtml(block.body);
  if (body) {
    const div = document.createElement("div");
    div.innerHTML = body;
    section.appendChild(div);
  }

  const items = listItems(block.items);
  if (items.length > 0) {
    const list = document.createElement(block.ordered === true ? "ol" : "ul");
    items.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = markdownToHtml(item);
      list.appendChild(li);
    });
    section.appendChild(list);
  }

  appendLinks(section, block.links);
}

function renderComparisonTableBlock(block) {
  const section = document.createElement("section");
  appendSharedContent(section, { ...block, items: [] });

  const columns = safeArray(block.table_columns).map((col) => safeString(col)).filter(Boolean);
  if (columns.length === 0) return section;

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  columns.forEach((column) => {
    const th = document.createElement("th");
    th.textContent = column;
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  safeArray(block.table_rows).forEach((row) => {
    const tr = document.createElement("tr");
    safeArray(row).forEach((cell) => {
      const td = document.createElement("td");
      td.innerHTML = markdownToHtml(cell);
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  section.appendChild(table);
  return section;
}

function renderFaqBlock(block) {
  const section = document.createElement("section");
  appendSharedContent(section, { ...block, items: [] });

  safeArray(block.faq_items)
    .filter((item) => isRecord(item) && safeString(item.question).trim().length > 0)
    .forEach((faq) => {
      const details = document.createElement("details");
      const summary = document.createElement("summary");
      summary.textContent = safeString(faq.question);
      const answer = document.createElement("div");
      answer.innerHTML = markdownToHtml(faq.answer);
      details.append(summary, answer);
      section.appendChild(details);
    });

  return section;
}

function renderCtaBlock(block) {
  const section = document.createElement("aside");
  appendSharedContent(section, block);

  const cta = isRecord(block.cta) ? block.cta : null;
  const href = safeString(cta && cta.href);
  const label = safeString(cta && cta.label);
  if (href && label) {
    const a = document.createElement("a");
    a.href = href;
    a.textContent = label;
    section.appendChild(a);
  }

  return section;
}

function renderUnknownBlock(block) {
  const section = document.createElement("section");
  section.dataset.blockType = safeString(block.block_type);
  const p = document.createElement("p");
  p.textContent = "Unknown block type: " + safeString(block.block_type);
  section.appendChild(p);
  appendSharedContent(section, block);
  return section;
}

function renderBlock(block, articleHasH1) {
  const blockType = safeString(block && block.block_type);

  switch (blockType) {
    case "comparison_table":
      return renderComparisonTableBlock(block);
    case "faq":
      return renderFaqBlock(block);
    case "cta":
      return renderCtaBlock(block);
    case "hero": {
      const header = document.createElement("header");
      appendSharedContent(header, block, { skipHeading: articleHasH1 });
      return header;
    }
    case "summary":
    case "section":
    case "list":
    case "steps":
    case "conclusion":
    case "sources": {
      const semantic = safeString(block.semantic_tag);
      const allowed = new Set(["header", "section", "aside", "footer"]);
      const section = document.createElement(allowed.has(semantic) ? semantic : "section");
      appendSharedContent(section, block);
      return section;
    }
    default:
      return renderUnknownBlock(block);
  }
}

export function renderArticle(rootElement, modularDocument) {
  const h1 = safeString(modularDocument && modularDocument.seo_meta && modularDocument.seo_meta.h1).trim();
  const blocks = safeArray(modularDocument && modularDocument.blocks);

  if (h1) {
    const heading = document.createElement("h1");
    heading.textContent = h1;
    rootElement.appendChild(heading);
  }

  // Preserve block order exactly.
  blocks.forEach((block) => {
    rootElement.appendChild(renderBlock(block, Boolean(h1)));
  });

  safeStructuredData(modularDocument && modularDocument.structured_data).forEach((schema) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = serializeJsonLd(schema);
    rootElement.appendChild(script);
  });
}`,
  },
];

export const clientExamples: ClientExample[] = [
  {
    id: "node",
    label: "Node",
    language: "ts",
    summary: "Node/TypeScript API client with API key header and PATCH publication callback.",
    code: `type PublicationPatch = {
  publish_status?: "scheduled" | "published" | "failed";
  published_at?: string;
  published_url?: string;
};

export class DonkeySeoClient {
  constructor(private baseUrl: string, private apiKey: string) {}

  private headers() {
    return {
      "X-API-Key": this.apiKey,
      "Content-Type": "application/json",
    };
  }

  private async request<T>(path: string, init?: RequestInit): Promise<T> {
    const response = await fetch(this.baseUrl + path, {
      ...init,
      headers: { ...this.headers(), ...(init?.headers ?? {}) },
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error("Donkey SEO request failed: " + response.status + " " + body);
    }

    return response.json() as Promise<T>;
  }

  listArticles(projectId: string, page = 1, pageSize = 20) {
    return this.request(
      "/api/v1/integration/articles?project_id=" + projectId + "&page=" + page + "&page_size=" + pageSize,
    );
  }

  getPillars(projectId: string, includeArchived = false) {
    return this.request(
      "/api/v1/integration/pillars?project_id=" + projectId + "&include_archived=" + includeArchived,
    );
  }

  getLatestArticle(projectId: string, articleId: string) {
    return this.request(
      "/api/v1/integration/article/" + articleId + "?project_id=" + projectId,
    );
  }

  getArticleVersion(projectId: string, articleId: string, versionNumber: number) {
    return this.request(
      "/api/v1/integration/article/" + articleId + "/versions/" + versionNumber + "?project_id=" + projectId,
    );
  }

  patchPublication(projectId: string, articleId: string, payload: PublicationPatch) {
    return this.request(
      "/api/v1/integration/article/" + articleId + "/publication?project_id=" + projectId,
      {
        method: "PATCH",
        body: JSON.stringify(payload),
      },
    );
  }
}`,
  },
  {
    id: "python",
    label: "Python",
    language: "py",
    summary: "Python requests client for list/read/patch publication operations.",
    code: `import requests
from typing import Any, Dict, Optional

class DonkeySeoClient:
    def __init__(self, base_url: str, api_key: str):
        self.base_url = base_url.rstrip("/")
        self.session = requests.Session()
        self.session.headers.update({
            "X-API-Key": api_key,
            "Content-Type": "application/json",
        })

    def _request(self, method: str, path: str, **kwargs) -> Dict[str, Any]:
        resp = self.session.request(method, f"{self.base_url}{path}", timeout=30, **kwargs)
        resp.raise_for_status()
        return resp.json()

    def list_articles(self, project_id: str, page: int = 1, page_size: int = 20):
        return self._request(
            "GET",
            "/api/v1/integration/articles",
            params={"project_id": project_id, "page": page, "page_size": page_size},
        )

    def get_pillars(self, project_id: str, include_archived: bool = False):
        return self._request(
            "GET",
            "/api/v1/integration/pillars",
            params={"project_id": project_id, "include_archived": include_archived},
        )

    def get_latest_article(self, project_id: str, article_id: str):
        return self._request(
            "GET",
            f"/api/v1/integration/article/{article_id}",
            params={"project_id": project_id},
        )

    def patch_publication(
        self,
        project_id: str,
        article_id: str,
        publish_status: str,
        published_at: Optional[str] = None,
        published_url: Optional[str] = None,
    ):
        payload = {
            "publish_status": publish_status,
            "published_at": published_at,
            "published_url": published_url,
        }
        return self._request(
            "PATCH",
            f"/api/v1/integration/article/{article_id}/publication",
            params={"project_id": project_id},
            json=payload,
        )`,
  },
  {
    id: "curl",
    label: "cURL",
    language: "bash",
    summary: "Shell-ready endpoint calls for quick testing and CI smoke checks.",
    code: `BASE_URL="https://api.donkeyseo.io"
PROJECT_ID="proj_123"
ARTICLE_ID="c38f848d-66d6-4c47-b89a-30aa5a6dc881"
API_KEY="replace-with-project-integration-api-key"

# List articles
curl -sS "\${BASE_URL}/api/v1/integration/articles?project_id=\${PROJECT_ID}&page=1&page_size=20" \\
  -H "X-API-Key: \${API_KEY}"

# Get pillars
curl -sS "\${BASE_URL}/api/v1/integration/pillars?project_id=\${PROJECT_ID}" \\
  -H "X-API-Key: \${API_KEY}"

# Get latest article payload
curl -sS "\${BASE_URL}/api/v1/integration/article/\${ARTICLE_ID}?project_id=\${PROJECT_ID}" \\
  -H "X-API-Key: \${API_KEY}"

# Patch publication callback
curl -sS -X PATCH "\${BASE_URL}/api/v1/integration/article/\${ARTICLE_ID}/publication?project_id=\${PROJECT_ID}" \\
  -H "X-API-Key: \${API_KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "publish_status": "published",
    "published_at": "2026-03-02T09:32:14Z",
    "published_url": "https://example.com/blog/programmatic-seo"
  }'`,
  },
];

export const webhookExample: CodeExample = {
  id: "webhook-node",
  label: "Express webhook receiver",
  language: "ts",
  summary: "Raw-body signature verification + idempotent event processing using event_id.",
  code: `import crypto from "crypto";
import express from "express";

const app = express();

// Raw body is required for stable signature verification.
app.use("/webhooks/donkey", express.raw({ type: "application/json" }));

function verifySignature(rawBody: Buffer, timestamp: string, incoming: string, secret: string) {
  const signedPayload = timestamp + "." + rawBody.toString("utf8");
  const digest = crypto.createHmac("sha256", secret).update(signedPayload).digest("hex");
  const expected = "sha256=" + digest;

  const incomingBuf = Buffer.from(incoming);
  const expectedBuf = Buffer.from(expected);

  return incomingBuf.length === expectedBuf.length && crypto.timingSafeEqual(incomingBuf, expectedBuf);
}

app.post("/webhooks/donkey", async (req, res) => {
  const timestamp = String(req.header("X-Donkey-Timestamp") || "");
  const signature = String(req.header("X-Donkey-Signature") || "");
  const secret = process.env.DONKEY_SEO_WEBHOOK_SECRET || "";
  const rawBody = req.body as Buffer;

  if (!timestamp || !signature || !secret || !rawBody) {
    return res.status(400).send("missing webhook headers or body");
  }

  const isValid = verifySignature(rawBody, timestamp, signature, secret);
  if (!isValid) return res.status(401).send("invalid signature");

  const event = JSON.parse(rawBody.toString("utf8"));

  // Idempotency guard: duplicate event_id should be treated as retry.
  if (await alreadyProcessed(event.event_id)) {
    return res.status(200).send("ok");
  }

  // Persist canonical article payload by article_id before transformations.
  await upsertCanonicalArticle(event.article.article_id, {
    project: event.project,
    article: event.article,
    modular_document: event.modular_document,
    rendered_html: event.rendered_html,
  });

  await publishFromModularDocument(event.modular_document);
  await markProcessed(event.event_id);

  return res.status(200).send("ok");
});`,
};

export const endpointReferences: EndpointReference[] = [
  {
    method: "GET",
    path: "/api/v1/integration/articles",
    auth: "X-API-Key",
    description:
      "Paginated lightweight article list for selection/sync. Excludes heavy modular payload fields.",
    query: ["project_id (required)", "page (optional)", "page_size (optional)", "pillar_slug (optional)"],
  },
  {
    method: "GET",
    path: "/api/v1/integration/article/{article_id}",
    auth: "X-API-Key",
    description: "Fetch latest immutable article version payload with modular_document.",
    query: ["project_id (required)", "version_number (optional override)"],
  },
  {
    method: "GET",
    path: "/api/v1/integration/article/{article_id}/versions/{version_number}",
    auth: "X-API-Key",
    description: "Fetch an explicit immutable version of an article.",
    query: ["project_id (required)"],
  },
  {
    method: "PATCH",
    path: "/api/v1/integration/article/{article_id}/publication",
    auth: "X-API-Key",
    description:
      "Publication callback endpoint. Send scheduled/published/failed plus published timestamp and URL.",
    query: ["project_id (required)"],
  },
];

export const payloadExamples: CodeExample[] = [
  {
    id: "payload-webhook",
    label: "Webhook event",
    language: "json",
    summary: "Incoming content.article.publish_requested payload shape.",
    code: `{
  "event_id": "evt_01JMR5V6QAJ46R12VYAAW4M5A7",
  "event_type": "content.article.publish_requested",
  "occurred_at": "2026-03-02T09:32:00Z",
  "project": {
    "id": "proj_123",
    "domain": "example.com",
    "locale": "en-US"
  },
  "article": {
    "article_id": "c38f848d-66d6-4c47-b89a-30aa5a6dc881",
    "brief_id": "ddf6c8d8-7a7c-4cf8-b7d8-8f84a80af872",
    "version_number": 3,
    "title": "How to Scale Programmatic SEO Content",
    "slug": "how-to-scale-programmatic-seo-content",
    "primary_keyword": "programmatic seo",
    "proposed_publication_date": "2026-03-03"
  },
  "modular_document": {
    "schema_version": "1.0",
    "seo_meta": {
      "h1": "How to Scale Programmatic SEO Content",
      "meta_title": "Scale Programmatic SEO: A Practical Guide",
      "meta_description": "Operational workflow and architecture for scaling programmatic SEO.",
      "slug": "how-to-scale-programmatic-seo-content",
      "primary_keyword": "programmatic seo"
    },
    "blocks": [
      {
        "block_type": "hero",
        "semantic_tag": "header",
        "heading": "How to Scale Programmatic SEO Content",
        "level": 1,
        "body": "A production-ready workflow for planning, generating, and publishing at scale."
      }
    ]
  },
  "rendered_html": "<h1>How to Scale Programmatic SEO Content</h1><p>...</p>"
}`,
  },
  {
    id: "payload-article",
    label: "Article response",
    language: "json",
    summary: "GET article response with immutable version metadata.",
    code: `{
  "id": "e3f99b38-f1e1-4e6b-8f43-f6eec13c1406",
  "article_id": "c38f848d-66d6-4c47-b89a-30aa5a6dc881",
  "project_id": "proj_123",
  "version_number": 3,
  "title": "How to Scale Programmatic SEO Content",
  "slug": "how-to-scale-programmatic-seo-content",
  "primary_keyword": "programmatic seo",
  "modular_document": {
    "schema_version": "1.0",
    "blocks": [
      {
        "block_type": "hero",
        "heading": "How to Scale Programmatic SEO Content"
      }
    ]
  },
  "rendered_html": "<h1>How to Scale Programmatic SEO Content</h1><p>...</p>",
  "status": "approved",
  "created_at": "2026-03-02T08:54:07Z",
  "updated_at": "2026-03-02T09:14:55Z"
}`,
  },
  {
    id: "payload-publication",
    label: "Publication PATCH body",
    language: "json",
    summary: "Callback payload shape when your platform publishes content.",
    code: `{
  "publish_status": "published",
  "published_at": "2026-03-02T09:32:14Z",
  "published_url": "https://example.com/blog/programmatic-seo"
}`,
  },
];

export const checklistItems: ChecklistItem[] = [
  {
    id: "req-1",
    title: "Webhook-first canonical storage",
    requirement: "Required",
    detail:
      "Persist webhook article payload as your canonical local article by article_id. Do not create separate local article-version rows.",
  },
  {
    id: "req-2",
    title: "Signature verification",
    requirement: "Required",
    detail:
      "Verify X-Donkey-Signature with HMAC SHA256 over {X-Donkey-Timestamp}.{raw_request_body} using DONKEY_SEO_WEBHOOK_SECRET.",
  },
  {
    id: "req-3",
    title: "Idempotency by event_id",
    requirement: "Required",
    detail:
      "Treat duplicate event_id deliveries as retries and return success without re-running publication logic.",
  },
  {
    id: "req-4",
    title: "modular_document renderer",
    requirement: "Required",
    detail:
      "Build your own block renderer by block_type, preserve block and nested-item order, and render markdown fields safely.",
  },
  {
    id: "req-5",
    title: "JSON-LD emission",
    requirement: "Required",
    detail:
      "Emit each structured_data object as application/ld+json script tags and keep keys/values unchanged except escaping </.",
  },
  {
    id: "rec-1",
    title: "Pillar disambiguation pages",
    requirement: "Recommended",
    detail:
      "Fetch pillars and expose active pillar links in your footer to category pages like /pillars/{pillar.slug}.",
  },
  {
    id: "rec-2",
    title: "Stable media storage",
    requirement: "Recommended",
    detail:
      "Copy featured and author signed URLs to your own public bucket and store permanent URLs/keys.",
  },
  {
    id: "rec-3",
    title: "Schema-aware parser tests",
    requirement: "Recommended",
    detail:
      "Add parser tests for every supported block type and assert schema_version-aware behavior.",
  },
];
