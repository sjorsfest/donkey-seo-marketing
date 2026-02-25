"use client";

import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { FadeIn } from "~/components/motion/fade-in";
import { Float } from "~/components/motion/float";
import { DashboardMockup } from "./dashboard-mockup";
import { ArticleMockup } from "./article-mockup";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <FadeIn direction="up" duration={0.6}>
              <Badge variant="promo" size="lg" className="mb-6">
                ⚡ Automated from keyword to publish
              </Badge>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                <span className="text-outline-hero">SEO content</span> that ships
                on <span className="text-yellow-500">autopilot</span>
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
                <Button size="lg" className="text-lg">
                  Start free • 5 articles on us
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
            <FadeIn direction="right" duration={0.8} delay={0.4}>
              <Float y={12} duration={5} rotate={3} className="absolute -right-8 top-1/3 z-10 scale-[0.55]">
                <ArticleMockup />
              </Float>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
