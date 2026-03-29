import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export type FieldRootProps = ComponentProps<"div"> & {
  invalid?: boolean;
};

export function FieldRoot({
  className,
  invalid = false,
  ...props
}: FieldRootProps) {
  return (
    <div
      data-slot="field"
      data-invalid={invalid || undefined}
      className={cn("grid gap-2", className)}
      {...props}
    />
  );
}

export function FieldLabel({
  className,
  ...props
}: ComponentProps<"label">) {
  return (
    <label
      data-slot="field-label"
      className={cn(
        "flex items-center gap-1.5 text-sm font-semibold text-foreground data-[invalid=true]:text-danger",
        className,
      )}
      {...props}
    />
  );
}

export function FieldHelperText({
  className,
  ...props
}: ComponentProps<"p">) {
  return (
    <p
      data-slot="field-helper"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export function FieldErrorText({
  className,
  ...props
}: ComponentProps<"p">) {
  return (
    <p
      data-slot="field-error"
      className={cn("text-sm text-danger", className)}
      {...props}
    />
  );
}
