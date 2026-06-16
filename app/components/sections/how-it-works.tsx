"use client";

import { Fragment } from "react";
import { ArrowRight, Globe, Sparkles, Send, Workflow } from "lucide-react";
import { SectionHeader } from "~/components/ui/section-header";
import { StaggerContainer, StaggerItem } from "~/components/motion/stagger";
import { FadeIn } from "~/components/motion/fade-in";
import { IconChip } from "~/components/ui/icon-chip";

const IMPACT = [
  { value: "5–10 hrs", label: "saved per page" },
  { value: "7-step", label: "AI discovery engine" },
  { value: "Set & forget", label: "ships on its own" },
];

const STEPS = [
  {
    n: "01",
    tone: "yellow" as const,
    Icon: Globe,
    title: "Connect your domain",
    description:
      "Add your site and pick a target country. Donkey reads your brand, voice, and sitemap automatically — no brief, no onboarding call.",
  },
  {
    n: "02",
    tone: "teal" as const,
    Icon: Sparkles,
    title: "AI researches & writes",
    description:
      "The 7-step engine discovers high-intent keywords, then drafts publish-ready pages in your brand voice — structure, metadata, and internal links included.",
  },
  {
    n: "03",
    tone: "coral" as const,
    Icon: Send,
    title: "Auto-publishes to your CMS",
    description:
      "Pages ship straight to WordPress, Webflow, Next.js, or any CMS via API and webhooks. Review what you want — or let it run fully hands-off.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white/50 bg-grid-dots">
      <div className="section-container">
        <SectionHeader
          eyebrow="How it works"
          eyebrowIcon={<Workflow />}
          title="Set it up once. Watch pages ship."
          subtitle="No writers. No agencies. No hours lost to keyword research. Three steps from domain to published."
          className="mb-14"
        />

        <StaggerContainer className="flex flex-col lg:flex-row items-stretch gap-5 lg:gap-3 max-w-6xl mx-auto">
          {STEPS.map((step, i) => (
            <Fragment key={step.n}>
              <StaggerItem className="flex-1">
                <div className="group relative h-full overflow-hidden rounded-3xl border-2 border-outline bg-white p-7 shadow-[6px_6px_0_#1a1a1a] transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0_#1a1a1a] text-center lg:text-left">
                  <span className="pointer-events-none absolute -right-1 -top-3 select-none font-display text-7xl font-bold text-teal-100">
                    {step.n}
                  </span>
                  <IconChip
                    tone={step.tone}
                    size="lg"
                    className="relative mx-auto lg:mx-0 mb-5"
                  >
                    <step.Icon strokeWidth={2.25} />
                  </IconChip>
                  <h3 className="relative font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="relative text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>

              {i < STEPS.length - 1 && (
                <div className="flex items-center justify-center">
                  <span className="icon-chip size-10 rounded-full bg-teal-300 [&_svg]:size-5 rotate-90 lg:rotate-0">
                    <ArrowRight
                      className="text-teal-950"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  </span>
                </div>
              )}
            </Fragment>
          ))}
        </StaggerContainer>

        {/* Slim impact strip — the payoff, kept calm (no separate stats section) */}
        <FadeIn delay={0.2} className="mt-12">
          <div className="mx-auto flex max-w-3xl flex-col divide-y-2 divide-border rounded-2xl border-2 border-outline bg-white py-2 shadow-[4px_4px_0_#1a1a1a] sm:flex-row sm:divide-x-2 sm:divide-y-0">
            {IMPACT.map((stat) => (
              <div key={stat.label} className="flex-1 px-6 py-4 text-center">
                <div className="font-display text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
