import { Button } from "@/components/button";
import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";

export type ModalProps = HTMLAttributes<HTMLDivElement> & {
  open?: boolean;
  contained?: boolean;
  title: ReactNode;
  description?: ReactNode;
  footer?: ReactNode;
};

export function Modal({
  className,
  open = false,
  contained = false,
  title,
  description,
  footer,
  children,
  ...props
}: ModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      className={cn(
        "z-40 flex items-center justify-center bg-overlay px-4 py-10",
        contained ? "absolute inset-0 rounded-[calc(var(--radius)+12px)]" : "fixed inset-0",
      )}
      {...props}
    >
      <div
        className={cn(
          "surface-noise w-full max-w-2xl rounded-[calc(var(--radius)+12px)] border border-border bg-panel p-6 shadow-float",
          className,
        )}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="space-y-2">
            <h3 className="font-display text-2xl font-semibold">{title}</h3>
            {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
          </div>
          <Button variant="ghost" size="icon" aria-label="Fechar modal">
            ×
          </Button>
        </div>
        <div className="space-y-4">{children}</div>
        {footer ? <div className="mt-6 flex flex-wrap items-center justify-end gap-3">{footer}</div> : null}
      </div>
    </div>
  );
}
