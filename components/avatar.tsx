import {
  Avatar as AvatarRoot,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

type AvatarSize = "sm" | "md" | "lg";
type AvatarStatus = "offline" | "online" | "live";
type AvatarStatusAlign = "bottom-right" | "bottom-left" | "top-right" | "top-left";

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

const statusAlignClasses: Record<AvatarStatusAlign, string> = {
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0",
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
};

export type AvatarProps = ComponentProps<typeof AvatarRoot> & {
  imageAlt?: string;
  imageSrc?: string;
  initials: string;
  size?: AvatarSize;
  status?: AvatarStatus;
  statusAlign?: AvatarStatusAlign;
};

export function Avatar({
  className,
  imageAlt,
  imageSrc,
  initials,
  size = "md",
  status = "offline",
  statusAlign = "bottom-right",
  ...props
}: AvatarProps) {
  const avatarSize = size === "md" ? "default" : size;

  return (
    <AvatarRoot
      data-size={avatarSize}
      className={cn(
        "group/avatar bg-panel text-panel-foreground inline-flex items-center justify-center border border-border-strong font-semibold shadow-soft",
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {imageSrc ? <AvatarImage src={imageSrc} alt={imageAlt ?? initials} /> : null}
      <AvatarFallback className="bg-panel text-panel-foreground">
        {initials}
      </AvatarFallback>
      <AvatarBadge className={cn(statusClasses[status], statusAlignClasses[statusAlign])} />
    </AvatarRoot>
  );
}
