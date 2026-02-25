"use client";

import { FadeIn } from "~/components/motion/fade-in";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { discoverySteps } from "~/data/pipeline-steps";

export function DiscoveryPipeline() {
  return (
    <section className="py-20">
      <div className="section-container">
        <FadeIn className="text-center mb-16">
          <Badge variant="promo" size="lg" className="mb-4">
            🔥 The automation magic
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Discovery Pipeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A 7-step, AI-driven research engine that runs iteratively to find
            the best content opportunities for your domain. This is what gets
            customers excited — real automation.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <Card className="p-8 max-w-5xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              AI keyword research that actually thinks
            </h3>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-teal-300" />

              {/* Steps */}
              <div className="space-y-8">
                {discoverySteps.map((step, index) => (
                  <div key={index} className="relative pl-16">
                    {/* Circle Marker */}
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-yellow-500 border-4 border-card flex items-center justify-center shadow-lg">
                      <span className="font-display font-bold text-foreground">
                        {index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="bg-muted-bg rounded-xl p-4 border-2 border-border">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary" size="sm">
                          {step.step}
                        </Badge>
                        <h4 className="font-display font-bold text-foreground">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 p-6 bg-yellow-500/10 rounded-xl border-2 border-yellow-500/20 text-center">
              <p className="text-foreground font-medium">
                🚀 Runs multiple iterations, gets smarter with each loop
              </p>
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
