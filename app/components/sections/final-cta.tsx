"use client";

import { ArrowRight, Check, Sparkles } from "lucide-react";
import { FadeIn } from "~/components/motion/fade-in";
import { Button } from "~/components/ui/button";
import { useAppConfig } from "~/context/appConfig";

interface FinalCTAProps {
  badge?: string;
  headline?: React.ReactNode;
  subheadline?: string;
  ctaText?: string;
  socialProof?: string;
}

const TRUST = ["No credit card required", "Cancel anytime", "3 SEO pages free, forever"];

export function FinalCTA({
  badge = "Join the herd",
  headline,
  subheadline = "Stop wrestling with keyword research, briefs, writers, and publishing workflows. Let Donkey produce targeted SEO pages — product pages, comparisons, use cases, and a full blog strategy — while you build and sell.",
  ctaText = "Start free · 3 SEO pages on us",
  socialProof = "Built for solo founders and indie builders automating their SEO pipeline.",
}: FinalCTAProps = {}) {
  const { appUrl } = useAppConfig();

  const defaultHeadline = (
    <>
      Ready to ship{" "}
      <span className="text-outline-hero text-yellow-400">SEO pages</span> on
      autopilot?
    </>
  );

  return (
    <section className="py-20 md:py-28">
      <div className="section-container">
        <FadeIn direction="scale">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border-2 border-outline bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 p-8 text-center shadow-[12px_12px_0_#1a1a1a] sm:p-12 md:p-16">
            {/* Decorative layers */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-grid-lines opacity-[0.12]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-yellow-300/30 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-teal-300/30 blur-3xl"
            />
            {/* Sticker accents */}
            <Sparkles
              aria-hidden="true"
              className="absolute left-8 top-10 size-7 text-yellow-300/80 tilt-1 hidden sm:block"
            />
            <Sparkles
              aria-hidden="true"
              className="absolute bottom-12 right-12 size-9 text-yellow-200/70 tilt-2 hidden sm:block"
            />

            <div className="relative mx-auto max-w-2xl">
              {/* Badge */}
              <span className="mx-auto inline-flex items-center gap-2 rounded-full border-2 border-outline bg-white px-4 py-2 font-display text-sm font-bold text-foreground shadow-[3px_3px_0_#1a1a1a]">
                <Sparkles className="size-4 text-yellow-600" />
                {badge}
              </span>

              {/* Headline */}
              <h2 className="mt-6 font-display text-3xl font-bold leading-[1.1] text-white text-balance sm:text-4xl md:text-5xl lg:text-6xl">
                {headline ?? defaultHeadline}
              </h2>

              {/* Subheadline */}
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg">
                {subheadline}
              </p>

              {/* CTA */}
              <div className="mt-8 flex justify-center">
                <Button
                  size="xl"
                  variant="secondary"
                  className="group h-16 px-8 text-lg sm:text-xl md:px-12 pulse-glow"
                  asChild
                >
                  <a href={appUrl}>
                    {ctaText}
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>

              {/* Trust signals */}
              <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                {TRUST.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-1.5 text-sm font-semibold text-white/95"
                  >
                    <span className="inline-flex size-5 items-center justify-center rounded-full bg-yellow-400 border-2 border-outline">
                      <Check className="size-3 text-teal-950" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-sm text-white/80">{socialProof}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
