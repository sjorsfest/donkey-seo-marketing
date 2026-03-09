export const faqItems = [
  {
    question: "What do I get with the free plan?",
    answer:
      "3 publish-ready articles (lifetime free). Full access to discovery, content creation, and calendar. No credit card required. Perfect for testing the quality before committing.",
  },
  {
    question: "How does Donkey SEO write articles?",
    answer:
      "Our AI pipeline analyzes your brand, discovers high-opportunity keywords, generates detailed content briefs, and then writes full articles in your brand voice. You review and publish.",
  },
  {
    question: "Can I integrate with my CMS?",
    answer:
      "Yes! Donkey SEO provides a RESTful API with secure, project-scoped API keys. Fetch articles programmatically and push them to WordPress, Webflow, Next.js, or any headless CMS.",
  },
  {
    question: "How many projects can I manage?",
    answer:
      "Starter: 1 project. Growth: 3 projects. Agency: 10 projects. Each project represents a different domain or website.",
  },
  {
    question: 'What does "hands-off" really mean?',
    answer:
      "You set up your project once: domain, strategy, target country. From there, Donkey SEO runs keyword discovery, generates articles, and delivers them to your CMS automatically via API. You only step in to review what you want. No ongoing management required.",
  },
  {
    question: "How much time does this save me?",
    answer:
      "Manual SEO content takes 5-10 hours per article (research, outlining, writing, editing). Donkey automates all of it. Solo founders save 20-40 hours per week that they can spend building product, talking to customers, or growing revenue.",
  },
  {
    question: "How technical is the setup?",
    answer:
      "Initial setup takes 5 minutes (just add your domain and pick your strategy). CMS integration is optional — if you want automated delivery, you'll need light API/webhook knowledge or a developer to connect it once. After that, it runs on autopilot.",
  },
  {
    question: "Can I target different countries?",
    answer:
      "Absolutely. Each project can target a specific country and locale. The AI adapts keyword research and content to regional search behavior.",
  },
  {
    question: "Does Donkey SEO add internal links to my articles?",
    answer:
      "Yes! Donkey SEO reads your existing sitemap and automatically adds contextual internal links from new articles to relevant pages on your site. It strengthens your topical authority and site architecture (without you lifting a finger).",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. No contracts, no sneaky fees. Cancel from the billing dashboard whenever you want.",
  },
];

export type FAQItem = (typeof faqItems)[number];
