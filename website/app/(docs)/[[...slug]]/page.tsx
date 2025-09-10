import { source } from "@/lib/source";
import { cn } from "@/lib/utils";
import { getMDXComponents } from "@/mdx-components";
import { TOCProvider } from "fumadocs-ui/components/layout/toc";
import {
  PageBreadcrumb,
  PageLastUpdate,
  PageTOC,
  PageTOCItems,
  PageTOCTitle,
  RootProps,
} from "fumadocs-ui/layouts/docs/page";
import { createRelativeLink } from "fumadocs-ui/mdx";
import {
  DocsBody,
  DocsDescription,
  DocsTitle,
  EditOnGitHub,
} from "fumadocs-ui/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function Page(props: PageProps<"/[[...slug]]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  const tocEnabled = !page.data.full && page.data.toc.length > 0;

  return (
    <PageRoot toc={tocEnabled ? { toc: page.data.toc } : false}>
      <div className="flex flex-1 flex-col">
        <article
          className={cn(
            "mx-auto flex w-full min-w-0 flex-col gap-4 px-4 py-8 md:px-6",
            !page.data.full && "max-w-2xl",
          )}
        >
          <PageBreadcrumb />
          <div className="flex flex-col gap-2 border-b pb-6">
            <DocsTitle>{page.data.title}</DocsTitle>
            <DocsDescription className="mb-0">
              {page.data.description}
            </DocsDescription>
          </div>

          <DocsBody>
            <MDXContent
              components={getMDXComponents({
                a: createRelativeLink(source, page),
              })}
            />
          </DocsBody>
          <div className="flex flex-row flex-wrap items-center justify-between gap-4 empty:hidden">
            <EditOnGitHub
              href={`https://github.com/jj-vcs/jj/blob/main/docs/${page.path.startsWith("/") ? page.path.slice(1) : page.path}`}
            />

            {!!page.data.lastModified && (
              <PageLastUpdate date={new Date(page.data.lastModified)} />
            )}
          </div>
        </article>
      </div>

      <PageTOC
        className={cn(
          "sticky h-[calc(100svh-var(--fd-nav-height))]",
          !tocEnabled && "invisible",
        )}
      >
        <PageTOCTitle />
        <PageTOCItems variant="clerk" />
      </PageTOC>
    </PageRoot>
  );
}

function PageRoot({ toc = false, children, ...props }: RootProps) {
  const content = (
    <div
      {...props}
      className={cn("flex w-full flex-1 items-stretch", props.className)}
    >
      {children}
    </div>
  );

  if (toc) return <TOCProvider {...toc}>{content}</TOCProvider>;
  return content;
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<"/[[...slug]]">,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title:
      page.data.title === "Jujutsu"
        ? "Jujutsu"
        : `${page.data.title} | Jujutsu`,
    description: page.data.description,
  };
}
