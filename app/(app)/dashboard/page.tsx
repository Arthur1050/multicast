"use client";

import { Badge } from "@/components/badge";
import { Button, buttonVariants } from "@/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { FriendListItem } from "@/components/friend-list-item";
import { Input } from "@/components/input";
import { ParticipantStrip } from "@/components/participant-strip";
import { SectionHeading } from "@/components/section-heading";
import Link from "next/link";

const activeRooms = [
  {
    title: "Interstellar: 10th Anniversary Rewatch",
    media: "Interstellar (2014)",
    viewers: "4.2K",
    participants: [
      { initials: "MC", status: "live" as const },
      { initials: "SJ", status: "online" as const },
      { initials: "DM", status: "online" as const },
    ],
  },
  {
    title: "Cyberpunk: Edgerunners Marathon",
    media: "Episode 4: Lucky You",
    viewers: "1.8K",
    participants: [
      { initials: "AW", status: "live" as const },
      { initials: "EV", status: "online" as const },
    ],
  },
  {
    title: "National Geographic: Deep Sea",
    media: "Ocean Wonders Part II",
    viewers: "920",
    participants: [
      { initials: "JR", status: "live" as const },
      { initials: "KL", status: "online" as const },
      { initials: "TN", status: "online" as const },
    ],
  },
];

const recommended = [
  { title: "The Silent Valley", meta: "Thriller • 2h 14m" },
  { title: "Neon Horizon", meta: "Sci-Fi • 1h 55m" },
  { title: "Director's Cut", meta: "Documentary • 1h 30m" },
  { title: "Sonic Pulse Live", meta: "Music • 3h 20m" },
  { title: "The Architect", meta: "Drama • 2h 05m" },
];

const friendsOnline = [
  { name: "Marcus Chen", status: "Watching Interstellar", statusType: "watching" as const },
  { name: "Sarah Jenkins", status: "In a private room", statusType: "online" as const },
  { name: "David Miller", status: "Away for 2h", statusType: "away" as const },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      {/* Main content */}
      <div className="min-w-0 flex-1 space-y-10">
        {/* Hero */}
        <section className="space-y-6">
          <div>
            <h1 className="font-display text-3xl font-bold tracking-[var(--tracking-display)] sm:text-4xl">
              Welcome back, Alex
            </h1>
            <p className="mt-2 text-base text-muted-foreground sm:text-lg">
              Ready to start a new cinematic journey? Paste a link and invite your crew.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
              placeholder="Paste YouTube, Twitch, or Movie URL..."
              className="flex-1"
            />
            <Link
              href="/create-session"
              className={buttonVariants()}
            >
              Create Room
            </Link>
          </div>
        </section>

        {/* Active Now */}
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <SectionHeading title="Active Now" />
            <Badge tone="live">
              <span className="mr-1 inline-block size-1.5 animate-pulse rounded-full bg-live" />
              Live
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Public watch parties you can join right now
          </p>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {activeRooms.map((room) => (
              <Card key={room.title} tone="interactive">
                <CardHeader>
                  <div className="flex items-center justify-between gap-2">
                    <Badge tone="live">● LIVE</Badge>
                    <span className="text-xs text-muted-foreground">{room.viewers} watching</span>
                  </div>
                  <CardTitle>{room.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{room.media}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <ParticipantStrip participants={room.participants} />
                    <Button size="sm" variant="secondary">Join Room</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recommended */}
        <section className="space-y-5">
          <SectionHeading
            title="Recommended for You"
            description="Based on your watch history with friends"
          />

          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
            {recommended.map((item) => (
              <div
                key={item.title}
                className="min-w-[160px] max-w-[200px] shrink-0 space-y-3"
              >
                <div className="aspect-[2/3] rounded-xl bg-card shadow-soft" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground truncate">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">{item.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Aside — Friends & Activity */}
      <aside className="w-full shrink-0 space-y-6 lg:w-72 xl:w-80">
        {/* Friends Online */}
        <Card tone="panel">
          <CardHeader>
            <CardTitle className="text-base">Friends Online</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            {friendsOnline.map((f) => (
              <FriendListItem
                key={f.name}
                name={f.name}
                status={f.status}
                statusType={f.statusType}
              />
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card tone="panel">
          <CardHeader>
            <CardTitle className="text-base">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Marcus and 3 others watched <span className="font-medium text-foreground">Dune: Part Two</span> last night.
            </p>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}
