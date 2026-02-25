"use client";

import { FadeIn } from "~/components/motion/fade-in";
import { Float } from "~/components/motion/float";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";

export function FinalCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="section-container">
        <FadeIn>
          <Card className="relative max-w-5xl mx-auto p-12 md:p-16 bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 border-4 border-outline shadow-[12px_12px_0_#1a1a1a] overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full blur-xl animate-pulse" />
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full blur-xl animate-pulse delay-200" />
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-teal-400 rounded-full blur-xl animate-pulse delay-100" />
            </div>

            <div className="relative z-10">
              <div className="grid md:grid-cols-[1fr,auto] gap-8 items-center">
                {/* Left Side - Content */}
                <div className="space-y-6 text-center md:text-left">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-outline shadow-[3px_3px_0_#1a1a1a]">
                    <span className="text-2xl">🚀</span>
                    <span className="font-display font-bold text-foreground text-sm">
                      Join the herd
                    </span>
                  </div>

                  {/* Headline */}
                  <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                    Ready to ship{" "}
                    <span className="text-outline-lg text-foreground text-primary">
                      SEO content
                    </span>{" "}
                    on autopilot?
                  </h2>

                  {/* Subheadline */}
                  <p className="text-xl text-white/95 leading-relaxed max-w-2xl">
                    Stop wrestling with keyword research and content calendars.
                    Let Donkey SEO handle it all while you focus on building
                    your product.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex justify-between px-4">
                    <div className="flex flex-col gap-4">

                      <Button
                        size="xl"
                        variant="secondary"
                        className="bg-white hover:bg-white/90 shadow-[6px_6px_0_#1a1a1a] hover:shadow-[4px_4px_0_#1a1a1a]"
                      >
                        <span className="text-xl">Start free • 5 articles on us</span>
                    </Button>


                  {/* Trust Signals */}
                  <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>No credit card required</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Cancel anytime</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>5 articles lifetime free</span>
                    </div>
                  </div>
                </div>
                <Float y={20} duration={4}>
                    <div className="relative">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-white/30 rounded-full blur-2xl scale-110" />

                      {/* Donkey Image */}
                      <img
                        src="/static/donkey.png"
                        alt="Donkey SEO Mascot"
                        className="relative w-24 h-24 md:w-40 md:h-40 drop-shadow-2xl"
                        width={90}
                        height={90}
                      />

                    </div>
                  </Float>
                  </div>
                  </div>              
                  </div>
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
