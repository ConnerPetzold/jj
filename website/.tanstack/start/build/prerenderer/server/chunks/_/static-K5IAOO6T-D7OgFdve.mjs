import { W as searchSimple, X as searchAdvanced } from './ssr.mjs';
import { create, load } from 'file:///Users/conner/jj/website/node_modules/@orama/orama/dist/esm/index.js';
import 'file:///Users/conner/jj/website/node_modules/@tanstack/react-router/dist/esm/index.js';
import 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';
import 'file:///Users/conner/jj/website/node_modules/next-themes/dist/index.mjs';
import 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/index.js';
import 'file:///Users/conner/jj/website/node_modules/@radix-ui/react-direction/dist/index.mjs';
import 'file:///Users/conner/jj/website/node_modules/.pnpm/tailwind-merge@3.3.1/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import 'file:///Users/conner/jj/website/node_modules/.pnpm/@radix-ui+react-dialog@1.1.15_npkkj65iy67fkpin3gzi42ixdq/node_modules/@radix-ui/react-dialog/dist/index.mjs';
import 'file:///Users/conner/jj/website/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs';
import 'file:///Users/conner/jj/website/node_modules/scroll-into-view-if-needed/dist/index.js';
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

var cache = /* @__PURE__ */ new Map();
async function loadDB({
  from = "/api/search",
  initOrama = (locale) => create({ schema: { _: "string" }, language: locale })
}) {
  const cacheKey = from;
  const cached = cache.get(cacheKey);
  if (cached) return cached;
  async function init() {
    const res = await fetch(from);
    if (!res.ok)
      throw new Error(
        `failed to fetch exported search indexes from ${from}, make sure the search database is exported and available for client.`
      );
    const data = await res.json();
    const dbs = /* @__PURE__ */ new Map();
    if (data.type === "i18n") {
      await Promise.all(
        Object.entries(data.data).map(async ([k, v]) => {
          const db2 = await initOrama(k);
          load(db2, v);
          dbs.set(k, {
            type: v.type,
            db: db2
          });
        })
      );
      return dbs;
    }
    const db = await initOrama();
    load(db, data);
    dbs.set("", {
      type: data.type,
      db
    });
    return dbs;
  }
  const result = init();
  cache.set(cacheKey, result);
  return result;
}
async function search(query, options) {
  const { tag, locale } = options;
  const db = (await loadDB(options)).get(locale != null ? locale : "");
  if (!db) return [];
  if (db.type === "simple")
    return searchSimple(db, query);
  return searchAdvanced(db.db, query, tag);
}

export { search };
//# sourceMappingURL=static-K5IAOO6T-D7OgFdve.mjs.map
