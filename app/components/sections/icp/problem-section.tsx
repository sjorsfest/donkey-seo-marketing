"use client";

import { FadeIn } from "~/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "~/components/motion/stagger";
import type { IcpPainPoint } from "~/data/icp/types";

interface ProblemSectionProps {
  icpName: string;
  painPoints: IcpPainPoint[];
}

export function ProblemSection({ icpName, painPoints }: ProblemSectionProps) {
  return (
    <section className="py-20">
      <div className="section-container">
        <FadeIn className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            The SEO struggle is real for{" "}
            <span className="text-outline" style={{ color: "#ff8552" }}>
              {icpName}
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Sound familiar? You're not alone.
          </p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <StaggerItem key={index}>
              <div className="bg-white rounded-2xl p-6 border-2 border-outline shadow-[4px_4px_0_#1a1a1a] hover:shadow-[6px_6px_0_#1a1a1a] hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all h-full">
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">{point.emoji}</div>
                  <div>
                    <h3 className="font-display font-bold text-foreground text-lg mb-2">
                      {point.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
