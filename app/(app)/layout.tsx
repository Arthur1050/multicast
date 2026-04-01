"use client";

import { Sidebar } from "@/components/sidebar";
import { SidebarOverlay } from "@/components/sidebar-overlay";
import { TopNav } from "@/components/top-nav";
import { cn } from "@/lib/cn";
import { useSidebarStore } from "@/lib/stores/sidebar-store";
import type { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  const { collapsed, mobileOpen, closeMobile } = useSidebarStore();

  return (
    <>
      <TopNav />
      <Sidebar />
      <SidebarOverlay open={mobileOpen} onClose={closeMobile} />

      <main
        className={cn(
          "min-h-[calc(100vh-4rem)] pt-16 transition-[margin-left] duration-200 ease-out",
          /* desktop: margin shifts with sidebar width */
          collapsed ? "lg:ml-[4.5rem]" : "lg:ml-60",
          /* mobile: no margin, sidebar is overlay */
          "ml-0",
        )}
      >
        <div className="mx-auto w-full max-w-[1600px] px-4 py-6 lg:px-8 lg:py-8">
          {children}
        </div>
      </main>
    </>
  );
}
