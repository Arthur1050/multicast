import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";

type ChatMessageVariant = "self" | "other" | "system";

export type ChatMessageProps = HTMLAttributes<HTMLDivElement> & {
  variant?: ChatMessageVariant;
  author?: string;
  timestamp?: string;
  children: ReactNode;
};

export function ChatMessage({
  className,
  variant = "other",
  author,
  timestamp,
  children,
  ...props
}: ChatMessageProps) {
  if (variant === "system") {
    return (
      <div
        className={cn(
          "py-2 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground",
          className,
        )}
        {...props}
      >
        {children}
        {timestamp ? <span className="ml-2 text-muted-foreground/60">{timestamp}</span> : null}
      </div>
    );
  }

  const isSelf = variant === "self";

  return (
    <div
      className={cn(
        "flex flex-col gap-1",
        isSelf ? "items-end" : "items-start",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        {author ? (
          <span className="text-xs font-semibold text-foreground">{author}</span>
        ) : null}
        {timestamp ? (
          <span className="text-xs text-muted-foreground/60">{timestamp}</span>
        ) : null}
      </div>
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm",
          isSelf
            ? "rounded-br-md bg-primary text-primary-foreground"
            : "rounded-bl-md bg-card text-card-foreground",
        )}
      >
        {children}
      </div>
    </div>
  );
}
