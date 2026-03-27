import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";

export type MediaCardProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
  meta?: ReactNode;
  description?: ReactNode;
  artwork?: ReactNode;
  tone?: "default" | "featured";
};

export function MediaCard({
  className,
  title,
  meta,
  description,
  artwork,
  tone = "default",
  ...props
}: MediaCardProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[calc(var(--radius)+10px)] border border-border bg-card shadow-panel",
        tone === "featured" ? "border-gradient" : "",
        className,
      )}
      {...props}
    >
      <div className="aspect-[16/10] bg-panel">
        {artwork ? artwork : <div className="h-full w-full bg-panel" />}
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          {meta ? <Badge tone="primary">{meta}</Badge> : <span />}
          <Badge tone="neutral">Sincronizado</Badge>
        </div>
        <div className="space-y-2">
          <h3 className="font-display text-xl font-semibold">{title}</h3>
          {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
        </div>
        <div className="flex gap-3">
          <Button size="sm">Assistir agora</Button>
          <Button size="sm" variant="secondary">
            Ver detalhes
          </Button>
        </div>
      </div>
    </div>
  );
}
