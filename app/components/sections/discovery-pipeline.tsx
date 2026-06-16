"use client";

import {
  Hammer,
  Handshake,
  Layers,
  Coffee,
  Search,
  FileText,
  Link2,
  Send,
  Check,
  Split,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "~/components/ui/section-header";
import { FadeIn } from "~/components/motion/fade-in";
import { IconChip } from "~/components/ui/icon-chip";

const YOU: { Icon: LucideIcon; title: string; desc: string }[] = [
  { Icon: Hammer, title: "Build your product", desc: "Focus on what makes you different" },
  { Icon: Handshake, title: "Close deals", desc: "Spend time on revenue, not content" },
  { Icon: Layers, title: "Ship new features", desc: "Build what your customers ask for" },
  { Icon: Coffee, title: "Take weekends off", desc: "SEO keeps running while you recharge" },
];

const DONKEY: { Icon: LucideIcon; title: string; desc: string }[] = [
  { Icon: Search, title: "Finds thousands of keywords", desc: "AI surfaces high-value opportunities" },
  { Icon: FileText, title: "Builds full SEO pages", desc: "In your brand voice, ready to publish" },
  { Icon: Link2, title: "Adds internal links", desc: "Connects to your existing content" },
  { Icon: Send, title: "Delivers to your CMS", desc: "Via API, webhook, or dashboard" },
];

function Row({
  Icon,
  title,
  desc,
  tone,
  done,
}: {
  Icon: LucideIcon;
  title: string;
  desc: string;
  tone: "yellow" | "teal";
  done?: boolean;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border-2 border-outline bg-white p-4 shadow-[3px_3px_0_#1a1a1a] transition-transform hover:-translate-y-0.5">
      <IconChip tone={tone} size="sm" className="size-11">
        <Icon strokeWidth={2.25} />
      </IconChip>
      <div className="min-w-0 flex-1">
        <div className="font-display font-bold text-foreground leading-tight">
          {title}
        </div>
        <div className="text-sm text-muted-foreground">{desc}</div>
      </div>
      {done && (
        <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-teal-400 border-2 border-outline">
          <Check className="size-3.5 text-teal-950" strokeWidth={3} />
        </span>
      )}
    </div>
  );
}

export function DiscoveryPipeline() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeader
          eyebrow="The trade you never have to make"
          eyebrowIcon={<Split />}
          title="You build the product. Donkey builds the traffic."
          subtitle="Your SEO pages ship on autopilot, so you never have to choose between building product and growing traffic."
          className="mb-14"
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto items-stretch">
          {/* YOU */}
          <FadeIn direction="right">
            <div className="flex h-full flex-col rounded-3xl border-2 border-outline bg-yellow-50 p-6 sm:p-7 shadow-[6px_6px_0_#1a1a1a]">
              <div className="mb-6 flex items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border-2 border-outline bg-yellow-400 px-4 py-2 shadow-[3px_3px_0_#1a1a1a]">
                  <span className="font-display text-lg font-bold text-teal-950">You</span>
                </span>
                <span className="font-display text-sm font-bold text-foreground/70">
                  Your time, your priorities
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {YOU.map((item) => (
                  <Row key={item.title} {...item} tone="yellow" />
                ))}
              </div>
            </div>
          </FadeIn>

          {/* DONKEY */}
          <FadeIn direction="left" delay={0.15}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-outline bg-teal-100 p-6 sm:p-7 shadow-[6px_6px_0_#1a1a1a]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-teal-300/50 blur-2xl"
              />
              <div className="relative mb-6 flex items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border-2 border-outline bg-teal-900 px-4 py-2 shadow-[3px_3px_0_#1a1a1a]">
                  <span className="font-display text-lg font-bold text-yellow-400">
                    Donkey
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-teal-800">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-500 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-teal-600" />
                  </span>
                  100% automated
                </span>
              </div>
              <div className="relative flex flex-col gap-3">
                {DONKEY.map((item) => (
                  <Row key={item.title} {...item} tone="teal" done />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom punchline */}
        <FadeIn delay={0.2} className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-outline bg-white px-6 py-3 shadow-[4px_4px_0_#1a1a1a]">
            <span className="font-display text-base sm:text-xl font-bold text-foreground">
              Zero research. Zero writing.{" "}
              <span className="text-yellow-600">Zero busywork.</span>
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
