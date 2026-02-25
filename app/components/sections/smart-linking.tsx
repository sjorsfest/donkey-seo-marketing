"use client";

import { FadeIn } from "~/components/motion/fade-in";
import { Card, CardContent } from "~/components/ui/card";

export function SmartLinking() {
  return (
    <section className="py-20 bg-white/50">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Content */}
          <FadeIn direction="right">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-6xl">🔗</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
                Every article plugs into your site like it was always there
              </h2>
              <p className="text-lg text-muted-foreground">
                Donkey SEO doesn't just write isolated articles — it reads your
                existing sitemap and automatically interlinks new content with
                the pages you already have.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
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
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground mb-1">
                      Crawls your sitemap
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Understands your existing page structure automatically
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
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
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground mb-1">
                      Contextual internal links
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Adds links from new articles to relevant existing pages
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
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
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground mb-1">
                      Strengthens topical authority
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Distributes link equity across your site architecture
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column - Visual */}
          <FadeIn direction="left" delay={0.2}>
            <Card className="p-8">
              <div className="space-y-6">
                {/* Sitemap */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-lg border-2 border-teal-400">
                    <span className="text-2xl">🗺️</span>
                    <span className="font-display font-bold text-foreground">
                      Your Sitemap
                    </span>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="text-center">
                  <div className="inline-block text-4xl text-teal-400">↓</div>
                </div>

                {/* New Article */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-lg border-2 border-yellow-500">
                    <span className="text-2xl">✍️</span>
                    <span className="font-display font-bold text-foreground">
                      New Article
                    </span>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="text-center">
                  <div className="inline-block text-4xl text-teal-400">↓</div>
                </div>

                {/* Existing Pages */}
                <div className="grid grid-cols-3 gap-3">
                  {["Page A", "Page B", "Page C"].map((page, index) => (
                    <div
                      key={index}
                      className="text-center p-3 bg-white rounded-lg border-2 border-outline shadow-sm"
                    >
                      <div className="text-xl mb-1">📄</div>
                      <span className="text-xs font-medium text-foreground">
                        {page}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-center text-sm text-muted-foreground italic">
                  Zero manual work. Every article connects automatically.
                </p>
              </div>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
