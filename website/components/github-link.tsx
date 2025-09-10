"use client";

import GithubIcon from "./icons/github";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import * as React from "react";

export function GitHubLink({ className }: { className?: string }) {
  const [stars, setStars] = React.useState<number>();

  React.useEffect(() => {
    fetch("https://api.github.com/repos/jj-vcs/jj")
      .then((res) => res.json())
      .then((data) => setStars(data.stargazers_count));
  }, []);

  return (
    <Button asChild size="sm" variant="ghost" className="shadow-none">
      <Link
        href="https://github.com/jj-vcs/jj"
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        <GithubIcon />
        {stars === undefined ? (
          <Skeleton className="h-4 w-8" />
        ) : (
          <span className="text-muted-foreground w-8 text-xs tabular-nums">
            {`${(stars / 1000).toFixed(1)}k`}
          </span>
        )}
      </Link>
    </Button>
  );
}
