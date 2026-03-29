"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

type DialogOverlayProps = React.ComponentProps<typeof DialogPrimitive.Overlay> & {
  contained?: boolean;
};

function DialogOverlay({
  className,
  contained = false,
  ...props
}: DialogOverlayProps) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "z-50 bg-overlay",
        contained
          ? "absolute inset-0 rounded-[calc(var(--radius)+12px)]"
          : "fixed inset-0",
        className,
      )}
      {...props}
    />
  );
}

type DialogContentProps = React.ComponentProps<typeof DialogPrimitive.Content> & {
  contained?: boolean;
  hideCloseButton?: boolean;
};

function DialogContent({
  className,
  children,
  contained = false,
  hideCloseButton = false,
  ...props
}: DialogContentProps) {
  const content = (
    <>
      <DialogOverlay contained={contained} />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "surface-noise z-50 grid w-full max-w-2xl gap-4 border border-border bg-panel p-6 text-panel-foreground shadow-float duration-200 outline-none",
          contained
            ? "absolute left-1/2 top-1/2 max-h-[calc(100%-2rem)] w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[calc(var(--radius)+12px)]"
            : "fixed left-1/2 top-1/2 max-h-[calc(100vh-2rem)] w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[calc(var(--radius)+12px)]",
          className,
        )}
        {...props}
      >
        {children}
        {hideCloseButton ? null : (
          <DialogPrimitive.Close
            className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full border border-transparent bg-transparent text-muted-foreground transition-[background-color,color,box-shadow,opacity] duration-200 outline-none hover:bg-white/8 hover:text-foreground focus-visible:[box-shadow:var(--shadow-focus)] disabled:pointer-events-none disabled:opacity-50 light:hover:bg-black/5"
            aria-label="Fechar modal"
          >
            <XIcon className="size-4" />
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </>
  );

  return contained ? content : <DialogPortal>{content}</DialogPortal>;
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-left", className)}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn("flex flex-wrap items-center justify-end gap-3", className)}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("font-display text-2xl font-semibold tracking-[var(--tracking-display)]", className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
};
