"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { isActive } from "@/lib/is-active";
import type { source } from "@/lib/source";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { useTreePath } from "fumadocs-ui/provider";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Node = (typeof source.pageTree.children)[number];
type Folder = Node & { type: "folder" };
type Page = Node & { type: "page" };

export function DocsSidebar({
  tree,
  ...props
}: React.ComponentProps<typeof Sidebar> & { tree: typeof source.pageTree }) {
  return (
    <Sidebar
      className="sticky top-[calc(var(--fd-nav-height)+1px)] z-30 hidden h-[calc(100svh-var(--fd-nav-height))] bg-transparent lg:flex"
      collapsible="none"
      {...props}
    >
      <SidebarContent className="no-scrollbar overflow-x-hidden pb-12">
        <div className="h-(--top-spacing) shrink-0" />
        <SidebarGroup>
          <SidebarMenu>
            {tree.children.map((item) => {
              if (item.type === "page") {
                return <SidebarPage key={item.url} page={item} />;
              } else if (item.type === "folder") {
                return <SidebarFolder key={item.$id} folder={item} />;
              }
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

const itemVariants = cva(
  "relative flex flex-row items-center gap-2 rounded-lg p-2 text-start [overflow-wrap:anywhere] [&_svg]:size-4 [&_svg]:shrink-0",
);

function SidebarFolder({ folder }: { folder: Folder }) {
  const pathname = usePathname();
  const active =
    folder.index !== undefined && isActive(folder.index.url, pathname, false);
  const path = useTreePath();
  const [open, setOpen] = useState(active || path.includes(folder));

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="group/collapsible"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          {folder.index ? (
            <SidebarMenuSubButton asChild isActive={active}>
              <Link
                href={folder.index.url}
                className={cn(itemVariants(), "w-full cursor-pointer")}
                onClick={(e) => {
                  if (
                    e.target instanceof Element &&
                    e.target.matches("[data-icon], [data-icon] *")
                  ) {
                    setOpen(!open);
                    e.preventDefault();
                  } else {
                    setOpen(active ? !open : true);
                  }
                }}
              >
                <span>{folder.name}</span>
                <ChevronRight
                  className="ml-auto group-data-[state=open]/collapsible:rotate-90"
                  data-icon="true"
                />
              </Link>
            </SidebarMenuSubButton>
          ) : (
            <SidebarMenuSubButton
              className={cn(itemVariants(), "w-full cursor-pointer")}
            >
              <span>{folder.name}</span>
              <ChevronRight className="ml-auto group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuSubButton>
          )}
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {folder.children.map((item) => {
              if (item.type === "page") {
                return <SidebarPage key={item.url} page={item} />;
              } else if (item.type === "folder") {
                return <SidebarFolder key={item.$id} folder={item} />;
              }
            })}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}

function SidebarPage({ page }: { page: Page }) {
  const pathname = usePathname();
  const active = isActive(page.url, pathname, false);

  return (
    <SidebarMenuSubItem key={page.url}>
      <SidebarMenuSubButton asChild isActive={active}>
        <Link href={page.url} className={cn(itemVariants(), "w-full")}>
          <span>{page.name}</span>
        </Link>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  );
}
