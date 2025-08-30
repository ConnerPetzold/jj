import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";
import Logo from "@/components/Logo";
import { VersionPicker } from "@/components/VersionPicker";

export default function Layout({ children }: LayoutProps<"/">) {
  const base = baseOptions();
  return (
    <HomeLayout
      {...base}
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
          <div className="ml-2">
            <VersionPicker />
          </div>
        ),
      }}
      links={[{ text: "Docs", url: "/docs" }, ...(base.links ?? [])]}
    >
      {children}
    </HomeLayout>
  );
}
