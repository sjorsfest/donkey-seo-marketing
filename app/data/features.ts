import type { LucideIcon } from "lucide-react";
import {
  Search,
  PenLine,
  CalendarDays,
  Code2,
  Link2,
  Palette,
  Users,
  Globe,
} from "lucide-react";

export type FeatureTone = "yellow" | "teal" | "coral" | "dark";

export interface Feature {
  /** A lucide icon component (preferred) or an emoji string (legacy / ICP pages). */
  icon?: LucideIcon | string;
  title: string;
  description: string;
  tone?: FeatureTone;
}

export const features: Feature[] = [
  {
    icon: Search,
    tone: "yellow",
    title: "Automated Keyword Discovery",
    description:
      "A 7-step AI research engine finds high-opportunity keywords automatically. No spreadsheets, no manual research — just opportunities delivered to you.",
  },
  {
    icon: PenLine,
    tone: "teal",
    title: "SEO Page Creation",
    description:
      "Briefs and full, publish-ready SEO pages generated automatically in your brand voice.",
  },
  {
    icon: CalendarDays,
    tone: "coral",
    title: "Publishing Calendar",
    description:
      "A visual timeline showing every piece of content, every status, every month.",
  },
  {
    icon: Code2,
    tone: "dark",
    title: "Developer-Friendly API",
    description:
      "A RESTful API delivers pages to WordPress, Webflow, Next.js, or your custom stack. Simple webhook integration.",
  },
  {
    icon: Link2,
    tone: "teal",
    title: "Smart Internal Linking",
    description:
      "Reads your sitemap and automatically interlinks new content with your existing pages.",
  },
  {
    icon: Palette,
    tone: "coral",
    title: "Brand Voice Matching",
    description:
      "Auto-extracts your brand identity, visual style, and voice straight from your domain.",
  },
  {
    icon: Users,
    tone: "yellow",
    title: "Author Profiles",
    description:
      "Add up to 8 authors with bios and social links for E-E-A-T ranking signals.",
  },
  {
    icon: Globe,
    tone: "dark",
    title: "Multi-country Targeting",
    description:
      "Target any country with language and locale configuration per project.",
  },
];
