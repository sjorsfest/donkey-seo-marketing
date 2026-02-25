"use client";

import { FadeIn } from "~/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "~/components/motion/stagger";
import { Card, CardContent, CardTitle } from "~/components/ui/card";
import { features } from "~/data/features";

export function Features() {
  return (
    <section id="features" className="py-20">
      <div className="section-container">
        <FadeIn className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Everything you need to ship SEO content
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From keyword research to CMS delivery. Built for solo founders,
            indie builders, and small teams.
          </p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <Card className="h-full" hover>
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="mb-2">{feature.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
