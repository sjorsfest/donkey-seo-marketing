"use client";

import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

export function DashboardMockup() {
  const stats = [
    { icon: "🔍", label: "Keywords", value: "1320", subtitle: "total keywords discovered" },
    { icon: "📚", label: "Topics", value: "28", subtitle: "topic clusters identified" },
    { icon: "🔄", label: "Discovery Loop", value: "1", subtitle: "iteration completed" },
  ];

  const pipelineSteps = ["Seeds", "Expansion", "Metrics", "Intent", "Clustering", "Prioritization", "SERP"];

  return (
    <Card className="w-full max-w-4xl bg-white p-8 border-4 border-outline shadow-[8px_8px_0_#1a1a1a]">
      {/* Header */}
      <div className="mb-8">
        <h3 className="font-display text-2xl font-bold text-foreground mb-2">
          Discovery
        </h3>
        <p className="text-sm text-muted-foreground">
          Keyword discovery, topic clustering, and loop iteration management.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-teal-50 rounded-2xl border-2 border-outline shadow-[4px_4px_0_#1a1a1a] p-5 hover:shadow-[6px_6px_0_#1a1a1a] hover:-translate-y-0.5 transition-all"
          >
            <div className="flex flex-col items-center text-center gap-2">
              <div className="text-4xl mb-1">{stat.icon}</div>
              <div className="font-display text-3xl font-bold text-foreground">
                {stat.value}
              </div>
              <p className="text-xs text-muted-foreground leading-tight">
                {stat.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pipeline Progress */}
      <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl border-2 border-outline p-6">
        <div className="flex items-center justify-between mb-6">
          <h4 className="font-display text-sm font-bold text-foreground tracking-wide">
            DISCOVERY PIPELINE PROGRESS
          </h4>
          <Badge variant="success" size="sm" className="font-bold">
            100%
          </Badge>
        </div>

        {/* Pipeline Steps */}
        <div className="relative flex items-center justify-between">
          {/* Connection Line */}
          <div className="absolute top-2 left-0 right-0 h-1 bg-teal-400/20 -z-10" />
          <div className="absolute top-2 left-0 w-full h-1 bg-teal-400 -z-10" />

          {pipelineSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-teal-400 border-2 border-white shadow-sm" />
              <span className="text-[10px] font-semibold text-foreground text-center leading-tight max-w-[60px]">
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
