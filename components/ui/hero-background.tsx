"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function HeroBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePos({ x, y });
    }, []);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        el.addEventListener("mousemove", handleMouseMove);
        return () => el.removeEventListener("mousemove", handleMouseMove);
    }, [handleMouseMove]);

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden">
            {/* Primary cursor-following glow */}
            <div
                className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-[120px] transition-all duration-700 ease-out pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, oklch(0.65 0.25 300) 0%, oklch(0.55 0.28 320) 40%, transparent 70%)",
                    left: `${mousePos.x}%`,
                    top: `${mousePos.y}%`,
                    transform: "translate(-50%, -50%)",
                }}
            />

            {/* Secondary pink glow — follows cursor with offset */}
            <div
                className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-[100px] transition-all duration-1000 ease-out pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, oklch(0.6 0.28 340) 0%, transparent 70%)",
                    left: `${mousePos.x + 15}%`,
                    top: `${mousePos.y - 10}%`,
                    transform: "translate(-50%, -50%)",
                }}
            />

            {/* Ambient floating orbs */}
            <div className="absolute top-[10%] left-[15%] w-72 h-72 rounded-full bg-purple-600/10 blur-[80px] animate-float-slow pointer-events-none" />
            <div className="absolute bottom-[15%] right-[10%] w-96 h-96 rounded-full bg-pink-600/8 blur-[100px] animate-float-slower pointer-events-none" />
            <div className="absolute top-[40%] right-[25%] w-48 h-48 rounded-full bg-blue-500/10 blur-[60px] animate-float-reverse pointer-events-none" />

            {/* Glassmorphism panels — decorative floating glass shards */}
            <div className="absolute top-[8%] right-[12%] w-48 h-32 rounded-2xl border border-white/8 bg-white/3 backdrop-blur-md rotate-12 animate-float-slow pointer-events-none" />
            <div className="absolute bottom-[20%] left-[8%] w-36 h-24 rounded-2xl border border-white/6 bg-white/2 backdrop-blur-sm -rotate-6 animate-float-slower pointer-events-none" />
            <div className="absolute top-[55%] right-[35%] w-24 h-16 rounded-xl border border-purple-400/10 bg-purple-400/3 backdrop-blur-sm rotate-3 animate-float-reverse pointer-events-none" />

            {/* Film grain / noise overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]" />

            {/* Cinema film-strip lines */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
                <div className="absolute left-[5%] top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/40 to-transparent" />
                <div className="absolute left-[8%] top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/20 to-transparent" />
                <div className="absolute right-[5%] top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/40 to-transparent" />
                <div className="absolute right-[8%] top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/20 to-transparent" />
            </div>

            {/* Cinema sprocket holes */}
            <div className="absolute left-[5.5%] top-0 bottom-0 flex flex-col justify-around pointer-events-none opacity-[0.04]">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="w-3 h-4 rounded-sm border border-white/30" />
                ))}
            </div>
            <div className="absolute right-[5.5%] top-0 bottom-0 flex flex-col justify-around pointer-events-none opacity-[0.04]">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="w-3 h-4 rounded-sm border border-white/30" />
                ))}
            </div>

            {/* Subtle horizontal scanlines */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.015] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_4px)]" />
        </div>
    );
}
