import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";

export type FieldProps = HTMLAttributes<HTMLDivElement> & {
  label?: ReactNode;
  helperText?: ReactNode;
  error?: ReactNode;
  required?: boolean;
};

export function Field({
  className,
  label,
  helperText,
  error,
  required,
  children,
  ...props
}: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      {label ? (
        <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
          <span>{label}</span>
          {required ? <span className="text-live">*</span> : null}
        </div>
      ) : null}
      {children}
      {error ? (
        <p className="text-sm text-danger">{error}</p>
      ) : helperText ? (
        <p className="text-sm text-muted-foreground">{helperText}</p>
      ) : null}
    </div>
  );
}
