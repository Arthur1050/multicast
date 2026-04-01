"use client";

import { Avatar } from "@/components/avatar";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { FriendListItem } from "@/components/friend-list-item";
import { Input } from "@/components/input";
import { SectionHeading } from "@/components/section-heading";
import { StatCard } from "@/components/stat-card";
import { Check, MessageCircle, Search, X } from "lucide-react";

const stats = [
  { label: "Sessions", value: "128" },
  { label: "Followers", value: "1.2k" },
  { label: "Rank", value: "#45" },
];

const recentSessions = [
  { title: "Neo-Noir Night", subtitle: "Blade Runner 2049", date: "Oct 12", participants: 14 },
  { title: "Classic Marathon", subtitle: "The Godfather Part II", date: "Oct 10", participants: 8 },
];

const friends = [
  { name: "Leo.Cinema", status: "Watching Dune: Part Two", statusType: "watching" as const },
  { name: "Jade_Runner", status: "Available to join", statusType: "online" as const },
  { name: "Marcus.A", status: "Offline • 2h ago", statusType: "offline" as const },
  { name: "Elena_The_Great", status: "Offline • 5h ago", statusType: "offline" as const },
];

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      {/* Main content */}
      <div className="min-w-0 flex-1 space-y-8">
        {/* Profile Card */}
        <Card tone="panel" className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="shrink-0">
            <Avatar initials="AR" size="lg" status="online" />
          </div>
          <div className="min-w-0 flex-1 space-y-3">
            <div>
              <h1 className="font-display text-2xl font-bold tracking-[var(--tracking-display)]">
                Alex Rivers
              </h1>
              <p className="text-sm text-primary">
                @arivers_cinema • Pro Member
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              Cinephile, midnight streamer, and lover of all things noir. Currently hosting &quot;Neon Nights&quot; sessions every Friday.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              {stats.map((s) => (
                <StatCard
                  key={s.label}
                  label={s.label}
                  value={s.value}
                  className="min-w-[100px] flex-1 sm:flex-none"
                />
              ))}
            </div>
          </div>
        </Card>

        {/* Recent Sessions */}
        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <SectionHeading title="Recent Sessions" />
            <Button variant="ghost" size="sm">View All Activity</Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {recentSessions.map((session) => (
              <Card key={session.title} tone="interactive">
                <CardHeader>
                  <CardTitle>{session.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{session.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{session.date}</span>
                    <span>{session.participants} participants</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Connections Aside */}
      <aside className="w-full shrink-0 space-y-6 lg:w-72 xl:w-80">
        {/* Search */}
        <div className="relative">
          <Search className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Find friends by tag..."
            className="pl-10"
          />
        </div>

        {/* Pending Invites */}
        <Card tone="panel">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Pending Invites</CardTitle>
              <Badge tone="live">2 New</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <FriendListItem
              name="Sarah_VFX"
              status="Mutual friend: Leo"
              statusType="online"
              action={
                <div className="flex items-center gap-1">
                  <button className="flex size-8 items-center justify-center rounded-lg text-success transition-colors hover:bg-success/10 cursor-pointer" aria-label="Accept">
                    <Check className="size-4" />
                  </button>
                  <button className="flex size-8 items-center justify-center rounded-lg text-danger transition-colors hover:bg-danger/10 cursor-pointer" aria-label="Decline">
                    <X className="size-4" />
                  </button>
                </div>
              }
            />
          </CardContent>
        </Card>

        {/* Friends List */}
        <Card tone="panel">
          <CardHeader>
            <CardTitle className="text-base">Friends List</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            {friends.map((f) => (
              <FriendListItem
                key={f.name}
                name={f.name}
                status={f.status}
                statusType={f.statusType}
                action={
                  <button className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground cursor-pointer" aria-label={`Message ${f.name}`}>
                    <MessageCircle className="size-4" />
                  </button>
                }
              />
            ))}
          </CardContent>
        </Card>

        <Button variant="tertiary" className="w-full">
          Show More Friends
        </Button>
      </aside>
    </div>
  );
}
