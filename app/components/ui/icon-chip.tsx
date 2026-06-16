import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

/**
 * Branded container for a lucide icon — the neo-brutalist "icon chip".
 * Usage: <IconChip tone="teal"><Search /></IconChip>
 */
const iconChipVariants = cva(
  "icon-chip shrink-0 transition-all [&_svg]:pointer-events-none",
  {
    variants: {
      tone: {
        yellow: "bg-yellow-400 text-teal-950",
        teal: "bg-teal-300 text-teal-950",
        coral: "bg-coral text-teal-950",
        white: "bg-white text-foreground",
        dark: "bg-teal-900 text-yellow-400",
      },
      size: {
        sm: "size-10 rounded-xl [&_svg]:size-5",
        default: "size-14 rounded-2xl [&_svg]:size-7",
        lg: "size-16 rounded-2xl [&_svg]:size-8",
      },
    },
    defaultVariants: {
      tone: "yellow",
      size: "default",
    },
  }
);

function IconChip({
  className,
  tone,
  size,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof iconChipVariants>) {
  return (
    <span
      data-slot="icon-chip"
      className={cn(iconChipVariants({ tone, size }), className)}
      {...props}
    />
  );
}

export { IconChip, iconChipVariants };
