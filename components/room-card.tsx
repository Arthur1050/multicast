import { Avatar } from "@/components/avatar";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";

export type RoomCardProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
  status?: ReactNode;
  participants?: number;
  privacy?: "public" | "private";
};

export function RoomCard({
  className,
  title,
  status = "Ao vivo",
  participants = 0,
  privacy = "public",
  ...props
}: RoomCardProps) {
  return (
    <div
      className={cn(
        "surface-noise rounded-[calc(var(--radius)+8px)] border border-border bg-panel p-5 shadow-panel",
        className,
      )}
      {...props}
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge tone="live">{status}</Badge>
            <Badge tone="neutral">{privacy === "public" ? "Publica" : "Privada"}</Badge>
          </div>
          <h3 className="font-display text-xl font-semibold">{title}</h3>
        </div>
        <Avatar initials="MC" status="live" />
      </div>
      <div className="mb-5 flex items-center justify-between text-sm text-muted-foreground">
        <span>{participants} participantes</span>
        <span>Controle compartilhado</span>
      </div>
      <div className="flex gap-3">
        <Button size="sm">Entrar na sala</Button>
        <Button size="sm" variant="secondary">
          Convidar
        </Button>
      </div>
    </div>
  );
}
