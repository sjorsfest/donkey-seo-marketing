"use client";

import { FadeIn } from "~/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "~/components/motion/stagger";
import type { IcpUseCase } from "~/data/icp/types";

interface UseCasesProps {
  icpName: string;
  useCases: IcpUseCase[];
}

export function UseCases({ icpName, useCases }: UseCasesProps) {
  return (
    <section className="py-20">
      <div className="section-container">
        <FadeIn className="text-center mb-10">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-3">
            Content types that work for{" "}
            <span className="text-outline" style={{ color: "#ffd641" }}>
              {icpName}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Donkey creates the right page type for every search opportunity in your niche.
          </p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {useCases.map((useCase, index) => (
            <StaggerItem key={index}>
              <div
                className={`${useCase.color} rounded-2xl px-5 py-4 border-2 border-outline shadow-[3px_3px_0_#1a1a1a] hover:shadow-[4px_4px_0_#1a1a1a] hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{useCase.emoji}</span>
                  <span className="font-display font-bold text-foreground text-base">
                    {useCase.name}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
