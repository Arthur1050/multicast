import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";

export type StatCardProps = HTMLAttributes<HTMLDivElement> & {
  label: ReactNode;
  value: ReactNode;
  change?: ReactNode;
  icon?: ReactNode;
};

export function StatCard({
  className,
  label,
  value,
  change,
  icon,
  ...props
}: StatCardProps) {
  return (
    <div
      className={cn(
        "surface-noise rounded-[calc(var(--radius)+6px)] border border-border bg-card p-5 shadow-soft",
        className,
      )}
      {...props}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        {icon ? <div className="text-muted-foreground">{icon}</div> : null}
      </div>
      <div className="flex items-end justify-between gap-4">
        <p className="font-display text-3xl font-semibold">{value}</p>
        {change ? <p className="text-sm font-semibold text-success">{change}</p> : null}
      </div>
    </div>
  );
}
