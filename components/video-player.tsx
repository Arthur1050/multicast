import { cn } from "@/lib/cn";
import { Play } from "lucide-react";
import type { HTMLAttributes } from "react";

export type VideoPlayerProps = HTMLAttributes<HTMLDivElement>;

export function VideoPlayer({ className, ...props }: VideoPlayerProps) {
  return (
    <div
      className={cn(
        "relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl bg-card shadow-panel",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col items-center gap-3 text-muted-foreground">
        <div className="flex size-16 items-center justify-center rounded-full bg-secondary/60 backdrop-blur-sm">
          <Play className="size-8 text-foreground" />
        </div>
        <span className="text-sm font-medium">Player</span>
      </div>
    </div>
  );
}
