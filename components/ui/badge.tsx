import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] transition-colors duration-200",
  {
    variants: {
      tone: {
        neutral: "border-border bg-secondary text-secondary-foreground",
        primary: "border-primary/30 bg-primary/15 text-foreground",
        success: "border-success/30 bg-success/14 text-foreground",
        warning: "border-warning/30 bg-warning/16 text-foreground",
        danger: "border-danger/30 bg-danger/14 text-foreground",
        live: "border-live/30 bg-live/15 text-foreground",
      },
    },
    defaultVariants: {
      tone: "neutral",
    },
  },
);

export type BadgeProps = React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, tone, ...props }: BadgeProps) {
  return <span data-slot="badge" className={cn(badgeVariants({ tone }), className)} {...props} />;
}
