import { DocsLayout } from "@/components/docs-layout";
import { source } from "@/lib/source";
import { SidebarProvider, TreeContextProvider } from "fumadocs-ui/provider";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <TreeContextProvider tree={source.pageTree}>
      <SidebarProvider>
        <DocsLayout>{children}</DocsLayout>
      </SidebarProvider>
    </TreeContextProvider>
  );
}
