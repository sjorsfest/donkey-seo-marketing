import type { IcpConfig } from "./types";

export const startupFoundersConfig: IcpConfig = {
  slug: "startup-founders",
  name: "Startup Founders",

  seo: {
    title: "Donkey SEO for Startup Founders, Automated SEO Pipeline",
    description:
      "Your first SEO hire can be a robot. Automated keyword discovery, content creation, and CMS delivery for startup founders who don't want to hire marketers.",
  },

  hero: {
    badge: "Built for Startup Founders",
    headline: "Your first SEO hire can be a robot",
    highlightedText: "SEO hire",
    subheadline:
      "You've got product-market fit (or you're close). Now you need organic traffic. Donkey SEO automates your entire content SEO pipeline, from keyword research to published pages, so you can grow without hiring a marketing team.",
  },

  painPoints: [
    {
      emoji: "💼",
      title: "Too early to hire a marketer",
      description:
        "Your runway is precious. A content marketer costs $80-120K/year. You need results before you can justify that spend.",
    },
    {
      emoji: "🏢",
      title: "Agencies are expensive and slow",
      description:
        "SEO agencies charge $3-10K/month with 3-6 month contracts. Results take even longer. You can't wait that long.",
    },
    {
      emoji: "📊",
      title: "Unclear SEO ROI",
      description:
        "You know SEO matters, but the time-to-value feels too long. You need a way to start without a huge upfront investment.",
    },
    {
      emoji: "🎯",
      title: "Wearing too many hats",
      description:
        "You're already doing sales, product, ops, and support. Adding 'content strategist' to the list isn't realistic.",
    },
  ],

  solutions: [
    {
      emoji: "🤖",
      title: "Automated SEO pipeline",
      description:
        "Set it up once. Donkey continuously discovers keywords, creates content, and delivers to your CMS. No ongoing management.",
    },
    {
      emoji: "💰",
      title: "Fraction of the cost",
      description:
        "Donkey replaces $5K+/month in agency or freelancer costs. Start free and scale when you see results.",
    },
    {
      emoji: "⚡",
      title: "Fast time to content",
      description:
        "Go from zero SEO content to dozens of published pages in weeks, not months. Start building organic traffic immediately.",
    },
  ],

  useCases: [
    {
      emoji: "⚔️",
      name: "Competitor comparisons",
      description: "YourProduct vs Competitor, capture buyers evaluating solutions",
      color: "bg-orange-50 border-orange-300",
    },
    {
      emoji: "🧩",
      name: "Use case pages",
      description: "YourProduct for X industry, target vertical organic searches",
      color: "bg-amber-50 border-amber-300",
    },
    {
      emoji: "📖",
      name: "Problem-solution guides",
      description: "How to solve X, attract users searching for solutions you provide",
      color: "bg-blue-50 border-blue-300",
    },
    {
      emoji: "🔄",
      name: "Alternatives pages",
      description: "Alternatives to Incumbent, steal competitor organic traffic",
      color: "bg-rose-50 border-rose-300",
    },
    {
      emoji: "🏆",
      name: "Best-of roundups",
      description: "Best tools for X, get featured in high-traffic list queries",
      color: "bg-yellow-50 border-yellow-300",
    },
    {
      emoji: "📊",
      name: "Industry statistics",
      description: "X industry stats, earn backlinks and establish authority",
      color: "bg-purple-50 border-purple-300",
    },
  ],

  faq: {
    strategy: "prepend",
    items: [
      {
        question: "How fast will I see results?",
        answer:
          "Donkey starts producing content within days of setup. SEO traffic typically starts building within 4-8 weeks as pages get indexed. The key advantage is that you're producing content at scale from day one, while an agency would still be onboarding.",
      },
      {
        question: "Can I use Donkey SEO before I have product-market fit?",
        answer:
          "Yes. Many founders use Donkey SEO to validate demand by targeting high-intent keywords before the product is fully built. The free plan (3 lifetime pages) is a great way to test this approach with zero risk.",
      },
    ],
  },

  finalCta: {
    badge: "Grow on autopilot",
    headline: "Stop choosing between building and marketing",
    subheadline:
      "Join startup founders who automated their SEO pipeline and focused on building products customers love.",
    socialProof: "Trusted by early-stage startup founders worldwide",
  },
};
