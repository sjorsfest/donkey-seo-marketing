import type { Route } from "./+types/icp.$slug";
import { data } from "react-router";
import { icpRegistry } from "~/data/icp/registry";
import { buildMeta, buildFaqJsonLd, buildBreadcrumbJsonLd, buildJsonLdGraph, buildSoftwareApplicationJsonLd } from "~/lib/seo";
import { IcpLandingPage } from "~/components/templates/icp-landing-page";
import { faqItems as defaultFaqItems } from "~/data/faq";

export function loader({ params }: Route.LoaderArgs) {
  const config = icpRegistry[params.slug];
  if (!config) {
    throw data({ message: "Not Found" }, { status: 404 });
  }
  return { config };
}

export function meta({ data }: Route.MetaArgs) {
  if (!data) {
    return [{ title: "Not Found | Donkey SEO" }];
  }

  const { config } = data;
  return buildMeta({
    path: `/${config.slug}`,
    title: config.seo.title,
    description: config.seo.description,
    socialImagePath: config.seo.socialImagePath,
    socialImageAlt: config.seo.socialImageAlt,
  });
}

export default function IcpPage({ loaderData }: Route.ComponentProps) {
  const { config } = loaderData;

  const faqData = config.faq
    ? config.faq.strategy === "prepend"
      ? [...config.faq.items, ...defaultFaqItems]
      : config.faq.strategy === "append"
        ? [...defaultFaqItems, ...config.faq.items]
        : config.faq.items
    : defaultFaqItems;

  const jsonLd = buildJsonLdGraph(
    buildSoftwareApplicationJsonLd({
      description: config.seo.description,
      path: `/${config.slug}`,
    }),
    buildBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: `Donkey SEO for ${config.name}`, path: `/${config.slug}` },
    ]),
    buildFaqJsonLd(faqData),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <IcpLandingPage config={config} />
    </>
  );
}
