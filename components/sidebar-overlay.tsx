"use client";

import { cn } from "@/lib/cn";

export type SidebarOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export function SidebarOverlay({ open, onClose }: SidebarOverlayProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-40 bg-overlay transition-opacity duration-200 lg:hidden",
        open ? "opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-hidden={!open}
      onClick={onClose}
    />
  );
}
