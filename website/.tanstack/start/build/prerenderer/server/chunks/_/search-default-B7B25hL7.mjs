import { jsxs, jsx } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';
import { u as useI18n, f as useDocsSearch, g as useOnChange, S as SearchDialog, h as SearchDialogOverlay, i as SearchDialogContent, j as SearchDialogHeader, k as SearchDialogIcon, l as SearchDialogInput, m as SearchDialogClose, n as SearchDialogList, o as SearchDialogFooter, T as TagsList, p as TagsListItem } from './ssr.mjs';
import { useState, useMemo } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/index.js';
import 'file:///Users/conner/jj/website/node_modules/@tanstack/react-router/dist/esm/index.js';
import 'file:///Users/conner/jj/website/node_modules/next-themes/dist/index.mjs';
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

function DefaultSearchDialog({ defaultTag, tags = [], api, delayMs, type = "fetch", allowClear = false, links = [], footer, ...props }) {
  const { locale } = useI18n();
  const [tag, setTag] = useState(defaultTag);
  const { search, setSearch, query } = useDocsSearch(type === "fetch" ? {
    type: "fetch",
    api,
    locale,
    tag,
    delayMs
  } : {
    type: "static",
    from: api,
    locale,
    tag,
    delayMs
  });
  const defaultItems = useMemo(() => {
    if (links.length === 0)
      return null;
    return links.map(([name, link]) => ({
      type: "page",
      id: name,
      content: name,
      url: link
    }));
  }, [links]);
  useOnChange(defaultTag, (v) => {
    setTag(v);
  });
  return jsxs(SearchDialog, { search, onSearchChange: setSearch, isLoading: query.isLoading, ...props, children: [jsx(SearchDialogOverlay, {}), jsxs(SearchDialogContent, { children: [jsxs(SearchDialogHeader, { children: [jsx(SearchDialogIcon, {}), jsx(SearchDialogInput, {}), jsx(SearchDialogClose, {})] }), jsx(SearchDialogList, { items: query.data !== "empty" ? query.data : defaultItems })] }), jsxs(SearchDialogFooter, { children: [tags.length > 0 && jsx(TagsList, { tag, onTagChange: setTag, allowClear, children: tags.map((tag2) => jsx(TagsListItem, { value: tag2.value, children: tag2.name }, tag2.value)) }), footer] })] });
}

export { DefaultSearchDialog as default };
//# sourceMappingURL=search-default-B7B25hL7.mjs.map
