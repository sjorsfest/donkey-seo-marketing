"use client";

import { FadeIn } from "~/components/motion/fade-in";

const STATS = [
  { value: "7-step", label: "AI discovery engine", sub: "finds the keywords for you" },
  { value: "5–10 hrs", label: "Saved per SEO page", sub: "vs. writing it by hand" },
  { value: "10+", label: "Page types", sub: "matched to search intent" },
  { value: "100%", label: "Hands-off", sub: "set up once, ships forever" },
];

export function StatsBand() {
  return (
    <section className="py-12 md:py-16">
      <div className="section-container">
        <FadeIn direction="scale">
          <div className="relative overflow-hidden rounded-3xl border-2 border-outline bg-teal-900 shadow-[8px_8px_0_#1a1a1a]">
            {/* texture + glow */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-grid-lines opacity-[0.15]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-yellow-400/20 blur-3xl"
            />

            <div className="relative grid grid-cols-2 lg:grid-cols-4 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-white/10">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center px-4 py-8 text-center sm:py-10"
                >
                  <div className="font-display text-4xl sm:text-5xl font-bold text-yellow-400 leading-none">
                    {stat.value}
                  </div>
                  <div className="mt-3 font-display text-sm sm:text-base font-bold text-white">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-teal-100/70">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
