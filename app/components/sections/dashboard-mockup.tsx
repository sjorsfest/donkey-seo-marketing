"use client";

import { Scale, Trophy, BookOpen, Check, TrendingUp, type LucideIcon } from "lucide-react";

// Illustrative product UI — shows the *outcome* (traffic up, pages live), not the machinery.
const TRAFFIC_BARS = [26, 32, 29, 41, 48, 62, 76, 88];

const PAGES: {
  Icon: LucideIcon;
  tone: string;
  title: string;
  status: "published" | "live";
}[] = [
  { Icon: Scale, tone: "bg-coral", title: "Notion vs Obsidian (2026)", status: "published" },
  { Icon: Trophy, tone: "bg-yellow-400", title: "Best CRMs for startups", status: "published" },
  { Icon: BookOpen, tone: "bg-teal-300", title: "How to automate your SEO", status: "live" },
];

export function DashboardMockup() {
  return (
    <div className="w-full max-w-md mx-auto">
      {/* Browser Window Frame */}
      <div className="bg-white rounded-2xl border-2 sm:border-4 border-outline shadow-[6px_6px_0_#1a1a1a] sm:shadow-[8px_8px_0_#1a1a1a] overflow-hidden">
        {/* Browser Top Bar */}
        <div className="flex items-center gap-2 border-b-2 sm:border-b-4 border-outline bg-gray-100 px-3 py-2.5">
          <div className="flex gap-1.5">
            <div className="size-3 rounded-full border-2 border-red-600 bg-red-500" />
            <div className="size-3 rounded-full border-2 border-yellow-600 bg-yellow-500" />
            <div className="size-3 rounded-full border-2 border-green-600 bg-green-500" />
          </div>
          <div className="mx-2 flex-1 rounded-lg border-2 border-gray-300 bg-white px-3 py-1">
            <div className="font-mono text-xs text-gray-500">app.donkeyseo.io</div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {/* Traffic — the value moment */}
          <div className="rounded-2xl border-2 border-outline bg-teal-50 p-4 sm:p-5">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Organic traffic
                </div>
                <div className="font-display text-2xl font-bold text-foreground">
                  Growing on autopilot
                </div>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full border-2 border-outline bg-teal-400 px-2.5 py-1 text-sm font-bold text-teal-950">
                <TrendingUp className="size-4" strokeWidth={2.5} /> +42%
              </span>
            </div>
            {/* Bar chart */}
            <div className="flex h-24 items-end gap-1.5 sm:h-28">
              {TRAFFIC_BARS.map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-md border-2 border-outline ${
                    i >= TRAFFIC_BARS.length - 2 ? "bg-yellow-400" : "bg-teal-400"
                  }`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Recently published — the hands-off outcome */}
          <div className="mt-4">
            <div className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Published for you this week
            </div>
            <div className="space-y-2.5">
              {PAGES.map((page) => (
                <div
                  key={page.title}
                  className="flex items-center gap-3 rounded-xl border-2 border-outline bg-white p-2.5 shadow-[2px_2px_0_#1a1a1a]"
                >
                  <span className={`${page.tone} icon-chip size-9 rounded-lg [&_svg]:size-5`}>
                    <page.Icon className="text-teal-950" strokeWidth={2.5} />
                  </span>
                  <span className="min-w-0 flex-1 truncate font-display text-sm font-bold text-foreground">
                    {page.title}
                  </span>
                  {page.status === "published" ? (
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full border-2 border-outline bg-teal-300 px-2 py-0.5 text-[11px] font-bold text-teal-950">
                      <Check className="size-3" strokeWidth={3} /> Live
                    </span>
                  ) : (
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border-2 border-outline bg-yellow-100 px-2 py-0.5 text-[11px] font-bold text-teal-950">
                      <span className="relative flex size-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-500 opacity-75" />
                        <span className="relative inline-flex size-2 rounded-full bg-yellow-500" />
                      </span>
                      Publishing
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
