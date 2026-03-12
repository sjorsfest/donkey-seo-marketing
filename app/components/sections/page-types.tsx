"use client";

import { FadeIn } from "~/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "~/components/motion/stagger";

const pageTypes = [
  { emoji: "⚔️", name: "Comparisons", color: "bg-orange-50 border-orange-300" },
  { emoji: "🏆", name: "Best-of lists", color: "bg-yellow-50 border-yellow-300" },
  { emoji: "🔄", name: "Alternatives", color: "bg-rose-50 border-rose-300" },
  { emoji: "📖", name: "Guides", color: "bg-blue-50 border-blue-300" },
  { emoji: "📊", name: "Statistics", color: "bg-purple-50 border-purple-300" },
  { emoji: "📝", name: "Glossaries", color: "bg-teal-50 border-teal-300" },
  { emoji: "✅", name: "Checklists", color: "bg-green-50 border-green-300" },
  { emoji: "🏢", name: "Industry pages", color: "bg-indigo-50 border-indigo-300" },
  { emoji: "🧩", name: "Use-cases", color: "bg-amber-50 border-amber-300" },
  { emoji: "🚀", name: "Landing pages", color: "bg-sky-50 border-sky-300" },
];

const pillars = [
  {
    emoji: "🎯",
    title: "Intent-matched formats",
    description:
      "Each keyword gets the page type that matches how people actually search.",
  },
  {
    emoji: "🏗️",
    title: "Purpose-built structure",
    description:
      "Every format follows a proven blueprint designed to rank and convert.",
  },
  {
    emoji: "🔗",
    title: "A connected content system",
    description:
      "Pages work together across the funnel to build topical depth.",
  },
];

export function PageTypes() {
  return (
    <section className="py-20 bg-white/50">
      <div className="section-container">
        {/* Header */}
        <FadeIn className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full border-2 border-outline shadow-[3px_3px_0_#1a1a1a] mb-5">
            <span className="text-lg">🧠</span>
            <span className="font-display font-bold text-foreground text-sm">
              Beyond generic blog posts
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-3">
            The right page type for every search intent
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Donkey creates purpose-built SEO pages that match the intent behind
            each keyword so your content mix ranks, converts, and builds
            authority.
          </p>
        </FadeIn>

        {/* Page type pills */}
        <StaggerContainer className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-10">
          {pageTypes.map((type, index) => (
            <StaggerItem key={index}>
              <div
                className={`${type.color} rounded-full px-5 py-2.5 border-2 border-outline shadow-[3px_3px_0_#1a1a1a] hover:shadow-[4px_4px_0_#1a1a1a] hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all flex items-center gap-2`}
              >
                <span className="text-xl">{type.emoji}</span>
                <span className="font-display font-bold text-foreground text-sm">
                  {type.name}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Three pillars */}
        <FadeIn delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 border-2 border-outline shadow-[3px_3px_0_#1a1a1a] text-center"
                >
                  <div className="text-3xl mb-2">{pillar.emoji}</div>
                  <h3 className="font-display font-bold text-foreground mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
