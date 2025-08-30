import { jsx, jsxs } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';
import { D as DocsLayout, b as baseOptions } from './layout.shared-JiWhm5gR.mjs';
import { useMemo } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/index.js';
import { R as Route, d as docs, D as DocsPage, a as DocsTitle, b as DocsDescription, c as DocsBody, e as defaultMdxComponents } from './ssr.mjs';
import { createClientLoader } from 'file:///Users/conner/jj/website/node_modules/fumadocs-mdx/dist/runtime/vite/server.js';
import 'file:///Users/conner/jj/website/node_modules/.pnpm/tailwind-merge@3.3.1/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import 'file:///Users/conner/jj/website/node_modules/@radix-ui/react-scroll-area/dist/index.mjs';
import 'file:///Users/conner/jj/website/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs';
import 'file:///Users/conner/jj/website/node_modules/@radix-ui/react-presence/dist/index.mjs';
import 'file:///Users/conner/jj/website/node_modules/.pnpm/@radix-ui+react-popover@1.1.15_npkkj65iy67fkpin3gzi42ixdq/node_modules/@radix-ui/react-popover/dist/index.mjs';
import 'file:///Users/conner/jj/website/node_modules/next-themes/dist/index.mjs';
import 'file:///Users/conner/jj/website/node_modules/@radix-ui/react-select/dist/index.mjs';
import 'file:///Users/conner/jj/website/node_modules/lucide-react/dist/cjs/lucide-react.js';
import 'file:///Users/conner/jj/website/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs';
import 'file:///Users/conner/jj/website/node_modules/@tanstack/react-router/dist/esm/index.js';
import 'file:///Users/conner/jj/website/node_modules/@radix-ui/react-direction/dist/index.mjs';
import 'file:///Users/conner/jj/website/node_modules/.pnpm/@radix-ui+react-dialog@1.1.15_npkkj65iy67fkpin3gzi42ixdq/node_modules/@radix-ui/react-dialog/dist/index.mjs';
import 'file:///Users/conner/jj/website/node_modules/scroll-into-view-if-needed/dist/index.js';
import 'file:///Users/conner/jj/website/node_modules/@orama/orama/dist/esm/index.js';
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

const clientLoader = createClientLoader(docs.doc, {
  id: "docs",
  component({
    toc,
    frontmatter,
    default: MDX
  }) {
    return /* @__PURE__ */ jsxs(DocsPage, { toc, children: [
      /* @__PURE__ */ jsx(DocsTitle, { children: frontmatter.title }),
      /* @__PURE__ */ jsx(DocsDescription, { children: frontmatter.description }),
      /* @__PURE__ */ jsx(DocsBody, { children: /* @__PURE__ */ jsx(MDX, { components: {
        ...defaultMdxComponents
      } }) })
    ] });
  }
});
function Page() {
  const data = Route.useLoaderData();
  const Content = clientLoader.getComponent(data.path);
  const tree = useMemo(() => transformPageTree(data.tree), [data.tree]);
  const base = baseOptions();
  return /* @__PURE__ */ jsx(DocsLayout, { ...base, tree, children: /* @__PURE__ */ jsx(Content, {}) });
}
function transformPageTree(tree) {
  function transform(item) {
    if (typeof item.icon !== "string") return item;
    return {
      ...item,
      icon: /* @__PURE__ */ jsx(
        "span",
        {
          dangerouslySetInnerHTML: {
            __html: item.icon
          }
        }
      )
    };
  }
  return {
    ...tree,
    index: tree.index ? transform(tree.index) : void 0,
    children: tree.children.map((item) => {
      if (item.type === "folder") return transformPageTree(item);
      return transform(item);
    })
  };
}

export { Page as component };
//# sourceMappingURL=_-CdayS5TZ.mjs.map
