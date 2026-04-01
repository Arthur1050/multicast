"use client";

import { Avatar } from "@/components/avatar";
import { Input } from "@/components/input";
import { cn } from "@/lib/cn";
import { useSidebarStore } from "@/lib/stores/sidebar-store";
import { Bell, Menu, Search, Settings } from "lucide-react";
import Link from "next/link";

export function TopNav() {
  const { toggleMobile } = useSidebarStore();

  return (
    <header className="fixed top-0 left-0 z-40 flex h-16 w-full items-center border-b border-border bg-card/80 backdrop-blur-xl">
      <div className="flex w-full items-center gap-4 px-4 lg:px-6">
        {/* Hamburger — mobile only */}
        <button
          onClick={toggleMobile}
          className="flex size-10 shrink-0 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground lg:hidden cursor-pointer"
          aria-label="Toggle menu"
        >
          <Menu className="size-5" />
        </button>

        {/* Logo */}
        <Link
          href="/dashboard"
          className="shrink-0 font-display text-xl font-bold tracking-[var(--tracking-display)]"
        >
          Multicast
        </Link>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Search — desktop */}
        <div className="hidden max-w-md flex-1 md:block">
          <div className="relative">
            <Search className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search sessions..."
              className="h-10 rounded-full pl-10 text-sm"
            />
          </div>
        </div>

        {/* Search icon — mobile */}
        <button
          className="flex size-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground md:hidden cursor-pointer"
          aria-label="Search"
        >
          <Search className="size-5" />
        </button>

        <div className="flex-1 hidden md:block" />

        {/* Utility icons */}
        <div className="flex items-center gap-1">
          <button
            className={cn(
              "flex size-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground cursor-pointer",
            )}
            aria-label="Notifications"
          >
            <Bell className="size-5" />
          </button>
          <button
            className="hidden size-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:flex cursor-pointer"
            aria-label="Settings"
          >
            <Settings className="size-5" />
          </button>
        </div>

        {/* User avatar */}
        <Avatar initials="AX" status="online" size="sm" />
      </div>
    </header>
  );
}
