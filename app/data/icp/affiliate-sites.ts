import type { IcpConfig } from "./types";

export const affiliateSitesConfig: IcpConfig = {
  slug: "affiliate-sites",
  name: "Affiliate Site Builders",

  seo: {
    title: "Donkey SEO for Affiliate Sites, Automated SEO Content",
    description:
      "Build traffic machines without writing content. Automated keyword discovery, content creation, and internal linking for affiliate site builders.",
  },

  hero: {
    badge: "Built for Affiliate Sites",
    headline: "Build traffic machines without writing content",
    highlightedText: "traffic machines",
    subheadline:
      "Affiliate sites live and die by organic traffic. Donkey SEO automates keyword discovery, content creation, and internal linking, so you can scale sites without scaling writing costs.",
  },

  painPoints: [
    {
      emoji: "✍️",
      title: "Content is your biggest bottleneck",
      description:
        "You know which keywords to target, but producing 50-100 quality articles per site is expensive and slow.",
    },
    {
      emoji: "💸",
      title: "Writer costs eat margins",
      description:
        "Good writers charge $100-500 per article. At scale, content production costs more than the affiliate revenue.",
    },
    {
      emoji: "🔗",
      title: "Internal linking is a nightmare",
      description:
        "With hundreds of pages, maintaining a proper internal link structure is a full-time job.",
    },
    {
      emoji: "📈",
      title: "Need volume to rank",
      description:
        "Topical authority requires breadth. You need dozens of supporting pages around each pillar topic.",
    },
  ],

  solutions: [
    {
      emoji: "🏭",
      title: "Content at scale",
      description:
        "Donkey produces SEO pages at a fraction of the cost of freelance writers. Scale from 10 to 100+ pages per month.",
    },
    {
      emoji: "🔗",
      title: "Automatic internal linking",
      description:
        "Donkey reads your sitemap and creates a connected content network. Every new page strengthens the rest.",
    },
    {
      emoji: "🎯",
      title: "Intent-matched content",
      description:
        "Comparison pages, best-of lists, reviews, guides, Donkey picks the right format for each keyword's search intent.",
    },
  ],

  useCases: [
    {
      emoji: "🏆",
      name: "Best-of roundups",
      description: "Best X for Y, high-intent pages that convert to affiliate clicks",
      color: "bg-yellow-50 border-yellow-300",
    },
    {
      emoji: "⚔️",
      name: "Product comparisons",
      description: "Product A vs Product B, capture buyers in the decision phase",
      color: "bg-orange-50 border-orange-300",
    },
    {
      emoji: "🔄",
      name: "Alternatives pages",
      description: "Alternatives to X, redirect searchers to affiliate offers",
      color: "bg-rose-50 border-rose-300",
    },
    {
      emoji: "📖",
      name: "Buyer guides",
      description: "How to choose the best X, build trust and drive conversions",
      color: "bg-blue-50 border-blue-300",
    },
    {
      emoji: "📊",
      name: "Statistics & data pages",
      description: "X statistics in 2025, earn backlinks and build authority",
      color: "bg-purple-50 border-purple-300",
    },
    {
      emoji: "✅",
      name: "Review pages",
      description: "X review, detailed product reviews that rank and convert",
      color: "bg-green-50 border-green-300",
    },
  ],

  faq: {
    strategy: "prepend",
    items: [
      {
        question: "Can Donkey SEO handle multiple affiliate sites?",
        answer:
          "Yes. The Growth plan supports 3 projects and the Agency plan supports 10. Each project gets its own keyword discovery, brand voice, and content pipeline.",
      },
      {
        question: "Will the content pass Google's helpful content guidelines?",
        answer:
          "Donkey creates intent-matched, structured content with proper E-E-A-T signals. Every page is purpose-built for a specific search query, not generic filler content.",
      },
    ],
  },

  finalCta: {
    badge: "Scale your sites",
    headline: "More pages, more traffic, less work",
    subheadline:
      "Join affiliate site builders who automated their content pipeline and scaled organic traffic without scaling costs.",
    socialProof: "Trusted by affiliate marketers and niche site builders",
  },
};
