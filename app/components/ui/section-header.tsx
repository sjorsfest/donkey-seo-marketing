"use client";

import * as React from "react";
import { FadeIn } from "~/components/motion/fade-in";
import { cn } from "~/lib/utils";

interface SectionHeaderProps {
  eyebrow?: React.ReactNode;
  eyebrowIcon?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
}

/**
 * Consistent section header: eyebrow pill → headline → subtitle.
 * Gives every section the same rhythm while staying on-brand.
 */
export function SectionHeader({
  eyebrow,
  eyebrowIcon,
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <FadeIn
      className={cn(
        "max-w-3xl",
        centered ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className={cn("eyebrow mb-5", centered && "mx-auto")}>
          {eyebrowIcon && (
            <span className="text-yellow-600 [&_svg]:size-4">{eyebrowIcon}</span>
          )}
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-4xl sm:text-5xl font-bold text-foreground leading-[1.08] text-balance",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed",
            centered && "mx-auto max-w-2xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
