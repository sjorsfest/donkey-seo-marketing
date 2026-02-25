"use client";

import { useState } from "react";
import { FadeIn } from "~/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "~/components/motion/stagger";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { pricingPlans } from "~/data/pricing";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-white/50">
      <div className="section-container">
        <FadeIn className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Pricing that scales with you
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Start free. No credit card required. Cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 p-1 bg-card rounded-2xl border-2 border-outline shadow-sm">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-xl font-semibold transition-all ${
                !isYearly
                  ? "bg-yellow-500 text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-xl font-semibold transition-all ${
                isYearly
                  ? "bg-yellow-500 text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-teal-400 text-white px-2 py-0.5 rounded-full">
                Save 22%
              </span>
            </button>
          </div>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <StaggerItem key={index}>
              <Card
                className={`h-full relative flex flex-col ${
                  plan.highlighted ? "ring-4 ring-yellow-500" : ""
                }`}
                variant={plan.highlighted ? "elevated" : "default"}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="promo">{plan.badge}</Badge>
                  </div>
                )}

                <CardHeader>
                  <CardTitle className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">
                      {plan.description}
                    </div>
                    <div className="font-display text-3xl font-bold text-foreground">
                      {plan.name}
                    </div>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6 flex-1 flex flex-col">
                  {/* Price */}
                  <div className="text-center">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-display font-bold text-foreground">
                        €{isYearly ? plan.price.yearly : plan.price.monthly}
                      </span>
                      {plan.price.monthly > 0 && (
                        <span className="text-muted-foreground">
                          /{isYearly ? "year" : "month"}
                        </span>
                      )}
                    </div>
                    {plan.price.monthly === 0 && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Forever
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-2 text-sm"
                      >
                        <svg
                          className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className="w-full mt-auto"
                    variant={plan.highlighted ? "default" : "secondary"}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Add-on Note */}
        <FadeIn delay={0.4} className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Need more articles? Add-on available at €2 per article on any paid
            plan.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
