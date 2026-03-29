import { Avatar } from "@/components/avatar";
import { AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar";
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
      <AvatarGroup className="isolate overflow-x-auto pb-1 pr-1">
        {participants.map((participant, index) => (
          <Avatar
            key={`${participant.initials}-${index}`}
            initials={participant.initials}
            status={participant.status}
            statusAlign="bottom-left"
            size="sm"
            aria-label={`Participante ${participant.initials}`}
          />
        ))}
        {overflowCount > 0 ? (
          <AvatarGroupCount className="size-9 text-xs font-semibold text-secondary-foreground shadow-soft">
            +{overflowCount}
          </AvatarGroupCount>
        ) : null}
      </AvatarGroup>
    </div>
  );
}
