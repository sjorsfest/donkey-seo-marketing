import type { IcpConfig } from "./types";

export const developerToolsConfig: IcpConfig = {
  slug: "developer-tools",
  name: "Developer Tools",

  seo: {
    title: "Donkey SEO for Developer Tools, Automated SEO Pages",
    description:
      "Turn developer questions into organic traffic automatically. Donkey SEO builds comparison pages, tutorials, and integration guides for devtool companies.",
  },

  hero: {
    badge: "Built for Devtools",
    headline: "Turn developer questions into traffic automatically",
    highlightedText: "traffic",
    subheadline:
      "Developers search Google before they search Product Hunt. Donkey SEO builds the content that captures those queries, comparisons, integration guides, tutorials, all on autopilot.",
  },

  painPoints: [
    {
      emoji: "👨‍💻",
      title: "Engineers, not marketers",
      description:
        "Your team ships great tools but nobody knows how to write SEO content that ranks for developer queries.",
    },
    {
      emoji: "📚",
      title: "Docs aren't enough",
      description:
        "Documentation is essential but doesn't rank for commercial queries like comparisons and alternatives.",
    },
    {
      emoji: "🔍",
      title: "Developers Google everything",
      description:
        "Your ideal users search 'best API for X' and 'tool A vs tool B', but your competitors own those results.",
    },
    {
      emoji: "⏰",
      title: "Content is a full-time job",
      description:
        "Writing technical SEO content that developers respect takes 10-20 hours per article. You don't have that bandwidth.",
    },
  ],

  solutions: [
    {
      emoji: "🔌",
      title: "Integration & comparison content",
      description:
        "Automatically create pages for every integration, comparison, and use case, the content developers actually search for.",
    },
    {
      emoji: "🤖",
      title: "Technical voice matching",
      description:
        "Donkey reads your docs and existing content to write in a voice developers trust, no marketing fluff.",
    },
    {
      emoji: "📈",
      title: "Compounding organic growth",
      description:
        "Every page builds topical authority. The more pages Donkey ships, the faster your entire site ranks.",
    },
  ],

  useCases: [
    {
      emoji: "⚔️",
      name: "Tool comparisons",
      description: "YourSDK vs Competitor, capture devs evaluating tools",
      color: "bg-orange-50 border-orange-300",
    },
    {
      emoji: "🔌",
      name: "Integration guides",
      description: "YourTool + Next.js / Rails / Django, rank for stack queries",
      color: "bg-blue-50 border-blue-300",
    },
    {
      emoji: "📖",
      name: "Tutorial content",
      description: "How to build X with YourTool, attract developers solving problems",
      color: "bg-green-50 border-green-300",
    },
    {
      emoji: "🔄",
      name: "Alternatives pages",
      description: "Alternatives to Competitor, redirect evaluators to your tool",
      color: "bg-rose-50 border-rose-300",
    },
    {
      emoji: "🧩",
      name: "Use case pages",
      description: "YourTool for auth / payments / analytics, target vertical searches",
      color: "bg-amber-50 border-amber-300",
    },
    {
      emoji: "📊",
      name: "Benchmark content",
      description: "Performance benchmarks and stats that developers share",
      color: "bg-purple-50 border-purple-300",
    },
  ],

  faq: {
    strategy: "prepend",
    items: [
      {
        question: "Will the content be technical enough for developers?",
        answer:
          "Donkey extracts your technical voice from your existing site and docs. The content matches your audience's technical level. You can always review and edit before publishing.",
      },
      {
        question: "Can Donkey create content for specific frameworks or languages?",
        answer:
          "Yes. Donkey discovers keywords specific to your technology ecosystem. If developers search for 'YourTool + React' or 'YourAPI for Python', Donkey will find and create content for those queries.",
      },
    ],
  },

  finalCta: {
    badge: "Built for devtools",
    headline: "Let developers find your tool on Google",
    subheadline:
      "Join developer tool companies that automated their content SEO and focused on building great tools.",
    socialProof: "Trusted by developer tool companies worldwide",
  },
};
