import * as React from "react";

import { cn } from "@/lib/utils";

export type TextareaProps = React.ComponentProps<"textarea">;

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-32 w-full rounded-3xl border border-input bg-input px-4 py-3 text-sm text-foreground shadow-soft transition-[border-color,box-shadow,background-color,color,opacity] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-primary focus-visible:[box-shadow:var(--shadow-focus)] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
