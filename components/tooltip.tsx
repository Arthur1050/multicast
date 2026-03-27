import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";

export type TooltipProps = HTMLAttributes<HTMLDivElement> & {
  content: ReactNode;
};

export function Tooltip({ className, content, children, ...props }: TooltipProps) {
  return (
    <div className={cn("group relative inline-flex", className)} {...props}>
      {children}
      <div className="pointer-events-none absolute bottom-[calc(100%+0.75rem)] left-1/2 z-30 hidden w-max max-w-64 -translate-x-1/2 rounded-2xl bg-foreground px-3 py-2 text-xs font-medium text-background shadow-panel group-hover:block group-focus-within:block">
        {content}
      </div>
    </div>
  );
}
