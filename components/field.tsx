import {
  cloneElement,
  isValidElement,
  useId,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";

import {
  FieldErrorText,
  FieldHelperText,
  FieldLabel,
  FieldRoot,
} from "@/components/ui/field";
import { cn } from "@/lib/cn";

export type FieldProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  error?: ReactNode;
  helperText?: ReactNode;
  label?: ReactNode;
  required?: boolean;
};

type ChildFieldProps = {
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
  id?: string;
  required?: boolean;
};

function mergeDescribedBy(existing: string | undefined, next: string | undefined) {
  return [existing, next].filter(Boolean).join(" ") || undefined;
}

export function Field({
  className,
  label,
  helperText,
  error,
  required,
  children,
  ...props
}: FieldProps) {
  const generatedId = useId();
  const controlId = `${generatedId}-control`;
  const helperId = helperText ? `${generatedId}-helper` : undefined;
  const errorId = error ? `${generatedId}-error` : undefined;
  const describedBy = mergeDescribedBy(helperId, errorId);
  const invalid = Boolean(error);
  const resolvedControlId =
    isValidElement<ChildFieldProps>(children) && children.props.id
      ? children.props.id
      : controlId;
  let content = children;

  if (isValidElement<ChildFieldProps>(children)) {
    const child = children as ReactElement<ChildFieldProps>;

    content = cloneElement(child, {
      id: resolvedControlId,
      required: child.props.required ?? required,
      "aria-describedby": mergeDescribedBy(child.props["aria-describedby"], describedBy),
      "aria-invalid": child.props["aria-invalid"] ?? (invalid || undefined),
    });
  }

  return (
      <FieldRoot className={cn(className)} invalid={invalid} {...props}>
      {label ? (
        <FieldLabel data-invalid={invalid || undefined} htmlFor={resolvedControlId}>
          <span>{label}</span>
          {required ? <span className="text-live">*</span> : null}
        </FieldLabel>
      ) : null}
      {content}
      {error ? (
        <FieldErrorText id={errorId}>{error}</FieldErrorText>
      ) : helperText ? (
        <FieldHelperText id={helperId}>{helperText}</FieldHelperText>
      ) : null}
    </FieldRoot>
  );
}
