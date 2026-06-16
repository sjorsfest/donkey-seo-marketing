"use client";

import {
  Link2,
  Map,
  TrendingUp,
  PenLine,
  ShoppingBag,
  Users,
  FileText,
  BookOpen,
  Settings,
  Network,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "~/components/motion/fade-in";
import { IconChip } from "~/components/ui/icon-chip";

const BENEFITS: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: Map,
    title: "Crawls your sitemap",
    desc: "Understands your existing page structure automatically",
  },
  {
    Icon: Link2,
    title: "Contextual internal links",
    desc: "Adds links from new SEO pages to your relevant existing pages",
  },
  {
    Icon: TrendingUp,
    title: "Strengthens topical authority",
    desc: "Distributes link equity across your site architecture",
  },
];

const NODES: { Icon: LucideIcon; name: string; position: string }[] = [
  { Icon: ShoppingBag, name: "Product", position: "left-[6%] top-[10%]" },
  { Icon: Users, name: "About Us", position: "left-1/2 -translate-x-1/2 top-[-7%]" },
  { Icon: FileText, name: "Blog Post", position: "right-[6%] top-[10%]" },
  { Icon: BookOpen, name: "Resources", position: "right-[6%] bottom-[10%]" },
  { Icon: Settings, name: "Services", position: "left-[6%] bottom-[10%]" },
];

export function SmartLinking() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Content */}
          <FadeIn direction="right">
            <div className="space-y-6">
              <span className="eyebrow">
                <Network className="size-4 text-yellow-600" />
                Smart internal linking
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-[1.08] text-balance">
                Every page plugs into your site like it was always there
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Donkey doesn't just generate isolated pages. It reads your
                existing sitemap and automatically interlinks every new SEO page
                with the pages you already have.
              </p>

              <div className="space-y-3">
                {BENEFITS.map((b) => (
                  <div
                    key={b.title}
                    className="flex items-center gap-4 rounded-2xl border-2 border-outline bg-white p-4 shadow-[3px_3px_0_#1a1a1a]"
                  >
                    <IconChip tone="teal" size="sm" className="size-11">
                      <b.Icon strokeWidth={2.25} />
                    </IconChip>
                    <div>
                      <h3 className="font-display font-bold text-foreground leading-tight">
                        {b.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right Column - Network visual */}
          <FadeIn direction="left" delay={0.15}>
            <div className="rounded-3xl border-2 border-outline bg-white p-8 shadow-[6px_6px_0_#1a1a1a]">
              <div className="space-y-6">
                {/* Sitemap label */}
                <div className="text-center">
                  <span className="inline-flex items-center gap-2 rounded-full border-2 border-outline bg-teal-100 px-4 py-2 shadow-[2px_2px_0_#1a1a1a]">
                    <Map className="size-5 text-teal-700" strokeWidth={2.25} />
                    <span className="font-display font-bold text-foreground">
                      Your sitemap
                    </span>
                  </span>
                </div>

                {/* Network Visualization */}
                <div className="relative h-64">
                  <svg className="absolute inset-0 h-full w-full" style={{ zIndex: 1 }}>
                    <defs>
                      <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="10"
                        refX="8"
                        refY="3"
                        orient="auto"
                      >
                        <polygon points="0 0, 6 3, 0 6" fill="#5a9480" />
                      </marker>
                    </defs>

                    {[
                      { x1: "50%", y1: "50%", x2: "13%", y2: "18%" },
                      { x1: "50%", y1: "50%", x2: "50%", y2: "10%" },
                      { x1: "50%", y1: "50%", x2: "87%", y2: "18%" },
                      { x1: "50%", y1: "50%", x2: "87%", y2: "82%" },
                      { x1: "50%", y1: "50%", x2: "13%", y2: "82%" },
                    ].map((c, index) => (
                      <line
                        key={`primary-${index}`}
                        x1={c.x1}
                        y1={c.y1}
                        x2={c.x2}
                        y2={c.y2}
                        stroke="#5a9480"
                        strokeWidth={2.5}
                        markerEnd="url(#arrowhead)"
                        className="animate-[dash_1.5s_ease-in-out_infinite]"
                        strokeDasharray="6 4"
                        style={{ animationDelay: `${index * 0.15}s` }}
                      />
                    ))}
                  </svg>

                  {/* Center node - New SEO page */}
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ zIndex: 5 }}
                  >
                    <div className="flex flex-col items-center gap-1 rounded-2xl border-2 border-outline bg-yellow-400 p-3 shadow-[4px_4px_0_#1a1a1a]">
                      <PenLine className="size-5 text-teal-950" strokeWidth={2.5} />
                      <span className="whitespace-nowrap text-xs font-bold text-teal-950">
                        New SEO page
                      </span>
                    </div>
                  </div>

                  {/* Surrounding nodes */}
                  {NODES.map((node) => (
                    <div
                      key={node.name}
                      className={`absolute ${node.position}`}
                      style={{ zIndex: 2 }}
                    >
                      <div className="flex flex-col items-center gap-0.5 rounded-xl border-2 border-outline bg-white px-2.5 py-1.5 shadow-[2px_2px_0_#1a1a1a]">
                        <node.Icon className="size-4 text-teal-700" strokeWidth={2.25} />
                        <span className="whitespace-nowrap text-[10px] font-bold text-foreground">
                          {node.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <style
                  dangerouslySetInnerHTML={{
                    __html: `@keyframes dash {0%,100%{stroke-dashoffset:0}50%{stroke-dashoffset:10}}`,
                  }}
                />

                <p className="text-center text-sm italic text-muted-foreground">
                  Zero manual work. Every page connects automatically.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
