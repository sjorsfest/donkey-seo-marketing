import { icpRegistry } from "~/data/icp/registry";

const solutions = Object.values(icpRegistry).map((config) => ({
  name: config.name,
  href: `/${config.slug}`,
}));

export function Footer() {
  return (
    <footer className="border-t-2 border-outline bg-card mt-20">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
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
