import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg" | "xl" | "icon";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground border-primary shadow-soft hover:bg-[color:color-mix(in_oklab,var(--primary)_88%,black)] focus-visible:[box-shadow:var(--shadow-focus)]",
  secondary:
    "bg-card text-card-foreground border-border-strong shadow-soft hover:bg-panel focus-visible:[box-shadow:var(--shadow-focus)]",
  tertiary:
    "bg-secondary text-secondary-foreground border-border/70 hover:bg-accent hover:text-accent-foreground focus-visible:[box-shadow:var(--shadow-focus)]",
  ghost:
    "bg-transparent text-foreground border-transparent hover:bg-white/8 hover:text-white focus-visible:[box-shadow:var(--shadow-focus)] light:hover:bg-black/5",
  danger:
    "bg-danger text-danger-foreground border-danger shadow-soft hover:bg-[color:color-mix(in_oklab,var(--danger)_88%,black)] focus-visible:[box-shadow:0_0_0_1px_var(--danger),0_0_0_4px_color-mix(in_oklab,var(--danger)_30%,transparent)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-5 text-base",
  xl: "h-14 px-6 text-base",
  icon: "size-11 px-0",
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  leadingIcon,
  trailingIcon,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-2 rounded-full border font-semibold tracking-[-0.01em] transition duration-200 disabled:pointer-events-none disabled:opacity-50",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {leadingIcon ? <span className="shrink-0">{leadingIcon}</span> : null}
      {children}
      {trailingIcon ? <span className="shrink-0">{trailingIcon}</span> : null}
    </button>
  );
}
