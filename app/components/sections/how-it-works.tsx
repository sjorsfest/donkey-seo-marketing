"use client";

import { FadeIn } from "~/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "~/components/motion/stagger";
import { Card, CardContent } from "~/components/ui/card";

export function HowItWorks() {
  const steps = [
    {
      emoji: "🫏",
      title: "Sign up & enter your domain",
      description: "Donkey analyzes your brand automatically",
    },
    {
      emoji: "🎯",
      title: "Pick your strategy",
      description: "Traffic Growth / Lead Gen / Revenue + target country",
    },
    {
      emoji: "🚀",
      title: "Launch Discovery",
      description: "7-step AI engine finds your best keyword opportunities",
    },
    {
      emoji: "✍️",
      title: "Content arrives — ready to publish",
      description: "Articles flow to your CMS via API. Review what you want. Publish.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white/50">
      <div className="section-container">
        <FadeIn className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From setup to published content in 4 simple steps. No writers. No
            spreadsheets. No hassle.
          </p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <Card className="h-full relative overflow-hidden" hover>
                <CardContent className="p-6">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-yellow-500 text-foreground font-display font-bold text-sm flex items-center justify-center">
                    {index + 1}
                  </div>

                  {/* Emoji */}
                  <div className="text-5xl mb-4">{step.emoji}</div>

                  {/* Content */}
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
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
