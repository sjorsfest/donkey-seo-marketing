"use client";

import { motion } from "framer-motion";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { useAppConfig } from "~/context/appConfig";

export function Navbar() {
  const { appUrl } = useAppConfig();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 py-4"
    >
      <div className="section-container">
        <nav className="flex items-center justify-between rounded-2xl px-4 py-3 glass border-2 border-outline shadow-[4px_4px_0_#1a1a1a]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="relative group">
              <img
                src="/static/donkey.png"
                alt="Donkey SEO"
                width={48}
                height={48}
                decoding="async"
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="font-display select-none text-3xl font-bold text-yellow-500 hidden sm:inline tracking-tight text-outline">
              Donkey SEO
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("features")}
              className="font-semibold text-foreground/80 hover:text-foreground transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="font-semibold text-foreground/80 hover:text-foreground transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="font-semibold text-foreground/80 hover:text-foreground transition-colors"
            >
              FAQ
            </button>
          </div>

          {/* CTA Button */}
          <Button size="sm" asChild>
            <a href={appUrl}>Start free • 5 articles on us</a>
          </Button>
        </nav>
      </div>
    </motion.header>
  );
}
