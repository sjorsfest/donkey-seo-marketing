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
                Donkey SEO doesn't just write isolated articles: it reads your
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

                {/* Network Visualization */}
                <div className="relative h-64">
                  {/* SVG for connection lines */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    style={{ zIndex: 1 }}
                  >
                    <defs>
                      {/* Arrow marker definition */}
                      <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="10"
                        refX="8"
                        refY="3"
                        orient="auto"
                      >
                        <polygon
                          points="0 0, 6 3, 0 6"
                          fill="#5EEAD4"
                          className="animate-pulse"
                        />
                      </marker>
                    </defs>

                    {/* Primary connections from center to each page */}
                    {[
                      { x1: "50%", y1: "50%", x2: "15%", y2: "20%", strength: 2.5 },
                      { x1: "50%", y1: "50%", x2: "50%", y2: "15%", strength: 2.5 },
                      { x1: "50%", y1: "50%", x2: "85%", y2: "20%", strength: 2.5 },
                      { x1: "50%", y1: "50%", x2: "85%", y2: "80%", strength: 2.5 },
                      { x1: "50%", y1: "50%", x2: "15%", y2: "80%", strength: 2.5 },
                    ].map((connection, index) => (
                      <line
                        key={`primary-${index}`}
                        x1={connection.x1}
                        y1={connection.y1}
                        x2={connection.x2}
                        y2={connection.y2}
                        stroke="#5EEAD4"
                        strokeWidth={connection.strength}
                        markerEnd="url(#arrowhead)"
                        className="animate-[dash_1.5s_ease-in-out_infinite]"
                        strokeDasharray="6 3"
                        style={{
                          animationDelay: `${index * 0.15}s`,
                        }}
                      />
                    ))}

                    {/* Secondary connections between outer nodes */}
                    {[
                      { x1: "15%", y1: "20%", x2: "50%", y2: "15%", strength: 1.5 },
                      { x1: "50%", y1: "15%", x2: "85%", y2: "20%", strength: 1.5 },
                      { x1: "85%", y1: "80%", x2: "15%", y2: "80%", strength: 1.5 },
                    ].map((connection, index) => (
                      <line
                        key={`secondary-${index}`}
                        x1={connection.x1}
                        y1={connection.y1}
                        x2={connection.x2}
                        y2={connection.y2}
                        stroke="#A7F3D0"
                        strokeWidth={connection.strength}
                        strokeDasharray="3 3"
                        opacity="0.5"
                        className="animate-[dash_2s_ease-in-out_infinite]"
                        style={{
                          animationDelay: `${index * 0.3 + 0.5}s`,
                        }}
                      />
                    ))}
                  </svg>

                  {/* Center Node - New Article */}
                  <div
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{ zIndex: 5 }}
                  >
                    <div className="text-center p-3 bg-yellow-100 rounded-lg border-2 border-yellow-500 shadow-lg">
                      <div className="text-2xl mb-1">✍️</div>
                      <span className="text-xs font-bold text-foreground whitespace-nowrap">
                        New Article
                      </span>
                    </div>
                  </div>

                  {/* Surrounding Page Nodes */}
                  {[
                    {
                      name: "Product Page",
                      emoji: "🛍️",
                      position: "left-[8%] top-[12%]",
                    },
                    {
                      name: "About Us",
                      emoji: "👥",
                      position: "left-1/2 -translate-x-1/2 top-[-6%]",
                    },
                    {
                      name: "Blog Post",
                      emoji: "📝",
                      position: "right-[8%] top-[12%]",
                    },
                    {
                      name: "Resources",
                      emoji: "📚",
                      position: "right-[8%] bottom-[12%]",
                    },
                    {
                      name: "Services",
                      emoji: "⚙️",
                      position: "left-[8%] bottom-[12%]",
                    },
                  ].map((page, index) => (
                    <div
                      key={index}
                      className={`absolute ${page.position} transform`}
                      style={{ zIndex: 2 }}
                    >
                      <div className="text-center p-2 bg-white rounded-lg border-2 border-teal-300 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-lg mb-1">{page.emoji}</div>
                        <span className="text-[10px] font-medium text-foreground whitespace-nowrap">
                          {page.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <style dangerouslySetInnerHTML={{__html: `
                  @keyframes dash {
                    0%, 100% {
                      stroke-dashoffset: 0;
                    }
                    50% {
                      stroke-dashoffset: 8;
                    }
                  }
                `}} />

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
