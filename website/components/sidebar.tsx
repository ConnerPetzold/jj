"use client";

import { cva } from "class-variance-authority";
import Link from "fumadocs-core/link";
import type { PageTree } from "fumadocs-core/server";
import { isActive } from "fumadocs-ui/utils/is-active";
import { ExternalLink } from "lucide-react";
import { usePathname } from "next/navigation";

const itemVariants = cva(
  "relative flex flex-row items-center gap-2 rounded-xl p-2 ps-(--sidebar-item-offset) text-start text-fd-muted-foreground [overflow-wrap:anywhere] [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      active: {
        true: "bg-fd-primary/10 text-fd-primary",
        false:
          "transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none",
      },
    },
  }
);

export function SidebarItem({
  item: { name, url, icon, external },
}: {
  item: PageTree.Item;
}) {
  const pathname = usePathname();
  const active = url !== undefined && isActive(url, pathname, false);
  return (
    <Link data-active={active} className={itemVariants({ active })} prefetch>
      {icon ?? (external ? <ExternalLink /> : null)}
      {name}
    </Link>
  );
}
