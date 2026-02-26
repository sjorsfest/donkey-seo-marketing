"use client";

import { FadeIn } from "~/components/motion/fade-in";
import { StaggerItem } from "~/components/motion/stagger";
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
      title: "Content arrives ready to publish",
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
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            From setup to published content in 4 simple steps. No writers. No
            spreadsheets. No hassle.
          </p>
        </FadeIn>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center flex-1 w-full sm:w-auto">
              <StaggerItem className="flex-1">
                <Card className="h-full min-h-[280px] relative overflow-hidden flex flex-col" variant="shiny" hover>
                  <CardContent className="p-8 flex-1 flex flex-col">
                    {/* Step Number */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-yellow-500 text-foreground font-display font-bold text-sm flex items-center justify-center">
                      {index + 1}
                    </div>

                    {/* Emoji */}
                    <div className="text-4xl sm:text-5xl mb-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center border-2 border-outline shadow-sm">{step.emoji}</div>

                    {/* Content */}
                    <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
              {index < steps.length - 1 && (
                <div className="hidden lg:block text-4xl text-teal-400 mx-2 flex-shrink-0">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
