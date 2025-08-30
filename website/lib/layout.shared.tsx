import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import DiscordIcon from "@/components/DiscordIcon";

export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: "https://github.com/jj-vcs/jj",
    links: [
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
