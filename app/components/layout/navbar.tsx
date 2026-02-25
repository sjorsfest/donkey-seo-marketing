"use client";

import { Button } from "~/components/ui/button";

export function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-sm border-b-2 border-outline">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/static/donkey.png"
              alt="Donkey SEO"
              className="h-10 w-10"
              width={40}
              height={40}
            />
            <span className="font-display text-xl font-bold text-foreground">
              Donkey SEO
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground hover:text-yellow-600 font-medium transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-foreground hover:text-yellow-600 font-medium transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground hover:text-yellow-600 font-medium transition-colors"
            >
              FAQ
            </button>
          </div>

          {/* CTA Button */}
          <Button size="sm">Start free • 5 articles on us</Button>
        </div>
      </div>
    </nav>
  );
}
