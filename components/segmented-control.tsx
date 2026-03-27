import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

export function SegmentedControl({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex rounded-[calc(var(--radius)+2px)] border border-border bg-card p-1 shadow-soft",
        className,
      )}
      {...props}
    />
  );
}

export type SegmentedControlItemProps = HTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
};

export function SegmentedControlItem({
  className,
  active,
  ...props
}: SegmentedControlItemProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex min-w-24 items-center justify-center rounded-[calc(var(--radius)-4px)] px-4 py-2.5 text-sm font-semibold transition duration-200",
        active
          ? "bg-primary text-primary-foreground shadow-soft"
          : "text-muted-foreground hover:bg-secondary hover:text-foreground",
        className,
      )}
      {...props}
    />
  );
}
