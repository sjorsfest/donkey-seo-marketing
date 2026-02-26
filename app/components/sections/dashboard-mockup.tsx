"use client";

import { Badge } from "~/components/ui/badge";

export function DashboardMockup() {
  const stats = [
    { icon: "🔍", label: "Keywords", value: "1320", subtitle: "total keywords discovered" },
    { icon: "📚", label: "Topics", value: "28", subtitle: "topic clusters identified" },
    { icon: "🔄", label: "Discovery Loop", value: "1", subtitle: "iteration completed" },
  ];

  const pipelineSteps = ["Seeds", "Expansion", "Metrics", "Intent", "Clustering", "Prioritization", "SERP"];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Browser Window Frame */}
      <div className="bg-white rounded-xl sm:rounded-2xl border-2 sm:border-4 border-outline shadow-[4px_4px_0_#1a1a1a] sm:shadow-[8px_8px_0_#1a1a1a] overflow-hidden">
        {/* Browser Top Bar */}
        <div className="bg-gray-200 px-2 sm:px-4 py-2 sm:py-3 border-b-2 sm:border-b-4 border-outline flex items-center gap-2">
          {/* macOS Window Controls */}
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-red-600" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 border-2 border-yellow-600" />
            <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-green-600" />
          </div>
          {/* URL Bar */}
          <div className="flex-1 mx-4 bg-white rounded-lg px-4 py-1.5 border-2 border-gray-300">
            <div className="text-xs text-gray-500 font-mono">app.donkeyseo.io</div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-3 sm:p-4 md:p-6">
          {/* Header */}
          <div className="mb-4 sm:mb-6">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
              Discovery
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Keyword discovery, topic clustering, and loop iteration management.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-teal-50 rounded-lg sm:rounded-2xl border-2 border-outline shadow-[2px_2px_0_#1a1a1a] sm:shadow-[4px_4px_0_#1a1a1a] p-2 sm:p-4 hover:shadow-[3px_3px_0_#1a1a1a] sm:hover:shadow-[6px_6px_0_#1a1a1a] hover:-translate-y-0.5 transition-all"
              >
                <div className="flex flex-col items-center text-center gap-1 sm:gap-2">
                  <div className="text-2xl sm:text-4xl mb-0 sm:mb-1">{stat.icon}</div>
                  <div className="font-display text-xl sm:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight hidden sm:block">
                    {stat.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pipeline Progress */}
          <div className="bg-gradient-to-br from-teal-50 to-white rounded-lg sm:rounded-2xl border-2 border-outline p-3 sm:p-4">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h4 className="font-display text-[10px] sm:text-sm font-bold text-foreground tracking-wide">
                DISCOVERY PROGRESS
              </h4>
              <Badge variant="success" size="sm" className="font-bold text-[10px] sm:text-xs">
                100%
              </Badge>
            </div>

            {/* Pipeline Steps */}
            <div className="relative flex items-center justify-between">
              {/* Connection Line */}
              <div className="absolute top-1.5 sm:top-2 left-0 right-0 h-0.5 sm:h-1 bg-teal-400/20 -z-10" />
              <div className="absolute top-1.5 sm:top-2 left-0 w-full h-0.5 sm:h-1 bg-teal-400 -z-10" />

              {pipelineSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center gap-1 sm:gap-2">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-teal-400 border-2 border-white shadow-sm" />
                  <span className="text-[8px] sm:text-[10px] font-semibold text-foreground text-center leading-tight max-w-[40px] sm:max-w-[60px]">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
