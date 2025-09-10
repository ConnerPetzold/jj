"use client";

import { DiscordLink } from "./discord-link";
import { GitHubLink } from "./github-link";
import { ModeSwitcher } from "./mode-switcher";
import { VersionPicker } from "./version";
import { cn } from "@/lib/utils";
import logo from "@/public/images/jj-logo.svg";
import Link from "fumadocs-core/link";
import { LargeSearchToggle } from "fumadocs-ui/components/layout/search-toggle";
import { BaseLinkItem } from "fumadocs-ui/layouts/links";
import { useNav, useSidebar } from "fumadocs-ui/provider";
import Image from "next/image";
import { ComponentProps } from "react";

export function Navbar({ ...props }: ComponentProps<"header">) {
  const { open, collapsed } = useSidebar();
  const { isTransparent } = useNav();

  return (
    <header
      className={cn(
        "container-wrapper on-root:[--fd-nav-height:56px] md:on-root:[--fd-nav-height:64px] 3xl:px-0 sticky top-(--fd-banner-height) right-(--removed-body-scroll-bar-size,0) left-0 z-50 flex h-(--fd-nav-height) flex-col border-b px-6 backdrop-blur-sm transition-colors",
        (!isTransparent || open) && "bg-fd-background/80",
        props.className,
      )}
    >
      <div className="3xl:container flex flex-1 items-center gap-3 **:data-[slot=separator]:!h-4">
        <div className="flex flex-1 items-center gap-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 font-semibold"
          >
            <Image src={logo} alt="Jujutsu" height={32} />
            <span className="font-logo mt-[-5px] text-xl leading-none font-normal">
              Jujutsu
            </span>
            <VersionPicker />
          </Link>

          <div className="flex items-center gap-2">
            {/* <NavbarLinkItem
              item={{
                url: "/docs",
              }}
            >
              Docs
            </NavbarLinkItem> */}
          </div>
        </div>

        <LargeSearchToggle className="h-8 w-64 text-sm" />

        <div className="hidden items-center md:flex">
          <GitHubLink />
          <DiscordLink />
          <ModeSwitcher />
        </div>
      </div>
    </header>
  );
}

function NavbarLinkItem({
  className,
  ...props
}: ComponentProps<typeof BaseLinkItem>) {
  return (
    <BaseLinkItem
      {...props}
      className={cn(
        "text-fd-muted-foreground hover:text-fd-accent-foreground data-[active=true]:text-fd-primary text-sm transition-colors",
        className,
      )}
    />
  );
}
