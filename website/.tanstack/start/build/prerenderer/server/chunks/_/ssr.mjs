import { createFileRoute, lazyRouteComponent, notFound, createRootRoute, Outlet, HeadContent, Scripts, RouterProvider, useParams, useRouter as useRouter$1, useLocation, Link as Link$2, createRouter as createRouter$1 } from 'file:///Users/conner/jj/website/node_modules/@tanstack/react-router/dist/esm/index.js';
import { jsx, jsxs, Fragment as Fragment$1 } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';
import { ThemeProvider } from 'file:///Users/conner/jj/website/node_modules/next-themes/dist/index.mjs';
import React__default__default, { forwardRef, createElement, useRef, useMemo, useState, useEffect, createContext as createContext$1, useContext, Fragment, useLayoutEffect, useCallback, lazy } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/index.js';
import { DirectionProvider } from 'file:///Users/conner/jj/website/node_modules/@radix-ui/react-direction/dist/index.mjs';
import { twMerge } from 'file:///Users/conner/jj/website/node_modules/.pnpm/tailwind-merge@3.3.1/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import { Dialog, DialogOverlay, DialogContent, DialogTitle } from 'file:///Users/conner/jj/website/node_modules/.pnpm/@radix-ui+react-dialog@1.1.15_npkkj65iy67fkpin3gzi42ixdq/node_modules/@radix-ui/react-dialog/dist/index.mjs';
import { cva } from 'file:///Users/conner/jj/website/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs';
import scrollIntoView from 'file:///Users/conner/jj/website/node_modules/scroll-into-view-if-needed/dist/index.js';
import { search, getByID, create as create$1, save, insertMultiple } from 'file:///Users/conner/jj/website/node_modules/@orama/orama/dist/esm/index.js';
import { fromConfig, createClientLoader } from 'file:///Users/conner/jj/website/node_modules/fumadocs-mdx/dist/runtime/vite/server.js';
import Slugger from 'file:///Users/conner/jj/website/node_modules/github-slugger/index.js';
import * as CollapsiblePrimitive from 'file:///Users/conner/jj/website/node_modules/@radix-ui/react-collapsible/dist/index.mjs';
import * as Primitive from 'file:///Users/conner/jj/website/node_modules/@radix-ui/react-tabs/dist/index.mjs';
import invariant from 'file:///Users/conner/jj/website/node_modules/tiny-invariant/dist/esm/tiny-invariant.js';
import { isPlainObject, isRedirect, isNotFound, rootRouteId, trimPathLeft, joinPaths, trimPath, processRouteTree, isResolvedRedirect, getMatchedRoutes } from 'file:///Users/conner/jj/website/node_modules/@tanstack/router-core/dist/esm/index.js';
import { mergeHeaders, json } from 'file:///Users/conner/jj/website/node_modules/@tanstack/router-core/dist/esm/ssr/client.js';
import { AsyncLocalStorage } from 'node:async_hooks';
import { createMemoryHistory } from 'file:///Users/conner/jj/website/node_modules/@tanstack/history/dist/esm/index.js';
import { attachRouterServerSsrUtils } from 'file:///Users/conner/jj/website/node_modules/@tanstack/router-core/dist/esm/ssr/server.js';
import { defineEventHandler as defineEventHandler$1, toWebRequest, H3Event, getResponseHeaders as getResponseHeaders$1, getResponseStatus as getResponseStatus$1 } from 'file:///Users/conner/jj/website/node_modules/h3/dist/index.mjs';
import { defineHandlerCallback, renderRouterToStream } from 'file:///Users/conner/jj/website/node_modules/@tanstack/react-router/dist/esm/ssr/server.js';

