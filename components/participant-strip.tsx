import { Avatar } from "@/components/avatar";
import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

export type ParticipantStripProps = HTMLAttributes<HTMLDivElement> & {
  participants: Array<{
    initials: string;
    status?: "offline" | "online" | "live";
  }>;
  overflowCount?: number;
};

export function ParticipantStrip({
  className,
  participants,
  overflowCount = 0,
  ...props
}: ParticipantStripProps) {
  return (
    <div className={cn("flex items-center", className)} {...props}>
      <div className="flex -space-x-3">
        {participants.map((participant, index) => (
          <Avatar
            key={`${participant.initials}-${index}`}
            initials={participant.initials}
            status={participant.status}
            size="sm"
            className="ring-2 ring-background"
          />
        ))}
        {overflowCount > 0 ? (
          <div className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-secondary text-xs font-semibold text-secondary-foreground ring-2 ring-background">
            +{overflowCount}
          </div>
        ) : null}
      </div>
    </div>
  );
}
