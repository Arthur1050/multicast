import { cn } from "@/lib/cn";
import type {
  ButtonHTMLAttributes,
  DetailsHTMLAttributes,
  HTMLAttributes,
} from "react";

export function DropdownMenu({
  className,
  ...props
}: DetailsHTMLAttributes<HTMLDetailsElement>) {
  return <details className={cn("group relative", className)} {...props} />;
}

export function DropdownTrigger({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <summary
      className={cn(
        "inline-flex list-none cursor-pointer items-center gap-2 rounded-full border border-border-strong bg-card px-4 py-2.5 text-sm font-semibold text-card-foreground shadow-soft transition duration-200 hover:bg-panel",
        className,
      )}
      {...props}
    >
      {children}
    </summary>
  );
}

export function DropdownContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "absolute right-0 top-[calc(100%+0.75rem)] z-20 hidden min-w-56 rounded-[calc(var(--radius)+6px)] border border-border bg-popover p-2 text-popover-foreground shadow-panel group-open:block",
        className,
      )}
      {...props}
    />
  );
}

export function DropdownLabel({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground", className)}
      {...props}
    />
  );
}

export function DropdownSeparator({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("my-1 h-px bg-border", className)} {...props} />;
}

export function DropdownItem({
  className,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={cn(
        "flex w-full items-center justify-between rounded-2xl px-3 py-2.5 text-left text-sm font-medium text-foreground transition duration-200 hover:bg-secondary hover:text-secondary-foreground",
        className,
      )}
      {...props}
    />
  );
}
