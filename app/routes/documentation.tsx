import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { Route } from "./+types/documentation";
import { Navbar } from "~/components/layout/navbar";
import { Footer } from "~/components/layout/footer";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { highlightSnippet } from "~/lib/code-highlight";
import {
  architectureFlow,
  checklistItems,
  clientExamples,
  docsSections,
  endpointReferences,
  envTemplate,
  integrationBaseUrl,
  payloadExamples,
  quickstartSteps,
  rendererExamples,
  supportedBlockTypes,
  webhookExample,
  whatToBuildPoints,
  type ClientExample,
  type CodeExample,
  type RendererExample,
} from "~/data/developer-docs";

const SITE_URL = "https://www.donkeyseo.io";
const DOCS_URL = `${SITE_URL}/documentation`;
const SOCIAL_IMAGE_URL = `${SITE_URL}/og/og-image.png?v=7`;

type TabExample = RendererExample | ClientExample | CodeExample;

async function copyCodeToClipboard(code: string): Promise<boolean> {
  if (typeof navigator === "undefined" || !navigator.clipboard) {
    return false;
  }

  try {
    await navigator.clipboard.writeText(code);
    return true;
  } catch {
    return false;
  }
}

function TabbedCodeExamples({
  title,
  subtitle,
  examples,
  navLabel,
}: {
  title: string;
  subtitle: string;
  examples: TabExample[];
  navLabel: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const uniqueId = useId().replace(/:/g, "");
  const activeExample = examples[activeIndex];
  const highlightedCode = useMemo(
    () => highlightSnippet(activeExample.code, activeExample.language),
    [activeExample.code, activeExample.language]
  );

  const activateTab = (index: number, focus = false) => {
    const nextIndex = (index + examples.length) % examples.length;
    setActiveIndex(nextIndex);

    if (focus) {
      tabRefs.current[nextIndex]?.focus();
    }
  };

  const handleCopy = async () => {
    const copied = await copyCodeToClipboard(activeExample.code);
    if (!copied) return;

    setCopiedId(activeExample.id);
    window.setTimeout(() => setCopiedId(null), 1800);
  };

  return (
    <section className="docs-subsection" aria-label={title}>
      <div className="docs-subsection-head">
        <h3 className="docs-subsection-title">{title}</h3>
        <p className="docs-subsection-subtitle">{subtitle}</p>
      </div>

      <div className="docs-tablist" role="tablist" aria-label={navLabel}>
        {examples.map((example, index) => {
          const tabId = `${uniqueId}-tab-${example.id}`;
          const panelId = `${uniqueId}-panel-${example.id}`;
          const isActive = index === activeIndex;

          return (
            <button
              key={example.id}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              className={`docs-tab ${isActive ? "is-active" : ""}`}
              onClick={() => activateTab(index)}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight") {
                  event.preventDefault();
                  activateTab(index + 1, true);
                }

                if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  activateTab(index - 1, true);
                }

                if (event.key === "Home") {
                  event.preventDefault();
                  activateTab(0, true);
                }

                if (event.key === "End") {
                  event.preventDefault();
                  activateTab(examples.length - 1, true);
                }
              }}
            >
              {example.label}
            </button>
          );
        })}
      </div>

      <div
        className="docs-code-frame"
        role="tabpanel"
        id={`${uniqueId}-panel-${activeExample.id}`}
        aria-labelledby={`${uniqueId}-tab-${activeExample.id}`}
      >
        <div className="docs-code-toolbar">
          <div>
            <p className="docs-code-language">{activeExample.language}</p>
            <p className="docs-code-summary">{activeExample.summary}</p>
          </div>

          <Button
            type="button"
            variant="secondary"
            size="sm"
            aria-label={`Copy ${activeExample.label} code example`}
            onClick={handleCopy}
          >
            {copiedId === activeExample.id ? "Copied" : "Copy"}
          </Button>
        </div>

        <pre className="code-block docs-code-block">
          <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
      </div>
    </section>
  );
}

