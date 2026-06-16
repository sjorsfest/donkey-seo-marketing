"use client";

import { ArrowRight, Check, Rocket } from "lucide-react";
import { Button } from "~/components/ui/button";
import { FadeIn } from "~/components/motion/fade-in";
import { Float } from "~/components/motion/float";
import { DashboardMockup } from "./dashboard-mockup";
import { useAppConfig } from "~/context/appConfig";

const TRUST = ["No credit card", "3 pages free, forever", "5-minute setup"];

export function Hero() {
  const { appUrl } = useAppConfig();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pt-32 md:pt-40 lg:pt-44 pb-20 md:pb-28">
      {/* Soft background blobs for depth (decorative) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-yellow-300/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-teal-300/25 blur-3xl"
      />

      <div className="section-container">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="min-w-0 space-y-7 text-center lg:text-left">
            <h1 className="font-display text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl font-bold text-foreground text-balance">
              <span className="text-outline-hero">SEO pages</span> that{" "}
              <span className="text-outline" style={{ color: "#ffd641" }}>
                ship on autopilot
              </span>
              .
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Donkey finds the keywords, writes publish-ready pages in your
              voice, and ships them to your CMS — automatically.{" "}
              <span className="font-semibold text-foreground">
                Zero research, zero writing, zero busywork.
              </span>
            </p>

            <FadeIn direction="up" duration={0.6} delay={0.1}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button
                  size="xl"
                  variant="gradient"
                  className="text-base sm:text-lg w-full sm:w-auto group"
                  asChild
                >
                  <a href={appUrl}>
                    Start free · 3 pages on us
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button
                  size="xl"
                  variant="secondary"
                  className="text-base sm:text-lg w-full sm:w-auto"
                  onClick={() => scrollToSection("how-it-works")}
                >
                  See how it works
                </Button>
              </div>
            </FadeIn>

            {/* Trust row */}
            <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2">
              {TRUST.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-1.5 text-sm font-semibold text-foreground/75"
                >
                  <span className="inline-flex size-5 items-center justify-center rounded-full bg-teal-400 border-2 border-outline">
                    <Check className="size-3 text-teal-950" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Integration line (replaces the standalone marquee section) */}
            <p className="text-sm text-muted-foreground">
              Publishes to{" "}
              <span className="font-semibold text-foreground/70">
                WordPress, Webflow, Next.js, Ghost
              </span>{" "}
              &amp; any CMS.
            </p>
          </div>

          {/* Right Column - One clean product visual + one accent chip */}
          <div className="relative min-w-0">
            <div
              aria-hidden="true"
              className="absolute inset-0 -m-6 rounded-[2rem] bg-grid-dots opacity-60"
            />

            <FadeIn direction="left" duration={0.8} delay={0.1} className="relative">
              <Float y={12} duration={8}>
                <DashboardMockup />
              </Float>
            </FadeIn>

            {/* Single accent chip — the payoff moment */}
            <Float
              y={10}
              duration={6.5}
              delay={0.2}
              className="absolute right-1 sm:-right-3 -bottom-5 z-20 hidden sm:block"
            >
              <div className="tilt-2 flex items-center gap-2.5 rounded-2xl border-2 border-outline bg-teal-900 px-4 py-3 shadow-[5px_5px_0_#1a1a1a]">
                <span className="icon-chip size-10 rounded-xl bg-yellow-400 [&_svg]:size-5">
                  <Rocket className="text-teal-950" strokeWidth={2.5} />
                </span>
                <div className="leading-tight">
                  <div className="font-display text-base font-bold text-white">
                    Published to your CMS
                  </div>
                  <div className="text-xs font-semibold text-teal-100/80">
                    while you slept
                  </div>
                </div>
              </div>
            </Float>
          </div>
        </div>
      </div>
    </section>
  );
}
