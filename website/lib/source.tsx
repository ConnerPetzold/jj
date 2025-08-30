import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";
import { icons } from "lucide-react";
import { createElement } from "react";

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (icon && icon in icons) {
      return createElement(icons[icon as keyof typeof icons]);
    }
  },
  pageTree: {
    transformers: [
      {
        file(node, filename) {
          if (filename) {
            const file = this.storage.read(filename);

            if (file?.format === "page" && file.data.isCommand) {
              node.name = (
                <code className="bg-fd-muted border px-1 py-0.5 rounded font-mono text-sm leading-none">
                  {node.name}
                </code>
              );
            }
          }
          return node;
        },
      },
    ],
  },
});