function SingleCodePanel({ example }: { example: CodeExample }) {
  const [copied, setCopied] = useState(false);
  const highlightedCode = useMemo(
    () => highlightSnippet(example.code, example.language),
    [example.code, example.language]
  );

  const handleCopy = async () => {
    const didCopy = await copyCodeToClipboard(example.code);
    if (!didCopy) return;

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="docs-code-frame" aria-label={example.label}>
      <div className="docs-code-toolbar">
        <div>
          <p className="docs-code-language">{example.language}</p>
          <p className="docs-code-summary">{example.summary}</p>
        </div>

        <Button
          type="button"
          variant="secondary"
          size="sm"
          aria-label={`Copy ${example.label} code example`}
          onClick={handleCopy}
        >
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>

      <pre className="code-block docs-code-block">
        <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      </pre>
    </div>
  );
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Developer Documentation - Donkey SEO Integration" },
    {
      name: "description",
      content:
        "Implementation guide for Donkey SEO integration: webhook security, modular renderer patterns, endpoint reference, and client examples for React, Angular, Node, Python, and cURL.",
    },
    { tagName: "link", rel: "canonical", href: DOCS_URL },
    { property: "og:site_name", content: "Donkey SEO" },
    { property: "og:title", content: "Developer Documentation - Donkey SEO Integration" },
    {
      property: "og:description",
      content:
        "Build a production-grade Donkey SEO integration with webhook-first ingestion, modular_document rendering, and publication callbacks.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: DOCS_URL },
    { property: "og:image", content: SOCIAL_IMAGE_URL },
    { property: "og:image:secure_url", content: SOCIAL_IMAGE_URL },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    {
      property: "og:image:alt",
      content: "Donkey SEO developer documentation page preview",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: DOCS_URL },
    { name: "twitter:title", content: "Developer Documentation - Donkey SEO Integration" },
    {
      name: "twitter:description",
      content:
        "Implementation guide for Donkey SEO integration, including renderer examples, endpoint contracts, and webhook validation.",
    },
    { name: "twitter:image", content: SOCIAL_IMAGE_URL },
    { name: "twitter:image:src", content: SOCIAL_IMAGE_URL },
    {
      name: "twitter:image:alt",
      content: "Donkey SEO developer documentation page preview",
    },
  ];
}

