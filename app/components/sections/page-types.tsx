"use client";

import {
  Scale,
  Trophy,
  Repeat,
  BookOpen,
  BarChart3,
  BookA,
  ListChecks,
  Building2,
  Puzzle,
  MousePointerClick,
  Target,
  Blocks,
  Network,
  Brain,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "~/components/ui/section-header";
import { StaggerContainer, StaggerItem } from "~/components/motion/stagger";
import { FadeIn } from "~/components/motion/fade-in";
import { IconChip } from "~/components/ui/icon-chip";

type Tone = "yellow" | "teal" | "coral" | "white";

const pageTypes: { Icon: LucideIcon; name: string; tone: Tone }[] = [
  { Icon: Scale, name: "Comparisons", tone: "coral" },
  { Icon: Trophy, name: "Best-of lists", tone: "yellow" },
  { Icon: Repeat, name: "Alternatives", tone: "teal" },
  { Icon: BookOpen, name: "Guides", tone: "white" },
  { Icon: BarChart3, name: "Statistics", tone: "yellow" },
  { Icon: BookA, name: "Glossaries", tone: "teal" },
  { Icon: ListChecks, name: "Checklists", tone: "coral" },
  { Icon: Building2, name: "Industry pages", tone: "white" },
  { Icon: Puzzle, name: "Use-cases", tone: "yellow" },
  { Icon: MousePointerClick, name: "Landing pages", tone: "teal" },
];

const pillToneClass: Record<Tone, string> = {
  yellow: "bg-yellow-100",
  teal: "bg-teal-100",
  coral: "bg-coral/15",
  white: "bg-white",
};

const pillars: { Icon: LucideIcon; tone: Tone; title: string; description: string }[] = [
  {
    Icon: Target,
    tone: "yellow",
    title: "Intent-matched formats",
    description:
      "Each keyword gets the page type that matches how people actually search for it.",
  },
  {
    Icon: Blocks,
    tone: "teal",
    title: "Purpose-built structure",
    description:
      "Every format follows a proven blueprint designed to rank and convert.",
  },
  {
    Icon: Network,
    tone: "coral",
    title: "A connected content system",
    description:
      "Pages work together across the funnel to build real topical depth.",
  },
];

export function PageTypes() {
  return (
    <section className="py-20 md:py-28 bg-white/50 bg-grid-dots">
      <div className="section-container">
        <SectionHeader
          eyebrow="Beyond generic blog posts"
          eyebrowIcon={<Brain />}
          title="The right page type for every search intent"
          subtitle="Donkey creates purpose-built SEO pages that match the intent behind each keyword — so your content mix ranks, converts, and builds authority."
          className="mb-10"
        />

        {/* Page type pills */}
        <StaggerContainer className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-12">
          {pageTypes.map((type) => (
            <StaggerItem key={type.name}>
              <div
                className={`${pillToneClass[type.tone]} flex items-center gap-2 rounded-full border-2 border-outline px-5 py-2.5 shadow-[3px_3px_0_#1a1a1a] transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#1a1a1a]`}
              >
                <type.Icon className="size-4 text-teal-800" strokeWidth={2.5} aria-hidden="true" />
                <span className="font-display text-sm font-bold text-foreground whitespace-nowrap">
                  {type.name}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Three pillars */}
        <FadeIn delay={0.15}>
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl border-2 border-outline bg-white p-6 shadow-[5px_5px_0_#1a1a1a] transition-all hover:-translate-y-1 hover:shadow-[7px_7px_0_#1a1a1a]"
              >
                <IconChip tone={pillar.tone}>
                  <pillar.Icon strokeWidth={2.25} />
                </IconChip>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
