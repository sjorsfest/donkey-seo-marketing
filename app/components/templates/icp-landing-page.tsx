"use client";

import { Navbar } from "~/components/layout/navbar";
import { Footer } from "~/components/layout/footer";
import { IcpHero } from "~/components/sections/icp/icp-hero";
import { ProblemSection } from "~/components/sections/icp/problem-section";
import { SolutionSection } from "~/components/sections/icp/solution-section";
import { UseCases } from "~/components/sections/icp/use-cases";
import { HowItWorks } from "~/components/sections/how-it-works";
import { Features } from "~/components/sections/features";
import { Pricing } from "~/components/sections/pricing";
import { FAQ } from "~/components/sections/faq";
import { FinalCTA } from "~/components/sections/final-cta";
import { faqItems as defaultFaqItems } from "~/data/faq";
import type { IcpConfig } from "~/data/icp/types";
import type { FAQItem } from "~/data/faq";

function buildFaqItems(config: IcpConfig): FAQItem[] | undefined {
  if (!config.faq) return undefined;

  const { items, strategy } = config.faq;

  switch (strategy) {
    case "prepend":
      return [...items, ...defaultFaqItems];
    case "append":
      return [...defaultFaqItems, ...items];
    case "replace":
      return items;
  }
}

interface IcpLandingPageProps {
  config: IcpConfig;
}

export function IcpLandingPage({ config }: IcpLandingPageProps) {
  const faqItems = buildFaqItems(config);

  return (
    <>
      <Navbar />
      <main>
        <IcpHero {...config.hero} />
        <ProblemSection icpName={config.name} painPoints={config.painPoints} />
        <SolutionSection icpName={config.name} solutions={config.solutions} />
        <HowItWorks />
        <UseCases icpName={config.name} useCases={config.useCases} />
        <Features
          title={config.features?.title}
          subtitle={config.features?.subtitle}
          items={config.features?.items}
        />
        <Pricing />
        <FAQ
          title={config.faq?.title}
          subtitle={config.faq?.subtitle}
          items={faqItems}
        />
        <FinalCTA
          badge={config.finalCta.badge}
          headline={config.finalCta.headline}
          subheadline={config.finalCta.subheadline}
          ctaText={config.finalCta.ctaText}
          socialProof={config.finalCta.socialProof}
        />
      </main>
      <Footer />
    </>
  );
}
