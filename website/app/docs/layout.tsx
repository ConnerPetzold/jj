import Logo from "@/components/Logo";
import { VersionPicker } from "@/components/VersionPicker";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      {...baseOptions()}
      nav={{
        title: (
          <>
            <Logo className="h-8" />
            <span className="text-2xl font-logo font-normal leading-none mt-[-5px]">
              Jujutsu
            </span>
          </>
        ),
        children: (
          <div className="grow ml-2">
            <VersionPicker />
          </div>
        ),
      }}
      tree={source.pageTree}
      githubUrl="https://github.com/jj-vcs/jj"
    >
      {children}
    </DocsLayout>
  );
}
