import type { LoaderFunctionArgs } from "react-router";

type SitemapRoute = {
  path: string;
  changefreq: "daily" | "weekly" | "monthly";
  priority: string;
};

export const loader = ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const baseUrl = url.origin;

  const routes: SitemapRoute[] = [
    { path: "/", changefreq: "daily", priority: "1.0" },
    { path: "/documentation", changefreq: "weekly", priority: "0.8" },
    { path: "/privacy-policy", changefreq: "monthly", priority: "0.5" },
    { path: "/tos", changefreq: "monthly", priority: "0.5" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
    <url>
      <loc>${baseUrl}${route.path}</loc>
      <changefreq>${route.changefreq}</changefreq>
      <priority>${route.priority}</priority>
    </url>`
    )
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