export default function DocumentationPage() {
  const [activeSectionId, setActiveSectionId] = useState(docsSections[0]?.id ?? "");
  const highlightedEnvTemplate = useMemo(() => highlightSnippet(envTemplate, "env"), []);

  useEffect(() => {
    let ticking = false;
    const sectionElements = docsSections
      .map((section) => document.getElementById(section.id))
      .filter((section): section is HTMLElement => section !== null);

    if (sectionElements.length === 0) return;

    const updateActiveSection = () => {
      const offset = 180;
      let currentSectionId = sectionElements[0].id;

      for (const section of sectionElements) {
        if (section.getBoundingClientRect().top - offset <= 0) {
          currentSectionId = section.id;
        } else {
          break;
        }
      }

      setActiveSectionId((previousId) =>
        previousId === currentSectionId ? previousId : currentSectionId
      );
    };

    const onViewportChange = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", onViewportChange, { passive: true });
    window.addEventListener("resize", onViewportChange);

    return () => {
      window.removeEventListener("scroll", onViewportChange);
      window.removeEventListener("resize", onViewportChange);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="docs-page pt-32 pb-20 lg:pt-36">
        <div className="section-container">
          <header className="docs-hero">
            <div className="docs-hero-grid">
              <div>
                <Badge variant="teal" size="sm" className="mb-4">
                  Developer Documentation
                </Badge>
                <h1 className="docs-title">Donkey SEO Integration Guide</h1>
                <p className="docs-lead">
                  Build a complete integration: webhook ingestion, modular article rendering,
                  publication callbacks, and pillar navigation. This page is a production-focused
                  implementation reference for engineering teams.
                </p>
                <div className="docs-meta-row" aria-label="Documentation metadata">
                  <span className="docs-meta-pill">Base URL: {integrationBaseUrl}</span>
                  <span className="docs-meta-pill">Auth header: X-API-Key</span>
                  <span className="docs-meta-pill">OpenAPI synced: March 4, 2026</span>
                </div>
              </div>

              <div className="docs-highlight-panel">
                <h2>Core integration contract</h2>
                <ul>
                  <li>Webhook payload is canonical local article input.</li>
                  <li>Renderer source is modular_document, not rendered_html.</li>
                  <li>One local row per article_id, no local version rows.</li>
                  <li>Publication status must PATCH back to Donkey SEO.</li>
                </ul>
              </div>
            </div>
          </header>

          <nav className="docs-toc-mobile" aria-label="Documentation sections">
            {docsSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`docs-toc-link ${activeSectionId === section.id ? "is-current" : ""}`}
                aria-current={activeSectionId === section.id ? "location" : undefined}
                onClick={() => setActiveSectionId(section.id)}
              >
                {section.label}
              </a>
            ))}
          </nav>

          <div className="docs-shell">
            <aside className="docs-sidebar" aria-label="On-page navigation">
              <div className="docs-sidebar-card">
                <p className="docs-sidebar-title">On this page</p>
                <nav className="docs-toc-desktop" aria-label="Documentation sections">
                  {docsSections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`docs-toc-link ${activeSectionId === section.id ? "is-current" : ""}`}
                      aria-current={activeSectionId === section.id ? "location" : undefined}
                      onClick={() => setActiveSectionId(section.id)}
                    >
                      {section.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <article className="docs-canvas" aria-label="Donkey SEO implementation docs">
              <section id="what-to-build" className="docs-section scroll-mt-36">
                <h2>What to build</h2>
                <p>
                  Implement these capabilities end-to-end to support Donkey SEO publishing and
                  long-term maintenance.
                </p>
                <ul className="docs-list">
                  {whatToBuildPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </section>

              <section id="quickstart" className="docs-section scroll-mt-36">
                <h2>Quickstart</h2>
                <div className="docs-step-grid">
                  {quickstartSteps.map((step, index) => (
                    <div key={step.id} className="docs-step-card">
                      <div className="docs-step-number" aria-hidden="true">
                        {index + 1}
                      </div>
                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                        <ul className="docs-list compact">
                          {step.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="docs-code-frame mt-6" aria-label="Environment variables">
                  <div className="docs-code-toolbar">
                    <div>
                      <p className="docs-code-language">env</p>
                      <p className="docs-code-summary">
                        Required server-side credentials for integration routes and signature
                        verification.
                      </p>
                    </div>
                  </div>
                  <pre className="code-block docs-code-block">
                    <code dangerouslySetInnerHTML={{ __html: highlightedEnvTemplate }} />
                  </pre>
                </div>
              </section>

              <section id="architecture" className="docs-section scroll-mt-36">
                <h2>Architecture flow (webhook-first)</h2>
                <ol className="docs-flow-list">
                  {architectureFlow.map((step, index) => (
                    <li key={step.id} className="docs-flow-item">
                      <span className="docs-flow-index" aria-hidden="true">
                        {index + 1}
                      </span>
                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              <section id="renderer" className="docs-section scroll-mt-36">
                <h2>Modular article renderer</h2>
                <p>
                  Parse by <code>block_type</code>, preserve order exactly, render markdown safely,
                  and emit each <code>structured_data</code> entry as JSON-LD script output.
                </p>

                <div className="docs-badge-wrap" aria-label="Supported block types">
                  {supportedBlockTypes.map((blockType) => (
                    <Badge key={blockType} variant="secondary" size="sm">
                      {blockType}
                    </Badge>
                  ))}
                </div>

                <TabbedCodeExamples
                  title="Renderer implementations"
                  subtitle="Framework-specific patterns for semantically rendering modular_document blocks."
                  examples={rendererExamples}
                  navLabel="Article renderer implementations"
                />
              </section>

              <section id="clients" className="docs-section scroll-mt-36">
                <h2>API client examples</h2>
                <p>
                  Use these templates to call protected integration routes and send publication
                  callbacks from your CMS or worker layer.
                </p>

                <TabbedCodeExamples
                  title="Client implementations"
                  subtitle="Node, Python, and cURL implementations for endpoint consumption and publication PATCH calls."
                  examples={clientExamples}
                  navLabel="API client implementations"
                />
              </section>

              <section id="webhook" className="docs-section scroll-mt-36">
                <h2>Webhook validation and idempotency</h2>
                <p>
                  Donkey SEO retries deliveries on network or non-2xx responses (max 5 attempts).
                  Signature validation and idempotency are mandatory for safe processing.
                </p>

                <ul className="docs-list compact">
                  <li>
                    Headers: <code>X-Donkey-Event</code>, <code>X-Donkey-Delivery-Id</code>,{" "}
                    <code>X-Donkey-Timestamp</code>, <code>X-Donkey-Signature</code>.
                  </li>
                  <li>
                    Signed message format: <code>{"{timestamp}.{raw_request_body}"}</code>.
                  </li>
                  <li>
                    Backoff schedule: 60s, 120s, 240s, 480s between retries.
                  </li>
                </ul>

                <SingleCodePanel example={webhookExample} />
              </section>

              <section id="endpoints" className="docs-section scroll-mt-36">
                <h2>Endpoint reference</h2>
                <p>
                  Full endpoint surface for documentation + content integration paths under
                  <code>/api/v1/integration</code>.
                </p>

                <div className="docs-table-wrap" role="region" aria-label="Integration endpoints">
                  <table className="docs-table">
                    <thead>
                      <tr>
                        <th scope="col">Method</th>
                        <th scope="col">Path</th>
                        <th scope="col">Auth</th>
                        <th scope="col">Description</th>
                        <th scope="col">Query params</th>
                      </tr>
                    </thead>
                    <tbody>
                      {endpointReferences.map((endpoint) => (
                        <tr key={`${endpoint.method}-${endpoint.path}`}>
                          <td>
                            <span
                              className={`docs-method-badge ${
                                endpoint.method === "PATCH" ? "patch" : "get"
                              }`}
                            >
                              {endpoint.method}
                            </span>
                          </td>
                          <td>
                            <code>{endpoint.path}</code>
                          </td>
                          <td>{endpoint.auth}</td>
                          <td>{endpoint.description}</td>
                          <td>
                            <ul className="docs-query-list">
                              {endpoint.query.map((query) => (
                                <li key={query}>{query}</li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="payloads" className="docs-section scroll-mt-36">
                <h2>Payloads and implementation checklist</h2>
                <p>
                  Use sample payloads for parser and contract tests, then enforce required and
                  recommended integration rules.
                </p>

                <TabbedCodeExamples
                  title="Payload examples"
                  subtitle="Reference payloads for webhook ingestion, article retrieval, and publication callbacks."
                  examples={payloadExamples}
                  navLabel="Payload examples"
                />

                <div className="docs-checklist" aria-label="Implementation checklist">
                  {checklistItems.map((item) => (
                    <article key={item.id} className="docs-check-item">
                      <div className="docs-check-head">
                        <h3>{item.title}</h3>
                        <Badge
                          variant={item.requirement === "Required" ? "default" : "secondary"}
                          size="sm"
                        >
                          {item.requirement}
                        </Badge>
                      </div>
                      <p>{item.detail}</p>
                    </article>
                  ))}
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
