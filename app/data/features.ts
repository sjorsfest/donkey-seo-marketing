export const features = [
  {
    icon: "🔍",
    title: "Discovery Pipeline",
    description:
      "7-step AI research engine that runs iteratively to find the best content opportunities for your domain.",
  },
  {
    icon: "✍️",
    title: "Content Creation",
    description:
      "Briefs and full publish-ready articles generated automatically in your brand voice.",
  },
  {
    icon: "📅",
    title: "Publishing Calendar",
    description:
      "Visual timeline showing every piece of content, every status, every month.",
  },
  {
    icon: "🔌",
    title: "CMS Integration API",
    description:
      "Articles delivered to your CMS automatically. WordPress, Webflow, Next.js, or custom stack.",
  },
  {
    icon: "🔗",
    title: "Smart Internal Linking",
    description:
      "Reads your sitemap and automatically interlinks new content with existing pages.",
  },
  {
    icon: "🎨",
    title: "Brand Voice Matching",
    description:
      "Auto-extracts your brand identity, visual style, and voice from your domain.",
  },
  {
    icon: "👤",
    title: "Author Profiles",
    description:
      "Add up to 8 authors with bios and social links for E-E-A-T ranking signals.",
  },
  {
    icon: "🌍",
    title: "Multi-country Targeting",
    description:
      "Target any country with language and locale configuration per project.",
  },
];

export type Feature = (typeof features)[number];
