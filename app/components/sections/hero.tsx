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
          <div className="space-y-8">
            <FadeIn direction="up" duration={0.6}>
              <Badge variant="promo" size="lg" className="mb-6">
                ⚡ Hands-free organic growth
              </Badge>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
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
              <p className="text-xl text-foreground/80 leading-relaxed max-w-xl">
                Automated keyword research, content creation, and CMS delivery.
                From setup to published articles. Completely hands-off.
              </p>
            </FadeIn>

            <FadeIn direction="up" duration={0.6} delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg" asChild>
                  <a href={appUrl}>Start free • 5 articles on us</a>
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg"
                  onClick={() => scrollToSection("how-it-works")}
                >
                  See how it works
                </Button>
              </div>
            </FadeIn>

            <FadeIn direction="up" duration={0.6} delay={0.3}>
              <p className="text-sm text-muted-foreground">
                No credit card required • 5 articles lifetime free
              </p>
            </FadeIn>
          </div>

          {/* Right Column - Dashboard & Article Mockups */}
          <div className="relative">
            <FadeIn direction="left" duration={0.8} delay={0.2}>
              <Float y={15} duration={8}>
                <DashboardMockup />
              </Float>
            </FadeIn>

            {/* Dancing Article Mockup - Right Side */}
              <Float y={12} duration={5} rotate={3} className="absolute -right-8 top-1/3 z-10 scale-[0.55]">
                <ArticleMockup />
              </Float>
          </div>
        </div>
      </div>
    </section>
  );
}
