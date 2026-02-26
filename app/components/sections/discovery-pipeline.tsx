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
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A 7-step, AI-driven research engine that runs iteratively to find
            the best content opportunities for your domain.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <Card className="p-4 sm:p-6 md:p-8 max-w-5xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              AI keyword research that actually thinks
            </h3>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line - ends before the loop node with gradient */}
              <div className="absolute left-4 sm:left-5 md:left-6 top-0 bottom-12 w-0.5 sm:w-1 bg-gradient-to-b from-yellow-400 via-teal-300 to-teal-400 rounded-full" />

              {/* Steps grouped by phases */}
              <div className="space-y-10">
                {/* Discovery Phase */}
                <div className="space-y-6">
                  <div className="pl-10 sm:pl-12 md:pl-16">
                    <Badge variant="teal" size="lg">🌱 Discovery Phase</Badge>
                  </div>
                  {discoverySteps.slice(0, 2).map((step, index) => (
                    <div key={index} className="relative pl-10 sm:pl-12 md:pl-16">
                      {/* Circle Marker */}
                      <div className="absolute left-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 border-2 sm:border-3 md:border-4 border-card flex items-center justify-center shadow-lg">
                        <span className="font-display font-bold text-foreground text-sm sm:text-base md:text-lg">
                          {index + 1}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-5 border-2 border-border hover:border-yellow-300 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" size="sm">
                            {step.step}
                          </Badge>
                          <h4 className="font-display font-bold text-foreground text-lg">
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Analysis Phase */}
                <div className="space-y-6">
                  <div className="pl-10 sm:pl-12 md:pl-16">
                    <Badge variant="teal" size="lg">📊 Analysis Phase</Badge>
                  </div>
                  {discoverySteps.slice(2, 4).map((step, index) => (
                    <div key={index + 2} className="relative pl-10 sm:pl-12 md:pl-16">
                      {/* Circle Marker */}
                      <div className="absolute left-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-teal-300 to-teal-400 border-2 sm:border-3 md:border-4 border-card flex items-center justify-center shadow-lg">
                        <span className="font-display font-bold text-foreground text-sm sm:text-base md:text-lg">
                          {index + 3}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl p-5 border-2 border-border hover:border-teal-300 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" size="sm">
                            {step.step}
                          </Badge>
                          <h4 className="font-display font-bold text-foreground text-lg">
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Optimization Phase */}
                <div className="space-y-6">
                  <div className="pl-10 sm:pl-12 md:pl-16">
                    <Badge variant="teal" size="lg">🎯 Optimization Phase</Badge>
                  </div>
                  {discoverySteps.slice(4, 7).map((step, index) => (
                    <div key={index + 4} className="relative pl-10 sm:pl-12 md:pl-16">
                      {/* Circle Marker */}
                      <div className="absolute left-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-400 border-2 sm:border-3 md:border-4 border-card flex items-center justify-center shadow-lg">
                        <span className="font-display font-bold text-foreground text-sm sm:text-base md:text-lg">
                          {index + 5}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-5 border-2 border-border hover:border-yellow-300 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" size="sm">
                            {step.step}
                          </Badge>
                          <h4 className="font-display font-bold text-foreground text-lg">
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
