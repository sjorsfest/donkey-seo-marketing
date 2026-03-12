"use client";

import { FadeIn } from "~/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "~/components/motion/stagger";
import type { IcpSolution } from "~/data/icp/types";

interface SolutionSectionProps {
  icpName: string;
  solutions: IcpSolution[];
}

export function SolutionSection({ icpName, solutions }: SolutionSectionProps) {
  return (
    <section className="py-20 bg-white/50">
      <div className="section-container">
        <FadeIn className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full border-2 border-outline shadow-[3px_3px_0_#1a1a1a] mb-5">
            <span className="text-lg">🫏</span>
            <span className="font-display font-bold text-foreground text-sm">
              How Donkey SEO helps
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            SEO on autopilot for{" "}
            <span className="text-outline" style={{ color: "#70ac96" }}>
              {icpName}
            </span>
          </h2>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <StaggerItem key={index}>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border-2 border-outline shadow-[4px_4px_0_#1a1a1a] hover:shadow-[6px_6px_0_#1a1a1a] hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all h-full text-center">
                <div className="text-4xl mb-4">{solution.emoji}</div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">
                  {solution.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
