"use client";

import { LayoutGrid, Sparkles } from "lucide-react";
import { SectionHeader } from "~/components/ui/section-header";
import { StaggerContainer, StaggerItem } from "~/components/motion/stagger";
import { IconChip } from "~/components/ui/icon-chip";
import { features as defaultFeatures, type Feature } from "~/data/features";

interface FeaturesProps {
  title?: string;
  subtitle?: string;
  items?: Feature[];
}

export function Features({
  title = "Everything you need. Nothing you have to manage.",
  subtitle = "Built for solo founders, indie builders, and small SaaS teams who need traffic and leads, not another manual process to babysit.",
  items,
}: FeaturesProps = {}) {
  const featureItems = items ?? defaultFeatures;

  return (
    <section id="features" className="py-20 md:py-28 bg-white/50">
      <div className="section-container">
        <SectionHeader
          eyebrow="Features"
          eyebrowIcon={<LayoutGrid />}
          title={title}
          subtitle={subtitle}
          className="mb-14"
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {featureItems.map((feature, index) => {
            const Icon = feature.icon;
            const tone = feature.tone ?? "yellow";
            return (
              <StaggerItem key={index} className="h-full">
                <div className="group relative flex h-full flex-col rounded-3xl border-2 border-outline bg-white p-6 shadow-[5px_5px_0_#1a1a1a] transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[7px_7px_0_#1a1a1a]">
                  <IconChip
                    tone={tone}
                    className="transition-transform duration-200 group-hover:-rotate-6"
                  >
                    {typeof Icon === "string" ? (
                      <span className="text-3xl leading-none">{Icon}</span>
                    ) : Icon ? (
                      <Icon strokeWidth={2.25} />
                    ) : (
                      <Sparkles strokeWidth={2.25} />
                    )}
                  </IconChip>
                  <h3 className="mt-5 font-display text-lg sm:text-xl font-bold text-foreground leading-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
