import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";

type AlertTone = "info" | "success" | "warning" | "danger" | "live";

const toneClasses: Record<AlertTone, string> = {
  info: "border-border-strong bg-panel text-panel-foreground",
  success: "border-success/30 bg-success/12 text-foreground",
  warning: "border-warning/30 bg-warning/16 text-foreground",
  danger: "border-danger/30 bg-danger/12 text-foreground",
  live: "border-live/30 bg-live/12 text-foreground",
};

export type AlertProps = HTMLAttributes<HTMLDivElement> & {
  title?: ReactNode;
  description?: ReactNode;
  tone?: AlertTone;
  icon?: ReactNode;
};

export function Alert({
  className,
  title,
  description,
  tone = "info",
  icon,
  children,
  ...props
}: AlertProps) {
  return (
    <div
      className={cn(
        "flex gap-3 rounded-[calc(var(--radius)+2px)] border p-4 shadow-soft",
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {icon ? <div className="pt-0.5">{icon}</div> : null}
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        {title ? <p className="text-sm font-semibold">{title}</p> : null}
        {description ? <p className="text-sm opacity-90">{description}</p> : null}
        {children}
      </div>
    </div>
  );
}
