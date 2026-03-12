"use client";

import { FadeIn } from "~/components/motion/fade-in";
import { Button } from "~/components/ui/button";
import { useAppConfig } from "~/context/appConfig";
import type { IcpHeroConfig } from "~/data/icp/types";

interface IcpHeroProps extends IcpHeroConfig {}

export function IcpHero({
  badge,
  headline,
  highlightedText,
  subheadline,
  ctaText = "Start free • 3 SEO pages on us",
  secondaryCtaText = "See how it works",
}: IcpHeroProps) {
  const { appUrl } = useAppConfig();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderHeadline = () => {
    if (!highlightedText) {
      return headline;
    }
    const parts = headline.split(highlightedText);
    if (parts.length < 2) {
      return headline;
    }
    return (
      <>
        {parts[0]}
        <span className="text-outline" style={{ color: "#ffd641" }}>
          {highlightedText}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="relative pt-44 pb-20 overflow-hidden 2xl:pt-64 2xl:pb-40 2xl:scale-125">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {badge && (
            <FadeIn direction="up" duration={0.6}>
              <div className="inline-flex items-center gap-2 bg-yellow-100 px-5 py-2.5 rounded-full border-2 border-outline shadow-[3px_3px_0_#1a1a1a]">
                <span className="font-display font-bold text-foreground text-sm">
                  {badge}
                </span>
              </div>
            </FadeIn>
          )}

          <FadeIn direction="up" duration={0.6} delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1]">
              {renderHeadline()}
            </h1>
          </FadeIn>

          <FadeIn direction="up" duration={0.6} delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              {subheadline}
            </p>
          </FadeIn>

          <FadeIn direction="up" duration={0.6} delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="gradient" className="text-base sm:text-lg w-full sm:w-auto" asChild>
                <a href={appUrl}>{ctaText}</a>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="text-base sm:text-lg w-full sm:w-auto"
                onClick={() => scrollToSection("how-it-works")}
              >
                {secondaryCtaText}
              </Button>
            </div>
          </FadeIn>

          <FadeIn direction="up" duration={0.6} delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 bg-white/40 backdrop-blur-sm rounded-2xl sm:rounded-full px-4 sm:px-6 py-3 border border-white/60 max-w-lg mx-auto">
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>3 SEO pages lifetime free</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
