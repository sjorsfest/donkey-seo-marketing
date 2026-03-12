"use client";

import { FadeIn } from "~/components/motion/fade-in";

export function DiscoveryPipeline() {
  return (
    <section className="py-20">
      <div className="section-container">
        <FadeIn className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            You build product. Donkey SEO builds traffic.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your SEO pages ship on autopilot, so you never choose between building product and growing traffic.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-6xl mx-auto">
            {/* Split Screen Comparison */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Side - YOU */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl p-8 border-3 border-outline shadow-[6px_6px_0_#1a1a1a] hover:shadow-[8px_8px_0_#1a1a1a] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-yellow-400 px-6 py-3 rounded-full border-2 border-outline shadow-[3px_3px_0_#1a1a1a]">
                    <span className="text-3xl">👨‍💻</span>
                    <span className="font-display font-bold text-foreground text-2xl">You</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-5 border-2 border-outline">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl flex-shrink-0">🚀</div>
                      <div>
                        <div className="font-display font-bold text-foreground text-lg mb-1">
                          Build your product
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Focus on what makes you different
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 border-2 border-outline">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl flex-shrink-0">💰</div>
                      <div>
                        <div className="font-display font-bold text-foreground text-lg mb-1">
                          Close deals
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Focus on revenue, not content
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 border-2 border-outline">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl flex-shrink-0">🛠️</div>
                      <div>
                        <div className="font-display font-bold text-foreground text-lg mb-1">
                          Ship new features
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Build what your customers need
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 border-2 border-outline">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl flex-shrink-0">☕</div>
                      <div>
                        <div className="font-display font-bold text-foreground text-lg mb-1">
                          Take weekends off
                        </div>
                        <div className="text-sm text-muted-foreground">
                          SEO runs while you recharge
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-2 text-yellow-600 font-display font-bold text-lg">
                    <span>✌️</span>
                    <span>Your time. Your priorities.</span>
                  </div>
                </div>
              </div>

              {/* Right Side - DONKEY */}
              <div className="bg-gradient-to-br from-teal-400 to-teal-100 rounded-3xl p-8 border-3 border-outline shadow-[6px_6px_0_#1a1a1a] hover:shadow-[8px_8px_0_#1a1a1a] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all relative overflow-hidden">
                {/* Sparkles */}
                <div className="absolute top-4 right-4 text-2xl animate-pulse">✨</div>
                <div className="absolute bottom-4 left-4 text-2xl animate-pulse delay-100">⚡</div>

                <div className="text-center mb-6 relative z-10">
                  <div className="inline-flex items-center gap-2 bg-teal-50 px-6 py-3 rounded-full border-2 border-outline shadow-[3px_3px_0_#1a1a1a]">
                    <span className="text-3xl">🫏</span>
                    <span className="font-display font-bold text-foreground text-2xl">Donkey SEO</span>
                  </div>
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="bg-white rounded-xl p-5 border-2 border-outline">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl flex-shrink-0">🔍</div>
                      <div>
                        <div className="font-display font-bold text-foreground text-lg mb-1">
                          Find thousands of keywords
                        </div>
                        <div className="text-sm text-muted-foreground">
                          AI discovers high-value opportunities
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 border-2 border-outline">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl flex-shrink-0">✍️</div>
                      <div>
                        <div className="font-display font-bold text-foreground text-lg mb-1">
                          Build full SEO pages
                        </div>
                        <div className="text-sm text-muted-foreground">
                          In your brand voice, ready to publish
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 border-2 border-outline">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl flex-shrink-0">🔗</div>
                      <div>
                        <div className="font-display font-bold text-foreground text-lg mb-1">
                          Add internal links
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Connects to your existing content
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 border-2 border-outline">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl flex-shrink-0">🚀</div>
                      <div>
                        <div className="font-display font-bold text-foreground text-lg mb-1">
                          Deliver to your CMS
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Via API, webhook, or dashboard
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center relative z-10">
                  <div className="inline-flex items-center gap-2 text-teal-700 font-display font-bold text-lg">
                    <span>🤖</span>
                    <span>100% automated</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-100 to-teal-100 px-8 py-4 rounded-full border-3 border-outline shadow-[4px_4px_0_#1a1a1a]">
                <span className="text-2xl">💡</span>
                <span className="font-display font-bold text-foreground text-xl">
                  Zero research. Zero writing. Zero busywork.
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
