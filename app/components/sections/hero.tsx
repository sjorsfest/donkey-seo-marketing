"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { FadeIn } from "~/components/motion/fade-in";
import { Float } from "~/components/motion/float";
import { DashboardMockup } from "./dashboard-mockup";
import { ArticleMockup } from "./article-mockup";
import { useAppConfig } from "~/context/appConfig";

export function Hero() {
  const { appUrl } = useAppConfig();

  const variations = [
    { text: "ships on autopilot", color: "#ffd641" }, // brand yellow
    { text: "brings you leads", color: "#70ac96" }, // brand teal
    { text: "ranks page one", color: "#ff8552" }, // warm coral (complements teal)
    { text: "builds authority", color: "#5a9480" }, // deeper teal
    { text: "grows traffic", color: "#f4a261" }, // golden (warm accent)
    { text: "drives revenue", color: "#86c4ad" }, // light teal
  ];

  const [activeVariation, setActiveVariation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVariation((prev) => (prev + 1) % variations.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [variations.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-44 pb-20 overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <FadeIn direction="up" duration={0.6}>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1]">
                <span className="text-outline-hero">SEO content</span> that
                <br />
                <span className="relative inline-block min-w-[8ch]">
                  <motion.span
                    key={variations[activeVariation].text}
                    initial={{ opacity: 0, y: 20, rotate: -2 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    exit={{ opacity: 0, y: -20, rotate: 2 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block whitespace-nowrap text-outline"
                    style={{ color: variations[activeVariation].color }}
                  >
                    {variations[activeVariation].text}
                  </motion.span>
                </span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" duration={0.6} delay={0.1}>
              <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed max-w-xl">
                Automated keyword research, content creation, and CMS delivery.
                From setup to published articles. Completely hands-off.
              </p>
            </FadeIn>

            <FadeIn direction="up" duration={0.6} delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" variant="gradient" className="text-base sm:text-lg w-full sm:w-auto" asChild>
                  <a href={appUrl}>Start free • 3 articles on us</a>
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-base sm:text-lg w-full sm:w-auto"
                  onClick={() => scrollToSection("how-it-works")}
                >
                  See how it works
                </Button>
              </div>
            </FadeIn>

            <FadeIn direction="up" duration={0.6} delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-white/40 backdrop-blur-sm rounded-2xl sm:rounded-full px-4 sm:px-6 py-3 border border-white/60">
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <svg
                    className="w-4 h-4 text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <svg
                    className="w-4 h-4 text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>3 articles lifetime free</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Dashboard & Article Mockups */}
          <div className="relative py-8">
            <FadeIn direction="left" duration={0.8} delay={0.2}>
              <Float y={15} duration={8}>
                <div className="max-w-full px-4 sm:px-0">
                  <DashboardMockup />
                </div>
              </Float>
            </FadeIn>

            {/* Dancing Article Mockup - Right Side */}
              <Float y={12} duration={5} rotate={3} className="absolute -right-8 top-1/3 z-10 scale-[0.55] hidden lg:block">
                <ArticleMockup />
              </Float>
          </div>
        </div>
      </div>
    </section>
  );
}
