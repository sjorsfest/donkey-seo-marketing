export const discoverySteps = [
  {
    step: "Seeds",
    title: "Initial seed keywords",
    description: "Generates starting keywords from your domain & niche",
  },
  {
    step: "Expansion",
    title: "Keyword universe",
    description: "Expands seeds into comprehensive keyword opportunities",
  },
  {
    step: "Metrics",
    title: "Search metrics",
    description: "Enriches with search volume, difficulty & traffic potential",
  },
  {
    step: "Intent",
    title: "Search intent",
    description:
      "Classifies intent (informational, commercial, transactional)",
  },
  {
    step: "Clustering",
    title: "Topic clusters",
    description: "Groups keywords into topic clusters for topical authority",
  },
  {
    step: "Prioritization",
    title: "Opportunity ranking",
    description: "Ranks topics by opportunity score and competition level",
  },
  {
    step: "SERP",
    title: "SERP analysis",
    description: "Finds content gaps & low-competition angles",
  },
];

export type DiscoveryStep = (typeof discoverySteps)[number];
