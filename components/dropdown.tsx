"use client";

import type * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import {
  DropdownMenu as DropdownMenuRoot,
  DropdownMenuContent as DropdownMenuContentBase,
  DropdownMenuItem as DropdownMenuItemBase,
  DropdownMenuLabel as DropdownMenuLabelBase,
  DropdownMenuSeparator as DropdownMenuSeparatorBase,
  DropdownMenuTrigger as DropdownMenuTriggerBase,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/cn";

export function DropdownMenu({
  modal = false,
  ...props
}: React.ComponentProps<typeof DropdownMenuRoot>) {
  return <DropdownMenuRoot modal={modal} {...props} />;
}

export function DropdownTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuTriggerBase>) {
  return (
    <DropdownMenuTriggerBase
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border-strong bg-card px-4 py-2.5 text-sm font-semibold text-card-foreground shadow-soft transition-[background-color,border-color,color,box-shadow,opacity,transform] duration-200 outline-none cursor-pointer hover:bg-panel focus-visible:[box-shadow:var(--shadow-focus)] active:scale-[0.985] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className="size-4 text-muted-foreground transition-transform duration-200" />
    </DropdownMenuTriggerBase>
  );
}

export function DropdownContent({
  className,
  align = "end",
  ...props
}: React.ComponentProps<typeof DropdownMenuContentBase>) {
  return (
    <DropdownMenuContentBase
      align={align}
      className={className}
      {...props}
    />
  );
}

export function DropdownLabel({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuLabelBase>) {
  return <DropdownMenuLabelBase className={className} {...props} />;
}

export function DropdownSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuSeparatorBase>) {
  return <DropdownMenuSeparatorBase className={className} {...props} />;
}

export function DropdownItem({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuItemBase>) {
  return <DropdownMenuItemBase className={cn(className)} {...props} />;
}
