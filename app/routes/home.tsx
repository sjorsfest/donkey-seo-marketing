import type { Route } from "./+types/home";
import { Navbar } from "~/components/layout/navbar";
import { Footer } from "~/components/layout/footer";
import { Hero } from "~/components/sections/hero";
import { HowItWorks } from "~/components/sections/how-it-works";
import { DiscoveryPipeline } from "~/components/sections/discovery-pipeline";
import { SmartLinking } from "~/components/sections/smart-linking";
import { Features } from "~/components/sections/features";
import { Pricing } from "~/components/sections/pricing";
import { FAQ } from "~/components/sections/faq";
import { FinalCTA } from "~/components/sections/final-cta";

const SITE_URL = "https://www.donkeyseo.com";
const SOCIAL_IMAGE_URL = `${SITE_URL}/og/og-image.png?v=1`;

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Donkey SEO — AI-Powered SEO Content Pipeline" },
    {
      name: "description",
      content:
        "Automate your SEO content from keyword research to published articles. Donkey SEO discovers opportunities, writes in your brand voice, and delivers to your CMS — hands-off.",
    },
    { tagName: "link", rel: "canonical", href: `${SITE_URL}/` },
    { property: "og:site_name", content: "Donkey SEO" },
    { property: "og:title", content: "Donkey SEO — AI-Powered SEO Content Pipeline" },
    {
      property: "og:description",
      content:
        "Automate your SEO content from keyword research to published articles. Donkey SEO discovers opportunities, writes in your brand voice, and delivers to your CMS — hands-off.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${SITE_URL}/` },
    { property: "og:image", content: SOCIAL_IMAGE_URL },
    { property: "og:image:secure_url", content: SOCIAL_IMAGE_URL },
    { property: "og:image:width", content: "2524" },
    { property: "og:image:height", content: "1212" },
    {
      property: "og:image:alt",
      content: "Donkey SEO AI-powered SEO content pipeline preview",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: `${SITE_URL}/` },
    { name: "twitter:title", content: "Donkey SEO — AI-Powered SEO Content Pipeline" },
    {
      name: "twitter:description",
      content:
        "Automate your SEO content from keyword research to published articles. Donkey SEO discovers opportunities, writes in your brand voice, and delivers to your CMS — hands-off.",
    },
    { name: "twitter:image", content: SOCIAL_IMAGE_URL },
    { name: "twitter:image:src", content: SOCIAL_IMAGE_URL },
    {
      name: "twitter:image:alt",
      content: "Donkey SEO AI-powered SEO content pipeline preview",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <DiscoveryPipeline />
        <SmartLinking />
        <Features />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
