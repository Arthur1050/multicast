import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

type AvatarSize = "sm" | "md" | "lg";
type AvatarStatus = "offline" | "online" | "live";

const sizeClasses: Record<AvatarSize, string> = {
  sm: "size-9 text-sm",
  md: "size-11 text-base",
  lg: "size-14 text-lg",
};

const statusClasses: Record<AvatarStatus, string> = {
  offline: "bg-muted",
  online: "bg-success",
  live: "bg-live",
};

export type AvatarProps = HTMLAttributes<HTMLDivElement> & {
  initials: string;
  size?: AvatarSize;
  status?: AvatarStatus;
};

export function Avatar({
  className,
  initials,
  size = "md",
  status = "offline",
  ...props
}: AvatarProps) {
  return (
    <div className={cn("relative inline-flex shrink-0", className)} {...props}>
      <div
        className={cn(
          "bg-panel text-panel-foreground inline-flex items-center justify-center rounded-full border border-border-strong font-semibold shadow-soft",
          sizeClasses[size],
        )}
      >
        {initials}
      </div>
      <span
        className={cn(
          "absolute bottom-0 right-0 size-3.5 rounded-full border-2 border-background",
          statusClasses[status],
        )}
      />
    </div>
  );
}
