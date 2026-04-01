"use client";

import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { Checkbox } from "@/components/checkbox";
import { Field } from "@/components/field";
import { FriendListItem } from "@/components/friend-list-item";
import { Input } from "@/components/input";
import { SectionHeading } from "@/components/section-heading";
import {
  SegmentedControl,
  SegmentedControlItem,
} from "@/components/segmented-control";
import { Globe, Link as LinkIcon, Lock, Rocket, User, Users } from "lucide-react";

const friends = [
  { name: "Elena Vance", status: "Watching: Interstellar", statusType: "watching" as const },
  { name: "Marcus K. Royce", status: "Idle", statusType: "away" as const },
  { name: "Sarah Jenkins", status: "In a Room", statusType: "online" as const },
  { name: "Alex Wright", status: "Offline", statusType: "offline" as const },
];

export default function CreateSessionPage() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      {/* Form */}
      <div className="min-w-0 flex-1 space-y-8">
        <SectionHeading
          title="Create Session"
          description="Configure your cinematic experience and invite your squad."
        />

        <div className="space-y-6">
          {/* Content Source */}
          <Field label="Content Source">
            <div className="relative">
              <LinkIcon className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Paste YouTube, Vimeo, or Twitch URL..."
                className="pl-10"
              />
            </div>
          </Field>

          {/* Room Name */}
          <Field label="Room Name">
            <Input placeholder="Midnight Sci-Fi Marathon" />
          </Field>

          {/* Description */}
          <Field label="Description">
            <Input placeholder="Bring popcorn and theories" />
          </Field>

          {/* Privacy */}
          <Field label="Privacy">
            <SegmentedControl defaultValue="public" className="w-full sm:w-auto">
              <SegmentedControlItem value="public">
                <Globe className="mr-2 size-4" />
                Public
              </SegmentedControlItem>
              <SegmentedControlItem value="private">
                <Lock className="mr-2 size-4" />
                Private
              </SegmentedControlItem>
            </SegmentedControl>
          </Field>

          {/* Playback Control */}
          <Field label="Playback Control">
            <SegmentedControl defaultValue="host" className="w-full sm:w-auto">
              <SegmentedControlItem value="everyone">
                <Users className="mr-2 size-4" />
                Everyone
              </SegmentedControlItem>
              <SegmentedControlItem value="host">
                <User className="mr-2 size-4" />
                Host Only
              </SegmentedControlItem>
            </SegmentedControl>
          </Field>
        </div>
      </div>

      {/* Invite Aside */}
      <aside className="w-full shrink-0 space-y-6 lg:w-72 xl:w-80">
        <Card tone="panel">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Invite Friends</CardTitle>
              <Badge tone="success">12 Online</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-1">
            {friends.map((f) => (
              <FriendListItem
                key={f.name}
                name={f.name}
                status={f.status}
                statusType={f.statusType}
                action={
                  <Checkbox aria-label={`Invite ${f.name}`} />
                }
              />
            ))}
          </CardContent>
        </Card>

        {/* Launch Button */}
        <Button size="xl" className="w-full">
          <Rocket className="size-5" />
          Launch Cinema Room
        </Button>

        {/* Room Preview */}
        <Card tone="default" className="overflow-hidden">
          <div className="flex aspect-video items-center justify-center bg-panel text-sm text-muted-foreground">
            Room Preview
          </div>
        </Card>
      </aside>
    </div>
  );
}
