import { useRouteLoaderData } from "react-router";
import { icpRegistry } from "~/data/icp/registry";
import type { BlogArticleSummary } from "~/lib/blog-data.server";

const solutions = Object.values(icpRegistry).map((config) => ({
  name: config.name,
  href: `/${config.slug}`,
}));
const DONKEY_SUPPORT_URL =
  "https://donkey.support/?utm_source=donkey_seo&utm_medium=footer&utm_campaign=partner_referral&utm_content=donkey_support";
const DONKEY_DIRECTORY_URL =
  "https://donkey.directory/?utm_source=donkey_seo&utm_medium=footer&utm_campaign=partner_referral&utm_content=donkey_directory";

export function Footer() {
  const rootData = useRouteLoaderData("root") as
    | { latestPosts?: BlogArticleSummary[] }
    | undefined;
  const latestPosts = rootData?.latestPosts ?? [];
  return (
    <footer className="border-t-2 border-outline bg-card mt-20">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/static/donkey-logo-32.webp"
                srcSet="/static/donkey-logo-32.webp 1x, /static/donkey-logo-64.webp 2x"
                alt=""
                aria-hidden="true"
                className="h-8 w-8"
                width={32}
                height={32}
                decoding="async"
                loading="lazy"
              />
              <span className="font-display text-lg font-bold text-foreground">
                Donkey SEO
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              SEO pages on autopilot. From keyword research to published,
              acquisition-focused pages.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-display font-bold text-foreground mb-4">
              Product
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#features"
                  className="text-muted-foreground hover:text-yellow-600 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-muted-foreground hover:text-yellow-600 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/documentation"
                  className="text-muted-foreground hover:text-yellow-600 transition-colors"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="font-display font-bold text-foreground mb-4">
              Solutions
            </h3>
            <ul className="space-y-2 text-sm">
              {solutions.map((solution) => (
                <li key={solution.href}>
                  <a
                    href={solution.href}
                    className="text-muted-foreground hover:text-yellow-600 transition-colors"
                  >
                    {solution.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-display font-bold text-foreground mb-4">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/blog"
                  className="text-muted-foreground hover:text-yellow-600 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Latest Blogposts Column */}
          {latestPosts.length > 0 && (
            <div>
              <h3 className="font-display font-bold text-foreground mb-4">
                Latest Blogposts
              </h3>
              <ul className="space-y-2 text-sm">
                {latestPosts.map((post) => (
                  <li key={post.slug}>
                    <a
                      href={`/blog/${post.slug}`}
                      className="text-muted-foreground hover:text-yellow-600 transition-colors"
                    >
                      {post.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Legal Column */}
          <div>
            <h3 className="font-display font-bold text-foreground mb-4">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-yellow-600 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/tos"
                  className="text-muted-foreground hover:text-yellow-600 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Partner Tools Column */}
          <div>
            <h3 className="font-display font-bold text-foreground mb-4">
              Partner Tools
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={DONKEY_SUPPORT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 rounded-md border-l-2 border-[#FF8CB5] py-0.5 pl-2.5 text-sm font-semibold text-foreground no-underline transition-all duration-200 hover:scale-[1.03] hover:border-l-[3px] hover:bg-[#FF8CB5]/15 hover:text-foreground"
                >
                  Donkey Support
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 group-hover:scale-110">↗</span>
                </a>
              </li>
              <li>
                <a
                  href={DONKEY_DIRECTORY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 rounded-md border-l-2 border-[#C3F73A] py-0.5 pl-2.5 text-sm font-semibold text-foreground no-underline transition-all duration-200 hover:scale-[1.03] hover:border-l-[3px] hover:bg-[#C3F73A]/15 hover:text-foreground"
                >
                  Donkey Directories
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 group-hover:scale-110">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Donkey SEO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
