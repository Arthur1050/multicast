import { Avatar } from "@/components/avatar";
import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";

type FriendStatusType = "online" | "offline" | "watching" | "away";

const statusDotClasses: Record<FriendStatusType, string> = {
  online: "bg-success",
  offline: "bg-muted",
  watching: "bg-live",
  away: "bg-warning",
};

export type FriendListItemProps = HTMLAttributes<HTMLDivElement> & {
  name: string;
  status?: string;
  statusType?: FriendStatusType;
  initials?: string;
  imageSrc?: string;
  action?: ReactNode;
};

export function FriendListItem({
  className,
  name,
  status,
  statusType = "offline",
  initials,
  imageSrc,
  action,
  ...props
}: FriendListItemProps) {
  const avatarStatus =
    statusType === "online" || statusType === "watching"
      ? "online"
      : statusType === "away"
        ? "online"
        : "offline";

  const resolvedInitials =
    initials ??
    name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <div
      className={cn("flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-150 hover:bg-secondary/50", className)}
      {...props}
    >
      <Avatar
        initials={resolvedInitials}
        imageSrc={imageSrc}
        status={avatarStatus}
        size="sm"
      />

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-foreground">{name}</p>
        {status ? (
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span
              className={cn(
                "inline-block size-1.5 shrink-0 rounded-full",
                statusDotClasses[statusType],
              )}
            />
            <span className="truncate">{status}</span>
          </p>
        ) : null}
      </div>

      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
