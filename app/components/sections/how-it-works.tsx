"use client";

import { FadeIn } from "~/components/motion/fade-in";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white/50">
      <div className="section-container">
        <FadeIn className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Setup once. Sit back. Watch content ship.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            No writers. No agencies. No hours wasted on keyword research. Just results.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-5xl mx-auto">
            {/* Visual Flow */}
            <div className="relative bg-gradient-to-br from-teal-50 via-white to-yellow-50 rounded-3xl p-8 md:p-12 border-2 border-outline shadow-[8px_8px_0_#1a1a1a]">
              {/* Step 1 - Enter Domain */}
              <div className="text-center">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 px-8 py-4 rounded-2xl border-3 border-outline shadow-[6px_6px_0_#1a1a1a] hover:shadow-[4px_4px_0_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                  <span className="text-4xl">🫏</span>
                  <div>
                    <div className="font-display font-bold text-foreground text-2xl">
                      Enter domain
                    </div>
                    <div className="text-foreground/80 text-sm">
                      AI analyzes your brand
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center my-8">
                <div className="text-6xl text-yellow-500 opacity-60">↓</div>
              </div>

              {/* Automation Box */}
              <div className="bg-gradient-to-br from-yellow-100 to-teal-100 rounded-2xl p-8 border-3 border-outline shadow-[6px_6px_0_#1a1a1a] relative overflow-hidden">
                <div className="text-center relative z-10">
                  <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-outline shadow-[3px_3px_0_#1a1a1a] mb-4">
                    <span className="text-3xl">🤖</span>
                    <span className="font-display font-bold text-foreground text-xl">
                      Donkey works on autopilot
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4 mt-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border-2 border-outline">
                      <div className="text-2xl mb-2">🔍</div>
                      <div className="font-display font-bold text-sm text-foreground">Finds keywords</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border-2 border-outline">
                      <div className="text-2xl mb-2">✍️</div>
                      <div className="font-display font-bold text-sm text-foreground">Writes articles</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border-2 border-outline">
                      <div className="text-2xl mb-2">🚀</div>
                      <div className="font-display font-bold text-sm text-foreground">Ships to CMS</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center my-8">
                <div className="text-6xl text-teal-500 opacity-60">↓</div>
              </div>

              {/* Result */}
              <div className="text-center">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-400 to-teal-500 px-8 py-4 rounded-2xl border-3 border-outline shadow-[6px_6px_0_#1a1a1a] hover:shadow-[4px_4px_0_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                  <span className="text-4xl">🎉</span>
                  <div>
                    <div className="font-display font-bold text-white text-2xl">
                      Content ready to publish
                    </div>
                    <div className="text-white/90 text-sm">
                      Review what you want. One-click publish.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
