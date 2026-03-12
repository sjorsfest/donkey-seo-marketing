import type { IcpConfig } from "./types";

export const aiStartupsConfig: IcpConfig = {
  slug: "ai-startups",
  name: "AI Startups",

  seo: {
    title: "Donkey SEO for AI Startups, Automated SEO Growth",
    description:
      "Ship your AI product, we'll ship the SEO. Automated keyword discovery, content creation, and publishing for AI startups that need distribution fast.",
  },

  hero: {
    badge: "Built for AI Startups",
    headline: "Ship your AI product. We'll ship the SEO.",
    highlightedText: "SEO",
    subheadline:
      "The AI market is crowded. You need distribution, not another task on your plate. Donkey SEO builds your organic acquisition engine on autopilot while you focus on product-market fit.",
  },

  painPoints: [
    {
      emoji: "🏎️",
      title: "Fast product cycles, no time for content",
      description:
        "You're shipping model updates, building integrations, and iterating on UX. SEO content never makes the sprint.",
    },
    {
      emoji: "🌊",
      title: "Crowded market",
      description:
        "New AI tools launch daily. Without organic presence, you're invisible between launches.",
    },
    {
      emoji: "👥",
      title: "No marketing team",
      description:
        "Your team is 2-5 engineers. Hiring a content marketer isn't in the budget yet.",
    },
    {
      emoji: "💸",
      title: "Paid ads burn cash",
      description:
        "CAC on paid channels keeps climbing. You need a compounding organic channel that doesn't drain runway.",
    },
  ],

  solutions: [
    {
      emoji: "🚀",
      title: "Distribution infrastructure",
      description:
        "Think of Donkey SEO as your growth infrastructure. Set it up once and it continuously builds your organic footprint.",
    },
    {
      emoji: "🎯",
      title: "AI-specific content strategy",
      description:
        "Comparison pages, use case guides, and alternatives content that captures buyers already evaluating AI tools.",
    },
    {
      emoji: "⚡",
      title: "Launch to traffic in days",
      description:
        "Don't wait months for SEO results. Start shipping targeted pages immediately after setup.",
    },
  ],

  useCases: [
    {
      emoji: "⚔️",
      name: "AI tool comparisons",
      description: "YourAI vs ChatGPT, capture buyers comparing solutions",
      color: "bg-orange-50 border-orange-300",
    },
    {
      emoji: "🔄",
      name: "Alternatives pages",
      description: "Alternatives to Competitor, redirect competitor traffic",
      color: "bg-rose-50 border-rose-300",
    },
    {
      emoji: "🧩",
      name: "Use case pages",
      description: "AI for sales / legal / support, target vertical searches",
      color: "bg-amber-50 border-amber-300",
    },
    {
      emoji: "🔌",
      name: "Integration pages",
      description: "YourAI + Slack / Notion / HubSpot, rank for integration queries",
      color: "bg-blue-50 border-blue-300",
    },
    {
      emoji: "📖",
      name: "How-to guides",
      description: "How to automate X with AI, build topical authority",
      color: "bg-green-50 border-green-300",
    },
    {
      emoji: "🏆",
      name: "Best-of lists",
      description: "Best AI tools for X, capture high-intent discovery traffic",
      color: "bg-yellow-50 border-yellow-300",
    },
  ],

  faq: {
    strategy: "prepend",
    items: [
      {
        question: "Can Donkey SEO keep up with how fast AI moves?",
        answer:
          "Yes. Donkey runs keyword discovery continuously, so it adapts to new trends and competitors in your space. As new search queries emerge around AI, Donkey discovers and creates content for them automatically.",
      },
      {
        question: "Will the content sound technical enough for AI buyers?",
        answer:
          "Donkey extracts your brand voice and technical level from your existing site. If your audience is technical, the content will match. You can also review and edit before publishing.",
      },
    ],
  },

  finalCta: {
    badge: "Ship SEO on autopilot",
    headline: "Your AI product deserves organic distribution",
    subheadline:
      "Join AI startups that automated their SEO pipeline and focused on what matters, building great products.",
    socialProof: "Trusted by AI startups building the future",
  },
};
