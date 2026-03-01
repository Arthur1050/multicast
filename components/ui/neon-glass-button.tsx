"use client";

import { type ReactNode, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface NeonGlassButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
}

export function NeonGlassButton({
    children,
    className,
    onClick,
    href,
}: NeonGlassButtonProps) {
    const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
    const [glare, setGlare] = useState({ x: 50, y: 50 });

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
            if (!btnRef.current) return;
            const rect = btnRef.current.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            setGlare({ x, y });
        },
        []
    );

    const shared = cn(
        "group relative inline-flex items-center justify-center gap-2",
        "h-14 px-8 md:px-10 text-base md:text-lg font-semibold",
        "rounded-xl overflow-hidden",
        "text-white",
        "transition-all duration-300",
        "hover:scale-[1.04] active:scale-[0.98]",
        "cursor-pointer",
        className
    );

    const inner = (
        <>
            {/* Animated neon border */}
            <span className="absolute inset-0 rounded-xl p-px bg-[conic-gradient(from_var(--border-angle),oklch(0.5_0.2_300)_0%,oklch(0.65_0.25_300)_25%,oklch(0.6_0.28_340)_50%,oklch(0.65_0.25_300)_75%,oklch(0.5_0.2_300)_100%)] animate-border-spin">
                <span className="block h-full w-full rounded-[11px] bg-background/80 backdrop-blur-xl" />
            </span>

            {/* Glassmorphism fill */}
            <span className="absolute inset-px rounded-[11px] bg-linear-to-br from-white/12 via-white/5 to-transparent backdrop-blur-2xl" />

            {/* Cursor-tracking glare highlight */}
            <span
                className="absolute inset-0 rounded-[11px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.18) 0%, transparent 60%)`,
                }}
            />

            {/* Outer glow */}
            <span className="absolute -inset-1 rounded-2xl opacity-50 group-hover:opacity-80 blur-lg transition-opacity duration-300 bg-linear-to-r from-purple-600/40 via-pink-500/30 to-purple-600/40 pointer-events-none" />

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">
                {children}
            </span>
        </>
    );

    if (href) {
        return (
            <a
                ref={btnRef as React.RefObject<HTMLAnchorElement>}
                href={href}
                className={shared}
                onMouseMove={
                    handleMouseMove as React.MouseEventHandler<HTMLAnchorElement>
                }
            >
                {inner}
            </a>
        );
    }

    return (
        <button
            ref={btnRef as React.RefObject<HTMLButtonElement>}
            onClick={onClick}
            className={shared}
            onMouseMove={
                handleMouseMove as React.MouseEventHandler<HTMLButtonElement>
            }
        >
            {inner}
        </button>
    );
}
