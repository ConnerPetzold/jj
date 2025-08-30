import { U as createContentHighlighter, V as removeUndefined } from './ssr.mjs';
import 'file:///Users/conner/jj/website/node_modules/@tanstack/react-router/dist/esm/index.js';
import 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';
import 'file:///Users/conner/jj/website/node_modules/next-themes/dist/index.mjs';
import 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/index.js';
import 'file:///Users/conner/jj/website/node_modules/@radix-ui/react-direction/dist/index.mjs';
import 'file:///Users/conner/jj/website/node_modules/.pnpm/tailwind-merge@3.3.1/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import 'file:///Users/conner/jj/website/node_modules/.pnpm/@radix-ui+react-dialog@1.1.15_npkkj65iy67fkpin3gzi42ixdq/node_modules/@radix-ui/react-dialog/dist/index.mjs';
import 'file:///Users/conner/jj/website/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs';
import 'file:///Users/conner/jj/website/node_modules/scroll-into-view-if-needed/dist/index.js';
import 'file:///Users/conner/jj/website/node_modules/@orama/orama/dist/esm/index.js';
import 'file:///Users/conner/jj/website/node_modules/fumadocs-mdx/dist/runtime/vite/server.js';
import 'file:///Users/conner/jj/website/node_modules/github-slugger/index.js';
import 'file:///Users/conner/jj/website/node_modules/@radix-ui/react-collapsible/dist/index.mjs';
import 'file:///Users/conner/jj/website/node_modules/@radix-ui/react-tabs/dist/index.mjs';
import 'file:///Users/conner/jj/website/node_modules/tiny-invariant/dist/esm/tiny-invariant.js';
import 'file:///Users/conner/jj/website/node_modules/@tanstack/router-core/dist/esm/index.js';
import 'file:///Users/conner/jj/website/node_modules/@tanstack/router-core/dist/esm/ssr/client.js';
import 'node:async_hooks';
import 'file:///Users/conner/jj/website/node_modules/@tanstack/history/dist/esm/index.js';
import 'file:///Users/conner/jj/website/node_modules/@tanstack/router-core/dist/esm/ssr/server.js';
import 'file:///Users/conner/jj/website/node_modules/h3/dist/index.mjs';
import 'file:///Users/conner/jj/website/node_modules/@tanstack/react-router/dist/esm/ssr/server.js';

async function searchDocs(query, options) {
  const highlighter = createContentHighlighter(query);
  const list = [];
  const { index = "default", client, params: extraParams = {}, tag } = options;
  if (index === "crawler") {
    const result2 = await client.search({
      ...extraParams,
      term: query,
      where: {
        category: tag ? {
          eq: tag.slice(0, 1).toUpperCase() + tag.slice(1)
        } : void 0,
        ...extraParams.where
      },
      limit: 10
    });
    if (!result2) return list;
    for (const hit of result2.hits) {
      const doc = hit.document;
      list.push(
        {
          id: hit.id,
          type: "page",
          content: doc.title,
          contentWithHighlights: highlighter.highlight(doc.title),
          url: doc.path
        },
        {
          id: "page" + hit.id,
          type: "text",
          content: doc.content,
          contentWithHighlights: highlighter.highlight(doc.content),
          url: doc.path
        }
      );
    }
    return list;
  }
  const params = {
    ...extraParams,
    term: query,
    where: removeUndefined({
      tag,
      ...extraParams.where
    }),
    groupBy: {
      properties: ["page_id"],
      maxResult: 7,
      ...extraParams.groupBy
    }
  };
  const result = await client.search(params);
  if (!result || !result.groups) return list;
  for (const item of result.groups) {
    let addedHead = false;
    for (const hit of item.result) {
      const doc = hit.document;
      if (!addedHead) {
        list.push({
          id: doc.page_id,
          type: "page",
          content: doc.title,
          contentWithHighlights: highlighter.highlight(doc.title),
          url: doc.url
        });
        addedHead = true;
      }
      list.push({
        id: doc.id,
        content: doc.content,
        contentWithHighlights: highlighter.highlight(doc.content),
        type: doc.content === doc.section ? "heading" : "text",
        url: doc.section_id ? `${doc.url}#${doc.section_id}` : doc.url
      });
    }
  }
  return list;
}

export { searchDocs };
//# sourceMappingURL=orama-cloud-TXCWJTK3-CC6Fb5jM.mjs.map
