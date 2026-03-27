import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

type CardTone = "default" | "panel" | "interactive";

const toneClasses: Record<CardTone, string> = {
  default: "bg-card text-card-foreground border-border shadow-soft",
  panel: "bg-panel text-panel-foreground border-border shadow-panel",
  interactive:
    "bg-card text-card-foreground border-border shadow-soft transition duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-panel",
};

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  tone?: CardTone;
};

export function Card({ className, tone = "default", ...props }: CardProps) {
  return (
    <div
      className={cn(
        "surface-noise rounded-[calc(var(--radius)+6px)] border p-6",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-5 flex flex-col gap-2", className)} {...props} />;
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("font-display text-xl font-semibold tracking-[var(--tracking-display)]", className)}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-muted-foreground", className)} {...props} />;
}

export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-4", className)} {...props} />;
}

export function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-6 flex items-center gap-3", className)} {...props} />;
}
