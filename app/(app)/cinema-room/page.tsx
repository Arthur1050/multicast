"use client";

import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { ChatInput } from "@/components/chat-input";
import { ChatMessage } from "@/components/chat-message";
import { ParticipantStrip } from "@/components/participant-strip";
import { TabsList, TabsTrigger } from "@/components/tabs";
import { VideoPlayer } from "@/components/video-player";
import { useSidebarStore } from "@/lib/stores/sidebar-store";
import {
  Camera,
  CameraOff,
  LogOut,
  Mic,
  MicOff,
  Share2,
  Star,
} from "lucide-react";
import { useEffect } from "react";

const participants = [
  { initials: "MC", status: "live" as const },
  { initials: "SJ", status: "online" as const },
  { initials: "DM", status: "online" as const },
  { initials: "AW", status: "online" as const },
];

export default function CinemaRoomPage() {
  const setCollapsed = useSidebarStore((s) => s.setCollapsed);

  useEffect(() => {
    setCollapsed(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col gap-6 xl:flex-row">
      {/* Main — player + metadata */}
      <div className="min-w-0 flex-1 space-y-6">
        {/* Presence strip */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <ParticipantStrip
              participants={participants}
              overflowCount={12}
            />
            <span className="text-sm text-muted-foreground">+12 watching</span>
          </div>
          <Button size="sm" variant="secondary">
            Invite More
          </Button>
        </div>

        {/* Sync status toast */}
        <div className="flex flex-wrap items-center justify-center gap-3 rounded-xl bg-card px-4 py-2.5 text-sm">
          <span className="text-muted-foreground">João paused the video</span>
          <Badge tone="success">Synced</Badge>
        </div>

        {/* Video Player placeholder */}
        <VideoPlayer />

        {/* Movie metadata */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-2">
              <h1 className="font-display text-2xl font-bold tracking-[var(--tracking-display)] sm:text-3xl">
                Inception (2010)
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  148 min
                </span>
                <span className="flex items-center gap-1">
                  <Star className="size-4 text-warning" />
                  8.8/10
                </span>
                <Badge tone="primary">Sci-Fi</Badge>
                <Badge tone="primary">Action</Badge>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button size="sm" variant="secondary">
                <Share2 className="size-4" />
                <span className="hidden sm:inline">Share Room</span>
              </Button>
              <Button size="sm" variant="danger">
                <LogOut className="size-4" />
                <span className="hidden sm:inline">Leave</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Chat aside */}
      <aside className="flex w-full shrink-0 flex-col xl:w-80 xl:max-h-[calc(100vh-8rem)]">
        <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-panel xl:flex-1">
          {/* Tabs */}
          <div className="border-b border-border px-4 py-3">
            <TabsList defaultValue="Chat">
              <TabsTrigger>Chat</TabsTrigger>
              <TabsTrigger>Participants</TabsTrigger>
            </TabsList>
          </div>

          {/* Messages */}
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-4">
            <ChatMessage variant="system">
              Room Created • 14:00
            </ChatMessage>

            <ChatMessage variant="other" author="Sarah" timestamp="14:10">
              The soundtrack here is actually insane. Zimmer outdid himself. 🎧
            </ChatMessage>

            <ChatMessage variant="self" author="Me" timestamp="14:12">
              Wait for the kick scene, it&apos;s about to start!
            </ChatMessage>

            <p className="text-center text-xs italic text-muted-foreground">
              Marcus is typing...
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span className="text-primary">❤️</span>
              <span>Sarah liked the scene</span>
            </div>
          </div>

          {/* Input + controls */}
          <div className="border-t border-border px-4 py-3 space-y-3">
            <ChatInput />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground cursor-pointer" aria-label="Microphone">
                  <MicOff className="size-4" />
                </button>
                <button className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground cursor-pointer" aria-label="Camera">
                  <CameraOff className="size-4" />
                </button>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="inline-block size-2 rounded-full bg-success" />
                Sync Active
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
