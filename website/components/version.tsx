"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import React from "react";

type Version = {
  version: string;
  title: string;
  aliases: string[];
};

async function getRemoteVersions(): Promise<Version[]> {
  const response = await fetch("/versions.json");
  if (!response.ok) {
    return [];
  }
  const data = await response.json();
  return data as Version[];
}

export const remoteVersions = getRemoteVersions();

export function VersionPicker() {
  const pathname = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const [versions, setVersions] = React.useState<Version[]>([]);
  React.useEffect(() => {
    remoteVersions.then(setVersions);
  }, []);

  const currentVersion =
    versions.find(({ version, aliases }) => {
      return [version, ...aliases].some(
        (alias) =>
          pathname === `/${alias}` || pathname.startsWith(`/${alias}/`),
      );
    }) || versions.find(({ aliases }) => aliases.includes("latest"));

  return (
    <Select
      value={currentVersion?.version}
      onValueChange={(value) => {
        window.location.pathname = `/${value}`;
      }}
    >
      <SelectTrigger size="sm">
        <SelectValue placeholder="Version" />
      </SelectTrigger>
      <SelectContent>
        {versions.map(({ version, title, aliases }) => (
          <SelectItem key={version} value={version}>
            {title}{" "}
            <span className="text-muted-foreground">{aliases.join(", ")}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
