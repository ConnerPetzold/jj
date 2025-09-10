import DiscordIcon from "@/components/icons/discord";
import { VersionPicker } from "@/components/version";
import logo from "@/public/images/jj-logo.svg";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Jujutsu" height={32} />
          <span className="font-logo mt-[-5px] text-xl leading-none font-normal">
            Jujutsu
          </span>
        </div>
      ),
      children: (
        <div className="ml-4 flex items-center gap-2">
          <VersionPicker />
        </div>
      ),
    },
    githubUrl: "https://github.com/jj-vcs/jj",
    links: [
      {
        text: "Docs",
        url: "/docs",
      },
      {
        type: "icon",
        label: "Discord",
        icon: <DiscordIcon />,
        text: "Discord",
        url: "https://discord.gg/dkmfj3aGQN",
      },
    ],
  };
}
