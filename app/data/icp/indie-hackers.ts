import type { IcpConfig } from "./types";

export const indieHackersConfig: IcpConfig = {
  slug: "indie-hackers",
  name: "Indie Hackers",

  seo: {
    title: "Donkey SEO for Indie Hackers, Automated SEO Pages",
    description:
      "Ship SEO pages on autopilot while you build your product. Donkey SEO handles keyword research, content creation, and CMS delivery for indie hackers.",
  },

  hero: {
    badge: "Built for Indie Hackers",
    headline: "SEO pages that ship while you ship product",
    highlightedText: "SEO pages",
    subheadline:
      "You're a one-person team. You can't spend 10 hours per article on keyword research, writing, and publishing. Donkey SEO automates your entire SEO pipeline so you can focus on building.",
  },

  painPoints: [
    {
      emoji: "😩",
      title: "No time for content",
      description:
        "You're building features, fixing bugs, and talking to users. Writing SEO content is always last on the list.",
    },
    {
      emoji: "💸",
      title: "Can't afford an agency",
      description:
        "SEO agencies charge $3-10K/month. Your MRR is still in the hundreds.",
    },
    {
      emoji: "🎯",
      title: "No SEO expertise",
      description:
        "Keyword research, search intent, internal linking, E-E-A-T... you're an engineer, not an SEO specialist.",
    },
    {
      emoji: "📉",
      title: "Zero organic traffic",
      description:
        "Your product is great, but nobody finds it on Google. All your traffic comes from launches that fade in days.",
    },
  ],

  solutions: [
    {
      emoji: "🤖",
      title: "Fully automated pipeline",
      description:
        "From keyword discovery to published pages. Set it up once and forget about it.",
    },
    {
      emoji: "💰",
      title: "Indie-friendly pricing",
      description:
        "Start free with 3 SEO pages. Scale to a paid plan only when you see results. No agency contracts.",
    },
    {
      emoji: "🎨",
      title: "Your brand voice, automatically",
      description:
        "Donkey reads your site and writes content that sounds like you, not a generic AI.",
    },
  ],

  useCases: [
    {
      emoji: "⚔️",
      name: "Competitor comparisons",
      description: "YourApp vs Competitor, capture buyers comparing tools",
      color: "bg-orange-50 border-orange-300",
    },
    {
      emoji: "🏆",
      name: "Best-of lists",
      description: "Best tools for X, rank for high-intent discovery queries",
      color: "bg-yellow-50 border-yellow-300",
    },
    {
      emoji: "🔄",
      name: "Alternatives pages",
      description: "Alternatives to Competitor, steal competitor traffic",
      color: "bg-rose-50 border-rose-300",
    },
    {
      emoji: "🧩",
      name: "Use case pages",
      description: "How to use YourApp for X, show value per niche",
      color: "bg-amber-50 border-amber-300",
    },
    {
      emoji: "📖",
      name: "Guides & tutorials",
      description: "How to solve X, build topical authority in your space",
      color: "bg-blue-50 border-blue-300",
    },
    {
      emoji: "📊",
      name: "Statistics roundups",
      description: "X statistics in 2025, earn backlinks and traffic",
      color: "bg-purple-50 border-purple-300",
    },
  ],

  faq: {
    strategy: "prepend",
    items: [
      {
        question: "Is Donkey SEO actually useful for solo founders?",
        answer:
          "Absolutely. Donkey SEO was built specifically for founders who can't hire an SEO team. The entire pipeline runs on autopilot, keyword discovery, content creation, internal linking, and CMS delivery, so you can focus on product and revenue.",
      },
      {
        question: "I'm not technical. Can I still use Donkey SEO?",
        answer:
          "Yes. Basic setup takes 5 minutes: just enter your domain. CMS integration is optional and requires minimal technical knowledge. You can also use the dashboard to review and publish content manually.",
      },
    ],
  },

  finalCta: {
    badge: "Built for builders",
    headline: "Stop choosing between product and SEO",
    subheadline:
      "Join indie hackers who ship SEO pages on autopilot while building what matters. Start free with 3 SEO pages.",
    socialProof: "Trusted by indie hackers and solo founders worldwide",
  },
};
