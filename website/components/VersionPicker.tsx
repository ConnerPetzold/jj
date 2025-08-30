"use client";

import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { ChevronsUpDownIcon, SearchSlashIcon } from "lucide-react";
import { Button } from "./ui/button";
import { compare as semverCompare } from "semver";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { URL } from "@/lib/env";

type Version = {
  version: string;
  url: string;
};

const getRemoteVersions = async () => {
  const response = await fetch(
    "https://jj-vcs-demo-site.vercel.app/versions.json"
  );
  const data = await response.json();
  return data as Version[];
};

export const remoteVersions = getRemoteVersions();

export function VersionPicker() {
  const [open, setOpen] = React.useState(false);
  const [versions, setVersions] = React.useState<Version[]>([]);
  React.useEffect(() => {
    remoteVersions.then(setVersions);
  }, []);

  const sortedVersions = versions.sort((a, b) =>
    semverCompare(b.version, a.version)
  );

  const currentVersion = versions.find((version) =>
    version.url.includes(URL)
  ) || { version: "Canary", url: "/" };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-[100px]"
        >
          <span className={cn(versions.length <= 0 && "invisible")}>
            {currentVersion.version}
          </span>
          <ChevronsUpDownIcon size={10} className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[120px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Version..." />
          <CommandList>
            <CommandEmpty className="flex justify-center items-center py-2">
              <SearchSlashIcon className="opacity-30" />
            </CommandEmpty>
            <CommandGroup>
              {[{ version: "Canary", url: "/" }, ...sortedVersions].map(
                ({ version, url }) => (
                  <CommandItem
                    key={version}
                    value={version}
                    asChild
                    onSelect={() => {
                      setOpen(false);
                    }}
                  >
                    <Link
                      href={url}
                      className={cn(version === "Canary" && "text-fd-warning")}
                    >
                      {version}
                    </Link>
                  </CommandItem>
                )
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
