export const pricingPlans = [
  {
    name: "Free",
    price: { monthly: 0, yearly: 0 },
    description: "Try Donkey SEO risk-free",
    features: [
      "5 articles (lifetime)",
      "1 project (domain)",
      "Full access to discovery",
      "Publishing calendar",
      "CMS integration API",
    ],
    cta: "Start free",
    highlighted: false,
  },
  {
    name: "Starter",
    price: { monthly: 49, yearly: 450 },
    description: "For solo founders & indie builders",
    features: [
      "30 articles / month",
      "1 project (domain)",
      "Automated keyword research",
      "Brand voice matching",
      "CMS integration",
      "Smart internal linking",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: { monthly: 149, yearly: 1400 },
    description: "For small teams",
    features: [
      "100 articles / month",
      "3 projects (domains)",
      "Everything in Starter",
      "Multi-project switching",
      "Priority support",
    ],
    cta: "Start growing",
    highlighted: true, // Most popular
    badge: "Most Popular",
  },
  {
    name: "Agency",
    price: { monthly: 399, yearly: 3750 },
    description: "For agencies",
    features: [
      "350 articles / month",
      "10 projects (domains)",
      "Everything in Growth",
      "White-label options (coming soon)",
      "Dedicated support",
    ],
    cta: "Scale your agency",
    highlighted: false,
  },
];

export type PricingPlan = (typeof pricingPlans)[number];
