import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

export function TabsList({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border bg-secondary p-1 shadow-soft",
        className,
      )}
      {...props}
    />
  );
}

export type TabsTriggerProps = HTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
};

export function TabsTrigger({ className, active, ...props }: TabsTriggerProps) {
  return (
    <button
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-semibold tracking-[-0.01em] transition duration-200",
        active
          ? "bg-card text-card-foreground shadow-soft"
          : "text-muted-foreground hover:text-foreground",
        className,
      )}
      type="button"
      {...props}
    />
  );
}
