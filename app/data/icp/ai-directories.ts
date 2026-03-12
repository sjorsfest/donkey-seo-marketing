import type { IcpConfig } from "./types";

export const aiDirectoriesConfig: IcpConfig = {
  slug: "ai-directories",
  name: "AI Directory Builders",

  seo: {
    title: "Donkey SEO for AI Directories, Programmatic SEO Pages",
    description:
      "Turn every AI tool listing into a traffic magnet. Automated keyword discovery and SEO page creation for AI directories and tool aggregators.",
  },

  hero: {
    badge: "Built for AI Directories",
    headline: "Turn every listing into a traffic magnet",
    highlightedText: "traffic magnet",
    subheadline:
      "AI directories live on organic search. Donkey SEO automates the creation of comparison pages, category guides, and tool roundups, the content that drives directory traffic.",
  },

  painPoints: [
    {
      emoji: "📦",
      title: "Hundreds of tools, no supporting content",
      description:
        "You have listings for 500+ AI tools but no comparison pages, guides, or category content to rank for valuable queries.",
    },
    {
      emoji: "🏗️",
      title: "Programmatic pages aren't enough",
      description:
        "Auto-generated listing pages are thin content. Google wants depth, context, and editorial value.",
    },
    {
      emoji: "⚔️",
      title: "Competing with big directories",
      description:
        "G2, Capterra, and Product Hunt own the top results. You need targeted, niche content to compete.",
    },
    {
      emoji: "⏰",
      title: "Can't write at scale",
      description:
        "Writing a unique comparison or guide for every tool category would take months of full-time work.",
    },
  ],

  solutions: [
    {
      emoji: "📄",
      title: "Automated comparison content",
      description:
        "Donkey generates comparison pages, best-of lists, and category guides that complement your listings.",
    },
    {
      emoji: "🔗",
      title: "Internal link architecture",
      description:
        "New content pages link to your tool listings, boosting their authority and creating a connected content network.",
    },
    {
      emoji: "🎯",
      title: "Category & niche targeting",
      description:
        "Donkey discovers high-value keywords in every AI category, from writing tools to code assistants to image generators.",
    },
  ],

  useCases: [
    {
      emoji: "🏆",
      name: "Category roundups",
      description: "Best AI writing tools, drive traffic to your listings",
      color: "bg-yellow-50 border-yellow-300",
    },
    {
      emoji: "⚔️",
      name: "Tool comparisons",
      description: "ChatGPT vs Claude vs Gemini, capture evaluation traffic",
      color: "bg-orange-50 border-orange-300",
    },
    {
      emoji: "📖",
      name: "Category guides",
      description: "AI image generators explained, build topical authority",
      color: "bg-blue-50 border-blue-300",
    },
    {
      emoji: "🔄",
      name: "Alternatives pages",
      description: "Free alternatives to X, capture budget-conscious searchers",
      color: "bg-rose-50 border-rose-300",
    },
    {
      emoji: "📊",
      name: "AI industry stats",
      description: "AI adoption statistics, earn backlinks and credibility",
      color: "bg-purple-50 border-purple-300",
    },
    {
      emoji: "🧩",
      name: "Use case pages",
      description: "AI tools for marketing / HR / dev, target vertical searches",
      color: "bg-amber-50 border-amber-300",
    },
  ],

  faq: {
    strategy: "prepend",
    items: [
      {
        question: "Can Donkey SEO complement my existing programmatic pages?",
        answer:
          "Absolutely. Donkey creates editorial-quality content (comparisons, guides, roundups) that links to your programmatic listing pages. This gives Google the depth signals it needs while boosting your listings' authority.",
      },
      {
        question: "Can I scale to hundreds of content pages?",
        answer:
          "Yes. The Agency plan supports 350 pages per month across 10 projects. Donkey is built for content-heavy sites that need volume.",
      },
    ],
  },

  finalCta: {
    badge: "Scale your directory",
    headline: "Every AI tool listing deserves organic traffic",
    subheadline:
      "Join AI directory builders who automated their content SEO and turned listings into traffic machines.",
    socialProof: "Trusted by AI directory and aggregator builders",
  },
};