function StartServer(props) {
  return /* @__PURE__ */ jsx(RouterProvider, { router: props.router });
}
const defaultStreamHandler = defineHandlerCallback(
  ({ request, router, responseHeaders }) => renderRouterToStream({
    request,
    router,
    responseHeaders,
    children: /* @__PURE__ */ jsx(StartServer, { router })
  })
);
const startSerializer = {
  stringify: (value) => JSON.stringify(value, function replacer(key, val) {
    const ogVal = this[key];
    const serializer = serializers.find((t) => t.stringifyCondition(ogVal));
    if (serializer) {
      return serializer.stringify(ogVal);
    }
    return val;
  }),
  parse: (value) => JSON.parse(value, function parser(key, val) {
    const ogVal = this[key];
    if (isPlainObject(ogVal)) {
      const serializer = serializers.find((t) => t.parseCondition(ogVal));
      if (serializer) {
        return serializer.parse(ogVal);
      }
    }
    return val;
  }),
  encode: (value) => {
    if (Array.isArray(value)) {
      return value.map((v) => startSerializer.encode(v));
    }
    if (isPlainObject(value)) {
      return Object.fromEntries(
        Object.entries(value).map(([key, v]) => [
          key,
          startSerializer.encode(v)
        ])
      );
    }
    const serializer = serializers.find((t) => t.stringifyCondition(value));
    if (serializer) {
      return serializer.stringify(value);
    }
    return value;
  },
  decode: (value) => {
    if (isPlainObject(value)) {
      const serializer = serializers.find((t) => t.parseCondition(value));
      if (serializer) {
        return serializer.parse(value);
      }
    }
    if (Array.isArray(value)) {
      return value.map((v) => startSerializer.decode(v));
    }
    if (isPlainObject(value)) {
      return Object.fromEntries(
        Object.entries(value).map(([key, v]) => [
          key,
          startSerializer.decode(v)
        ])
      );
    }
    return value;
  }
};
const createSerializer = (key, check, toValue, fromValue) => ({
  key,
  stringifyCondition: check,
  stringify: (value) => ({ [`$${key}`]: toValue(value) }),
  parseCondition: (value) => Object.hasOwn(value, `$${key}`),
  parse: (value) => fromValue(value[`$${key}`])
});
const serializers = [
  createSerializer(
    // Key
    "undefined",
    // Check
    (v) => v === void 0,
    // To
    () => 0,
    // From
    () => void 0
  ),
  createSerializer(
    // Key
    "date",
    // Check
    (v) => v instanceof Date,
    // To
    (v) => v.toISOString(),
    // From
    (v) => new Date(v)
  ),
  createSerializer(
    // Key
    "error",
    // Check
    (v) => v instanceof Error,
    // To
    (v) => ({
      ...v,
      message: v.message,
      stack: void 0,
      cause: v.cause
    }),
    // From
    (v) => Object.assign(new Error(v.message), v)
  ),
  createSerializer(
    // Key
    "formData",
    // Check
    (v) => v instanceof FormData,
    // To
    (v) => {
      const entries = {};
      v.forEach((value, key) => {
        const entry = entries[key];
        if (entry !== void 0) {
          if (Array.isArray(entry)) {
            entry.push(value);
          } else {
            entries[key] = [entry, value];
          }
        } else {
          entries[key] = value;
        }
      });
      return entries;
    },
    // From
    (v) => {
      const formData = new FormData();
      Object.entries(v).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((val) => formData.append(key, val));
        } else {
          formData.append(key, value);
        }
      });
      return formData;
    }
  ),
  createSerializer(
    // Key
    "bigint",
    // Check
    (v) => typeof v === "bigint",
    // To
    (v) => v.toString(),
    // From
    (v) => BigInt(v)
  ),
  createSerializer(
    // Key
    "server-function",
    // Check
    (v) => typeof v === "function" && "functionId" in v && typeof v.functionId === "string",
    // To
    ({ functionId }) => ({ functionId, __serverFn: true }),
    // From, dummy impl. the actual server function lookup is done on the server in packages/start-server-core/src/server-functions-handler.ts
    (v) => v
  )
];
const startStorage = new AsyncLocalStorage();
async function runWithStartContext(context, fn) {
  return startStorage.run(context, fn);
}
function getStartContext(opts) {
  const context = startStorage.getStore();
  if (!context && (opts == null ? void 0 : opts.throwIfNotFound) !== false) {
    throw new Error(
      `No Start context found in AsyncLocalStorage. Make sure you are using the function within the server runtime.`
    );
  }
  return context;
}
const globalMiddleware = [];
const getRouterInstance = () => {
  var _a;
  return (_a = getStartContext({
    throwIfNotFound: false
  })) == null ? void 0 : _a.router;
};
function createServerFn(options, __opts) {
  const resolvedOptions = __opts || options || {};
  if (typeof resolvedOptions.method === "undefined") {
    resolvedOptions.method = "GET";
  }
  return {
    options: resolvedOptions,
    middleware: (middleware) => {
      return createServerFn(void 0, Object.assign(resolvedOptions, {
        middleware
      }));
    },
    validator: (validator) => {
      return createServerFn(void 0, Object.assign(resolvedOptions, {
        validator
      }));
    },
    type: (type) => {
      return createServerFn(void 0, Object.assign(resolvedOptions, {
        type
      }));
    },
    handler: (...args) => {
      const [extractedFn, serverFn] = args;
      Object.assign(resolvedOptions, {
        ...extractedFn,
        extractedFn,
        serverFn
      });
      const resolvedMiddleware = [...resolvedOptions.middleware || [], serverFnBaseToMiddleware(resolvedOptions)];
      return Object.assign(async (opts) => {
        return executeMiddleware$1(resolvedMiddleware, "client", {
          ...extractedFn,
          ...resolvedOptions,
          data: opts == null ? void 0 : opts.data,
          headers: opts == null ? void 0 : opts.headers,
          signal: opts == null ? void 0 : opts.signal,
          context: {},
          router: getRouterInstance()
        }).then((d) => {
          if (resolvedOptions.response === "full") {
            return d;
          }
          if (d.error) throw d.error;
          return d.result;
        });
      }, {
        // This copies over the URL, function ID
        ...extractedFn,
        // The extracted function on the server-side calls
        // this function
        __executeServer: async (opts_, signal) => {
          const opts = opts_ instanceof FormData ? extractFormDataContext(opts_) : opts_;
          opts.type = typeof resolvedOptions.type === "function" ? resolvedOptions.type(opts) : resolvedOptions.type;
          const ctx = {
            ...extractedFn,
            ...opts,
            signal
          };
          const run = () => executeMiddleware$1(resolvedMiddleware, "server", ctx).then((d) => ({
            // Only send the result and sendContext back to the client
            result: d.result,
            error: d.error,
            context: d.sendContext
          }));
          if (ctx.type === "static") {
            let response;
            if (serverFnStaticCache == null ? void 0 : serverFnStaticCache.getItem) {
              response = await serverFnStaticCache.getItem(ctx);
            }
            if (!response) {
              response = await run().then((d) => {
                return {
                  ctx: d,
                  error: null
                };
              }).catch((e) => {
                return {
                  ctx: void 0,
                  error: e
                };
              });
              if (serverFnStaticCache == null ? void 0 : serverFnStaticCache.setItem) {
                await serverFnStaticCache.setItem(ctx, response);
              }
            }
            invariant(response, "No response from both server and static cache!");
            if (response.error) {
              throw response.error;
            }
            return response.ctx;
          }
          return run();
        }
      });
    }
  };
}
async function executeMiddleware$1(middlewares, env, opts) {
  const flattenedMiddlewares = flattenMiddlewares([...globalMiddleware, ...middlewares]);
  const next = async (ctx) => {
    const nextMiddleware = flattenedMiddlewares.shift();
    if (!nextMiddleware) {
      return ctx;
    }
    if (nextMiddleware.options.validator && (env === "client" ? nextMiddleware.options.validateClient : true)) {
      ctx.data = await execValidator(nextMiddleware.options.validator, ctx.data);
    }
    const middlewareFn = env === "client" ? nextMiddleware.options.client : nextMiddleware.options.server;
    if (middlewareFn) {
      return applyMiddleware(middlewareFn, ctx, async (newCtx) => {
        return next(newCtx).catch((error) => {
          if (isRedirect(error) || isNotFound(error)) {
            return {
              ...newCtx,
              error
            };
          }
          throw error;
        });
      });
    }
    return next(ctx);
  };
  return next({
    ...opts,
    headers: opts.headers || {},
    sendContext: opts.sendContext || {},
    context: opts.context || {}
  });
}
let serverFnStaticCache;
function setServerFnStaticCache(cache) {
  const previousCache = serverFnStaticCache;
  serverFnStaticCache = typeof cache === "function" ? cache() : cache;
  return () => {
    serverFnStaticCache = previousCache;
  };
}
function createServerFnStaticCache(serverFnStaticCache2) {
  return serverFnStaticCache2;
}
async function sha1Hash(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-1", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}
setServerFnStaticCache(() => {
  const getStaticCacheUrl = async (options, hash) => {
    const filename = await sha1Hash(`${options.functionId}__${hash}`);
    return `/__tsr/staticServerFnCache/${filename}.json`;
  };
  const jsonToFilenameSafeString = (json2) => {
    const sortedKeysReplacer = (key, value) => value && typeof value === "object" && !Array.isArray(value) ? Object.keys(value).sort().reduce((acc, curr) => {
      acc[curr] = value[curr];
      return acc;
    }, {}) : value;
    const jsonString = JSON.stringify(json2 ?? "", sortedKeysReplacer);
    return jsonString.replace(/[/\\?%*:|"<>]/g, "-").replace(/\s+/g, "_");
  };
  const staticClientCache = typeof document !== "undefined" ? /* @__PURE__ */ new Map() : null;
  return createServerFnStaticCache({
    getItem: async (ctx) => {
      if (typeof document === "undefined") {
        const hash = jsonToFilenameSafeString(ctx.data);
        const url = await getStaticCacheUrl(ctx, hash);
        const publicUrl = "/Users/conner/jj/website/.output/public";
        const {
          promises: fs
        } = await import('node:fs');
        const path = await import('node:path');
        const filePath = path.join(publicUrl, url);
        const [cachedResult, readError] = await fs.readFile(filePath, "utf-8").then((c) => [startSerializer.parse(c), null]).catch((e) => [null, e]);
        if (readError && readError.code !== "ENOENT") {
          throw readError;
        }
        return cachedResult;
      }
      return void 0;
    },
    setItem: async (ctx, response) => {
      const {
        promises: fs
      } = await import('node:fs');
      const path = await import('node:path');
      const hash = jsonToFilenameSafeString(ctx.data);
      const url = await getStaticCacheUrl(ctx, hash);
      const publicUrl = "/Users/conner/jj/website/.output/public";
      const filePath = path.join(publicUrl, url);
      await fs.mkdir(path.dirname(filePath), {
        recursive: true
      });
      await fs.writeFile(filePath, startSerializer.stringify(response));
    },
    fetchItem: async (ctx) => {
      const hash = jsonToFilenameSafeString(ctx.data);
      const url = await getStaticCacheUrl(ctx, hash);
      let result = staticClientCache == null ? void 0 : staticClientCache.get(url);
      if (!result) {
        result = await fetch(url, {
          method: "GET"
        }).then((r) => r.text()).then((d) => startSerializer.parse(d));
        staticClientCache == null ? void 0 : staticClientCache.set(url, result);
      }
      return result;
    }
  });
});
function extractFormDataContext(formData) {
  const serializedContext = formData.get("__TSR_CONTEXT");
  formData.delete("__TSR_CONTEXT");
  if (typeof serializedContext !== "string") {
    return {
      context: {},
      data: formData
    };
  }
  try {
    const context = startSerializer.parse(serializedContext);
    return {
      context,
      data: formData
    };
  } catch {
    return {
      data: formData
    };
  }
}
function flattenMiddlewares(middlewares) {
  const seen = /* @__PURE__ */ new Set();
  const flattened = [];
  const recurse = (middleware) => {
    middleware.forEach((m) => {
      if (m.options.middleware) {
        recurse(m.options.middleware);
      }
      if (!seen.has(m)) {
        seen.add(m);
        flattened.push(m);
      }
    });
  };
  recurse(middlewares);
  return flattened;
}
const applyMiddleware = async (middlewareFn, ctx, nextFn) => {
  return middlewareFn({
    ...ctx,
    next: async (userCtx = {}) => {
      return nextFn({
        ...ctx,
        ...userCtx,
        context: {
          ...ctx.context,
          ...userCtx.context
        },
        sendContext: {
          ...ctx.sendContext,
          ...userCtx.sendContext ?? {}
        },
        headers: mergeHeaders(ctx.headers, userCtx.headers),
        result: userCtx.result !== void 0 ? userCtx.result : ctx.response === "raw" ? userCtx : ctx.result,
        error: userCtx.error ?? ctx.error
      });
    }
  });
};
function execValidator(validator, input) {
  if (validator == null) return {};
  if ("~standard" in validator) {
    const result = validator["~standard"].validate(input);
    if (result instanceof Promise) throw new Error("Async validation not supported");
    if (result.issues) throw new Error(JSON.stringify(result.issues, void 0, 2));
    return result.value;
  }
  if ("parse" in validator) {
    return validator.parse(input);
  }
  if (typeof validator === "function") {
    return validator(input);
  }
  throw new Error("Invalid validator type!");
}
function serverFnBaseToMiddleware(options) {
  return {
    _types: void 0,
    options: {
      validator: options.validator,
      validateClient: options.validateClient,
      client: async ({
        next,
        sendContext,
        ...ctx
      }) => {
        var _a;
        const payload = {
          ...ctx,
          // switch the sendContext over to context
          context: sendContext,
          type: typeof ctx.type === "function" ? ctx.type(ctx) : ctx.type
        };
        if (ctx.type === "static" && "prerender" === "production") ;
        const res = await ((_a = options.extractedFn) == null ? void 0 : _a.call(options, payload));
        return next(res);
      },
      server: async ({
        next,
        ...ctx
      }) => {
        var _a;
        const result = await ((_a = options.serverFn) == null ? void 0 : _a.call(options, ctx));
        return next({
          ...ctx,
          result
        });
      }
    }
  };
}
const eventStorage = new AsyncLocalStorage();
function defineEventHandler(handler) {
  return defineEventHandler$1((event) => {
    return runWithEvent(event, () => handler(event));
  });
}
async function runWithEvent(event, fn) {
  return eventStorage.run(event, fn);
}
function getEvent() {
  const event = eventStorage.getStore();
  if (!event) {
    throw new Error(
      `No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.`
    );
  }
  return event;
}
const HTTPEventSymbol = Symbol("$HTTPEvent");
function isEvent(obj) {
  return typeof obj === "object" && (obj instanceof H3Event || (obj == null ? void 0 : obj[HTTPEventSymbol]) instanceof H3Event || (obj == null ? void 0 : obj.__is_event__) === true);
}
function createWrapperFunction(h3Function) {
  return function(...args) {
    const event = args[0];
    if (!isEvent(event)) {
      args.unshift(getEvent());
    } else {
      args[0] = event instanceof H3Event || event.__is_event__ ? event : event[HTTPEventSymbol];
    }
    return h3Function(...args);
  };
}
const getResponseStatus = createWrapperFunction(getResponseStatus$1);
const getResponseHeaders = createWrapperFunction(getResponseHeaders$1);
function requestHandler(handler) {
  return handler;
}
const VIRTUAL_MODULES = {
  routeTree: "tanstack-start-route-tree:v",
  startManifest: "tanstack-start-manifest:v",
  serverFnManifest: "tanstack-start-server-fn-manifest:v"
};
async function loadVirtualModule(id) {
  switch (id) {
    case VIRTUAL_MODULES.routeTree:
      return await Promise.resolve().then(() => routeTree_gen);
    case VIRTUAL_MODULES.startManifest:
      return await import('./_tanstack-start-manifest_v-Dt5OPEGq.mjs');
    case VIRTUAL_MODULES.serverFnManifest:
      return await import('./_tanstack-start-server-fn-manifest_v-DPVPvxSW.mjs');
    default:
      throw new Error(`Unknown virtual module: ${id}`);
  }
}
async function getStartManifest(opts) {
  const { tsrStartManifest } = await loadVirtualModule(
    VIRTUAL_MODULES.startManifest
  );
  const startManifest = tsrStartManifest();
  const rootRoute = startManifest.routes[rootRouteId] = startManifest.routes[rootRouteId] || {};
  rootRoute.assets = rootRoute.assets || [];
  let script = `import('${startManifest.clientEntry}')`;
  rootRoute.assets.push({
    tag: "script",
    attrs: {
      type: "module",
      suppressHydrationWarning: true,
      async: true
    },
    children: script
  });
  const manifest = {
    ...startManifest,
    routes: Object.fromEntries(
      Object.entries(startManifest.routes).map(([k, v]) => {
        const { preloads, assets } = v;
        return [
          k,
          {
            preloads,
            assets
          }
        ];
      })
    )
  };
  return manifest;
}
function sanitizeBase$1(base) {
  return base.replace(/^\/|\/$/g, "");
}
async function revive(root, reviver) {
  async function reviveNode(holder2, key) {
    const value = holder2[key];
    if (value && typeof value === "object") {
      await Promise.all(Object.keys(value).map((k) => reviveNode(value, k)));
    }
    if (reviver) {
      holder2[key] = await reviver(key, holder2[key]);
    }
  }
  const holder = {
    "": root
  };
  await reviveNode(holder, "");
  return holder[""];
}
async function reviveServerFns(key, value) {
  if (value && value.__serverFn === true && value.functionId) {
    const serverFn = await getServerFnById(value.functionId);
    return async (opts, signal) => {
      const result = await serverFn(opts ?? {}, signal);
      return result.result;
    };
  }
  return value;
}
async function getServerFnById(serverFnId) {
  const {
    default: serverFnManifest
  } = await loadVirtualModule(VIRTUAL_MODULES.serverFnManifest);
  const serverFnInfo = serverFnManifest[serverFnId];
  if (!serverFnInfo) {
    console.info("serverFnManifest", serverFnManifest);
    throw new Error("Server function info not found for " + serverFnId);
  }
  const fnModule = await serverFnInfo.importer();
  if (!fnModule) {
    console.info("serverFnInfo", serverFnInfo);
    throw new Error("Server function module not resolved for " + serverFnId);
  }
  const action = fnModule[serverFnInfo.functionName];
  if (!action) {
    console.info("serverFnInfo", serverFnInfo);
    console.info("fnModule", fnModule);
    throw new Error(`Server function module export not resolved for serverFn ID: ${serverFnId}`);
  }
  return action;
}
async function parsePayload(payload) {
  const parsedPayload = startSerializer.parse(payload);
  await revive(parsedPayload, reviveServerFns);
  return parsedPayload;
}
const handleServerAction = async ({
  request
}) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const abort = () => controller.abort();
  request.signal.addEventListener("abort", abort);
  const method = request.method;
  const url = new URL(request.url, "http://localhost:3000");
  const regex = new RegExp(`${sanitizeBase$1("/_serverFn")}/([^/?#]+)`);
  const match = url.pathname.match(regex);
  const serverFnId = match ? match[1] : null;
  const search2 = Object.fromEntries(url.searchParams.entries());
  const isCreateServerFn = "createServerFn" in search2;
  const isRaw = "raw" in search2;
  if (typeof serverFnId !== "string") {
    throw new Error("Invalid server action param for serverFnId: " + serverFnId);
  }
  const action = await getServerFnById(serverFnId);
  const formDataContentTypes = ["multipart/form-data", "application/x-www-form-urlencoded"];
  const response = await (async () => {
    try {
      let result = await (async () => {
        if (request.headers.get("Content-Type") && formDataContentTypes.some((type) => {
          var _a;
          return (_a = request.headers.get("Content-Type")) == null ? void 0 : _a.includes(type);
        })) {
          invariant(method.toLowerCase() !== "get", "GET requests with FormData payloads are not supported");
          return await action(await request.formData(), signal);
        }
        if (method.toLowerCase() === "get") {
          let payload2 = search2;
          if (isCreateServerFn) {
            payload2 = search2.payload;
          }
          payload2 = payload2 ? await parsePayload(payload2) : payload2;
          return await action(payload2, signal);
        }
        const jsonPayloadAsString = await request.text();
        const payload = await parsePayload(jsonPayloadAsString);
        if (isCreateServerFn) {
          return await action(payload, signal);
        }
        return await action(...payload, signal);
      })();
      if (result.result instanceof Response) {
        return result.result;
      }
      if (!isCreateServerFn) {
        result = result.result;
        if (result instanceof Response) {
          return result;
        }
      }
      if (isNotFound(result)) {
        return isNotFoundResponse(result);
      }
      return new Response(result !== void 0 ? startSerializer.stringify(result) : void 0, {
        status: getResponseStatus(getEvent()),
        headers: {
          "Content-Type": "application/json"
        }
      });
    } catch (error) {
      if (error instanceof Response) {
        return error;
      }
      if (isNotFound(error)) {
        return isNotFoundResponse(error);
      }
      console.info();
      console.info("Server Fn Error!");
      console.info();
      console.error(error);
      console.info();
      return new Response(startSerializer.stringify(error), {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
  })();
  request.signal.removeEventListener("abort", abort);
  if (isRaw) {
    return response;
  }
  return response;
};
function isNotFoundResponse(error) {
  const {
    headers,
    ...rest2
  } = error;
  return new Response(JSON.stringify(rest2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      ...headers || {}
    }
  });
}
const HEADERS = {
  TSS_SHELL: "X-TSS_SHELL"
};
function getStartResponseHeaders(opts) {
  const headers = mergeHeaders(
    getResponseHeaders(),
    {
      "Content-Type": "text/html; charset=UTF-8"
    },
    ...opts.router.state.matches.map((match) => {
      return match.headers;
    })
  );
  return headers;
}
function createStartHandler({
  createRouter: createRouter2
}) {
  let routeTreeModule = null;
  let startRoutesManifest = null;
  let processedServerRouteTree = void 0;
  return (cb) => {
    const originalFetch = globalThis.fetch;
    const startRequestResolver = async ({ request }) => {
      globalThis.fetch = async function(input, init) {
        function resolve(url2, requestOptions) {
          const fetchRequest = new Request(url2, requestOptions);
          return startRequestResolver({ request: fetchRequest });
        }
        function getOrigin() {
          return request.headers.get("Origin") || request.headers.get("Referer") || "http://localhost";
        }
        if (typeof input === "string" && input.startsWith("/")) {
          const url2 = new URL(input, getOrigin());
          return resolve(url2, init);
        } else if (typeof input === "object" && "url" in input && typeof input.url === "string" && input.url.startsWith("/")) {
          const url2 = new URL(input.url, getOrigin());
          return resolve(url2, init);
        }
        return originalFetch(input, init);
      };
      const url = new URL(request.url);
      const href = url.href.replace(url.origin, "");
      const APP_BASE = ".";
      const router = await createRouter2();
      const history = createMemoryHistory({
        initialEntries: [href]
      });
      const isPrerendering = process.env.TSS_PRERENDERING === "true";
      let isShell = process.env.TSS_SHELL === "true";
      if (isPrerendering && !isShell) {
        isShell = request.headers.get(HEADERS.TSS_SHELL) === "true";
      }
      router.update({
        history,
        isShell,
        isPrerendering
      });
      const response = await (async () => {
        try {
          if (false) ;
          const serverFnBase = joinPaths([
            APP_BASE,
            trimPath("/_serverFn"),
            "/"
          ]);
          if (href.startsWith(serverFnBase)) {
            return await handleServerAction({ request });
          }
          if (routeTreeModule === null) {
            try {
              routeTreeModule = await loadVirtualModule(
                VIRTUAL_MODULES.routeTree
              );
              if (routeTreeModule.serverRouteTree) {
                processedServerRouteTree = processRouteTree({
                  routeTree: routeTreeModule.serverRouteTree,
                  initRoute: (route, i) => {
                    route.init({
                      originalIndex: i
                    });
                  }
                });
              }
            } catch (e) {
              console.log(e);
            }
          }
          const executeRouter = () => runWithStartContext({ router }, async () => {
            const requestAcceptHeader = request.headers.get("Accept") || "*/*";
            const splitRequestAcceptHeader = requestAcceptHeader.split(",");
            const supportedMimeTypes = ["*/*", "text/html"];
            const isRouterAcceptSupported = supportedMimeTypes.some(
              (mimeType) => splitRequestAcceptHeader.some(
                (acceptedMimeType) => acceptedMimeType.trim().startsWith(mimeType)
              )
            );
            if (!isRouterAcceptSupported) {
              return json(
                {
                  error: "Only HTML requests are supported here"
                },
                {
                  status: 500
                }
              );
            }
            if (startRoutesManifest === null) {
              startRoutesManifest = await getStartManifest({
                basePath: APP_BASE
              });
            }
            attachRouterServerSsrUtils(router, startRoutesManifest);
            await router.load();
            if (router.state.redirect) {
              return router.state.redirect;
            }
            await router.serverSsr.dehydrate();
            const responseHeaders = getStartResponseHeaders({ router });
            const response2 = await cb({
              request,
              router,
              responseHeaders
            });
            return response2;
          });
          if (processedServerRouteTree) {
            const [_matchedRoutes, response2] = await handleServerRoutes({
              processedServerRouteTree,
              router,
              request,
              basePath: APP_BASE,
              executeRouter
            });
            if (response2) return response2;
          }
          const routerResponse = await executeRouter();
          return routerResponse;
        } catch (err) {
          if (err instanceof Response) {
            return err;
          }
          throw err;
        }
      })();
      if (isRedirect(response)) {
        if (isResolvedRedirect(response)) {
          if (request.headers.get("x-tsr-redirect") === "manual") {
            return json(
              {
                ...response.options,
                isSerializedRedirect: true
              },
              {
                headers: response.headers
              }
            );
          }
          return response;
        }
        if (response.options.to && typeof response.options.to === "string" && !response.options.to.startsWith("/")) {
          throw new Error(
            `Server side redirects must use absolute paths via the 'href' or 'to' options. The redirect() method's "to" property accepts an internal path only. Use the "href" property to provide an external URL. Received: ${JSON.stringify(response.options)}`
          );
        }
        if (["params", "search", "hash"].some(
          (d) => typeof response.options[d] === "function"
        )) {
          throw new Error(
            `Server side redirects must use static search, params, and hash values and do not support functional values. Received functional values for: ${Object.keys(
              response.options
            ).filter((d) => typeof response.options[d] === "function").map((d) => `"${d}"`).join(", ")}`
          );
        }
        const redirect = router.resolveRedirect(response);
        if (request.headers.get("x-tsr-redirect") === "manual") {
          return json(
            {
              ...response.options,
              isSerializedRedirect: true
            },
            {
              headers: response.headers
            }
          );
        }
        return redirect;
      }
      return response;
    };
    return requestHandler(startRequestResolver);
  };
}
async function handleServerRoutes(opts) {
  var _a, _b;
  const url = new URL(opts.request.url);
  const pathname = url.pathname;
  const serverTreeResult = getMatchedRoutes({
    pathname,
    basepath: opts.basePath,
    caseSensitive: true,
    routesByPath: opts.processedServerRouteTree.routesByPath,
    routesById: opts.processedServerRouteTree.routesById,
    flatRoutes: opts.processedServerRouteTree.flatRoutes
  });
  const routeTreeResult = opts.router.getMatchedRoutes(pathname, void 0);
  let response;
  let matchedRoutes = [];
  matchedRoutes = serverTreeResult.matchedRoutes;
  if (routeTreeResult.foundRoute) {
    if (serverTreeResult.matchedRoutes.length < routeTreeResult.matchedRoutes.length) {
      const closestCommon = [...routeTreeResult.matchedRoutes].reverse().find((r) => {
        return opts.processedServerRouteTree.routesById[r.id] !== void 0;
      });
      if (closestCommon) {
        let routeId = closestCommon.id;
        matchedRoutes = [];
        do {
          const route = opts.processedServerRouteTree.routesById[routeId];
          if (!route) {
            break;
          }
          matchedRoutes.push(route);
          routeId = (_a = route.parentRoute) == null ? void 0 : _a.id;
        } while (routeId);
        matchedRoutes.reverse();
      }
    }
  }
  if (matchedRoutes.length) {
    const middlewares = flattenMiddlewares(
      matchedRoutes.flatMap((r) => r.options.middleware).filter(Boolean)
    ).map((d) => d.options.server);
    if ((_b = serverTreeResult.foundRoute) == null ? void 0 : _b.options.methods) {
      const method = Object.keys(
        serverTreeResult.foundRoute.options.methods
      ).find(
        (method2) => method2.toLowerCase() === opts.request.method.toLowerCase()
      );
      if (method) {
        const handler = serverTreeResult.foundRoute.options.methods[method];
        if (handler) {
          if (typeof handler === "function") {
            middlewares.push(handlerToMiddleware(handler));
          } else {
            if (handler._options.middlewares && handler._options.middlewares.length) {
              middlewares.push(
                ...flattenMiddlewares(handler._options.middlewares).map(
                  (d) => d.options.server
                )
              );
            }
            if (handler._options.handler) {
              middlewares.push(handlerToMiddleware(handler._options.handler));
            }
          }
        }
      }
    }
    middlewares.push(handlerToMiddleware(opts.executeRouter));
    const ctx = await executeMiddleware(middlewares, {
      request: opts.request,
      context: {},
      params: serverTreeResult.routeParams,
      pathname
    });
    response = ctx.response;
  }
  return [matchedRoutes, response];
}
function handlerToMiddleware(handler) {
  return async ({ next: _next, ...rest2 }) => {
    const response = await handler(rest2);
    if (response) {
      return { response };
    }
    return _next(rest2);
  };
}
function executeMiddleware(middlewares, ctx) {
  let index = -1;
  const next = async (ctx2) => {
    index++;
    const middleware = middlewares[index];
    if (!middleware) return ctx2;
    const result = await middleware({
      ...ctx2,
      // Allow the middleware to call the next middleware in the chain
      next: async (nextCtx) => {
        const nextResult = await next({
          ...ctx2,
          ...nextCtx,
          context: {
            ...ctx2.context,
            ...(nextCtx == null ? void 0 : nextCtx.context) || {}
          }
        });
        return Object.assign(ctx2, handleCtxResult(nextResult));
      }
      // Allow the middleware result to extend the return context
    }).catch((err) => {
      if (isSpecialResponse(err)) {
        return {
          response: err
        };
      }
      throw err;
    });
    return Object.assign(ctx2, handleCtxResult(result));
  };
  return handleCtxResult(next(ctx));
}
function handleCtxResult(result) {
  if (isSpecialResponse(result)) {
    return {
      response: result
    };
  }
  return result;
}
function isSpecialResponse(err) {
  return isResponse(err) || isRedirect(err);
}
function isResponse(response) {
  return response instanceof Response;
}
function createServerFileRoute(_) {
  return createServerRoute();
}
function createServerRoute(__, __opts) {
  const options = __opts || {};
  const route = {
    isRoot: false,
    path: "",
    id: "",
    fullPath: "",
    to: "",
    options,
    parentRoute: void 0,
    _types: {},
    // children: undefined as TChildren,
    middleware: (middlewares) => createServerRoute(void 0, {
      ...options,
      middleware: middlewares
    }),
    methods: (methodsOrGetMethods) => {
      const methods = (() => {
        if (typeof methodsOrGetMethods === "function") {
          return methodsOrGetMethods(createMethodBuilder());
        }
        return methodsOrGetMethods;
      })();
      return createServerRoute(void 0, {
        ...__opts,
        methods
      });
    },
    update: (opts) => createServerRoute(void 0, {
      ...options,
      ...opts
    }),
    init: (opts) => {
      var _a;
      options.originalIndex = opts.originalIndex;
      const isRoot = !options.path && !options.id;
      route.parentRoute = (_a = options.getParentRoute) == null ? void 0 : _a.call(options);
      if (isRoot) {
        route.path = rootRouteId;
      } else if (!route.parentRoute) {
        throw new Error(`Child Route instances must pass a 'getParentRoute: () => ParentRoute' option that returns a ServerRoute instance.`);
      }
      let path = isRoot ? rootRouteId : options.path;
      if (path && path !== "/") {
        path = trimPathLeft(path);
      }
      const customId = options.id || path;
      let id = isRoot ? rootRouteId : joinPaths([route.parentRoute.id === rootRouteId ? "" : route.parentRoute.id, customId]);
      if (path === rootRouteId) {
        path = "/";
      }
      if (id !== rootRouteId) {
        id = joinPaths(["/", id]);
      }
      const fullPath = id === rootRouteId ? "/" : joinPaths([route.parentRoute.fullPath, path]);
      route.path = path;
      route.id = id;
      route.fullPath = fullPath;
      route.to = fullPath;
      route.isRoot = isRoot;
    },
    _addFileChildren: (children) => {
      if (Array.isArray(children)) {
        route.children = children;
      }
      if (typeof children === "object" && children !== null) {
        route.children = Object.values(children);
      }
      return route;
    },
    _addFileTypes: () => route
  };
  return route;
}
const createServerRootRoute = createServerRoute;
const createMethodBuilder = (__opts) => {
  return {
    _options: __opts || {},
    _types: {},
    middleware: (middlewares) => createMethodBuilder({
      ...__opts,
      middlewares
    }),
    handler: (handler) => createMethodBuilder({
      ...__opts,
      handler
    })
  };
};
var notImplemented = () => {
  throw new Error(
    "You need to wrap your application inside `FrameworkProvider`."
  );
};
var FrameworkContext = createContext("FrameworkContext", {
  useParams: notImplemented,
  useRouter: notImplemented,
  usePathname: notImplemented
});
function FrameworkProvider({
  Link: Link22,
  useRouter: useRouter2,
  useParams: useParams2,
  usePathname: usePathname2,
  Image: Image2,
  children
}) {
  const framework2 = React__default__default.useMemo(
    () => ({
      usePathname: usePathname2,
      useRouter: useRouter2,
      Link: Link22,
      Image: Image2,
      useParams: useParams2
    }),
    [Link22, usePathname2, useRouter2, useParams2, Image2]
  );
  return /* @__PURE__ */ jsx(FrameworkContext.Provider, { value: framework2, children });
}
function usePathname() {
  return FrameworkContext.use().usePathname();
}
function useRouter() {
  return FrameworkContext.use().useRouter();
}
function Image$1(props) {
  const { Image: Image2 } = FrameworkContext.use();
  if (!Image2) {
    const { src, alt, priority, ...rest2 } = props;
    return /* @__PURE__ */ jsx(
      "img",
      {
        alt,
        src,
        fetchPriority: priority ? "high" : "auto",
        ...rest2
      }
    );
  }
  return /* @__PURE__ */ jsx(Image2, { ...props });
}
function Link$1(props) {
  const { Link: Link22 } = FrameworkContext.use();
  if (!Link22) {
    const { href, prefetch: _, ...rest2 } = props;
    return /* @__PURE__ */ jsx("a", { href, ...rest2 });
  }
  return /* @__PURE__ */ jsx(Link22, { ...props });
}
function createContext(name, v) {
  const Context2 = React__default__default.createContext(v);
  return {
    Provider: (props) => {
      return /* @__PURE__ */ jsx(Context2.Provider, { value: props.value, children: props.children });
    },
    use: (errorMessage) => {
      const value = React__default__default.useContext(Context2);
      if (!value)
        throw new Error(
          errorMessage ?? `Provider of ${name} is required but missing.`
        );
      return value;
    }
  };
}
function isDifferent(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return b.length !== a.length || a.some((v, i) => isDifferent(v, b[i]));
  }
  return a !== b;
}
function useOnChange(value, onChange, isUpdated = isDifferent) {
  const [prev, setPrev] = useState(value);
  if (isUpdated(prev, value)) {
    onChange(value, prev);
    setPrev(value);
  }
}
const SidebarContext = createContext("SidebarContext");
function useSidebar() {
  return SidebarContext.use();
}
function SidebarProvider({ children }) {
  const closeOnRedirect = useRef(true);
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  useOnChange(pathname, () => {
    if (closeOnRedirect.current) {
      setOpen(false);
    }
    closeOnRedirect.current = true;
  });
  return jsx(SidebarContext.Provider, { value: useMemo(() => ({
    open,
    setOpen,
    collapsed,
    setCollapsed,
    closeOnRedirect
  }), [open, collapsed]), children });
}
const SearchContext = createContext("SearchContext", {
  enabled: false,
  hotKey: [],
  setOpenSearch: () => void 0
});
function useSearchContext() {
  return SearchContext.use();
}
function MetaOrControl() {
  const [key, setKey] = useState("⌘");
  useEffect(() => {
    const isWindows = window.navigator.userAgent.includes("Windows");
    if (isWindows)
      setKey("Ctrl");
  }, []);
  return key;
}
function SearchProvider({ SearchDialog: SearchDialog2, children, preload = true, options, hotKey = [
  {
    key: (e) => e.metaKey || e.ctrlKey,
    display: jsx(MetaOrControl, {})
  },
  {
    key: "k",
    display: "K"
  }
], links }) {
  const [isOpen, setIsOpen] = useState(preload ? false : void 0);
  useEffect(() => {
    const handler = (e) => {
      if (hotKey.every((v) => typeof v.key === "string" ? e.key === v.key : v.key(e))) {
        setIsOpen(true);
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [hotKey]);
  return jsxs(SearchContext.Provider, { value: useMemo(() => ({
    enabled: true,
    hotKey,
    setOpenSearch: setIsOpen
  }), [hotKey]), children: [isOpen !== void 0 && jsx(SearchDialog2, {
    open: isOpen,
    onOpenChange: setIsOpen,
    // @ts-expect-error -- insert prop for official UIs
    links,
    ...options
  }), children] });
}
function useEffectEvent(callback) {
  const ref = useRef(callback);
  ref.current = callback;
  return useCallback(((...params) => ref.current(...params)), []);
}
const defaultTranslations = {
  search: "Search",
  searchNoResult: "No results found",
  toc: "On this page",
  tocNoHeadings: "No Headings",
  lastUpdate: "Last updated on",
  chooseLanguage: "Choose a language",
  nextPage: "Next Page",
  previousPage: "Previous Page",
  chooseTheme: "Theme",
  editOnGithub: "Edit on GitHub"
};
const I18nContext = createContext$1({
  text: defaultTranslations
});
function I18nLabel(props) {
  const { text } = useI18n();
  return text[props.label];
}
function useI18n() {
  return useContext(I18nContext);
}
const DefaultSearchDialog$1 = lazy(() => import('./search-default-B7B25hL7.mjs'));
function RootProvider({ children, dir = "ltr", theme = {}, search: search2, i18n }) {
  let body = children;
  if (search2?.enabled !== false)
    body = jsx(SearchProvider, { SearchDialog: DefaultSearchDialog$1, ...search2, children: body });
  if (theme?.enabled !== false)
    body = jsx(ThemeProvider, { attribute: "class", defaultTheme: "system", enableSystem: true, disableTransitionOnChange: true, ...theme, children: body });
  if (i18n) {
    body = jsx(I18nProvider, { ...i18n, children: body });
  }
  return jsx(DirectionProvider, { dir, children: jsx(SidebarProvider, { children: body }) });
}
function I18nProvider({ locales = [], locale, onLocaleChange, ...props }) {
  const router = useRouter();
  const pathname = usePathname();
  const onChange = useEffectEvent((value) => {
    if (onLocaleChange) {
      return onLocaleChange(value);
    }
    const segments = pathname.split("/").filter((v) => v.length > 0);
    if (segments[0] !== locale) {
      segments.unshift(value);
    } else {
      segments[0] = value;
    }
    router.push(`/${segments.join("/")}`);
  });
  return jsx(I18nContext.Provider, { value: useMemo(() => ({
    locale,
    locales,
    text: {
      ...defaultTranslations,
      ...props.translations
    },
    onChange
  }), [locale, locales, onChange, props.translations]), children: props.children });
}
var framework = {
  Link({ href, prefetch, ...props }) {
    return /* @__PURE__ */ jsx(Link$2, { to: href, preload: prefetch ? "intent" : false, ...props, children: props.children });
  },
  usePathname() {
    return useLocation().pathname;
  },
  useRouter() {
    const router = useRouter$1();
    return useMemo(
      () => ({
        push(url) {
          void router.navigate({
            href: url
          });
        },
        refresh() {
          void router.invalidate();
        }
      }),
      [router]
    );
  },
  useParams() {
    return useParams({ strict: false });
  }
};
function TanstackProvider({ children }) {
  return /* @__PURE__ */ jsx(FrameworkProvider, { ...framework, children });
}
const globalCss = "/assets/global-0zlGs8VE.css";
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef(({ className, size = 24, color = "currentColor", children, ...props }, ref) => {
    return jsxs("svg", { ref, ...defaultAttributes, width: size, height: size, stroke: color, className: twMerge("lucide", className), ...props, children: [iconNode.map(([tag, attr]) => createElement(tag, attr)), children] });
  });
  Component.displayName = iconName;
  return Component;
};
const ChevronDown = createLucideIcon("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
const Languages = createLucideIcon("languages", [
  ["path", { d: "m5 8 6 6", key: "1wu5hv" }],
  ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }],
  ["path", { d: "M2 5h12", key: "or177f" }],
  ["path", { d: "M7 2h1", key: "1t2jsx" }],
  ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }],
  ["path", { d: "M14 18h6", key: "1m8k6r" }]
]);
const Sidebar = createLucideIcon("panel-left", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }
  ],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
const ChevronsUpDown = createLucideIcon("chevrons-up-down", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
const Search = createLucideIcon("search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
const ExternalLink = createLucideIcon("external-link", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp"
    }
  ]
]);
const Moon = createLucideIcon("moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
const Sun = createLucideIcon("sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]);
const Airplay = createLucideIcon("airplay", [
  [
    "path",
    {
      d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",
      key: "ns4c3b"
    }
  ],
  ["path", { d: "m12 15 5 6H7Z", key: "14qnn2" }]
]);
createLucideIcon("menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
createLucideIcon("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
createLucideIcon("loader-circle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
const CircleCheck = createLucideIcon("circle-check", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const CircleX = createLucideIcon("circle-x", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
const Check = createLucideIcon("check", [
  ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]
]);
const TriangleAlert = createLucideIcon("triangle-alert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
const Info = createLucideIcon("info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
createLucideIcon("copy", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea"
    }
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf"
    }
  ]
]);
const Clipboard = createLucideIcon("clipboard", [
  [
    "rect",
    {
      width: "8",
      height: "4",
      x: "8",
      y: "2",
      rx: "1",
      ry: "1",
      key: "1"
    }
  ],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "2"
    }
  ]
]);
const FileText = createLucideIcon("file-text", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7"
    }
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);
const Hash = createLucideIcon("hash", [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
]);
const Text = createLucideIcon("text", [
  ["path", { d: "M15 18H3", key: "olowqp" }],
  ["path", { d: "M17 6H3", key: "16j9eg" }],
  ["path", { d: "M21 12H3", key: "2avoz0" }]
]);
createLucideIcon("file", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7"
    }
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
]);
createLucideIcon("folder", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
]);
createLucideIcon("folder-open", [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
]);
createLucideIcon("star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
]);
const Link = createLucideIcon("link", [
  [
    "path",
    {
      d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
      key: "1cjeqo"
    }
  ],
  [
    "path",
    {
      d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
      key: "19qd67"
    }
  ]
]);
const Edit = createLucideIcon("square-pen", [
  [
    "path",
    {
      d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
      key: "1m0v6g"
    }
  ],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
]);
const ChevronRight = createLucideIcon("chevron-right", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
const ChevronLeft = createLucideIcon("chevron-left", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
createLucideIcon("plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
createLucideIcon("trash-2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
createLucideIcon("chevron-up", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
const variants = {
  primary: "bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/80",
  outline: "border hover:bg-fd-accent hover:text-fd-accent-foreground",
  ghost: "hover:bg-fd-accent hover:text-fd-accent-foreground",
  secondary: "border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent hover:text-fd-accent-foreground"
};
const buttonVariants = cva("inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none", {
  variants: {
    variant: variants,
    // fumadocs use `color` instead of `variant`
    color: variants,
    size: {
      sm: "gap-1 px-2 py-1.5 text-xs",
      icon: "p-1.5 [&_svg]:size-5",
      "icon-sm": "p-1.5 [&_svg]:size-4.5",
      "icon-xs": "p-1 [&_svg]:size-4"
    }
  }
});
const Context = createContext$1(null);
const ListContext = createContext$1(null);
const TagsListContext = createContext$1(null);
function SearchDialog({ open, onOpenChange, search: search2, onSearchChange, isLoading = false, children }) {
  const [active, setActive] = useState(null);
  return jsx(Dialog, { open, onOpenChange, children: jsx(Context.Provider, { value: useMemo(() => ({
    open,
    onOpenChange,
    search: search2,
    onSearchChange,
    active,
    setActive,
    isLoading
  }), [active, isLoading, onOpenChange, onSearchChange, open, search2]), children }) });
}
function SearchDialogHeader(props) {
  return jsx("div", { ...props, className: twMerge("flex flex-row items-center gap-2 p-3", props.className) });
}
function SearchDialogInput(props) {
  const { text } = useI18n();
  const { search: search2, onSearchChange } = useSearch();
  return jsx("input", { ...props, value: search2, onChange: (e) => onSearchChange(e.target.value), placeholder: text.search, className: "w-0 flex-1 bg-transparent text-lg placeholder:text-fd-muted-foreground focus-visible:outline-none" });
}
function SearchDialogClose({ children = "ESC", className, ...props }) {
  const { onOpenChange } = useSearch();
  return jsx("button", { type: "button", onClick: () => onOpenChange(false), className: twMerge(buttonVariants({
    color: "outline",
    size: "sm",
    className: "font-mono text-fd-muted-foreground"
  }), className), ...props, children });
}
function SearchDialogFooter(props) {
  return jsx("div", { ...props, className: twMerge("bg-fd-secondary/50 p-3 empty:hidden", props.className) });
}
function SearchDialogOverlay(props) {
  return jsx(DialogOverlay, { ...props, className: twMerge("fixed inset-0 z-50 backdrop-blur-xs data-[state=open]:animate-fd-fade-in data-[state=closed]:animate-fd-fade-out", props.className) });
}
function SearchDialogContent({ children, ...props }) {
  const { text } = useI18n();
  return jsxs(DialogContent, { "aria-describedby": void 0, ...props, className: twMerge("fixed left-1/2 top-4 md:top-[calc(50%-250px)] z-50 w-[calc(100%-1rem)] max-w-screen-sm -translate-x-1/2 rounded-2xl border bg-fd-popover/80 backdrop-blur-xl text-fd-popover-foreground shadow-2xl shadow-black/50 overflow-hidden data-[state=closed]:animate-fd-dialog-out data-[state=open]:animate-fd-dialog-in", "*:border-b *:has-[+:last-child[data-empty=true]]:border-b-0 *:data-[empty=true]:border-b-0 *:last:border-b-0", props.className), children: [jsx(DialogTitle, { className: "hidden", children: text.search }), children] });
}
function SearchDialogList({ items = null, Empty = () => jsx("div", { className: "py-12 text-center text-sm text-fd-muted-foreground", children: jsx(I18nLabel, { label: "searchNoResult" }) }), Item = (props2) => jsx(SearchDialogListItem, { ...props2 }), ...props }) {
  const ref = useRef(null);
  const [active, setActive] = useState(() => items && items.length > 0 ? items[0].id : null);
  const { onOpenChange } = useSearch();
  const router = useRouter();
  const onOpen = ({ external, url }) => {
    if (external)
      window.open(url, "_blank")?.focus();
    else
      router.push(url);
    onOpenChange(false);
  };
  const onKey = useEffectEvent((e) => {
    if (!items || e.isComposing)
      return;
    if (e.key === "ArrowDown" || e.key == "ArrowUp") {
      let idx = items.findIndex((item) => item.id === active);
      if (idx === -1)
        idx = 0;
      else if (e.key === "ArrowDown")
        idx++;
      else
        idx--;
      setActive(items.at(idx % items.length)?.id ?? null);
      e.preventDefault();
    }
    if (e.key === "Enter") {
      const selected = items.find((item) => item.id === active);
      if (selected)
        onOpen(selected);
      e.preventDefault();
    }
  });
  useEffect(() => {
    const element = ref.current;
    if (!element)
      return;
    const observer = new ResizeObserver(() => {
      const viewport2 = element.firstElementChild;
      element.style.setProperty("--fd-animated-height", `${viewport2.clientHeight}px`);
    });
    const viewport = element.firstElementChild;
    if (viewport)
      observer.observe(viewport);
    window.addEventListener("keydown", onKey);
    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", onKey);
    };
  }, [onKey]);
  useOnChange(items, () => {
    if (items && items.length > 0) {
      setActive(items[0].id);
    }
  });
  return jsx("div", { ...props, ref, "data-empty": items === null, className: twMerge("overflow-hidden h-(--fd-animated-height) transition-[height]", props.className), children: jsx("div", { className: twMerge("w-full flex flex-col overflow-y-auto max-h-[460px] p-1", !items && "hidden"), children: jsxs(ListContext.Provider, { value: useMemo(() => ({
    active,
    setActive
  }), [active]), children: [items?.length === 0 && Empty(), items?.map((item) => jsx(Fragment, { children: Item({ item, onClick: () => onOpen(item) }) }, item.id))] }) }) });
}
const icons = {
  text: null,
  heading: jsx(Hash, { className: "size-4 shrink-0 text-fd-muted-foreground" }),
  page: jsx(FileText, { className: "size-6 text-fd-muted-foreground bg-fd-muted border p-0.5 rounded-sm shadow-sm shrink-0" })
};
function SearchDialogListItem({ item, className, children, renderHighlights: render = renderHighlights, ...props }) {
  const { active: activeId, setActive } = useSearchList();
  const active = item.id === activeId;
  return jsx("button", { type: "button", ref: useCallback((element) => {
    if (active && element) {
      scrollIntoView(element, {
        scrollMode: "if-needed",
        block: "nearest",
        boundary: element.parentElement
      });
    }
  }, [active]), "aria-selected": active, className: twMerge("relative flex select-none flex-row items-center gap-2 p-2 text-start text-sm rounded-lg", item.type !== "page" && "ps-8", item.type === "page" || item.type === "heading" ? "font-medium" : "text-fd-popover-foreground/80", active && "bg-fd-accent text-fd-accent-foreground", className), onPointerMove: () => setActive(item.id), ...props, children: children ?? jsxs(Fragment$1, { children: [item.type !== "page" && jsx("div", { role: "none", className: "absolute start-4.5 inset-y-0 w-px bg-fd-border" }), icons[item.type], jsx("p", { className: "min-w-0 truncate", children: item.contentWithHighlights ? render(item.contentWithHighlights) : item.content })] }) });
}
function SearchDialogIcon(props) {
  const { isLoading } = useSearch();
  return jsx(Search, { ...props, className: twMerge("size-5 text-fd-muted-foreground", isLoading && "animate-pulse duration-400", props.className) });
}
const itemVariants = cva("rounded-md border px-2 py-0.5 text-xs font-medium text-fd-muted-foreground transition-colors", {
  variants: {
    active: {
      true: "bg-fd-accent text-fd-accent-foreground"
    }
  }
});
function TagsList({ tag, onTagChange, allowClear = false, ...props }) {
  return jsx("div", { ...props, className: twMerge("flex items-center gap-1 flex-wrap", props.className), children: jsx(TagsListContext.Provider, { value: useMemo(() => ({
    value: tag,
    onValueChange: onTagChange,
    allowClear
  }), [allowClear, onTagChange, tag]), children: props.children }) });
}
function TagsListItem({ value, className, ...props }) {
  const { onValueChange, value: selectedValue, allowClear } = useTagsList();
  const selected = value === selectedValue;
  return jsx("button", { type: "button", "data-active": selected, className: twMerge(itemVariants({ active: selected, className })), onClick: () => {
    onValueChange(selected && allowClear ? void 0 : value);
  }, tabIndex: -1, ...props, children: props.children });
}
function renderHighlights(highlights) {
  return highlights.map((node, i) => {
    if (node.styles?.highlight) {
      return jsx("span", { className: "text-fd-primary bg-fd-primary/10", children: node.content }, i);
    }
    return jsx(Fragment, { children: node.content }, i);
  });
}
function useSearch() {
  const ctx = useContext(Context);
  if (!ctx)
    throw new Error("Missing <SearchDialog />");
  return ctx;
}
function useTagsList() {
  const ctx = useContext(TagsListContext);
  if (!ctx)
    throw new Error("Missing <TagsList />");
  return ctx;
}
function useSearchList() {
  const ctx = useContext(ListContext);
  if (!ctx)
    throw new Error("Missing <SearchDialogList />");
  return ctx;
}
function useDebounce(value, delayMs = 1e3) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timer = useRef(void 0);
  if (delayMs === 0) return value;
  if (value !== debouncedValue && timer.current?.value !== value) {
    if (timer.current) clearTimeout(timer.current.handler);
    const handler = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delayMs);
    timer.current = { value, handler };
  }
  return debouncedValue;
}
function isDifferentDeep(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return b.length !== a.length || a.some((v, i) => isDifferentDeep(v, b[i]));
  }
  if (typeof a === "object" && a && typeof b === "object" && b) {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    return aKeys.length !== bKeys.length || aKeys.some(
      (key) => isDifferentDeep(a[key], b[key])
    );
  }
  return a !== b;
}
function useDocsSearch(clientOptions, _locale, _tag, _delayMs = 100, _allowEmpty = false, _key) {
  const {
    delayMs = _delayMs ?? 100,
    allowEmpty = _allowEmpty ?? false,
    ...client
  } = clientOptions;
  client.tag ??= _tag;
  client.locale ??= _locale;
  const [search2, setSearch] = useState("");
  const [results, setResults] = useState("empty");
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const debouncedValue = useDebounce(search2, delayMs);
  const onStart = useRef(void 0);
  useOnChange(
    [client, debouncedValue],
    () => {
      if (onStart.current) {
        onStart.current();
        onStart.current = void 0;
      }
      setIsLoading(true);
      let interrupt = false;
      onStart.current = () => {
        interrupt = true;
      };
      async function run() {
        if (debouncedValue.length === 0 && !allowEmpty) return "empty";
        if (client.type === "fetch") {
          const { fetchDocs } = await import('./fetch-C3XV44E6-uKSSbneq.mjs');
          return fetchDocs(debouncedValue, client);
        }
        if (client.type === "algolia") {
          const { searchDocs } = await import('./algolia-KPRGMSJO-DSC5A4gI.mjs');
          return searchDocs(debouncedValue, client);
        }
        if (client.type === "orama-cloud") {
          const { searchDocs } = await import('./orama-cloud-TXCWJTK3-CC6Fb5jM.mjs');
          return searchDocs(debouncedValue, client);
        }
        if (client.type === "static") {
          const { search: search22 } = await import('./static-K5IAOO6T-D7OgFdve.mjs');
          return search22(debouncedValue, client);
        }
        if (client.type === "mixedbread") {
          const { search: search22 } = await import('./mixedbread-AG5AAOKO-DHxvZkIe.mjs');
          return search22(debouncedValue, client);
        }
        throw new Error("unknown search client");
      }
      void run().then((res) => {
        if (interrupt) return;
        setError(void 0);
        setResults(res);
      }).catch((err) => {
        setError(err);
      }).finally(() => {
        setIsLoading(false);
      });
    },
    isDifferentDeep
  );
  return { search: search2, setSearch, query: { isLoading, data: results, error } };
}
function initOrama() {
  return create$1({
    schema: { _: "string" },
    language: "english"
  });
}
function DefaultSearchDialog(props) {
  const { locale } = useI18n();
  const { search: search2, setSearch, query } = useDocsSearch({
    type: "static",
    initOrama,
    locale
  });
  return /* @__PURE__ */ jsxs(
    SearchDialog,
    {
      search: search2,
      onSearchChange: setSearch,
      isLoading: query.isLoading,
      ...props,
      children: [
        /* @__PURE__ */ jsx(SearchDialogOverlay, {}),
        /* @__PURE__ */ jsxs(SearchDialogContent, { children: [
          /* @__PURE__ */ jsxs(SearchDialogHeader, { children: [
            /* @__PURE__ */ jsx(SearchDialogIcon, {}),
            /* @__PURE__ */ jsx(SearchDialogInput, {}),
            /* @__PURE__ */ jsx(SearchDialogClose, {})
          ] }),
          /* @__PURE__ */ jsx(SearchDialogList, { items: query.data !== "empty" ? query.data : null })
        ] })
      ]
    }
  );
}
const Route$1 = createRootRoute({
  head: () => ({
    meta: [{
      charSet: "utf-8"
    }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      title: "Fumadocs on TanStack Start"
    }],
    links: [{
      rel: "stylesheet",
      href: globalCss
    }]
  }),
  component: RootComponent
});
function RootComponent() {
  return /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx(Outlet, {}) });
}
function RootDocument({
  children
}) {
  return /* @__PURE__ */ jsxs("html", { suppressHydrationWarning: true, lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { className: "flex flex-col min-h-screen", children: [
      /* @__PURE__ */ jsx(TanstackProvider, { children: /* @__PURE__ */ jsx(RootProvider, { search: {
        SearchDialog: DefaultSearchDialog
      }, children }) }),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function sanitizeBase(base) {
  return base.replace(/^\/|\/$/g, "");
}
const createServerRpc = (functionId, serverBase, splitImportFn) => {
  invariant(
    splitImportFn,
    "🚨splitImportFn required for the server functions server runtime, but was not provided."
  );
  const sanitizedAppBase = sanitizeBase(".");
  const sanitizedServerBase = sanitizeBase(serverBase);
  const url = `${sanitizedAppBase ? `/${sanitizedAppBase}` : ``}/${sanitizedServerBase}/${functionId}`;
  return Object.assign(splitImportFn, {
    url,
    functionId
  });
};
function basename(path, ext) {
  const idx = path.lastIndexOf("/");
  return path.substring(
    idx === -1 ? 0 : idx + 1,
    ext ? path.length - ext.length : path.length
  );
}
function extname(path) {
  const dotIdx = path.lastIndexOf(".");
  if (dotIdx !== -1) {
    return path.substring(dotIdx);
  }
  return "";
}
function dirname(path) {
  return path.split("/").slice(0, -1).join("/");
}
function parseFilePath(path) {
  const ext = extname(path);
  const name = basename(path, ext);
  const dir = dirname(path);
  return {
    dirname: dir,
    name,
    ext,
    path,
    get flattenedPath() {
      return [dir, name].filter((p) => p.length > 0).join("/");
    }
  };
}
function splitPath(path) {
  return path.split("/").filter((p) => p.length > 0);
}
function joinPath(...paths) {
  const out = [];
  const parsed = paths.flatMap(splitPath);
  for (const seg of parsed) {
    switch (seg) {
      case "..":
        out.pop();
        break;
      case ".":
        break;
      default:
        out.push(seg);
    }
  }
  return out.join("/");
}
function slash(path) {
  const isExtendedLengthPath = path.startsWith("\\\\?\\");
  if (isExtendedLengthPath) {
    return path;
  }
  return path.replaceAll("\\", "/");
}
function normalizeUrl(url) {
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (!url.startsWith("/")) url = "/" + url;
  if (url.length > 1 && url.endsWith("/")) url = url.slice(0, -1);
  return url;
}
function legacyTransformer(transformer) {
  return {
    file(node, file) {
      if (!transformer.attachFile) return node;
      const content = file ? this.storage.read(file) : void 0;
      return transformer.attachFile(
        node,
        content?.format === "page" ? content : void 0
      );
    },
    folder(node, folderPath, metaPath) {
      if (!transformer.attachFolder) return node;
      const files = this.storage.readDir(folderPath) ?? [];
      const meta = metaPath ? this.storage.read(metaPath) : void 0;
      return transformer.attachFolder(
        node,
        {
          children: files.flatMap((file) => this.storage.read(file) ?? [])
        },
        meta?.format === "meta" ? meta : void 0
      );
    },
    separator(node) {
      if (!transformer.attachSeparator) return node;
      return transformer.attachSeparator(node);
    }
  };
}
function transformerFallback() {
  const addedFiles = /* @__PURE__ */ new Set();
  return {
    name: "fumadocs:fallback",
    root(root) {
      const isolatedStorage = new FileSystem();
      for (const file of this.storage.getFiles()) {
        if (addedFiles.has(file)) continue;
        const content = this.storage.read(file);
        if (content) isolatedStorage.write(file, content);
      }
      if (isolatedStorage.getFiles().length === 0) return root;
      root.fallback = this.builder.build({
        ...this.options,
        id: `fallback-${root.$id ?? ""}`,
        storage: isolatedStorage,
        generateFallback: false
      });
      addedFiles.clear();
      return root;
    },
    file(node, file) {
      if (file) addedFiles.add(file);
      return node;
    },
    folder(node, _dir, metaPath) {
      if (metaPath) addedFiles.add(metaPath);
      return node;
    }
  };
}
var group = /^\((?<name>.+)\)$/;
var link = /^(?:\[(?<icon>[^\]]+)])?\[(?<name>[^\]]+)]\((?<url>[^)]+)\)$/;
var separator = /^---(?:\[(?<icon>[^\]]+)])?(?<name>.+)---|^---$/;
var rest = "...";
var restReversed = "z...a";
var extractPrefix = "...";
var excludePrefix = "!";
function buildAll(paths, ctx, reversed = false) {
  const items = [];
  const folders = [];
  const sortedPaths = paths.sort(
    (a, b) => a.localeCompare(b) * (reversed ? -1 : 1)
  );
  for (const path of sortedPaths) {
    ctx.visitedPaths.add(path);
    const fileNode = buildFileNode(path, ctx);
    if (fileNode) {
      if (basename(path, extname(path)) === "index") items.unshift(fileNode);
      else items.push(fileNode);
      continue;
    }
    const dirNode = buildFolderNode(path, false, ctx);
    if (dirNode) folders.push(dirNode);
  }
  return [...items, ...folders];
}
function resolveFolderItem(folderPath, item, ctx, idx) {
  if (item === rest || item === restReversed) return item;
  const { options, resolveName } = ctx;
  let match = separator.exec(item);
  if (match?.groups) {
    let node = {
      $id: `${folderPath}#${idx}`,
      type: "separator",
      icon: options.resolveIcon?.(match.groups.icon),
      name: match.groups.name
    };
    for (const transformer of ctx.transformers) {
      if (!transformer.separator) continue;
      node = transformer.separator.call(ctx, node);
    }
    return [node];
  }
  match = link.exec(item);
  if (match?.groups) {
    const { icon, url, name } = match.groups;
    const isRelative = url.startsWith("/") || url.startsWith("#") || url.startsWith(".");
    let node = {
      type: "page",
      icon: options.resolveIcon?.(icon),
      name,
      url,
      external: !isRelative
    };
    for (const transformer of ctx.transformers) {
      if (!transformer.file) continue;
      node = transformer.file.call(ctx, node);
    }
    return [node];
  }
  const isExcept = item.startsWith(excludePrefix);
  const isExtract = !isExcept && item.startsWith(extractPrefix);
  let filename = item;
  if (isExcept) {
    filename = item.slice(excludePrefix.length);
  } else if (isExtract) {
    filename = item.slice(extractPrefix.length);
  }
  const path = resolveName(joinPath(folderPath, filename), "page");
  ctx.visitedPaths.add(path);
  if (isExcept) return [];
  const dirNode = buildFolderNode(path, false, ctx);
  if (dirNode) {
    return isExtract ? dirNode.children : [dirNode];
  }
  const fileNode = buildFileNode(path, ctx);
  return fileNode ? [fileNode] : [];
}
function buildFolderNode(folderPath, isGlobalRoot, ctx) {
  const { storage, options, resolveName, transformers } = ctx;
  const files = storage.readDir(folderPath);
  if (!files) return;
  const metaPath = resolveName(joinPath(folderPath, "meta"), "meta");
  const indexPath = resolveName(joinPath(folderPath, "index"), "page");
  let meta = storage.read(metaPath);
  if (meta?.format !== "meta") {
    meta = void 0;
  }
  const isRoot = meta?.data.root ?? isGlobalRoot;
  let index;
  let children;
  function setIndexIfUnused() {
    if (isRoot || ctx.visitedPaths.has(indexPath)) return;
    ctx.visitedPaths.add(indexPath);
    index = buildFileNode(indexPath, ctx);
  }
  if (!meta?.data.pages) {
    setIndexIfUnused();
    children = buildAll(
      files.filter((file) => !ctx.visitedPaths.has(file)),
      ctx
    );
  } else {
    const resolved = meta.data.pages.flatMap((item, i) => resolveFolderItem(folderPath, item, ctx, i));
    setIndexIfUnused();
    for (let i = 0; i < resolved.length; i++) {
      const item = resolved[i];
      if (item !== rest && item !== restReversed) continue;
      const items = buildAll(
        files.filter((file) => !ctx.visitedPaths.has(file)),
        ctx,
        item === restReversed
      );
      resolved.splice(i, 1, ...items);
      break;
    }
    children = resolved;
  }
  let name = meta?.data.title ?? index?.name;
  if (!name) {
    const folderName = basename(folderPath);
    name = pathToName(group.exec(folderName)?.[1] ?? folderName);
  }
  let node = {
    type: "folder",
    name,
    icon: options.resolveIcon?.(meta?.data.icon) ?? index?.icon,
    root: meta?.data.root,
    defaultOpen: meta?.data.defaultOpen,
    description: meta?.data.description,
    index,
    children,
    $id: folderPath,
    $ref: !options.noRef && meta ? {
      metaFile: metaPath
    } : void 0
  };
  for (const transformer of transformers) {
    if (!transformer.folder) continue;
    node = transformer.folder.call(ctx, node, folderPath, metaPath);
  }
  return node;
}
function buildFileNode(path, ctx) {
  const { options, getUrl, storage, locale, transformers } = ctx;
  const page = storage.read(path);
  if (page?.format !== "page") return;
  const { title, description, icon } = page.data;
  let item = {
    $id: path,
    type: "page",
    name: title ?? pathToName(basename(path, extname(path))),
    description,
    icon: options.resolveIcon?.(icon),
    url: getUrl(page.slugs, locale),
    $ref: !options.noRef ? {
      file: path
    } : void 0
  };
  for (const transformer of transformers) {
    if (!transformer.file) continue;
    item = transformer.file.call(ctx, item, path);
  }
  return item;
}
function build(id, ctx) {
  const folder = buildFolderNode("", true, ctx);
  let root = {
    $id: id,
    name: folder.name,
    children: folder.children
  };
  for (const transformer of ctx.transformers) {
    if (!transformer.root) continue;
    root = transformer.root.call(ctx, root);
  }
  return root;
}
function createPageTreeBuilder(getUrl) {
  function getTransformers(options, generateFallback) {
    const transformers = [legacyTransformer(options)];
    if (options.transformers) {
      transformers.push(...options.transformers);
    }
    if (generateFallback) {
      transformers.push(transformerFallback());
    }
    return transformers;
  }
  function createFlattenPathResolver(storage) {
    const map = /* @__PURE__ */ new Map();
    const files = storage.getFiles();
    for (const file of files) {
      const content = storage.read(file);
      const flattenPath = file.substring(0, file.length - extname(file).length);
      map.set(flattenPath + "." + content.format, file);
    }
    return (name, format) => {
      return map.get(name + "." + format);
    };
  }
  return {
    build({ storage, id, ...options }) {
      const key = "";
      return this.buildI18n({
        id,
        storages: { [key]: storage },
        ...options
      })[key];
    },
    buildI18n({ id, storages, generateFallback = true, ...options }) {
      const transformers = getTransformers(options, generateFallback);
      const out = {};
      for (const [locale, storage] of Object.entries(storages)) {
        const resolve = createFlattenPathResolver(storage);
        const branch = locale.length === 0 ? "root" : locale;
        out[locale] = build(id ? `${id}-${branch}` : branch, {
          transformers,
          builder: this,
          options,
          getUrl,
          locale,
          storage,
          storages,
          visitedPaths: /* @__PURE__ */ new Set(),
          resolveName(name, format) {
            return resolve(name, format) ?? name;
          }
        });
      }
      return out;
    }
  };
}
function pathToName(name) {
  const result = [];
  for (const c of name) {
    if (result.length === 0) result.push(c.toLocaleUpperCase());
    else if (c === "-") result.push(" ");
    else result.push(c);
  }
  return result.join("");
}
var FileSystem = class {
  constructor(inherit) {
    this.files = /* @__PURE__ */ new Map();
    this.folders = /* @__PURE__ */ new Map();
    if (inherit) {
      for (const [k, v] of inherit.folders) {
        this.folders.set(k, v);
      }
      for (const [k, v] of inherit.files) {
        this.files.set(k, v);
      }
    } else {
      this.folders.set("", []);
    }
  }
  read(path) {
    return this.files.get(path);
  }
  /**
   * get the direct children of folder (in virtual file path)
   */
  readDir(path) {
    return this.folders.get(path);
  }
  write(path, file) {
    if (this.files.has(path)) {
      this.files.set(path, file);
      return;
    }
    const dir = dirname(path);
    this.makeDir(dir);
    this.readDir(dir)?.push(path);
    this.files.set(path, file);
  }
  delete(path) {
    return this.files.delete(path);
  }
  deleteDir(path) {
    return this.folders.delete(path);
  }
  getFiles() {
    return Array.from(this.files.keys());
  }
  makeDir(path) {
    const segments = splitPath(path);
    for (let i = 0; i < segments.length; i++) {
      const segment = segments.slice(0, i + 1).join("/");
      if (this.folders.has(segment)) continue;
      this.folders.set(segment, []);
      this.folders.get(dirname(segment)).push(segment);
    }
  }
};
function isLocaleValid(locale) {
  return locale.length > 0 && !/\d+/.test(locale);
}
var parsers = {
  dir(path) {
    const [locale, ...segs] = path.split("/");
    if (locale && segs.length > 0 && isLocaleValid(locale))
      return [segs.join("/"), locale];
    return [path];
  },
  dot(path) {
    const dir = dirname(path);
    const base = basename(path);
    const parts = base.split(".");
    if (parts.length < 3) return [path];
    const [locale] = parts.splice(parts.length - 2, 1);
    if (!isLocaleValid(locale)) return [path];
    return [joinPath(dir, parts.join(".")), locale];
  },
  none(path) {
    return [path];
  }
};
function loadFiles(files, options, i18n) {
  const { buildFile, transformers = [] } = options;
  const parser = parsers[i18n.parser ?? "dot"];
  const storages = {};
  const normalized = files.map(
    (file) => buildFile({
      ...file,
      path: normalizePath(file.path)
    })
  );
  const fallbackLang = i18n.fallbackLanguage !== null ? i18n.fallbackLanguage ?? i18n.defaultLanguage : null;
  function scan(lang) {
    if (storages[lang]) return;
    let storage;
    if (fallbackLang && fallbackLang !== lang) {
      scan(fallbackLang);
      storage = new FileSystem(storages[fallbackLang]);
    } else {
      storage = new FileSystem();
    }
    for (const item of normalized) {
      const [path, locale = i18n.defaultLanguage] = parser(item.path);
      if (locale === lang) storage.write(path, item);
    }
    for (const transformer of transformers) {
      transformer({
        storage,
        options
      });
    }
    storages[lang] = storage;
  }
  for (const lang of i18n.languages) scan(lang);
  return storages;
}
function normalizePath(path) {
  const segments = splitPath(slash(path));
  if (segments[0] === "." || segments[0] === "..")
    throw new Error("It must not start with './' or '../'");
  return segments.join("/");
}
function indexPages(storages, getUrl) {
  const result = {
    // (locale.slugs -> page)
    pages: /* @__PURE__ */ new Map(),
    // (locale.path -> page)
    pathToMeta: /* @__PURE__ */ new Map(),
    // (locale.path -> meta)
    pathToPage: /* @__PURE__ */ new Map()
  };
  for (const [lang, storage] of Object.entries(storages)) {
    for (const filePath of storage.getFiles()) {
      const item = storage.read(filePath);
      const path = `${lang}.${filePath}`;
      if (item.format === "meta") {
        result.pathToMeta.set(path, fileToMeta(item));
        continue;
      }
      const page = fileToPage(item, getUrl, lang);
      result.pathToPage.set(path, page);
      result.pages.set(`${lang}.${page.slugs.join("/")}`, page);
    }
  }
  return result;
}
function createGetUrl(baseUrl, i18n) {
  const baseSlugs = baseUrl.split("/");
  return (slugs, locale) => {
    const hideLocale = i18n?.hideLocale ?? "never";
    let urlLocale;
    if (hideLocale === "never") {
      urlLocale = locale;
    } else if (hideLocale === "default-locale" && locale !== i18n?.defaultLanguage) {
      urlLocale = locale;
    }
    const paths = [...baseSlugs, ...slugs];
    if (urlLocale) paths.unshift(urlLocale);
    return `/${paths.filter((v) => v.length > 0).join("/")}`;
  };
}
function loader$1(options) {
  return createOutput(options);
}
function loadSource(source2) {
  const out = [];
  for (const item of Array.isArray(source2) ? source2 : [source2]) {
    if (typeof item.files === "function") {
      out.push(...item.files());
    } else {
      out.push(...item.files);
    }
  }
  return out;
}
function createOutput(options) {
  if (!options.url && !options.baseUrl) {
    console.warn("`loader()` now requires a `baseUrl` option to be defined.");
  }
  const {
    source: source2,
    baseUrl = "/",
    i18n,
    slugs: slugsFn,
    url: urlFn,
    transformers = []
  } = options;
  const getUrl = urlFn ? (...args) => normalizeUrl(urlFn(...args)) : createGetUrl(baseUrl, i18n);
  const defaultLanguage = i18n?.defaultLanguage ?? "";
  const files = loadSource(source2);
  const transformerSlugs = ({ storage }) => {
    const indexFiles = /* @__PURE__ */ new Set();
    const taken = /* @__PURE__ */ new Set();
    const autoIndex = slugsFn === void 0;
    for (const path of storage.getFiles()) {
      const file = storage.read(path);
      if (!file || file.format !== "page" || file.slugs) continue;
      if (isIndex(path) && autoIndex) {
        indexFiles.add(path);
        continue;
      }
      file.slugs = slugsFn ? slugsFn(parseFilePath(path)) : getSlugs(path);
      const key = file.slugs.join("/");
      if (taken.has(key)) throw new Error("Duplicated slugs");
      taken.add(key);
    }
    for (const path of indexFiles) {
      const file = storage.read(path);
      if (file?.format !== "page") continue;
      file.slugs = getSlugs(path);
      if (taken.has(file.slugs.join("/"))) file.slugs.push("index");
    }
  };
  const storages = loadFiles(
    files,
    {
      buildFile(file) {
        if (file.type === "page") {
          return {
            format: "page",
            path: file.path,
            slugs: file.slugs,
            data: file.data,
            absolutePath: file.absolutePath ?? ""
          };
        }
        return {
          format: "meta",
          path: file.path,
          absolutePath: file.absolutePath ?? "",
          data: file.data
        };
      },
      transformers: [transformerSlugs, ...transformers]
    },
    i18n ?? {
      defaultLanguage,
      parser: "none",
      languages: [defaultLanguage]
    }
  );
  const walker = indexPages(storages, getUrl);
  const builder = createPageTreeBuilder(getUrl);
  let pageTree;
  return {
    _i18n: i18n,
    get pageTree() {
      pageTree ??= builder.buildI18n({
        storages,
        resolveIcon: options.icon,
        ...options.pageTree
      });
      return i18n ? pageTree : pageTree[defaultLanguage];
    },
    set pageTree(v) {
      if (i18n) {
        pageTree = v;
      } else {
        pageTree = {
          [defaultLanguage]: v
        };
      }
    },
    getPageByHref(href, { dir = "", language } = {}) {
      const [value, hash] = href.split("#", 2);
      let target;
      if (value.startsWith(".") && (value.endsWith(".md") || value.endsWith(".mdx"))) {
        const path = joinPath(dir, value);
        target = walker.pathToPage.get(`${language}.${path}`);
      } else {
        target = this.getPages(language).find((item) => item.url === value);
      }
      if (target)
        return {
          page: target,
          hash
        };
    },
    getPages(language = defaultLanguage) {
      const pages = [];
      for (const [key, value] of walker.pages.entries()) {
        if (key.startsWith(`${language}.`)) pages.push(value);
      }
      return pages;
    },
    getLanguages() {
      const list = [];
      if (!options.i18n) return list;
      for (const language of options.i18n.languages) {
        list.push({
          language,
          pages: this.getPages(language)
        });
      }
      return list;
    },
    getPage(slugs = [], language = defaultLanguage) {
      return walker.pages.get(`${language}.${slugs.join("/")}`);
    },
    getNodeMeta(node, language = defaultLanguage) {
      const ref = node.$ref?.metaFile;
      if (!ref) return;
      return walker.pathToMeta.get(`${language}.${ref}`);
    },
    getNodePage(node, language = defaultLanguage) {
      const ref = node.$ref?.file;
      if (!ref) return;
      return walker.pathToPage.get(`${language}.${ref}`);
    },
    getPageTree(locale) {
      if (options.i18n) {
        return this.pageTree[locale ?? defaultLanguage];
      }
      return this.pageTree;
    },
    // @ts-expect-error -- ignore this
    generateParams(slug, lang) {
      if (options.i18n) {
        return this.getLanguages().flatMap(
          (entry) => entry.pages.map((page) => ({
            [slug ?? "slug"]: page.slugs,
            [lang ?? "lang"]: entry.language
          }))
        );
      }
      return this.getPages().map((page) => ({
        [slug ?? "slug"]: page.slugs
      }));
    }
  };
}
function fileToMeta(file) {
  return {
    path: file.path,
    absolutePath: file.absolutePath,
    get file() {
      return parseFilePath(this.path);
    },
    data: file.data
  };
}
function fileToPage(file, getUrl, locale) {
  return {
    get file() {
      return parseFilePath(this.path);
    },
    absolutePath: file.absolutePath,
    path: file.path,
    url: getUrl(file.slugs, locale),
    slugs: file.slugs,
    data: file.data,
    locale
  };
}
var GroupRegex = /^\(.+\)$/;
function isIndex(file) {
  return basename(file, extname(file)) === "index";
}
function getSlugs(file) {
  if (typeof file !== "string") return getSlugs(file.path);
  const dir = dirname(file);
  const name = basename(file, extname(file));
  const slugs = [];
  for (const seg of dir.split("/")) {
    if (seg.length > 0 && !GroupRegex.test(seg)) slugs.push(encodeURI(seg));
  }
  if (GroupRegex.test(name))
    throw new Error(`Cannot use folder group in file names: ${file}`);
  if (name !== "index") {
    slugs.push(encodeURI(name));
  }
  return slugs;
}
const create = fromConfig();
const docs = {
  doc: create.doc("docs", "./content/docs", /* @__PURE__ */ Object.assign({
    "./changelog.md": () => import('./CHANGELOG-C2nIblvb.mjs'),
    "./cli-reference.mdx": () => import('./cli-reference.snap-Ba1yoIBd.mjs'),
    "./community-tools.mdx": () => import('./community-tools-9DX9XnE7.mjs'),
    "./comparisons/git-command-table.mdx": () => import('./git-command-table-B8Yzgwke.mjs'),
    "./comparisons/git-compatibility.mdx": () => import('./git-compatibility-BZUL4tMI.mjs'),
    "./comparisons/git.mdx": () => import('./git-Coiz0kim.mjs'),
    "./comparisons/related-work.mdx": () => import('./related-work-zJVkpdFI.mjs'),
    "./comparisons/sapling.mdx": () => import('./sapling-cDx9TRBY.mjs'),
    "./concepts/bookmarks.mdx": () => import('./bookmarks-H6-HLBIA.mjs'),
    "./concepts/conflicts.mdx": () => import('./conflicts-2kc_oHfn.mjs'),
    "./concepts/glossary.mdx": () => import('./glossary-D69oKx_p.mjs'),
    "./concepts/operation-log.mdx": () => import('./operation-log-DEJpl5lj.mjs'),
    "./concepts/working-copy.mdx": () => import('./working-copy-Cp8cvM6b.mjs'),
    "./contributing/code-of-conduct.mdx": () => import('./code-of-conduct-HKc-K8k0.mjs'),
    "./contributing/contributing.mdx": () => import('./contributing-Cq8EXt-B.mjs'),
    "./contributing/design-doc-blueprint.mdx": () => import('./design-doc-blueprint-D3koxAbN.mjs'),
    "./contributing/design-docs.mdx": () => import('./design-docs-CeOicsV5.mjs'),
    "./contributing/paid-contributors.mdx": () => import('./paid-contributors-BhKPLVNZ.mjs'),
    "./contributing/releasing.mdx": () => import('./releasing--AvuZjhW.mjs'),
    "./contributing/temporary-voting.mdx": () => import('./temporary-voting-BsDcbiYs.mjs'),
    "./design-docs/copy-tracking.mdx": () => import('./copy-tracking-CD6bkYoY.mjs'),
    "./design-docs/git-submodule-storage.mdx": () => import('./git-submodule-storage-CPC6mFJh.mjs'),
    "./design-docs/git-submodules.mdx": () => import('./git-submodules-CGvimgt5.mjs'),
    "./design-docs/run.mdx": () => import('./run-DfuTEuwR.mjs'),
    "./design-docs/sparse-v2.mdx": () => import('./sparse-v2-FxQo6gAf.mjs'),
    "./design-docs/tracking-branches.mdx": () => import('./tracking-branches-CvIc-6q-.mjs'),
    "./faq.mdx": () => import('./faq-D0fuGYTT.mjs'),
    "./getting-started/github.mdx": () => import('./github-FZcWiQf4.mjs'),
    "./getting-started/install-and-setup.mdx": () => import('./install-and-setup-4xCZUawU.mjs'),
    "./getting-started/tutorial.mdx": () => import('./tutorial-Ez6k2yos.mjs'),
    "./getting-started/windows.mdx": () => import('./windows-Cy0fZiMf.mjs'),
    "./guides/divergence.mdx": () => import('./divergence-C0-H95m-.mjs'),
    "./index.mdx": () => import('./index-CNPVuaFz.mjs'),
    "./reference/config.mdx": () => import('./config-RdVj9Tf4.mjs'),
    "./reference/filesets.mdx": () => import('./filesets-6I_6TQDn.mjs'),
    "./reference/revsets.mdx": () => import('./revsets-DxQ6CZJM.mjs'),
    "./reference/templates.mdx": () => import('./templates-DoWpwvXn.mjs'),
    "./roadmap.mdx": () => import('./roadmap-DqTnqRAU.mjs'),
    "./style-guide.mdx": () => import('./style-guide-BrHAqnAM.mjs'),
    "./technical-details/architecture.mdx": () => import('./architecture-B6qNkUVL.mjs'),
    "./technical-details/concurrency.mdx": () => import('./concurrency-DqooP9GE.mjs'),
    "./technical-details/conflicts.mdx": () => import('./conflicts-CRfUSldF.mjs'),
    "./technical-details/core-tenets.mdx": () => import('./core-tenets-BByHPWoh.mjs'),
    "./testimonials.mdx": () => import('./testimonials-Dv9QVEQi.mjs')
  })),
  meta: create.meta("docs", "./content/docs", /* @__PURE__ */ Object.assign({
    "./comparisons/meta.json": () => import('./meta-ChQpA39r.mjs').then((m) => m["default"]),
    "./concepts/meta.json": () => import('./meta-BdpYfeK6.mjs').then((m) => m["default"]),
    "./design-docs/meta.json": () => import('./meta-gV0U_VUq.mjs').then((m) => m["default"]),
    "./getting-started/meta.json": () => import('./meta-BpaRFmnX.mjs').then((m) => m["default"]),
    "./meta.json": () => import('./meta-C8AvTTlI.mjs').then((m) => m["default"]),
    "./reference/meta.json": () => import('./meta-8gWoU5qD.mjs').then((m) => m["default"]),
    "./technical-details/meta.json": () => import('./meta-CgJfdU2v.mjs').then((m) => m["default"])
  }))
};
const source = loader$1({
  source: await create.sourceAsync(docs.doc, docs.meta),
  baseUrl: "/",
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
        }
      }
    ]
  }
});
new Slugger();
var Link2 = forwardRef(
  ({
    href = "#",
    // any protocol
    external = href.match(/^\w+:/) || // protocol relative URL
    href.startsWith("//"),
    prefetch,
    ...props
  }, ref) => {
    if (external) {
      return /* @__PURE__ */ jsx(
        "a",
        {
          ref,
          href,
          rel: "noreferrer noopener",
          target: "_blank",
          ...props,
          children: props.children
        }
      );
    }
    return /* @__PURE__ */ jsx(Link$1, { ref, href, prefetch, ...props });
  }
);
Link2.displayName = "Link";
function Cards(props) {
  return jsx("div", { ...props, className: twMerge("grid grid-cols-2 gap-3 @container", props.className), children: props.children });
}
function Card({ icon, title, description, ...props }) {
  const E = props.href ? Link2 : "div";
  return jsxs(E, { ...props, "data-card": true, className: twMerge("block rounded-xl border bg-fd-card p-4 text-fd-card-foreground transition-colors @max-lg:col-span-full", props.href && "hover:bg-fd-accent/80", props.className), children: [icon ? jsx("div", { className: "not-prose mb-2 w-fit shadow-md rounded-lg border bg-fd-muted p-1.5 text-fd-muted-foreground [&_svg]:size-4", children: icon }) : null, jsx("h3", { className: "not-prose mb-1 text-sm font-medium", children: title }), description ? jsx("p", { className: "!my-0 text-sm text-fd-muted-foreground", children: description }) : null, jsx("div", { className: "text-sm text-fd-muted-foreground prose-no-margin empty:hidden", children: props.children })] });
}
function getBreadcrumbItemsFromPath(tree, path, options) {
  const { includePage = true, includeSeparator = false, includeRoot } = options;
  let items = [];
  path.forEach((item, i) => {
    if (item.type === "separator" && item.name && includeSeparator) {
      items.push({
        name: item.name
      });
    }
    if (item.type === "folder") {
      const next = path.at(i + 1);
      if (next && item.index === next) return;
      if (item.root) {
        items = [];
        return;
      }
      items.push({
        name: item.name,
        url: item.index?.url
      });
    }
    if (item.type === "page" && includePage) {
      items.push({
        name: item.name,
        url: item.url
      });
    }
  });
  if (includeRoot) {
    items.unshift({
      name: tree.name,
      url: typeof includeRoot === "object" ? includeRoot.url : void 0
    });
  }
  return items;
}
function searchPath(nodes, url) {
  const items = [];
  url = normalizeUrl(url);
  function run(nodes2) {
    let separator2;
    for (const node of nodes2) {
      if (node.type === "separator") separator2 = node;
      if (node.type === "folder") {
        if (node.index?.url === url) {
          if (separator2) items.push(separator2);
          items.push(node, node.index);
          return true;
        }
        if (run(node.children)) {
          items.unshift(node);
          if (separator2) items.unshift(separator2);
          return true;
        }
      }
      if (node.type === "page" && node.url === url) {
        if (separator2) items.push(separator2);
        items.push(node);
        return true;
      }
    }
    return false;
  }
  if (run(nodes)) return items;
  return null;
}
const TreeContext = createContext("TreeContext");
const PathContext = createContext("PathContext", []);
function TreeContextProvider(props) {
  const nextIdRef = useRef(0);
  const pathname = usePathname();
  const tree = useMemo(() => props.tree, [props.tree.$id ?? props.tree]);
  const path = useMemo(() => {
    let result = searchPath(tree.children, pathname);
    if (result)
      return result;
    if (tree.fallback)
      result = searchPath(tree.fallback.children, pathname);
    return result ?? [];
  }, [tree, pathname]);
  const root = path.findLast((item) => item.type === "folder" && item.root) ?? tree;
  root.$id ?? (root.$id = String(nextIdRef.current++));
  return jsx(TreeContext.Provider, { value: useMemo(() => ({ root }), [root]), children: jsx(PathContext.Provider, { value: path, children: props.children }) });
}
function useTreePath() {
  return PathContext.use();
}
function useTreeContext() {
  return TreeContext.use("You must wrap this component under <DocsLayout />");
}
createContext("StylesContext", {
  tocNav: "xl:hidden",
  toc: "max-xl:hidden"
});
const NavContext = createContext("NavContext", {
  isTransparent: false
});
function NavProvider({ transparentMode = "none", children }) {
  const [transparent, setTransparent] = useState(transparentMode !== "none");
  useEffect(() => {
    if (transparentMode !== "top")
      return;
    const listener = () => {
      setTransparent(window.scrollY < 10);
    };
    listener();
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [transparentMode]);
  return jsx(NavContext.Provider, { value: useMemo(() => ({ isTransparent: transparent }), [transparent]), children });
}
function useNav() {
  return NavContext.use();
}
function normalize(url) {
  if (url.length > 1 && url.endsWith("/"))
    return url.slice(0, -1);
  return url;
}
function isActive(url, pathname, nested = true) {
  url = normalize(url);
  pathname = normalize(pathname);
  return url === pathname || nested && pathname.startsWith(`${url}/`);
}
function isTabActive(tab, pathname) {
  if (tab.urls)
    return tab.urls.has(normalize(pathname));
  return isActive(tab.url, pathname, true);
}
const Collapsible = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
const CollapsibleContent = forwardRef(({ children, ...props }, ref) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return jsx(CollapsiblePrimitive.CollapsibleContent, { ref, ...props, className: twMerge("overflow-hidden", mounted && "data-[state=closed]:animate-fd-collapsible-up data-[state=open]:animate-fd-collapsible-down", props.className), children });
});
CollapsibleContent.displayName = CollapsiblePrimitive.CollapsibleContent.displayName;
function mergeRefs$1(...refs) {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref !== null) {
        ref.current = value;
      }
    });
  };
}
function useAnchorObserver(watch, single) {
  const [activeAnchor, setActiveAnchor] = useState([]);
  useEffect(() => {
    let visible = [];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !visible.includes(entry.target.id)) {
            visible = [...visible, entry.target.id];
          } else if (!entry.isIntersecting && visible.includes(entry.target.id)) {
            visible = visible.filter((v) => v !== entry.target.id);
          }
        }
        if (visible.length > 0) setActiveAnchor(visible);
      },
      {
        rootMargin: single ? "-80px 0% -70% 0%" : `-20px 0% -40% 0%`,
        threshold: 1
      }
    );
    function onScroll() {
      const element = document.scrollingElement;
      if (!element) return;
      const top = element.scrollTop;
      if (top <= 0 && single) setActiveAnchor(watch.slice(0, 1));
      else if (top + element.clientHeight >= element.scrollHeight - 6) {
        setActiveAnchor((active) => {
          return active.length > 0 && !single ? watch.slice(watch.indexOf(active[0])) : watch.slice(-1);
        });
      }
    }
    for (const heading of watch) {
      const element = document.getElementById(heading);
      if (element) observer.observe(element);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [single, watch]);
  return single ? activeAnchor.slice(0, 1) : activeAnchor;
}
var ActiveAnchorContext = createContext$1([]);
var ScrollContext = createContext$1({
  current: null
});
function useActiveAnchor() {
  return useContext(ActiveAnchorContext).at(-1);
}
function useActiveAnchors() {
  return useContext(ActiveAnchorContext);
}
function ScrollProvider({
  containerRef,
  children
}) {
  return /* @__PURE__ */ jsx(ScrollContext.Provider, { value: containerRef, children });
}
function AnchorProvider({
  toc,
  single = true,
  children
}) {
  const headings = useMemo(() => {
    return toc.map((item) => item.url.split("#")[1]);
  }, [toc]);
  return /* @__PURE__ */ jsx(ActiveAnchorContext.Provider, { value: useAnchorObserver(headings, single), children });
}
var TOCItem$2 = forwardRef(
  ({ onActiveChange, ...props }, ref) => {
    const containerRef = useContext(ScrollContext);
    const anchors = useActiveAnchors();
    const anchorRef = useRef(null);
    const mergedRef = mergeRefs$1(anchorRef, ref);
    const isActive2 = anchors.includes(props.href.slice(1));
    useOnChange(isActive2, (v) => {
      const element = anchorRef.current;
      if (!element) return;
      if (v && containerRef.current) {
        scrollIntoView(element, {
          behavior: "smooth",
          block: "center",
          inline: "center",
          scrollMode: "always",
          boundary: containerRef.current
        });
      }
      onActiveChange?.(v);
    });
    return /* @__PURE__ */ jsx("a", { ref: mergedRef, "data-active": isActive2, ...props, children: props.children });
  }
);
TOCItem$2.displayName = "TOCItem";
function calc(container, active) {
  if (active.length === 0 || container.clientHeight === 0) {
    return [0, 0];
  }
  let upper = Number.MAX_VALUE, lower = 0;
  for (const item of active) {
    const element = container.querySelector(`a[href="#${item}"]`);
    if (!element)
      continue;
    const styles = getComputedStyle(element);
    upper = Math.min(upper, element.offsetTop + parseFloat(styles.paddingTop));
    lower = Math.max(lower, element.offsetTop + element.clientHeight - parseFloat(styles.paddingBottom));
  }
  return [upper, lower - upper];
}
function update(element, info) {
  element.style.setProperty("--fd-top", `${info[0]}px`);
  element.style.setProperty("--fd-height", `${info[1]}px`);
}
function TocThumb({ containerRef, ...props }) {
  const active = useActiveAnchors();
  const thumbRef = useRef(null);
  const onResize = useEffectEvent(() => {
    if (!containerRef.current || !thumbRef.current)
      return;
    update(thumbRef.current, calc(containerRef.current, active));
  });
  useEffect(() => {
    if (!containerRef.current)
      return;
    const container = containerRef.current;
    onResize();
    const observer = new ResizeObserver(onResize);
    observer.observe(container);
    return () => {
      observer.disconnect();
    };
  }, [containerRef, onResize]);
  useOnChange(active, () => {
    if (!containerRef.current || !thumbRef.current)
      return;
    update(thumbRef.current, calc(containerRef.current, active));
  });
  return jsx("div", { ref: thumbRef, role: "none", ...props });
}
function mergeRefs(...refs) {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref) {
        ref.current = value;
      }
    });
  };
}
const TOCContext = createContext$1([]);
function useTOCItems() {
  return useContext(TOCContext);
}
function TOCProvider({ toc, children, ...props }) {
  return jsx(TOCContext, { value: toc, children: jsx(AnchorProvider, { toc, ...props, children }) });
}
function TOCScrollArea({ ref, className, ...props }) {
  const viewRef = useRef(null);
  return jsx("div", { ref: mergeRefs(viewRef, ref), className: twMerge("relative min-h-0 text-sm ms-px overflow-auto [scrollbar-width:none] [mask-image:linear-gradient(to_bottom,transparent,white_16px,white_calc(100%-16px),transparent)] py-3", className), ...props, children: jsx(ScrollProvider, { containerRef: viewRef, children: props.children }) });
}
function TOCItems({ ref, className, ...props }) {
  const containerRef = useRef(null);
  const items = useTOCItems();
  const { text } = useI18n();
  if (items.length === 0)
    return jsx("div", { className: "rounded-lg border bg-fd-card p-3 text-xs text-fd-muted-foreground", children: text.tocNoHeadings });
  return jsxs(Fragment$1, { children: [jsx(TocThumb, { containerRef, className: "absolute top-(--fd-top) h-(--fd-height) w-px bg-fd-primary transition-all" }), jsx("div", { ref: mergeRefs(ref, containerRef), className: twMerge("flex flex-col border-s border-fd-foreground/10", className), ...props, children: items.map((item) => jsx(TOCItem$1, { item }, item.url)) })] });
}
function TOCItem$1({ item }) {
  return jsx(TOCItem$2, { href: item.url, className: twMerge("prose py-1.5 text-sm text-fd-muted-foreground transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0 data-[active=true]:text-fd-primary", item.depth <= 2 && "ps-3", item.depth === 3 && "ps-6", item.depth >= 4 && "ps-8"), children: item.title });
}
const TocPopoverContext = createContext("TocPopoverContext");
function PageTOCPopoverTrigger(props) {
  const { text } = useI18n();
  const { open } = TocPopoverContext.use();
  const items = useTOCItems();
  const active = useActiveAnchor();
  const selected = useMemo(() => items.findIndex((item) => active === item.url.slice(1)), [items, active]);
  const path = useTreePath().at(-1);
  const showItem = selected !== -1 && !open;
  return jsxs(CollapsibleTrigger, { ...props, className: twMerge("flex w-full h-(--fd-tocnav-height) items-center text-sm text-fd-muted-foreground gap-2.5 px-4 py-2.5 text-start focus-visible:outline-none [&_svg]:size-4 md:px-6", props.className), children: [jsx(ProgressCircle, { value: (selected + 1) / Math.max(1, items.length), max: 1, className: twMerge("shrink-0", open && "text-fd-primary") }), jsxs("span", { className: "grid flex-1 *:my-auto *:row-start-1 *:col-start-1", children: [jsx("span", { className: twMerge("truncate transition-all", open && "text-fd-foreground", showItem && "opacity-0 -translate-y-full pointer-events-none"), children: path?.name ?? text.toc }), jsx("span", { className: twMerge("truncate transition-all", !showItem && "opacity-0 translate-y-full pointer-events-none"), children: items[selected]?.title })] }), jsx(ChevronDown, { className: twMerge("shrink-0 transition-transform mx-0.5", open && "rotate-180") })] });
}
function clamp(input, min, max) {
  if (input < min)
    return min;
  if (input > max)
    return max;
  return input;
}
function ProgressCircle({ value, strokeWidth = 2, size = 24, min = 0, max = 100, ...restSvgProps }) {
  const normalizedValue = clamp(value, min, max);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = normalizedValue / max * circumference;
  const circleProps = {
    cx: size / 2,
    cy: size / 2,
    r: radius,
    fill: "none",
    strokeWidth
  };
  return jsxs("svg", { role: "progressbar", viewBox: `0 0 ${size} ${size}`, "aria-valuenow": normalizedValue, "aria-valuemin": min, "aria-valuemax": max, ...restSvgProps, children: [jsx("circle", { ...circleProps, className: "stroke-current/25" }), jsx("circle", { ...circleProps, stroke: "currentColor", strokeDasharray: circumference, strokeDashoffset: circumference - progress, strokeLinecap: "round", transform: `rotate(-90 ${size / 2} ${size / 2})`, className: "transition-all" })] });
}
function PageTOCPopoverContent(props) {
  return jsx(CollapsibleContent, { "data-toc-popover": "", ...props, className: twMerge("flex flex-col px-4 max-h-[50vh] md:px-6", props.className), children: props.children });
}
function PageTOCPopover(props) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const { collapsed } = useSidebar();
  const { isTransparent } = useNav();
  const onClick = useEffectEvent((e) => {
    if (!open)
      return;
    if (ref.current && !ref.current.contains(e.target))
      setOpen(false);
  });
  useEffect(() => {
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [onClick]);
  return jsx(TocPopoverContext.Provider, { value: useMemo(() => ({
    open,
    setOpen
  }), [setOpen, open]), children: jsx(Collapsible, { open, onOpenChange: setOpen, asChild: true, children: jsx("header", { ref, id: "nd-tocnav", ...props, className: twMerge("fixed pr-(--removed-body-scroll-bar-size,0) z-10 border-b backdrop-blur-sm transition-colors xl:hidden max-xl:on-root:[--fd-tocnav-height:40px]", (!isTransparent || open) && "bg-fd-background/80", open && "shadow-lg", props.className), style: {
    ...props.style,
    top: "calc(var(--fd-banner-height) + var(--fd-nav-height))",
    insetInlineStart: collapsed ? "0px" : "calc(var(--fd-sidebar-width) + var(--fd-layout-offset))",
    insetInlineEnd: 0
  }, children: props.children }) }) });
}
function PageLastUpdate({ date: value, ...props }) {
  const { text } = useI18n();
  const [date, setDate] = useState("");
  useEffect(() => {
    setDate(new Date(value).toLocaleDateString());
  }, [value]);
  return jsxs("p", { ...props, className: twMerge("text-sm text-fd-muted-foreground", props.className), children: [text.lastUpdate, " ", date] });
}
function scanNavigationList(tree) {
  const list = [];
  tree.forEach((node) => {
    if (node.type === "folder") {
      if (node.index) {
        list.push(node.index);
      }
      list.push(...scanNavigationList(node.children));
      return;
    }
    if (node.type === "page" && !node.external) {
      list.push(node);
    }
  });
  return list;
}
const listCache = /* @__PURE__ */ new Map();
function PageFooter({ items, ...props }) {
  const { root } = useTreeContext();
  const pathname = usePathname();
  const { previous, next } = useMemo(() => {
    if (items)
      return items;
    const cached = listCache.get(root.$id);
    const list = cached ?? scanNavigationList(root.children);
    listCache.set(root.$id, list);
    const idx = list.findIndex((item) => isActive(item.url, pathname, false));
    if (idx === -1)
      return {};
    return {
      previous: list[idx - 1],
      next: list[idx + 1]
    };
  }, [items, pathname, root]);
  return jsxs("div", { ...props, className: twMerge("@container grid gap-4 pb-6", previous && next ? "grid-cols-2" : "grid-cols-1", props.className), children: [previous ? jsx(FooterItem, { item: previous, index: 0 }) : null, next ? jsx(FooterItem, { item: next, index: 1 }) : null] });
}
function FooterItem({ item, index }) {
  const { text } = useI18n();
  const Icon = index === 0 ? ChevronLeft : ChevronRight;
  return jsxs(Link2, { href: item.url, className: twMerge("flex flex-col gap-2 rounded-lg border p-4 text-sm transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground @max-lg:col-span-full", index === 1 && "text-end"), children: [jsxs("div", { className: twMerge("inline-flex items-center gap-1.5 font-medium", index === 1 && "flex-row-reverse"), children: [jsx(Icon, { className: "-mx-1 size-4 shrink-0 rtl:rotate-180" }), jsx("p", { children: item.name })] }), jsx("p", { className: "text-fd-muted-foreground truncate", children: item.description ?? (index === 0 ? text.previousPage : text.nextPage) })] });
}
function PageBreadcrumb({ includeRoot = false, includeSeparator, includePage = false, ...props }) {
  const path = useTreePath();
  const { root } = useTreeContext();
  const items = useMemo(() => {
    return getBreadcrumbItemsFromPath(root, path, {
      includePage,
      includeSeparator,
      includeRoot
    });
  }, [includePage, includeRoot, includeSeparator, path, root]);
  if (items.length === 0)
    return null;
  return jsx("div", { ...props, className: twMerge("flex items-center gap-1.5 text-sm text-fd-muted-foreground", props.className), children: items.map((item, i) => {
    const className = twMerge("truncate", i === items.length - 1 && "text-fd-primary font-medium");
    return jsxs(Fragment, { children: [i !== 0 && jsx(ChevronRight, { className: "size-3.5 shrink-0" }), item.url ? jsx(Link2, { href: item.url, className: twMerge(className, "transition-opacity hover:opacity-80"), children: item.name }) : jsx("span", { className, children: item.name })] }, i);
  }) });
}
function PageTOC(props) {
  const { collapsed } = useSidebar();
  const offset = collapsed ? "0px" : "var(--fd-layout-offset)";
  return jsx("div", { id: "nd-toc", ...props, className: twMerge("fixed bottom-0 pt-12 pb-2 pr-(--removed-body-scroll-bar-size,0) max-xl:hidden", props.className), style: {
    ...props.style,
    top: "calc(var(--fd-banner-height) + var(--fd-nav-height))",
    insetInlineEnd: `max(${offset}, calc(50vw - var(--fd-sidebar-width)/2 - var(--fd-page-width)/2))`
  }, children: jsx("div", { className: "flex h-full w-(--fd-toc-width) max-w-full flex-col pe-4", children: props.children }) });
}
function ClerkTOCItems({ ref, className, ...props }) {
  const containerRef = useRef(null);
  const items = useTOCItems();
  const { text } = useI18n();
  const [svg, setSvg] = useState();
  useEffect(() => {
    if (!containerRef.current)
      return;
    const container = containerRef.current;
    function onResize() {
      if (container.clientHeight === 0)
        return;
      let w = 0, h = 0;
      const d = [];
      for (let i = 0; i < items.length; i++) {
        const element = container.querySelector(`a[href="#${items[i].url.slice(1)}"]`);
        if (!element)
          continue;
        const styles = getComputedStyle(element);
        const offset = getLineOffset(items[i].depth) + 1, top = element.offsetTop + parseFloat(styles.paddingTop), bottom = element.offsetTop + element.clientHeight - parseFloat(styles.paddingBottom);
        w = Math.max(offset, w);
        h = Math.max(h, bottom);
        d.push(`${i === 0 ? "M" : "L"}${offset} ${top}`);
        d.push(`L${offset} ${bottom}`);
      }
      setSvg({
        path: d.join(" "),
        width: w + 1,
        height: h
      });
    }
    const observer = new ResizeObserver(onResize);
    onResize();
    observer.observe(container);
    return () => {
      observer.disconnect();
    };
  }, [items]);
  if (items.length === 0)
    return jsx("div", { className: "rounded-lg border bg-fd-card p-3 text-xs text-fd-muted-foreground", children: text.tocNoHeadings });
  return jsxs(Fragment$1, { children: [svg ? jsx("div", { className: "absolute start-0 top-0 rtl:-scale-x-100", style: {
    width: svg.width,
    height: svg.height,
    maskImage: `url("data:image/svg+xml,${// Inline SVG
    encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svg.width} ${svg.height}"><path d="${svg.path}" stroke="black" stroke-width="1" fill="none" /></svg>`)}")`
  }, children: jsx(TocThumb, { containerRef, className: "mt-(--fd-top) h-(--fd-height) bg-fd-primary transition-all" }) }) : null, jsx("div", { ref: mergeRefs(containerRef, ref), className: twMerge("flex flex-col", className), ...props, children: items.map((item, i) => jsx(TOCItem, { item, upper: items[i - 1]?.depth, lower: items[i + 1]?.depth }, item.url)) })] });
}
function getItemOffset(depth) {
  if (depth <= 2)
    return 14;
  if (depth === 3)
    return 26;
  return 36;
}
function getLineOffset(depth) {
  return depth >= 3 ? 10 : 0;
}
function TOCItem({ item, upper = item.depth, lower = item.depth }) {
  const offset = getLineOffset(item.depth), upperOffset = getLineOffset(upper), lowerOffset = getLineOffset(lower);
  return jsxs(TOCItem$2, { href: item.url, style: {
    paddingInlineStart: getItemOffset(item.depth)
  }, className: "prose relative py-1.5 text-sm text-fd-muted-foreground hover:text-fd-accent-foreground transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0 data-[active=true]:text-fd-primary", children: [offset !== upperOffset ? jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", className: "absolute -top-1.5 start-0 size-4 rtl:-scale-x-100", children: jsx("line", { x1: upperOffset, y1: "0", x2: offset, y2: "12", className: "stroke-fd-foreground/10", strokeWidth: "1" }) }) : null, jsx("div", { className: twMerge("absolute inset-y-0 w-px bg-fd-foreground/10", offset !== upperOffset && "top-1.5", offset !== lowerOffset && "bottom-1.5"), style: {
    insetInlineStart: offset
  } }), item.title] });
}
function PageTOCTitle(props) {
  return jsxs("h3", { ...props, className: twMerge("inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground", props.className), children: [jsx(Text, { className: "size-4" }), jsx(I18nLabel, { label: "toc" })] });
}
function PageTOCItems({ variant = "normal", ...props }) {
  return jsx(TOCScrollArea, { ...props, children: variant === "clerk" ? jsx(ClerkTOCItems, {}) : jsx(TOCItems, {}) });
}
function PageTOCPopoverItems({ variant = "normal", ...props }) {
  return jsx(TOCScrollArea, { ...props, children: variant === "clerk" ? jsx(ClerkTOCItems, {}) : jsx(TOCItems, {}) });
}
function PageArticle(props) {
  return jsx("article", { ...props, className: twMerge("flex min-w-0 w-full flex-col gap-4 pt-8 px-4 md:px-6 md:mx-auto", props.className), children: props.children });
}
function PageRoot({ toc = false, children, ...props }) {
  const content = jsx("div", { id: "nd-page", ...props, className: twMerge("flex flex-1 w-full mx-auto max-w-(--fd-page-width) pt-(--fd-tocnav-height) pe-(--fd-toc-width)", props.className), children });
  if (toc)
    return jsx(TOCProvider, { ...toc, children: content });
  return content;
}
function DocsPage({ editOnGithub, breadcrumb: { enabled: breadcrumbEnabled = true, component: breadcrumb, ...breadcrumbProps } = {}, footer = {}, lastUpdate, container, full = false, tableOfContentPopover: { enabled: tocPopoverEnabled, component: tocPopover, ...tocPopoverOptions } = {}, tableOfContent: { enabled: tocEnabled, component: tocReplace, ...tocOptions } = {}, toc = [], article, children }) {
  tocEnabled ?? (tocEnabled = !full && (toc.length > 0 || tocOptions.footer !== void 0 || tocOptions.header !== void 0));
  tocPopoverEnabled ?? (tocPopoverEnabled = toc.length > 0 || tocPopoverOptions.header !== void 0 || tocPopoverOptions.footer !== void 0);
  return jsxs(PageRoot, { toc: tocEnabled || tocPopoverEnabled ? {
    toc,
    single: tocOptions.single
  } : false, ...container, className: twMerge(!tocEnabled && "[--fd-toc-width:0px]", container?.className), children: [tocPopoverEnabled && (tocPopover ?? jsxs(PageTOCPopover, { children: [jsx(PageTOCPopoverTrigger, {}), jsxs(PageTOCPopoverContent, { children: [tocPopoverOptions.header, jsx(PageTOCPopoverItems, { variant: tocPopoverOptions.style }), tocPopoverOptions.footer] })] })), jsxs(PageArticle, { ...article, children: [breadcrumbEnabled && (breadcrumb ?? jsx(PageBreadcrumb, { ...breadcrumbProps })), children, jsxs("div", { className: "flex flex-row flex-wrap items-center justify-between gap-4 empty:hidden", children: [editOnGithub && jsx(EditOnGitHub, { href: `https://github.com/${editOnGithub.owner}/${editOnGithub.repo}/blob/${editOnGithub.sha}/${editOnGithub.path.startsWith("/") ? editOnGithub.path.slice(1) : editOnGithub.path}` }), lastUpdate && jsx(PageLastUpdate, { date: new Date(lastUpdate) })] }), footer.enabled !== false && (footer.component ?? jsx(PageFooter, { items: footer.items }))] }), tocEnabled && (tocReplace ?? jsxs(PageTOC, { children: [tocOptions.header, jsx(PageTOCTitle, {}), jsx(PageTOCItems, { variant: tocOptions.style }), tocOptions.footer] }))] });
}
function EditOnGitHub(props) {
  return jsx("a", { target: "_blank", rel: "noreferrer noopener", ...props, className: twMerge(buttonVariants({
    color: "secondary",
    size: "sm",
    className: "gap-1.5 not-prose"
  }), props.className), children: props.children ?? jsxs(Fragment$1, { children: [jsx(Edit, { className: "size-3.5" }), jsx(I18nLabel, { label: "editOnGithub" })] }) });
}
const DocsBody = forwardRef((props, ref) => jsx("div", { ref, ...props, className: twMerge("prose flex-1", props.className), children: props.children }));
DocsBody.displayName = "DocsBody";
const DocsDescription = forwardRef((props, ref) => {
  if (props.children === void 0)
    return null;
  return jsx("p", { ref, ...props, className: twMerge("mb-8 text-lg text-fd-muted-foreground", props.className), children: props.children });
});
DocsDescription.displayName = "DocsDescription";
const DocsTitle = forwardRef((props, ref) => {
  return jsx("h1", { ref, ...props, className: twMerge("text-[1.75em] font-semibold", props.className), children: props.children });
});
DocsTitle.displayName = "DocsTitle";
const iconClass = "size-5 -me-0.5 fill-(--callout-color) text-fd-card";
const Callout = forwardRef(({ className, children, title, type = "info", icon, ...props }, ref) => {
  if (type === "warn")
    type = "warning";
  if (type === "tip")
    type = "info";
  return jsxs("div", { ref, className: twMerge("flex gap-2 my-4 rounded-xl border bg-fd-card p-3 ps-1 text-sm text-fd-card-foreground shadow-md", className), ...props, style: {
    "--callout-color": `var(--color-fd-${type}, var(--color-fd-muted))`,
    ...props.style
  }, children: [jsx("div", { role: "none", className: "w-0.5 bg-(--callout-color)/50 rounded-sm" }), icon ?? {
    info: jsx(Info, { className: iconClass }),
    warning: jsx(TriangleAlert, { className: iconClass }),
    error: jsx(CircleX, { className: iconClass }),
    success: jsx(CircleCheck, { className: iconClass })
  }[type], jsxs("div", { className: "flex flex-col gap-2 min-w-0 flex-1", children: [title && jsx("p", { className: "font-medium !my-0", children: title }), jsx("div", { className: "text-fd-muted-foreground prose-no-margin empty:hidden", children })] })] });
});
Callout.displayName = "Callout";
function Heading({ as, className, ...props }) {
  const As = as ?? "h1";
  if (!props.id)
    return jsx(As, { className, ...props });
  return jsxs(As, { className: twMerge("flex scroll-m-28 flex-row items-center gap-2", className), ...props, children: [jsx("a", { "data-card": "", href: `#${props.id}`, className: "peer", children: props.children }), jsx(Link, { "aria-label": "Link to section", className: "size-3.5 shrink-0 text-fd-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100" })] });
}
function useCopyButton(onCopy) {
  const [checked, setChecked] = useState(false);
  const timeoutRef = useRef(null);
  const onClick = useEffectEvent(() => {
    if (timeoutRef.current)
      window.clearTimeout(timeoutRef.current);
    const res = Promise.resolve(onCopy());
    void res.then(() => {
      setChecked(true);
      timeoutRef.current = window.setTimeout(() => {
        setChecked(false);
      }, 1500);
    });
  });
  useEffect(() => {
    return () => {
      if (timeoutRef.current)
        window.clearTimeout(timeoutRef.current);
    };
  }, []);
  return [checked, onClick];
}
const listeners = /* @__PURE__ */ new Map();
function addChangeListener(id, listener) {
  const list = listeners.get(id) ?? [];
  list.push(listener);
  listeners.set(id, list);
}
function removeChangeListener(id, listener) {
  const list = listeners.get(id) ?? [];
  listeners.set(id, list.filter((item) => item !== listener));
}
const TabsContext$1 = createContext$1(null);
function useTabContext() {
  const ctx = useContext(TabsContext$1);
  if (!ctx)
    throw new Error("You must wrap your component in <Tabs>");
  return ctx;
}
const TabsList = Primitive.TabsList;
const TabsTrigger = Primitive.TabsTrigger;
function Tabs({ ref, groupId, persist = false, updateAnchor = false, defaultValue, value: _value, onValueChange: _onValueChange, ...props }) {
  const tabsRef = useRef(null);
  const [value, setValue] = _value === void 0 ? (
    // eslint-disable-next-line react-hooks/rules-of-hooks -- not supposed to change controlled/uncontrolled
    useState(defaultValue)
  ) : [_value, _onValueChange ?? (() => void 0)];
  const onChange = useEffectEvent((v) => setValue(v));
  const valueToIdMap = useMemo(() => /* @__PURE__ */ new Map(), []);
  useLayoutEffect(() => {
    if (!groupId)
      return;
    const previous = persist ? localStorage.getItem(groupId) : sessionStorage.getItem(groupId);
    if (previous)
      onChange(previous);
    addChangeListener(groupId, onChange);
    return () => {
      removeChangeListener(groupId, onChange);
    };
  }, [groupId, onChange, persist]);
  useLayoutEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash)
      return;
    for (const [value2, id] of valueToIdMap.entries()) {
      if (id === hash) {
        onChange(value2);
        tabsRef.current?.scrollIntoView();
        break;
      }
    }
  }, [onChange, valueToIdMap]);
  return jsx(Primitive.Tabs, { ref: mergeRefs(ref, tabsRef), value, onValueChange: (v) => {
    if (updateAnchor) {
      const id = valueToIdMap.get(v);
      if (id) {
        window.history.replaceState(null, "", `#${id}`);
      }
    }
    if (groupId) {
      listeners.get(groupId)?.forEach((item) => {
        item(v);
      });
      if (persist)
        localStorage.setItem(groupId, v);
      else
        sessionStorage.setItem(groupId, v);
    } else {
      setValue(v);
    }
  }, ...props, children: jsx(TabsContext$1.Provider, { value: useMemo(() => ({ valueToIdMap }), [valueToIdMap]), children: props.children }) });
}
function TabsContent({ value, ...props }) {
  const { valueToIdMap } = useTabContext();
  if (props.id) {
    valueToIdMap.set(value, props.id);
  }
  return jsx(Primitive.TabsContent, { value, ...props, children: props.children });
}
const TabsContext = createContext$1(null);
function Pre(props) {
  return jsx("pre", { ...props, className: twMerge("min-w-full w-max *:flex *:flex-col", props.className), children: props.children });
}
function CodeBlock({ ref, title, allowCopy, keepBackground = false, icon, viewportProps = {}, children, Actions = (props2) => jsx("div", { ...props2, className: twMerge("empty:hidden", props2.className) }), ...props }) {
  const inTab = useContext(TabsContext) !== null;
  const areaRef = useRef(null);
  allowCopy ?? (allowCopy = !inTab);
  return jsxs("figure", { ref, dir: "ltr", ...props, className: twMerge(inTab ? "bg-fd-secondary" : "my-4 bg-fd-card", keepBackground && "bg-(--shiki-light-bg) dark:bg-(--shiki-dark-bg)", "shiki relative border shadow-sm rounded-xl outline-none not-prose overflow-hidden text-sm", props.className), children: [title ? jsxs("div", { className: "flex text-fd-muted-foreground items-center gap-2 h-9.5 border-b px-4", children: [typeof icon === "string" ? jsx("div", { className: "[&_svg]:size-3.5", dangerouslySetInnerHTML: {
    __html: icon
  } }) : icon, jsx("figcaption", { className: "flex-1 truncate", children: title }), Actions({
    className: "-me-2",
    children: allowCopy && jsx(CopyButton, { containerRef: areaRef })
  })] }) : Actions({
    className: "absolute top-2 right-2 z-2 backdrop-blur-lg rounded-lg text-fd-muted-foreground",
    children: allowCopy && jsx(CopyButton, { containerRef: areaRef })
  }), jsx("div", { ref: areaRef, ...viewportProps, className: twMerge("text-[13px] py-3.5 overflow-auto max-h-[600px] fd-scroll-container", viewportProps.className), style: {
    // space for toolbar
    "--padding-right": !title ? "calc(var(--spacing) * 8)" : void 0,
    counterSet: props["data-line-numbers"] ? `line ${Number(props["data-line-numbers-start"] ?? 1) - 1}` : void 0,
    ...viewportProps.style
  }, children })] });
}
function CopyButton({ className, containerRef, ...props }) {
  const [checked, onClick] = useCopyButton(() => {
    const pre = containerRef.current?.getElementsByTagName("pre").item(0);
    if (!pre)
      return;
    const clone = pre.cloneNode(true);
    clone.querySelectorAll(".nd-copy-ignore").forEach((node) => {
      node.replaceWith("\n");
    });
    void navigator.clipboard.writeText(clone.textContent ?? "");
  });
  return jsx("button", { type: "button", className: twMerge(buttonVariants({
    className: "hover:text-fd-accent-foreground",
    size: "icon-xs"
  }), className), "aria-label": checked ? "Copied Text" : "Copy Text", onClick, ...props, children: checked ? jsx(Check, {}) : jsx(Clipboard, {}) });
}
function CodeBlockTabs({ ref, ...props }) {
  const containerRef = useRef(null);
  const nested = useContext(TabsContext) !== null;
  return jsx(Tabs, { ref: mergeRefs(containerRef, ref), ...props, className: twMerge("bg-fd-card rounded-xl border", !nested && "my-4", props.className), children: jsx(TabsContext.Provider, { value: useMemo(() => ({
    containerRef,
    nested
  }), [nested]), children: props.children }) });
}
function CodeBlockTabsList(props) {
  const { containerRef, nested } = useContext(TabsContext);
  return jsxs(TabsList, { ...props, className: twMerge("flex flex-row *:first:ms-2 overflow-x-auto text-fd-muted-foreground", props.className), children: [props.children, !nested && jsx(CopyButton, { className: "sticky ms-auto right-2 bg-fd-card backdrop-blur-sm", containerRef })] });
}
function CodeBlockTabsTrigger({ children, ...props }) {
  return jsxs(TabsTrigger, { ...props, className: twMerge("relative group inline-flex text-sm font-medium text-nowrap items-center transition-colors gap-2 px-2 py-1.5 hover:text-fd-accent-foreground data-[state=active]:text-fd-primary [&_svg]:size-3.5", props.className), children: [jsx("div", { className: "absolute inset-x-2 bottom-0 h-px group-data-[state=active]:bg-fd-primary" }), children] });
}
function CodeBlockTab({ className, ...props }) {
  return jsx(TabsContent, { className: twMerge("-mx-px -mb-px", className), ...props });
}
function Image(props) {
  return jsx(Image$1, { sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px", ...props, src: props.src, className: twMerge("rounded-lg", props.className) });
}
function Table(props) {
  return jsx("div", { className: "relative overflow-auto prose-no-margin my-6", children: jsx("table", { ...props }) });
}
const defaultMdxComponents = {
  CodeBlockTab,
  CodeBlockTabs,
  CodeBlockTabsList,
  CodeBlockTabsTrigger,
  pre: (props) => jsx(CodeBlock, { ...props, children: jsx(Pre, { children: props.children }) }),
  Card,
  Cards,
  a: Link2,
  img: Image,
  h1: (props) => jsx(Heading, { as: "h1", ...props }),
  h2: (props) => jsx(Heading, { as: "h2", ...props }),
  h3: (props) => jsx(Heading, { as: "h3", ...props }),
  h4: (props) => jsx(Heading, { as: "h4", ...props }),
  h5: (props) => jsx(Heading, { as: "h5", ...props }),
  h6: (props) => jsx(Heading, { as: "h6", ...props }),
  table: Table,
  Callout
};
const $$splitComponentImporter = () => import('./_-CdayS5TZ.mjs');
const Route = createFileRoute("/_docs/$")({
  loader: async ({
    params
  }) => {
    const data = await loader({
      data: params._splat?.split("/") ?? []
    });
    await clientLoader.preload(data.path);
    return data;
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: loaderData?.title ? `${loaderData.title} | Jujutsu` : "Jujutsu"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const loader_createServerFn_handler = createServerRpc("src_routes_docs_tsx--loader_createServerFn_handler", "/_serverFn", (opts, signal) => {
  return loader.__executeServer(opts, signal);
});
const loader = createServerFn({
  method: "GET"
}).validator((slugs) => slugs).handler(loader_createServerFn_handler, async ({
  data: slugs
}) => {
  const page = source.getPage(slugs);
  if (!page) throw notFound();
  return {
    slugs,
    title: page.data.title,
    tree: source.pageTree,
    path: page.path
  };
});
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
function removeUndefined(value, deep = false) {
  const obj = value;
  for (const key in obj) {
    if (obj[key] === void 0) delete obj[key];
    if (!deep) continue;
    const entry = obj[key];
    if (typeof entry === "object" && entry !== null) {
      removeUndefined(entry, deep);
      continue;
    }
    if (Array.isArray(entry)) {
      for (const item of entry) removeUndefined(item, deep);
    }
  }
  return value;
}
function escapeRegExp(input) {
  return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function buildRegexFromQuery(q) {
  const trimmed = q.trim();
  if (trimmed.length === 0) return null;
  const terms = Array.from(
    new Set(
      trimmed.split(/\s+/).map((t) => t.trim()).filter(Boolean)
    )
  );
  if (terms.length === 0) return null;
  const escaped = terms.map(escapeRegExp).join("|");
  return new RegExp(`(${escaped})`, "gi");
}
function createContentHighlighter(query) {
  const regex = typeof query === "string" ? buildRegexFromQuery(query) : query;
  return {
    highlight(content) {
      if (!regex) return [{ type: "text", content }];
      const out = [];
      let i = 0;
      for (const match of content.matchAll(regex)) {
        if (i < match.index) {
          out.push({
            type: "text",
            content: content.substring(i, match.index)
          });
        }
        out.push({
          type: "text",
          content: match[0],
          styles: {
            highlight: true
          }
        });
        i = match.index + match[0].length;
      }
      if (i < content.length) {
        out.push({
          type: "text",
          content: content.substring(i)
        });
      }
      return out;
    }
  };
}
async function searchSimple(db, query, params = {}) {
  const highlighter = createContentHighlighter(query);
  const result = await search(db, {
    term: query,
    tolerance: 1,
    ...params,
    boost: {
      title: 2,
      ..."boost" in params ? params.boost : void 0
    }
  });
  return result.hits.map((hit) => ({
    type: "page",
    content: hit.document.title,
    contentWithHighlights: highlighter.highlight(hit.document.title),
    id: hit.document.url,
    url: hit.document.url
  }));
}
async function searchAdvanced(db, query, tag = [], extraParams = {}) {
  if (typeof tag === "string") tag = [tag];
  let params = {
    ...extraParams,
    where: removeUndefined({
      tags: tag.length > 0 ? {
        containsAll: tag
      } : void 0,
      ...extraParams.where
    }),
    groupBy: {
      properties: ["page_id"],
      maxResult: 8,
      ...extraParams.groupBy
    }
  };
  if (query.length > 0) {
    params = {
      ...params,
      term: query,
      properties: ["content"]
    };
  }
  const highlighter = createContentHighlighter(query);
  const result = await search(db, params);
  const list = [];
  for (const item of result.groups ?? []) {
    const pageId = item.values[0];
    const page = getByID(db, pageId);
    if (!page) continue;
    list.push({
      id: pageId,
      type: "page",
      content: page.content,
      contentWithHighlights: highlighter.highlight(page.content),
      url: page.url
    });
    for (const hit of item.result) {
      if (hit.document.type === "page") continue;
      list.push({
        id: hit.document.id.toString(),
        content: hit.document.content,
        contentWithHighlights: highlighter.highlight(hit.document.content),
        type: hit.document.type,
        url: hit.document.url
      });
    }
  }
  return list;
}
function createEndpoint(server2) {
  const { search: search2 } = server2;
  return {
    ...server2,
    async staticGET() {
      return Response.json(await server2.export());
    },
    async GET(request) {
      const url = new URL(request.url);
      const query = url.searchParams.get("query");
      if (!query) return Response.json([]);
      return Response.json(
        await search2(query, {
          tag: url.searchParams.get("tag")?.split(",") ?? void 0,
          locale: url.searchParams.get("locale") ?? void 0
        })
      );
    }
  };
}
var advancedSchema = {
  content: "string",
  page_id: "string",
  type: "string",
  tags: "enum[]",
  url: "string"
};
async function createDB({
  indexes,
  tokenizer,
  search: _,
  ...rest2
}) {
  const items = typeof indexes === "function" ? await indexes() : indexes;
  const db = create$1({
    schema: advancedSchema,
    ...rest2,
    components: {
      ...rest2.components,
      tokenizer: tokenizer ?? rest2.components?.tokenizer
    }
  });
  const mapTo = [];
  items.forEach((page) => {
    const tags = Array.isArray(page.tag) ? page.tag : page.tag ? [page.tag] : [];
    const data = page.structuredData;
    let id = 0;
    mapTo.push({
      id: page.id,
      page_id: page.id,
      type: "page",
      content: page.title,
      tags,
      url: page.url
    });
    if (page.description) {
      mapTo.push({
        id: `${page.id}-${(id++).toString()}`,
        page_id: page.id,
        tags,
        type: "text",
        url: page.url,
        content: page.description
      });
    }
    for (const heading of data.headings) {
      mapTo.push({
        id: `${page.id}-${(id++).toString()}`,
        page_id: page.id,
        type: "heading",
        tags,
        url: `${page.url}#${heading.id}`,
        content: heading.content
      });
    }
    for (const content of data.contents) {
      mapTo.push({
        id: `${page.id}-${(id++).toString()}`,
        page_id: page.id,
        tags,
        type: "text",
        url: content.heading ? `${page.url}#${content.heading}` : page.url,
        content: content.content
      });
    }
  });
  await insertMultiple(db, mapTo);
  return db;
}
async function pageToIndex(page) {
  let structuredData;
  if ("structuredData" in page.data) {
    structuredData = page.data.structuredData;
  } else if ("load" in page.data && typeof page.data.load === "function") {
    structuredData = (await page.data.load()).structuredData;
  }
  if (!structuredData)
    throw new Error(
      "Cannot find structured data from page, please define the page to index function."
    );
  return {
    title: page.data.title ?? basename(page.path, extname(page.path)),
    description: "description" in page.data ? page.data.description : void 0,
    url: page.url,
    id: page.url,
    structuredData
  };
}
function createFromSource(source2, _buildIndexOrOptions = pageToIndex, _options) {
  const { buildIndex = pageToIndex, ...options } = {
    ...typeof _buildIndexOrOptions === "function" ? {
      buildIndex: _buildIndexOrOptions
    } : _buildIndexOrOptions,
    ..._options
  };
  const i18n = source2._i18n;
  let server2;
  if (i18n) {
    const indexes = source2.getLanguages().flatMap((entry) => {
      return entry.pages.map(async (page) => ({
        ...await buildIndex(page),
        locale: entry.language
      }));
    });
    server2 = Promise.all(indexes).then(
      (loaded) => createI18nSearchAPI("advanced", {
        ...options,
        i18n,
        indexes: loaded
      })
    );
  } else {
    const indexes = source2.getPages().map(async (page) => {
      return buildIndex(page);
    });
    server2 = Promise.all(indexes).then(
      (loaded) => createSearchAPI("advanced", {
        ...options,
        indexes: loaded
      })
    );
  }
  return {
    async export(...args) {
      return (await server2).export(...args);
    },
    async GET(...args) {
      return (await server2).GET(...args);
    },
    async search(...args) {
      return (await server2).search(...args);
    },
    async staticGET(...args) {
      return (await server2).staticGET(...args);
    }
  };
}
var STEMMERS = {
  arabic: "ar",
  armenian: "am",
  bulgarian: "bg",
  czech: "cz",
  danish: "dk",
  dutch: "nl",
  english: "en",
  finnish: "fi",
  french: "fr",
  german: "de",
  greek: "gr",
  hungarian: "hu",
  indian: "in",
  indonesian: "id",
  irish: "ie",
  italian: "it",
  lithuanian: "lt",
  nepali: "np",
  norwegian: "no",
  portuguese: "pt",
  romanian: "ro",
  russian: "ru",
  serbian: "rs",
  slovenian: "ru",
  spanish: "es",
  swedish: "se",
  tamil: "ta",
  turkish: "tr",
  ukrainian: "uk",
  sanskrit: "sk"
};
async function getTokenizer(locale) {
  return {
    language: Object.keys(STEMMERS).find((lang) => STEMMERS[lang] === locale) ?? locale
  };
}
async function initAdvanced(options) {
  const map = /* @__PURE__ */ new Map();
  if (options.i18n.languages.length === 0) {
    return map;
  }
  const indexes = typeof options.indexes === "function" ? await options.indexes() : options.indexes;
  for (const locale of options.i18n.languages) {
    const localeIndexes = indexes.filter((index) => index.locale === locale);
    const mapped = options.localeMap?.[locale] ?? await getTokenizer(locale);
    map.set(
      locale,
      typeof mapped === "object" ? initAdvancedSearch({
        ...options,
        indexes: localeIndexes,
        ...mapped
      }) : initAdvancedSearch({
        ...options,
        language: mapped,
        indexes: localeIndexes
      })
    );
  }
  return map;
}
function createI18nSearchAPI(type, options) {
  const get = initAdvanced(options);
  return createEndpoint({
    async export() {
      const map = await get;
      const entries = Array.from(map.entries()).map(async ([k, v]) => [
        k,
        await v.export()
      ]);
      return {
        type: "i18n",
        data: Object.fromEntries(await Promise.all(entries))
      };
    },
    async search(query, searchOptions) {
      const map = await get;
      const locale = searchOptions?.locale ?? options.i18n.defaultLanguage;
      const handler = map.get(locale);
      if (handler) return handler.search(query, searchOptions);
      return [];
    }
  });
}
function createSearchAPI(type, options) {
  return createEndpoint(initAdvancedSearch(options));
}
function initAdvancedSearch(options) {
  const get = createDB(options);
  return {
    async export() {
      return {
        type: "advanced",
        ...save(await get)
      };
    },
    async search(query, searchOptions) {
      const db = await get;
      return searchAdvanced(db, query, searchOptions?.tag, options.search);
    }
  };
}
const server = createFromSource(source, {
  language: "english"
});
const ServerRoute = createServerFileRoute().methods({
  GET: server.staticGET
});
const rootServerRouteImport = createServerRootRoute();
const DocsSplatRoute = Route.update({
  id: "/_docs/$",
  path: "/$",
  getParentRoute: () => Route$1
});
const ApiSearchServerRoute = ServerRoute.update({
  id: "/api/search",
  path: "/api/search",
  getParentRoute: () => rootServerRouteImport
});
const rootRouteChildren = {
  DocsSplatRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const rootServerRouteChildren = {
  ApiSearchServerRoute
};
const serverRouteTree = rootServerRouteImport._addFileChildren(rootServerRouteChildren)._addFileTypes();
const routeTree_gen = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  routeTree,
  serverRouteTree
}, Symbol.toStringTag, { value: "Module" }));
function createRouter() {
  const router = createRouter$1({
    routeTree,
    scrollRestoration: true
  });
  return router;
}
const serverEntry$1 = createStartHandler({
  createRouter
})(defaultStreamHandler);
const serverEntry = defineEventHandler(function(event) {
  const request = toWebRequest(event);
  return serverEntry$1({ request });
});

export { ChevronsUpDown as A, Check as B, Collapsible as C, DocsPage as D, ExternalLink as E, buttonVariants as F, useSearchContext as G, Search as H, useNav as I, Sidebar as J, Sun as K, Link2 as L, Moon as M, Airplay as N, TreeContextProvider as O, NavProvider as P, Languages as Q, Route as R, SearchDialog as S, TagsList as T, createContentHighlighter as U, removeUndefined as V, searchSimple as W, searchAdvanced as X, createServerRpc as Y, createServerFn as Z, source as _, DocsTitle as a, DocsDescription as b, DocsBody as c, docs as d, serverEntry as default, defaultMdxComponents as e, useDocsSearch as f, useOnChange as g, SearchDialogOverlay as h, SearchDialogContent as i, SearchDialogHeader as j, SearchDialogIcon as k, SearchDialogInput as l, SearchDialogClose as m, SearchDialogList as n, SearchDialogFooter as o, TagsListItem as p, useSidebar as q, useTreeContext as r, usePathname as s, isActive as t, useI18n as u, ChevronDown as v, CollapsibleTrigger as w, CollapsibleContent as x, useTreePath as y, isTabActive as z };
//# sourceMappingURL=ssr.mjs.map
