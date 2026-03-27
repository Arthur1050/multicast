import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes } from "react";

export type SwitchProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  checked?: boolean;
};

export function Switch({
  className,
  checked = false,
  type = "button",
  ...props
}: SwitchProps) {
  return (
    <button
      type={type}
      aria-pressed={checked}
      className={cn(
        "relative inline-flex h-7 w-12 items-center rounded-full border transition duration-200 focus-visible:[box-shadow:var(--shadow-focus)]",
        checked
          ? "border-primary bg-primary"
          : "border-border-strong bg-secondary",
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          "inline-block size-5 rounded-full bg-white shadow-soft transition duration-200",
          checked ? "translate-x-6" : "translate-x-1",
        )}
      />
    </button>
  );
}
