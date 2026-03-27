import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";

export type EmptyStateProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
};

export function EmptyState({
  className,
  title,
  description,
  icon,
  action,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "surface-noise flex flex-col items-center rounded-[calc(var(--radius)+10px)] border border-border bg-panel px-6 py-10 text-center shadow-panel",
        className,
      )}
      {...props}
    >
      {icon ? (
        <div className="mb-4 flex size-14 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-primary-foreground">
          {icon}
        </div>
      ) : null}
      <h3 className="font-display text-2xl font-semibold">{title}</h3>
      {description ? <p className="mt-2 max-w-md text-sm text-muted-foreground">{description}</p> : null}
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}
