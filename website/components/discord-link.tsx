"use client";

import DiscordIcon from "./icons/discord";
import GithubIcon from "./icons/github";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import * as React from "react";

export function DiscordLink({ className }: { className?: string }) {
  const [members, setMembers] = React.useState<number>();

  React.useEffect(() => {
    fetch("https://discord.com/api/guilds/968932220549103686/widget.json")
      .then((res) => res.json())
      .then((data) => setMembers(data.presence_count));
  }, []);

  return (
    <Button asChild size="sm" variant="ghost" className="shadow-none">
      <Link
        href="https://discord.gg/dkmfj3aGQN"
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        <DiscordIcon />
        {members === undefined ? (
          <Skeleton className="h-4 w-8" />
        ) : (
          <div className="flex w-8 items-center gap-1">
            <div className="relative inline-flex">
              <span className="absolute size-2 animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
            </div>
            <span className="text-muted-foreground text-xs tabular-nums">
              {members >= 1000
                ? `${(members / 1000).toFixed(1)}k`
                : members.toLocaleString()}
            </span>
          </div>
        )}
      </Link>
    </Button>
  );
}
