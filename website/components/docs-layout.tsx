import { DocsSidebar } from "./docs-sidebar";
import { SidebarProvider } from "./ui/sidebar";
import { source } from "@/lib/source";
import { ReactNode } from "react";

export function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container-wrapper flex flex-1 flex-col transition-[padding] [--fd-toc-width:286px]">
      <SidebarProvider className="3xl:container 3xl:px-0 min-h-min flex-1 items-start px-0 [--fd-sidebar-width:220px] [--sidebar-width:220px] [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--fd-sidebar-width:240px] lg:[--sidebar-width:240px] lg:[--top-spacing:calc(var(--spacing)*4)]">
        <DocsSidebar tree={source.pageTree} />
        <div className="h-full w-full">{children}</div>
      </SidebarProvider>
    </div>
  );
}
