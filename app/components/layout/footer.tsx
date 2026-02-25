export function Footer() {
  return (
    <footer className="border-t-2 border-outline bg-card mt-20">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/static/donkey.png"
                alt="Donkey SEO"
                className="h-8 w-8"
                width={32}
                height={32}
              />
              <span className="font-display text-lg font-bold text-foreground">
                Donkey SEO
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              SEO content on autopilot. From keyword research to published
              articles.
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
                  href="#"
                  className="text-muted-foreground hover:text-yellow-600 transition-colors"
                >
                  Integrations
                </a>
              </li>
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
            © 2024 Donkey SEO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
