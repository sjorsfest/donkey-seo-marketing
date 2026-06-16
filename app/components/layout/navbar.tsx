"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { useAppConfig } from "~/context/appConfig";

const LINKS = [
  { label: "How it works", id: "how-it-works" },
  { label: "Features", id: "features" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
];

export function Navbar() {
  const { appUrl } = useAppConfig();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4"
    >
      <div className="section-container">
        <nav
          className={`flex items-center justify-between rounded-2xl border-2 border-outline px-3 py-2.5 transition-all duration-300 ${
            scrolled
              ? "glass shadow-[4px_4px_0_#1a1a1a]"
              : "bg-white/70 backdrop-blur-sm shadow-[2px_2px_0_#1a1a1a]"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2.5">
            <img
              src="/static/donkey-logo-48.webp"
              srcSet="/static/donkey-logo-48.webp 1x, /static/donkey-logo-96.webp 2x"
              alt=""
              aria-hidden="true"
              width={44}
              height={44}
              decoding="async"
              fetchPriority="high"
              loading="eager"
              className="h-10 w-10 object-contain transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
            />
            <span className="hidden font-display text-2xl font-bold tracking-tight text-yellow-500 text-outline sm:inline">
              Donkey SEO
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="rounded-xl px-3 py-2 font-semibold text-foreground/75 transition-colors hover:bg-white/60 hover:text-foreground"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <Button size="sm" className="group" asChild>
            <a href={appUrl}>
              <span className="hidden sm:inline">Start free</span>
              <span className="sm:hidden">Start free</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
        </nav>
      </div>
    </motion.header>
  );
}
