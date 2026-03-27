import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

type BadgeTone = "neutral" | "primary" | "live" | "success" | "warning" | "danger";

const toneClasses: Record<BadgeTone, string> = {
  neutral: "border-border bg-secondary text-secondary-foreground",
  primary: "border-primary/30 bg-primary/15 text-primary-foreground",
  live: "border-live/30 bg-live/15 text-live-foreground",
  success: "border-success/30 bg-success/15 text-success-foreground",
  warning: "border-warning/30 bg-warning/18 text-warning-foreground",
  danger: "border-danger/30 bg-danger/15 text-danger-foreground",
};

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone;
};

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em]",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
