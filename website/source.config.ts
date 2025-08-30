import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections#define-docs
export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema.extend({
      isCommand: z.boolean().default(false),
    }),
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  lastModifiedTime: "git",
  mdxOptions: {
    rehypeCodeOptions: {
      inline: "tailing-curly-colon",
      theme: "github-dark-default",
      fallbackLanguage: "ansi",
    },
  },
});
