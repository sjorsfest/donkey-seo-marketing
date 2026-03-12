import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("api/webhooks/donkey-seo", "routes/api.webhooks.donkey-seo.ts"),
  route("blog", "routes/blog.tsx"),
  route("blog/:slug", "routes/blog.$slug.tsx"),
  route("documentation", "routes/documentation.tsx"),
  route("privacy-policy", "routes/privacy-policy.tsx"),
  route("tos", "routes/tos.tsx"),
  route("sitemap.xml", "routes/sitemap[.]xml.tsx"),
  route("robots.txt", "routes/robots[.]txt.tsx"),
  route(":slug", "routes/icp.$slug.tsx"),
] satisfies RouteConfig;
