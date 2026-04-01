"use client";

import { cn } from "@/lib/cn";
import { useSidebarStore } from "@/lib/stores/sidebar-store";
import {
  Home,
  Compass,
  Radio,
  Tv,
  Users,
  Video,
  UserPlus,
  FolderHeart,
  Plus,
  PanelLeftClose,
  PanelLeft,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type NavItem = {
  href: string;
  icon: ReactNode;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/dashboard", icon: <Home className="size-5" />, label: "Home" },
  { href: "/dashboard", icon: <Compass className="size-5" />, label: "Browse" },
  { href: "/dashboard", icon: <Radio className="size-5" />, label: "Rooms" },
  { href: "/dashboard", icon: <Tv className="size-5" />, label: "Live" },
  { href: "/dashboard", icon: <Users className="size-5" />, label: "Following" },
  { href: "/dashboard", icon: <Video className="size-5" />, label: "My Sessions" },
  { href: "/profile", icon: <UserPlus className="size-5" />, label: "Friends" },
  { href: "/dashboard", icon: <FolderHeart className="size-5" />, label: "Library" },
];

export function Sidebar() {
  const { collapsed, mobileOpen, toggle, closeMobile } = useSidebarStore();
  const pathname = usePathname();

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className={cn(
          "fixed top-16 left-0 z-30 hidden h-[calc(100vh-4rem)] flex-col border-r border-border bg-card transition-[width] duration-200 ease-out lg:flex",
          collapsed ? "w-[4.5rem]" : "w-60",
        )}
      >
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
          {navItems.map((item) => {
            const active = pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors duration-150",
                  active
                    ? "bg-primary/12 text-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                  collapsed && "justify-center px-0",
                )}
              >
                <span className="shrink-0">{item.icon}</span>
                {!collapsed && (
                  <span className="truncate">{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-border px-3 py-4 space-y-3">
          <Link
            href="/create-session"
            className={cn(
              "flex items-center justify-center gap-2 rounded-xl border border-primary bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-colors duration-150 hover:bg-[color:color-mix(in_oklab,var(--primary)_88%,black)]",
              collapsed && "px-0",
            )}
          >
            <Plus className="size-5 shrink-0" />
            {!collapsed && <span>Start Session</span>}
          </Link>

          <button
            onClick={toggle}
            className="flex w-full items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors duration-150 hover:bg-secondary hover:text-foreground cursor-pointer"
          >
            {collapsed ? (
              <PanelLeft className="size-5" />
            ) : (
              <>
                <PanelLeftClose className="size-5" />
                <span>Collapse</span>
              </>
            )}
          </button>
        </div>
      </aside>

      {/* Mobile sidebar (drawer) */}
      <aside
        className={cn(
          "fixed top-16 left-0 z-50 flex h-[calc(100vh-4rem)] w-72 flex-col border-r border-border bg-card transition-transform duration-200 ease-out lg:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
          {navItems.map((item) => {
            const active = pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMobile}
                className={cn(
                  "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors duration-150",
                  active
                    ? "bg-primary/12 text-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                <span className="shrink-0">{item.icon}</span>
                <span className="truncate">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-border px-3 py-4">
          <Link
            href="/create-session"
            onClick={closeMobile}
            className="flex items-center justify-center gap-2 rounded-xl border border-primary bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-colors duration-150 hover:bg-[color:color-mix(in_oklab,var(--primary)_88%,black)]"
          >
            <Plus className="size-5 shrink-0" />
            <span>Start Session</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
