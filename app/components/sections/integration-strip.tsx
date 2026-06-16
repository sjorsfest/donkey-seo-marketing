"use client";

import {
  Newspaper,
  LayoutTemplate,
  Code2,
  Ghost,
  Database,
  Webhook,
  type LucideIcon,
} from "lucide-react";

const INTEGRATIONS: { name: string; Icon: LucideIcon }[] = [
  { name: "WordPress", Icon: Newspaper },
  { name: "Webflow", Icon: LayoutTemplate },
  { name: "Next.js", Icon: Code2 },
  { name: "Ghost", Icon: Ghost },
  { name: "Headless CMS", Icon: Database },
  { name: "REST API", Icon: Code2 },
  { name: "Webhooks", Icon: Webhook },
];

function Chip({ name, Icon }: { name: string; Icon: LucideIcon }) {
  return (
    <div className="flex shrink-0 items-center gap-2.5 rounded-2xl border-2 border-outline bg-white px-5 py-3 shadow-[3px_3px_0_#1a1a1a]">
      <Icon className="size-5 text-teal-700" strokeWidth={2.25} aria-hidden="true" />
      <span className="font-display text-base font-bold text-foreground whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function IntegrationStrip() {
  return (
    <section className="pb-6 pt-2">
      <div className="section-container">
        <p className="text-center font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">
          Publishes directly to the tools you already use
        </p>
      </div>

      {/* Marquee */}
      <div className="marquee-mask relative mt-6 flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-4 pr-4">
          {INTEGRATIONS.map((item) => (
            <Chip key={item.name} {...item} />
          ))}
        </div>
        <div
          aria-hidden="true"
          className="flex shrink-0 animate-marquee items-center gap-4 pr-4"
        >
          {INTEGRATIONS.map((item) => (
            <Chip key={`dup-${item.name}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
