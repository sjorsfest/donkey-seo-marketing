import type { LoaderFunctionArgs } from "react-router";
import { getPublishedArticlesForSitemap } from "~/lib/blog-data.server";

type SitemapRoute = {
  path: string;
  changefreq: "daily" | "weekly" | "monthly";
  priority: string;
  lastmod?: string;
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const baseUrl = url.origin;

  const staticRoutes: SitemapRoute[] = [
    { path: "/", changefreq: "daily", priority: "1.0" },
    { path: "/documentation", changefreq: "weekly", priority: "0.8" },
    { path: "/privacy-policy", changefreq: "monthly", priority: "0.5" },
    { path: "/tos", changefreq: "monthly", priority: "0.5" },
  ];

  let articleRoutes: SitemapRoute[] = [];
  let blogIndexRoute: SitemapRoute[] = [];

  try {
    const articles = await getPublishedArticlesForSitemap();
    articleRoutes = articles.map((article) => ({
      path: `/blog/${article.slug}`,
      changefreq: "weekly",
      priority: "0.7",
      lastmod: new Date(article.updated_at).toISOString().split("T")[0],
    }));

    blogIndexRoute = articles.length > 0
      ? [{ path: "/blog", changefreq: "daily", priority: "0.8" }]
      : [];
  } catch (error) {
    console.error("[sitemap] Failed to include blog routes:", error);
  }

  const routes = [...staticRoutes, ...blogIndexRoute, ...articleRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map((route) => {
      const lastmodTag = route.lastmod ? `\n      <lastmod>${route.lastmod}</lastmod>` : "";
      return `
    <url>
      <loc>${baseUrl}${route.path}</loc>${lastmodTag}
      <changefreq>${route.changefreq}</changefreq>
      <priority>${route.priority}</priority>
    </url>`;
    })
    .join("")}
</urlset>
`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
