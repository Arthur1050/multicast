"use client";

import { cn } from "@/lib/cn";
import { SendHorizontal, Smile } from "lucide-react";
import type { HTMLAttributes } from "react";

export type ChatInputProps = HTMLAttributes<HTMLDivElement> & {
  placeholder?: string;
};

export function ChatInput({
  className,
  placeholder = "Type your message...",
  ...props
}: ChatInputProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-2xl border border-input bg-input px-3 py-2 shadow-soft transition-[border-color,box-shadow] duration-200 focus-within:border-primary focus-within:[box-shadow:var(--shadow-focus)]",
        className,
      )}
      {...props}
    >
      <button
        type="button"
        className="flex size-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
        aria-label="Emoji"
      >
        <Smile className="size-5" />
      </button>

      <input
        type="text"
        placeholder={placeholder}
        className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
      />

      <button
        type="button"
        className="flex size-8 shrink-0 items-center justify-center rounded-lg text-primary transition-colors hover:text-primary/80 cursor-pointer"
        aria-label="Send"
      >
        <SendHorizontal className="size-5" />
      </button>
    </div>
  );
}
