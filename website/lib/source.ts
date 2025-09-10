import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";
import { icons } from "lucide-react";
import { createElement } from "react";

export const source = loader({
  source: docs.toFumadocsSource(),
  baseUrl: "/",
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

            if (file?.format === "page") {
              node.name = file.data.sidebarTitle || file.data.title;
            }
          }
          return node;
        },
      },
    ],
  },
});
