import type { Route } from "./+types/home";
import { Navbar } from "~/components/layout/navbar";
import { Footer } from "~/components/layout/footer";
import { Hero } from "~/components/sections/hero";
import { DiscoveryPipeline } from "~/components/sections/discovery-pipeline";
import { SmartLinking } from "~/components/sections/smart-linking";
import { Features } from "~/components/sections/features";
import { Pricing } from "~/components/sections/pricing";
import { FAQ } from "~/components/sections/faq";
import { FinalCTA } from "~/components/sections/final-cta";
import { PageTypes } from "~/components/sections/page-types";

const SITE_URL = "https://www.donkeyseo.io";
const SOCIAL_IMAGE_URL = `${SITE_URL}/og/og-image.png?v=8`;
const LOGO_URL = `${SITE_URL}/static/donkey.png`;

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Donkey SEO — AI-Powered SEO Page Pipeline" },
    {
      name: "description",
      content:
        "SEO automation for solo founders and indie builders. From keyword research to publish-ready SEO pages in your CMS. Focus on building your product while Donkey ships targeted acquisition pages.",
    },
    { tagName: "link", rel: "canonical", href: `${SITE_URL}/` },
    { property: "og:site_name", content: "Donkey SEO" },
    { property: "og:title", content: "Donkey SEO — AI-Powered SEO Page Pipeline" },
    {
      property: "og:description",
      content:
        "SEO automation for solo founders and indie builders. From keyword research to publish-ready SEO pages in your CMS. Focus on building your product while Donkey ships targeted acquisition pages.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${SITE_URL}/` },
    { property: "og:image", content: SOCIAL_IMAGE_URL },
    { property: "og:image:secure_url", content: SOCIAL_IMAGE_URL },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:logo", content: LOGO_URL },
    {
      property: "og:image:alt",
      content: "Donkey SEO AI-powered SEO page pipeline preview",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: `${SITE_URL}/` },
    { name: "twitter:title", content: "Donkey SEO — AI-Powered SEO Page Pipeline" },
    {
      name: "twitter:description",
      content:
        "SEO automation for solo founders and indie builders. From keyword research to publish-ready SEO pages in your CMS. Focus on building your product while Donkey ships targeted acquisition pages.",
    },
    { name: "logo", content: LOGO_URL },
    { name: "twitter:image", content: SOCIAL_IMAGE_URL },
    { name: "twitter:image:src", content: SOCIAL_IMAGE_URL },
    {
      name: "twitter:image:alt",
      content: "Donkey SEO AI-powered SEO page pipeline preview",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DiscoveryPipeline />
        <PageTypes />
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
