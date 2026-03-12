import type { IcpConfig } from "./types";

export const nocodeBuildersConfig: IcpConfig = {
  slug: "nocode-builders",
  name: "No-Code Builders",

  seo: {
    title: "Donkey SEO for No-Code Builders, Automated SEO Pages",
    description:
      "Build without code. Grow without marketers. Automated SEO pages for products built on Bubble, Webflow, Framer, and other no-code platforms.",
  },

  hero: {
    badge: "Built for No-Code Builders",
    headline: "Build without code. Grow without marketers.",
    highlightedText: "Grow",
    subheadline:
      "You built your product without writing a line of code. Now grow your traffic the same way. Donkey SEO automates keyword discovery, content creation, and publishing for no-code products.",
  },

  painPoints: [
    {
      emoji: "🚫",
      title: "Non-technical, so SEO feels impossible",
      description:
        "You mastered no-code tools, but SEO jargon like canonical tags, schema markup, and topical authority feels like another language.",
    },
    {
      emoji: "✍️",
      title: "Writing content takes forever",
      description:
        "You're a builder, not a writer. Creating SEO-optimized content is slow, painful, and never feels good enough.",
    },
    {
      emoji: "📉",
      title: "Relying on communities alone",
      description:
        "Product Hunt, Twitter, and Indie Hackers communities bring spikes, but traffic always drops back down.",
    },
    {
      emoji: "💸",
      title: "Limited marketing budget",
      description:
        "Most of your budget goes to no-code platform subscriptions. There's nothing left for agencies or freelancers.",
    },
  ],

  solutions: [
    {
      emoji: "🪄",
      title: "No-code SEO",
      description:
        "Just enter your domain. Donkey handles everything, no technical knowledge required. It's the Webflow of SEO.",
    },
    {
      emoji: "📝",
      title: "Content on autopilot",
      description:
        "Donkey writes and structures SEO pages in your brand voice. No writing skills needed.",
    },
    {
      emoji: "📈",
      title: "Compounding traffic",
      description:
        "Unlike social media spikes, organic search traffic compounds over time. Every page Donkey creates builds on the last.",
    },
  ],

  useCases: [
    {
      emoji: "🏆",
      name: "Best-of lists",
      description: "Best no-code tools for X, capture builders searching for solutions",
      color: "bg-yellow-50 border-yellow-300",
    },
    {
      emoji: "📖",
      name: "How-to guides",
      description: "How to build X without code, attract your ideal users",
      color: "bg-blue-50 border-blue-300",
    },
    {
      emoji: "⚔️",
      name: "Tool comparisons",
      description: "Bubble vs Webflow vs YourTool, rank for evaluation queries",
      color: "bg-orange-50 border-orange-300",
    },
    {
      emoji: "🧩",
      name: "Template & use case pages",
      description: "No-code CRM / marketplace / dashboard, show what's possible",
      color: "bg-amber-50 border-amber-300",
    },
    {
      emoji: "🔄",
      name: "Alternatives pages",
      description: "Alternatives to Competitor, attract users switching tools",
      color: "bg-rose-50 border-rose-300",
    },
    {
      emoji: "📊",
      name: "Industry pages",
      description: "No-code for real estate / healthcare / education, target verticals",
      color: "bg-purple-50 border-purple-300",
    },
  ],

  faq: {
    strategy: "prepend",
    items: [
      {
        question: "Do I need any technical skills to use Donkey SEO?",
        answer:
          "Not at all. If you can use Bubble or Webflow, you can use Donkey SEO. Enter your domain, set your strategy, and Donkey handles everything else. CMS integration is optional.",
      },
      {
        question: "Does Donkey SEO work with no-code platforms like Webflow?",
        answer:
          "Yes. Donkey delivers content via API or webhook. Many no-code builders use Webflow's CMS API, Make/Zapier integrations, or simply copy content from the Donkey dashboard into their platform.",
      },
    ],
  },

  finalCta: {
    badge: "No-code growth",
    headline: "You built without code. Now grow without limits.",
    subheadline:
      "Join no-code builders who automated their SEO and focused on building great products.",
    socialProof: "Trusted by no-code builders on Bubble, Webflow, Framer, and more",
  },
};
