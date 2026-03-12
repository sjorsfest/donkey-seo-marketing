import type { IcpConfig } from "./types";

export const microSaasConfig: IcpConfig = {
  slug: "micro-saas",
  name: "Micro SaaS",

  seo: {
    title: "Donkey SEO for Micro SaaS, Automated SEO Growth",
    description:
      "Turn your micro-SaaS into a search magnet. Automated keyword discovery, content creation, and publishing built for tiny teams with big growth ambitions.",
  },

  hero: {
    badge: "Built for Micro SaaS",
    headline: "Turn your micro-SaaS into a search magnet",
    highlightedText: "search magnet",
    subheadline:
      "Tiny team, limited budget, big growth goals. Donkey SEO automates your entire organic acquisition pipeline so you can grow without hiring a content team.",
  },

  painPoints: [
    {
      emoji: "🧑",
      title: "Team of one (or two)",
      description:
        "You're the founder, developer, support agent, and marketer. There's no bandwidth for SEO content.",
    },
    {
      emoji: "💰",
      title: "Bootstrapped budget",
      description:
        "Every dollar counts. Agencies and freelance writers are too expensive for your current revenue.",
    },
    {
      emoji: "🌱",
      title: "Need organic growth",
      description:
        "Paid ads aren't sustainable on a bootstrapped budget. You need a channel that compounds over time.",
    },
    {
      emoji: "🎯",
      title: "Narrow niche, hard to find keywords",
      description:
        "Your product solves a specific problem. Finding the right long-tail keywords is time-consuming and requires SEO expertise.",
    },
  ],

  solutions: [
    {
      emoji: "🤖",
      title: "Zero-effort content machine",
      description:
        "Donkey finds keywords, writes pages, adds internal links, and delivers to your CMS. You don't lift a finger.",
    },
    {
      emoji: "🎯",
      title: "Long-tail keyword discovery",
      description:
        "Donkey's AI finds the niche-specific long-tail queries your ideal customers are searching for.",
    },
    {
      emoji: "💸",
      title: "Starts free, scales with you",
      description:
        "3 free SEO pages to start. Upgrade when organic traffic proves ROI. No contracts.",
    },
  ],

  useCases: [
    {
      emoji: "⚔️",
      name: "Competitor comparisons",
      description: "YourTool vs BigCorp, win on specificity and focus",
      color: "bg-orange-50 border-orange-300",
    },
    {
      emoji: "🧩",
      name: "Use case pages",
      description: "YourTool for X, show exactly how you solve niche problems",
      color: "bg-amber-50 border-amber-300",
    },
    {
      emoji: "📖",
      name: "Problem-solution guides",
      description: "How to solve X, attract users before they know your product exists",
      color: "bg-blue-50 border-blue-300",
    },
    {
      emoji: "🔄",
      name: "Alternatives pages",
      description: "Alternatives to BigCorp, capture users outgrowing larger tools",
      color: "bg-rose-50 border-rose-300",
    },
    {
      emoji: "✅",
      name: "Checklists & templates",
      description: "X checklist for Y, evergreen content that drives consistent traffic",
      color: "bg-green-50 border-green-300",
    },
    {
      emoji: "🏆",
      name: "Best-of roundups",
      description: "Best tools for X, position your product among the top options",
      color: "bg-yellow-50 border-yellow-300",
    },
  ],

  faq: {
    strategy: "prepend",
    items: [
      {
        question: "Is Donkey SEO affordable for a bootstrapped micro-SaaS?",
        answer:
          "Absolutely. Start with 3 free SEO pages (lifetime free, no credit card). Paid plans start at just $49/month. Most micro-SaaS founders see ROI within the first month.",
      },
      {
        question: "Can Donkey handle very niche topics?",
        answer:
          "Yes. Donkey's keyword discovery is designed to find long-tail, niche-specific queries. The more specific your product, the better Donkey targets keywords with low competition and high buyer intent.",
      },
    ],
  },

  finalCta: {
    badge: "Grow on autopilot",
    headline: "Big organic growth, tiny team",
    subheadline:
      "Join micro-SaaS founders who automated their SEO and focused on building profitable products.",
    socialProof: "Trusted by bootstrapped founders everywhere",
  },
};
