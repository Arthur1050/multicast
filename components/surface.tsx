import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

type SurfaceTone = "default" | "spotlight" | "outline";

const toneClasses: Record<SurfaceTone, string> = {
  default: "bg-panel text-panel-foreground border-border shadow-panel",
  spotlight: "bg-panel text-panel-foreground border-transparent shadow-float border-gradient",
  outline: "bg-transparent text-foreground border-border-strong shadow-none",
};

export type SurfaceProps = HTMLAttributes<HTMLDivElement> & {
  tone?: SurfaceTone;
};

export function Surface({ className, tone = "default", ...props }: SurfaceProps) {
  return (
    <div
      className={cn(
        "surface-noise relative rounded-[calc(var(--radius)+10px)] border p-8",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
