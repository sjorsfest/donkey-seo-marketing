"use client";

import { useState } from "react";
import { Check, Tag, ArrowRight } from "lucide-react";
import { SectionHeader } from "~/components/ui/section-header";
import { StaggerContainer, StaggerItem } from "~/components/motion/stagger";
import { Button } from "~/components/ui/button";
import { FadeIn } from "~/components/motion/fade-in";
import { pricingPlans } from "~/data/pricing";
import { useAppConfig } from "~/context/appConfig";

export function Pricing() {
  const { appUrl } = useAppConfig();
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeader
          eyebrow="Pricing"
          eyebrowIcon={<Tag />}
          title="Pricing that scales with you"
          subtitle="Start free. No credit card required. Cancel anytime."
          className="mb-8"
        />

        {/* Billing Toggle */}
        <FadeIn className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-1 rounded-2xl border-2 border-outline bg-white p-1 shadow-[4px_4px_0_#1a1a1a]">
            <button
              onClick={() => setIsYearly(false)}
              aria-pressed={!isYearly}
              className={`rounded-xl px-7 py-2.5 font-display font-bold transition-all ${
                !isYearly
                  ? "bg-yellow-500 text-teal-950 shadow-[2px_2px_0_#1a1a1a]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              aria-pressed={isYearly}
              className={`flex items-center gap-2 rounded-xl px-7 py-2.5 font-display font-bold transition-all ${
                isYearly
                  ? "bg-yellow-500 text-teal-950 shadow-[2px_2px_0_#1a1a1a]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly
              <span className="rounded-full border-2 border-outline bg-teal-400 px-2 py-0.5 text-xs font-bold text-teal-950">
                Save 32%
              </span>
            </button>
          </div>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 max-w-7xl mx-auto items-stretch">
          {pricingPlans.map((plan, index) => {
            const highlighted = plan.highlighted;
            const price = isYearly ? plan.price.yearly : plan.price.monthly;
            const monthlyEquiv =
              isYearly && plan.price.yearly > 0
                ? Math.round(plan.price.yearly / 12)
                : null;

            return (
              <StaggerItem key={index} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-3xl border-2 border-outline bg-white transition-all ${
                    highlighted
                      ? "border-[3px] shadow-[8px_8px_0_#1a1a1a] lg:-translate-y-3 z-10"
                      : "shadow-[5px_5px_0_#1a1a1a] hover:-translate-y-1 hover:shadow-[7px_7px_0_#1a1a1a]"
                  }`}
                >
                  {/* Most popular ribbon */}
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border-2 border-outline bg-yellow-400 px-4 py-1 font-display text-xs font-bold text-teal-950 shadow-[3px_3px_0_#1a1a1a]">
                      ★ {plan.badge}
                    </div>
                  )}

                  <div className="flex h-full flex-col p-6 pt-8">
                    {/* Header */}
                    <div className="text-center">
                      <div className="text-sm font-semibold text-muted-foreground">
                        {plan.description}
                      </div>
                      <div className="mt-1 font-display text-2xl font-bold text-foreground">
                        {plan.name}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mt-5 text-center">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="font-display text-5xl font-bold text-foreground">
                          €{price}
                        </span>
                        {plan.price.monthly > 0 && (
                          <span className="text-muted-foreground">
                            /{isYearly ? "yr" : "mo"}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 h-5 text-sm text-muted-foreground">
                        {plan.price.monthly === 0
                          ? "Free forever"
                          : monthlyEquiv
                            ? `≈ €${monthlyEquiv}/mo, billed yearly`
                            : "billed monthly"}
                      </p>
                    </div>

                    {/* CTA */}
                    <Button
                      className="mt-6 w-full group"
                      variant={highlighted ? "gradient" : "secondary"}
                      size="lg"
                      asChild
                    >
                      <a href={appUrl}>
                        {plan.cta}
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>

                    {/* Features */}
                    <ul className="mt-6 space-y-3 border-t-2 border-dashed border-border pt-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-2.5 text-sm"
                        >
                          <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-300 border-2 border-outline">
                            <Check
                              className="size-3 text-teal-950"
                              strokeWidth={3}
                            />
                          </span>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn delay={0.2} className="text-center mt-10">
          <p className="inline-flex items-center gap-2 rounded-full border-2 border-outline bg-white px-5 py-2.5 text-sm font-semibold text-muted-foreground shadow-[3px_3px_0_#1a1a1a]">
            <Tag className="size-4 text-teal-700" />
            Need more pages? Add-on available at €2 per page on any paid plan.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
