import { U as createContentHighlighter } from './ssr.mjs';
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

function groupResults(hits) {
  const grouped = [];
  const scannedUrls = /* @__PURE__ */ new Set();
  for (const hit of hits) {
    if (!scannedUrls.has(hit.url)) {
      scannedUrls.add(hit.url);
      grouped.push({
        id: hit.url,
        type: "page",
        url: hit.url,
        content: hit.title
      });
    }
    grouped.push({
      id: hit.objectID,
      type: hit.content === hit.section ? "heading" : "text",
      url: hit.section_id ? `${hit.url}#${hit.section_id}` : hit.url,
      content: hit.content
    });
  }
  return grouped;
}
async function searchDocs(query, { indexName, onSearch, client, locale, tag }) {
  if (query.trim().length === 0) return [];
  const result = onSearch ? await onSearch(query, tag, locale) : await client.searchForHits({
    requests: [
      {
        type: "default",
        indexName,
        query,
        distinct: 5,
        hitsPerPage: 10,
        filters: tag ? `tag:${tag}` : void 0
      }
    ]
  });
  const highlighter = createContentHighlighter(query);
  return groupResults(result.results[0].hits).flatMap((hit) => {
    var _a;
    if (hit.type === "page") {
      return {
        ...hit,
        contentWithHighlights: (_a = hit.contentWithHighlights) != null ? _a : highlighter.highlight(hit.content)
      };
    }
    return [];
  });
}

export { groupResults, searchDocs };
//# sourceMappingURL=algolia-KPRGMSJO-DSC5A4gI.mjs.map
