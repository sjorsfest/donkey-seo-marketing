"use client";

import { motion } from "framer-motion";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

export function ArticleMockup() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
  const currentYear = new Date().getFullYear();

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0, rotate: -5 }}
      animate={{
        scale: 1,
        opacity: 1,
        rotate: [-3, 3, -3],
      }}
      transition={{
        scale: { delay: 0.5, duration: 0.4 },
        opacity: { delay: 0.5, duration: 0.4 },
        rotate: {
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }
      }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Card className="w-full max-w-sm bg-white p-6 border-3 border-outline shadow-[6px_6px_0_#1a1a1a]">
      {/* Article Header */}
      <div className="mb-4">
        <Badge variant="teal" size="sm" className="mb-3">
          SEO Article
        </Badge>
        <h3 className="font-display text-lg font-bold text-foreground leading-tight mb-2">
          How to Build a Scalable Content Pipeline in {currentYear}
        </h3>
        <p className="text-xs text-muted-foreground mb-3">
          A complete guide to automating your content workflow and scaling SEO
          efforts without hiring a content team.
        </p>
      </div>

      {/* Author & Meta */}
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center text-white font-display font-bold">
          JS
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold text-foreground">
            Jane Smith
          </div>
          <div className="text-xs text-muted-foreground flex items-center gap-2">
            <span>5 min read</span>
            <span>•</span>
            <span>{currentDate}</span>
          </div>
        </div>
      </div>

      {/* Content Preview */}
      <div className="space-y-2 text-xs text-muted-foreground">
        <div className="flex items-start gap-2">
          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
          <p className="leading-relaxed">
            Clear H1 with target keyword
          </p>
        </div>
        <div className="flex items-start gap-2">
          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
          <p className="leading-relaxed">
            Optimized meta description (155 chars)
          </p>
        </div>
        <div className="flex items-start gap-2">
          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
          <p className="leading-relaxed">
            Internal links to 3 related articles
          </p>
        </div>
        <div className="flex items-start gap-2">
          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
          <p className="leading-relaxed">
            Natural keyword density (2.3%)
          </p>
        </div>
      </div>

      {/* Status Badge */}
      <div className="mt-4 pt-4 border-t border-border">
        <Badge variant="success" size="sm">
          ✓ Ready to publish
        </Badge>
      </div>
    </Card>
      </motion.div>
    </motion.div>
  );
}
