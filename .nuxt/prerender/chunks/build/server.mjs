import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { hasInjectionContext, getCurrentInstance, createApp, provide, onErrorCaptured, onServerPrefetch, unref, createVNode, resolveDynamicComponent, shallowReactive, reactive, effectScope, inject, defineAsyncComponent, mergeProps, ref, computed, getCurrentScope, toRef, defineComponent, h, isReadonly, useSSRContext, isRef, isShallow, isReactive, toRaw } from 'file://C:/xampp/htdocs/Portofolio/node_modules/vue/index.mjs';
import { $fetch } from 'file://C:/xampp/htdocs/Portofolio/node_modules/ofetch/dist/node.mjs';
import { b as baseURL } from '../_/renderer.mjs';
import { createHooks } from 'file://C:/xampp/htdocs/Portofolio/node_modules/hookable/dist/index.mjs';
import { getContext } from 'file://C:/xampp/htdocs/Portofolio/node_modules/unctx/dist/index.mjs';
import { sanitizeStatusCode, createError as createError$1 } from 'file://C:/xampp/htdocs/Portofolio/node_modules/h3/dist/index.mjs';
import { parseURL, encodePath, decodePath, hasProtocol, isScriptProtocol, joinURL, withQuery, isEqual, stringifyParsedURL, stringifyQuery, parseQuery } from 'file://C:/xampp/htdocs/Portofolio/node_modules/ufo/dist/index.mjs';
import { defu } from 'file://C:/xampp/htdocs/Portofolio/node_modules/defu/dist/defu.mjs';
import { ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode, ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderAttr } from 'file://C:/xampp/htdocs/Portofolio/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/xampp/htdocs/Portofolio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import '../_/nitro.mjs';
import 'file://C:/xampp/htdocs/Portofolio/node_modules/destr/dist/index.mjs';
import 'file://C:/xampp/htdocs/Portofolio/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/xampp/htdocs/Portofolio/node_modules/unstorage/dist/index.mjs';
import 'file://C:/xampp/htdocs/Portofolio/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/xampp/htdocs/Portofolio/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://C:/xampp/htdocs/Portofolio/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/xampp/htdocs/Portofolio/node_modules/ohash/dist/index.mjs';
import 'file://C:/xampp/htdocs/Portofolio/node_modules/klona/dist/index.mjs';
import 'file://C:/xampp/htdocs/Portofolio/node_modules/scule/dist/index.mjs';
import 'file://C:/xampp/htdocs/Portofolio/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/xampp/htdocs/Portofolio/node_modules/pathe/dist/index.mjs';
import 'file://C:/xampp/htdocs/Portofolio/node_modules/unhead/dist/server.mjs';
import 'node:async_hooks';
import 'file://C:/xampp/htdocs/Portofolio/node_modules/devalue/index.js';
import 'file://C:/xampp/htdocs/Portofolio/node_modules/unhead/dist/utils.mjs';
import 'file://C:/xampp/htdocs/Portofolio/node_modules/unhead/dist/plugins.mjs';

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
if (!("global" in globalThis)) {
  globalThis.global = globalThis;
}
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.21.11";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...options.ssrContext?.payload || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin) {
  if (plugin.hooks) {
    nuxtApp.hooks.addHooks(plugin.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  const resolvedPlugins = /* @__PURE__ */ new Set();
  const unresolvedPlugins = [];
  const parallels = [];
  let error = void 0;
  let promiseDepth = 0;
  async function executePlugin(plugin) {
    const unresolvedPluginsForThisPlugin = plugin.dependsOn?.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.has(name)) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin).then(async () => {
        if (plugin._name) {
          resolvedPlugins.add(plugin._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin._name)) {
              dependsOn.delete(plugin._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      }).catch((e) => {
        if (!plugin.parallel && !nuxtApp.payload.error) {
          throw e;
        }
        error ||= e;
      });
      if (plugin.parallel) {
        parallels.push(promise);
      } else {
        await promise;
      }
    }
  }
  for (const plugin of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin.env?.islands === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin);
  }
  for (const plugin of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin.env?.islands === false) {
      continue;
    }
    await executePlugin(plugin);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (error) {
    throw nuxtApp.payload.error || error;
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin) {
  if (typeof plugin === "function") {
    return plugin;
  }
  const _name = plugin._name || plugin.name;
  delete plugin.name;
  return Object.assign(plugin.setup || (() => {
  }), plugin, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = getCurrentInstance()?.appContext.app.$nuxt;
  }
  nuxtAppInstance ||= getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const PageRouteSymbol = /* @__PURE__ */ Symbol("route");
globalThis._importMeta_.url.replace(/\/app\/.*$/, "/");
const useRouter = () => {
  return useNuxtApp()?.$router;
};
function isScopeWithinInstance(instance) {
  const instanceScope = instance.scope;
  let scope = getCurrentScope();
  while (scope) {
    if (scope === instanceScope) {
      return true;
    }
    scope = scope.parent;
  }
  return false;
}
const useRoute = () => {
  if (hasInjectionContext()) {
    const instance = getCurrentInstance();
    if (!instance || isScopeWithinInstance(instance)) {
      return inject(PageRouteSymbol, useNuxtApp()._route);
    }
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const HTML_ATTR_UNSAFE_RE = /[&"'<>]/g;
const HTML_ATTR_ENCODE_MAP = {
  "&": "%26",
  '"': "%22",
  "'": "%27",
  "<": "%3C",
  ">": "%3E"
};
function encodeForHtmlAttr(value) {
  return value.replace(HTML_ATTR_UNSAFE_RE, (c) => HTML_ATTR_ENCODE_MAP[c]);
}
const navigateTo = (to, options) => {
  to ||= "/";
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = options?.external || isExternalHost;
  if (isExternal) {
    if (!options?.external) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedHeader = encodeURL(location2, isExternalHost);
        const encodedLoc = encodeForHtmlAttr(encodedHeader);
        nuxtApp.ssrContext["~renderResponse"] = {
          statusCode: sanitizeStatusCode(options?.redirectCode || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options?.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  const encodedTo = typeof to === "string" ? encodeRoutePath(to) : to;
  return options?.replace ? router.replace(encodedTo) : router.push(encodedTo);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    const pathname = url.pathname.replace(/^\/{2,}/, "/");
    return pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
function encodeRoutePath(url) {
  const parsed = parseURL(url);
  return encodePath(decodePath(parsed.pathname)) + parsed.search + parsed.hash;
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = /* @__NO_SIDE_EFFECTS__ */ () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const error2 = /* @__PURE__ */ useError();
    if (false) ;
    error2.value ||= nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  if (typeof error !== "string" && error.statusText) {
    error.message ??= error.statusText;
  }
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  Object.defineProperty(nuxtError, "status", {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    get: () => nuxtError.statusCode,
    configurable: true
  });
  Object.defineProperty(nuxtError, "statusText", {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    get: () => nuxtError.statusMessage,
    configurable: true
  });
  return nuxtError;
};
function freezeHead(head) {
  const realPush = head.push;
  head.push = () => ({ dispose: () => {
  }, patch: () => {
  }, _poll: () => {
  } });
  return () => {
    head.push = realPush;
  };
}
const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    if (nuxtApp.ssrContext.islandContext) {
      const unfreeze = freezeHead(head);
      nuxtApp.hooks.hookOnce("app:created", unfreeze);
    }
    nuxtApp.vueApp.use(head);
  }
});
const routerOptions = {};
const sensitiveMatcher = (m, p) => {
  return [];
};
const foldedMatcher = sensitiveMatcher;
const decodeRoutePath = function decodeRoutePath2(path) {
  if (!path.includes("%")) return path;
  const queryIndex = path.indexOf("?");
  const pathname = queryIndex === -1 ? path : path.slice(0, queryIndex);
  try {
    return queryIndex === -1 ? decodeURI(pathname) : decodeURI(pathname) + path.slice(queryIndex);
  } catch {
    return path;
  }
};
const normalizePath = (path, fold) => {
  if (typeof path !== "string") {
    return path;
  }
  const decoded = decodeRoutePath(path);
  return fold ? decoded.toLowerCase() : decoded;
};
const _routeRulesMatcher = (path) => routerOptions.sensitive ? defu({}, ...sensitiveMatcher("", normalizePath(path, false)).map((r) => r.data).reverse()) : defu({}, ...foldedMatcher("", normalizePath(path, true)).map((r) => r.data).reverse());
const routeRulesMatcher = _routeRulesMatcher;
function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  try {
    return routeRulesMatcher(path);
  } catch (e) {
    console.error("[nuxt] Error matching route rules.", e);
    return {};
  }
}
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware((to) => {
  {
    return;
  }
});
const globalMiddleware = [
  manifest_45route_45rule
];
function getRouteFromPath(fullPath) {
  const route = fullPath && typeof fullPath === "object" ? fullPath : {};
  if (typeof fullPath === "object") {
    fullPath = stringifyParsedURL({
      pathname: fullPath.path || "",
      search: stringifyQuery(fullPath.query || {}),
      hash: fullPath.hash || ""
    });
  }
  const url = new URL(fullPath.toString(), "http://localhost");
  return {
    path: url.pathname,
    fullPath,
    query: parseQuery(url.search),
    hash: url.hash,
    // stub properties for compat with vue-router
    params: route.params || {},
    name: void 0,
    matched: route.matched || [],
    redirectedFrom: void 0,
    meta: route.meta || {},
    href: fullPath
  };
}
const router_DclsWNDeVV7SyG4lslgLnjbQUK1ws8wgf2FHaAbo7Cw = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  setup(nuxtApp) {
    const initialURL = nuxtApp.ssrContext.url;
    const routes = [];
    const hooks = {
      "navigate:before": [],
      "resolve:before": [],
      "navigate:after": [],
      "error": []
    };
    const registerHook = (hook, guard) => {
      hooks[hook].push(guard);
      return () => {
        const index = hooks[hook].indexOf(guard);
        if (index !== -1) {
          hooks[hook].splice(index, 1);
        }
      };
    };
    (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const route = reactive(getRouteFromPath(initialURL));
    let navigationCounter = 0;
    async function handleNavigation(url, replace) {
      const navigationId = ++navigationCounter;
      try {
        const to = getRouteFromPath(url);
        for (const middleware of hooks["navigate:before"]) {
          const result = await middleware(to, route);
          if (navigationId !== navigationCounter) {
            return;
          }
          if (result === false || result instanceof Error) {
            return;
          }
          if (typeof result === "string" && result.length) {
            return await handleNavigation(result, true);
          }
        }
        for (const handler of hooks["resolve:before"]) {
          await handler(to, route);
          if (navigationId !== navigationCounter) {
            return;
          }
        }
        Object.assign(route, to);
        if (false) ;
        for (const middleware of hooks["navigate:after"]) {
          await middleware(to, route);
        }
      } catch (err) {
        for (const handler of hooks.error) {
          await handler(err);
        }
      }
    }
    const currentRoute = computed(() => route);
    const router = {
      currentRoute,
      isReady: () => Promise.resolve(),
      // These options provide a similar API to vue-router but have no effect
      options: {},
      install: () => Promise.resolve(),
      // Navigation
      push: (url) => handleNavigation(url),
      replace: (url) => handleNavigation(url),
      back: () => (void 0).history.go(-1),
      go: (delta) => (void 0).history.go(delta),
      forward: () => (void 0).history.go(1),
      // Guards
      beforeResolve: (guard) => registerHook("resolve:before", guard),
      beforeEach: (guard) => registerHook("navigate:before", guard),
      afterEach: (guard) => registerHook("navigate:after", guard),
      onError: (handler) => registerHook("error", handler),
      // Routes
      resolve: getRouteFromPath,
      addRoute: (parentName, route2) => {
        routes.push(route2);
      },
      getRoutes: () => routes,
      hasRoute: (name) => routes.some((route2) => route2.name === name),
      removeRoute: (name) => {
        const index = routes.findIndex((route2) => route2.name === name);
        if (index !== -1) {
          routes.splice(index, 1);
        }
      }
    };
    nuxtApp.vueApp.component("RouterLink", defineComponent({
      functional: true,
      props: {
        to: {
          type: String,
          required: true
        },
        custom: Boolean,
        replace: Boolean,
        // Not implemented
        activeClass: String,
        exactActiveClass: String,
        ariaCurrentValue: String
      },
      setup: (props, { slots }) => {
        const navigate = () => handleNavigation(props.to, props.replace);
        return () => {
          const route2 = router.resolve(props.to);
          return props.custom ? slots.default?.({ href: props.to, navigate, route: route2 }) : h("a", { href: props.to, onClick: (e) => {
            e.preventDefault();
            return navigate();
          } }, slots);
        };
      }
    }));
    nuxtApp._route = route;
    nuxtApp._middleware ||= {
      global: [],
      named: {}
    };
    const initialLayout = nuxtApp.payload.state._layout;
    const initialLayoutProps = nuxtApp.payload.state._layoutProps;
    nuxtApp.hooks.hookOnce("app:created", async () => {
      router.beforeEach(async (to, from) => {
        to.meta = reactive(to.meta || {});
        if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
          to.meta.layout = initialLayout;
          to.meta.layoutProps = initialLayoutProps;
        }
        nuxtApp._processingMiddleware = true;
        {
          nuxtApp._middlewareTo = to;
        }
        if (!nuxtApp.ssrContext?.islandContext) {
          const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
          const routeRules = getRouteRules({ path: to.path });
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              const guard = nuxtApp._middleware.named[key];
              if (!guard) {
                continue;
              }
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(guard);
              } else {
                middlewareEntries.delete(guard);
              }
            }
          }
          for (const middleware of middlewareEntries) {
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            {
              if (result === false || result instanceof Error) {
                const error = result || createError$1({
                  status: 404,
                  statusText: `Page Not Found: ${initialURL}`,
                  data: {
                    path: initialURL
                  }
                });
                delete nuxtApp._processingMiddleware;
                delete nuxtApp._middlewareTo;
                return nuxtApp.runWithContext(() => showError(error));
              }
            }
            if (result === true) {
              continue;
            }
            if (result || result === false) {
              return result;
            }
          }
        }
      });
      router.afterEach(() => {
        delete nuxtApp._processingMiddleware;
        {
          delete nuxtApp._middlewareTo;
        }
      });
      await router.replace(initialURL);
      if (!isEqual(route.fullPath, initialURL)) {
        await nuxtApp.runWithContext(() => navigateTo(route.fullPath));
      }
    });
    return {
      provide: {
        route,
        router
      }
    };
  }
});
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext["~payloadReducers"][name] = reduce;
  }
}
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const plugins = [
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  router_DclsWNDeVV7SyG4lslgLnjbQUK1ws8wgf2FHaAbo7Cw,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4
];
const _sfc_main$2 = {
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const profile = ref({
      role: "FullStack Web Developer",
      location: "Indonesia",
      firstName: "Ralip Pranaja",
      lastName: "Violincello",
      tagline: "A Web Developer Care About The Projects and Clean Code",
      year: (/* @__PURE__ */ new Date()).getFullYear(),
      email: "pranaja0852@gmail.com",
      city: "Solo, Indonesia",
      avatar: "/preview_project/me.png",
      bio_lead: "Hi! My name is Ralip Pranaja Violincello, and I am a Full-Stack Developer. I began delving into the world of programming while studying Computer Engineering at Universitas Muhammadiyah PKU Surakarta.",
      bio_detail: "From Indonesia To International, I am always working hard to make my dream come true. I have experience with a variety of technologies and frameworks, including Nuxt 3, Vue.js, React, Node.js, Express, MongoDB, and MySQL."
    });
    const stats = ref([
      { number: "2+", label: "Years active" },
      { number: "1+", label: "Projects" },
      { number: "1", label: "Continents" }
    ]);
    const filters = ref([
      { id: "all", label: "All Projects" },
      { id: "brand-identity", label: "Web App & Brand" },
      { id: "ui-design", label: "UI/UX Design" }
    ]);
    const projects = ref([
      {
        id: "01",
        title: "Website SnapGear",
        category: "Website Layanan Penyewaan Kamera",
        year: "2026",
        preview_image: "/preview_project/snapgear.png",
        filter_tag: "brand-identity",
        link: "https://snapgear.xo.je/"
      },
      {
        id: "02",
        title: "Cooming Soon Project",
        category: "Next Project Maybe With You!",
        year: "2027",
        preview_image: "",
        filter_tag: "ui-design",
        link: "#project-2"
      }
    ]);
    const socials = ref([
      { name: "Instagram", url: "https://instagram.com/ollecniloiv" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/violincello" },
      { name: "Github", url: "https://github.com/Violincello06" }
    ]);
    const activeFilter = ref("all");
    const preloaderProgress = ref(0);
    const preloaderStatus = ref("INITIALIZING SYSTEM...");
    const isPreloaderLoaded = ref(false);
    const isPreloaderHidden = ref(false);
    const copyTooltipText = ref("Click to copy");
    const isCopied = ref(false);
    const systemTime = ref("");
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    const filteredProjects = computed(() => {
      if (activeFilter.value === "all") return projects.value;
      return projects.value.filter((p) => p.filter_tag === activeFilter.value);
    });
    const firstNameChars = computed(() => {
      return (profile.value.firstName || "").split("");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "portfolio-root" }, _attrs))}>`);
      if (!isPreloaderHidden.value) {
        _push(`<div class="${ssrRenderClass([{ loaded: isPreloaderLoaded.value }, "welcome-preloader"])}"><div class="preloader-inner"><div class="preloader-badge"><span class="status-dot"></span><span class="mono-label">About Me</span></div><h2 class="preloader-title"><span class="preloader-greeting">Who Am I?</span><span class="preloader-name">${ssrInterpolate(profile.value.firstName)} ${ssrInterpolate(profile.value.lastName)}</span></h2><div class="preloader-progress-track"><div class="preloader-progress-bar" style="${ssrRenderStyle({ width: preloaderProgress.value + "%" })}"></div></div><div class="preloader-footer"><span class="mono-label preloader-status">${ssrInterpolate(preloaderStatus.value)}</span><span class="mono-label preloader-count">${ssrInterpolate(preloaderProgress.value)}%</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="ambient-aurora-bg" aria-hidden="true"><div class="aurora-orb aurora-orb-1"></div><div class="aurora-orb aurora-orb-2"></div><div class="aurora-orb aurora-orb-3"></div><div class="aurora-grid"></div></div><header class="navbar"><div class="nav-left"><a href="#cv" class="cv-link"><span class="status-dot"></span><span class="cv-text">CV</span></a></div><nav class="nav-right"><a href="#work" class="nav-item">Work</a><a href="#about" class="nav-item">About</a><a href="#contact" class="nav-item">Contact</a></nav></header><main><section class="hero-section" id="hero"><div class="hero-top-tag"><span class="mono-label">${ssrInterpolate(profile.value.role)} — ${ssrInterpolate(profile.value.location)}</span></div><div class="hero-main-layout"><div class="hero-title-wrap"><h1 class="hero-name"><span class="first-name" id="heroFirstName"><span class="name-chars-wrap"><!--[-->`);
      ssrRenderList(firstNameChars.value, (char, index) => {
        _push(`<!--[-->`);
        if (char === " ") {
          _push(`<span class="char-step char-space"> </span>`);
        } else {
          _push(`<span class="char-step"${ssrRenderAttr("data-char", char)}>${ssrInterpolate(char)}</span>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></span><a href="#contact" class="pixel-walking-character" id="pixelWalker" title="Click to Say Hello!"><span class="pixel-speech-bubble"><span class="bubble-text">Hallo :]</span> <span class="wave-emoji">👋</span></span><span class="pixel-avatar-art"><svg class="pixel-svg" viewBox="0 0 24 26" width="34" height="37" shape-rendering="crispEdges"><g class="pixel-leg-left"><rect x="7" y="21" width="4" height="3" fill="#0D0D10"></rect><rect x="7" y="24" width="3" height="2" fill="#222228"></rect></g><g class="pixel-leg-right"><rect x="13" y="21" width="4" height="3" fill="#0D0D10"></rect><rect x="14" y="24" width="3" height="2" fill="#222228"></rect></g><rect x="6" y="14" width="12" height="7" fill="#141418"></rect><rect x="9" y="14" width="6" height="4" fill="#FFFFFF"></rect><rect x="11" y="15" width="2" height="5" fill="#CB2957"></rect><rect x="4" y="14" width="2" height="6" fill="#141418"></rect><rect x="4" y="20" width="2" height="2" fill="#F5C09B"></rect><rect x="10" y="13" width="4" height="1" fill="#E2A984"></rect><rect x="7" y="5" width="10" height="8" fill="#F5C09B"></rect><rect x="7" y="10" width="2" height="1" fill="#FF6584"></rect><rect x="15" y="10" width="2" height="1" fill="#FF6584"></rect><rect x="9" y="8" width="2" height="2" fill="#111111"></rect><rect x="9" y="8" width="1" height="1" fill="#FFFFFF"></rect><rect x="13" y="8" width="2" height="2" fill="#111111"></rect><rect x="13" y="8" width="1" height="1" fill="#FFFFFF"></rect><rect x="11" y="11" width="2" height="1" fill="#9E5A44"></rect><rect x="6" y="2" width="12" height="3" fill="#111116"></rect><rect x="5" y="4" width="3" height="5" fill="#111116"></rect><rect x="16" y="4" width="3" height="5" fill="#111116"></rect><rect x="8" y="5" width="3" height="2" fill="#111116"></rect><rect x="13" y="5" width="3" height="2" fill="#111116"></rect><rect x="11" y="2" width="2" height="2" fill="#282834"></rect><g class="pixel-waving-arm"><rect x="17" y="13" width="3" height="2" fill="#141418"></rect><rect x="19" y="10" width="2" height="3" fill="#141418"></rect><rect x="19" y="7" width="3" height="3" fill="#F5C09B"></rect><rect x="20" y="5" width="2" height="2" fill="#F5C09B"></rect></g></svg></span></a></span><span class="last-name">${ssrInterpolate(profile.value.lastName)}</span></h1></div><div class="hero-3d-wrapper" id="hero3dContainer"><div class="monitor-3d" id="monitor3D"><div class="monitor-glow"></div><div class="monitor-bezel"><div class="monitor-camera"></div><div class="monitor-screen"><div class="screen-header"><div class="screen-controls"><span class="ctrl-dot close"></span><span class="ctrl-dot min"></span><span class="ctrl-dot max"></span></div><div class="screen-title"><span class="screen-pulse-dot"></span> violincello_os ~ /nuxt3-hub </div><div class="screen-badge">ONLINE ${ssrInterpolate(systemTime.value)}</div></div><div class="screen-apps"><a href="https://github.com/Violincello06" target="_blank" rel="noopener noreferrer" class="app-card github-app" title="Visit GitHub Profile"><div class="app-icon-box"><svg class="app-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path></svg></div><div class="app-details"><span class="app-name">GitHub</span><span class="app-meta">@Violincello06</span></div><span class="app-action-arrow">↗</span></a><a href="https://www.linkedin.com/in/violincello" target="_blank" rel="noopener noreferrer" class="app-card linkedin-app" title="Visit LinkedIn Profile"><div class="app-icon-box"><svg class="app-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg></div><div class="app-details"><span class="app-name">LinkedIn</span><span class="app-meta">Ralip Pranaja</span></div><span class="app-action-arrow">↗</span></a><a href="https://instagram.com/ollecniloiv" target="_blank" rel="noopener noreferrer" class="app-card instagram-app" title="Visit Instagram Profile"><div class="app-icon-box"><svg class="app-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg></div><div class="app-details"><span class="app-name">Instagram</span><span class="app-meta">@ollecniloiv</span></div><span class="app-action-arrow">↗</span></a></div><div class="screen-footer-status"><span class="prompt-arrow">&gt;</span> Nuxt 3 Full-Stack Engine Active </div></div></div><div class="monitor-stand-neck"></div><div class="monitor-stand-base"></div></div></div></div><div class="hero-bottom-meta"><p class="hero-tagline">${ssrInterpolate(profile.value.tagline)}</p><div class="hero-year">© ${ssrInterpolate(profile.value.year)}</div></div></section><section class="work-section" id="work"><div class="filter-bar"><!--[-->`);
      ssrRenderList(filters.value, (filter) => {
        _push(`<button class="${ssrRenderClass([{ active: activeFilter.value === filter.id }, "filter-pill"])}">${ssrInterpolate(filter.label)}</button>`);
      });
      _push(`<!--]--></div><div class="section-meta-header"><span class="mono-label">Selected Work</span><span class="mono-label">2025–2026</span></div><div class="projects-list"><!--[-->`);
      ssrRenderList(filteredProjects.value, (project) => {
        _push(`<a${ssrRenderAttr("href", project.link)} class="project-item"${ssrRenderAttr("data-category", project.filter_tag)}${ssrRenderAttr("target", project.link.startsWith("http") ? "_blank" : null)}${ssrRenderAttr("rel", project.link.startsWith("http") ? "noopener noreferrer" : null)}><div class="project-header-row"><div class="project-left"><span class="project-num">${ssrInterpolate(project.id)}</span><div class="project-info"><h3 class="project-title">${ssrInterpolate(project.title)}</h3><span class="project-category">${ssrInterpolate(project.category)}</span></div></div><div class="project-right"><span class="project-year">${ssrInterpolate(project.year)}</span><span class="project-action-arrow">↗</span></div></div><div class="project-preview-box"><div class="image-placeholder">`);
        if (project.preview_image) {
          _push(`<img${ssrRenderAttr("src", project.preview_image)}${ssrRenderAttr("alt", project.title + " Preview")} class="preview-img">`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="placeholder-guide"><span class="guide-status-dot"></span><span class="guide-title">${ssrInterpolate(project.preview_image ? "PROJECT PREVIEW" : "UPCOMING PROJECT")}</span><span class="guide-subtitle">${ssrInterpolate(project.category)}</span></div><div class="preview-hover-tag"><span>${ssrInterpolate(project.link.startsWith("http") ? "Open Live Website ↗" : "View Details ↗")}</span></div></div></div></a>`);
      });
      _push(`<!--]--></div></section><section class="about-section" id="about"><div class="about-header"><span class="mono-label">About</span></div><div class="about-grid"><div class="about-image-wrapper"><div class="about-portrait-placeholder"><img${ssrRenderAttr("src", profile.value.avatar)}${ssrRenderAttr("alt", profile.value.firstName + " " + profile.value.lastName)} class="about-portrait-img"><div class="placeholder-guide"><span>${ssrInterpolate(profile.value.firstName)} ${ssrInterpolate(profile.value.lastName)}</span></div></div></div><div class="about-content"><h2 class="about-lead">${ssrInterpolate(profile.value.bio_lead)}</h2><p class="about-bio">${ssrInterpolate(profile.value.bio_detail)}</p><div class="about-stats-grid"><!--[-->`);
      ssrRenderList(stats.value, (stat, idx) => {
        _push(`<div class="stat-item"><span class="stat-number">${ssrInterpolate(stat.number)}</span><span class="stat-label">${ssrInterpolate(stat.label)}</span></div>`);
      });
      _push(`<!--]--></div></div></div></section><section class="contact-section" id="contact"><div class="contact-header"><span class="mono-label">Get in touch</span></div><div class="contact-email-container"><a${ssrRenderAttr("href", "mailto:" + profile.value.email)} class="giant-email" id="emailLink"${ssrRenderAttr("title", "Click to copy " + profile.value.email)}>${ssrInterpolate(profile.value.email)}</a><span class="copy-tooltip" id="copyTooltip" style="${ssrRenderStyle({ color: isCopied.value ? "var(--accent-neon)" : "" })}">${ssrInterpolate(copyTooltipText.value)}</span></div><div class="contact-socials"><!--[-->`);
      ssrRenderList(socials.value, (social, idx) => {
        _push(`<a${ssrRenderAttr("href", social.url)} target="_blank" rel="noopener noreferrer" class="social-link">${ssrInterpolate(social.name)}</a>`);
      });
      _push(`<!--]--></div></section></main><footer class="footer"><div class="footer-left"><span class="mono-label">${ssrInterpolate(profile.value.firstName)} ${ssrInterpolate(profile.value.lastName)} — Portfolio (Nuxt 3)</span></div><div class="footer-right"><span class="mono-label">${ssrInterpolate(profile.value.city)}</span></div></footer></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    const status = Number(_error.statusCode || 500);
    const is404 = status === 404;
    const statusText = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404-BsILjH3x.mjs'));
    const _Error = defineAsyncComponent(() => import('./error-500-CQnGb1RT.mjs'));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ status: unref(status), statusText: unref(statusText), statusCode: unref(status), statusMessage: unref(statusText), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup", []);
    const error = /* @__PURE__ */ useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    function invokeAppErrorHandler(err, target, info) {
      const errorHandler = nuxtApp.vueApp.config.errorHandler;
      if (errorHandler && !errorHandler.__nuxt_default) {
        try {
          errorHandler(err, target, info);
        } catch (handlerError) {
          console.error("[nuxt] Error in `app.config.errorHandler`", handlerError);
        }
      }
    }
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        invokeAppErrorHandler(err, target, info);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error ||= createError(error);
    }
    if (ssrContext && (ssrContext["~renderResponse"] || ssrContext._renderResponse)) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry_default = ((ssrContext) => entry(ssrContext));

export { useNuxtApp as a, useRuntimeConfig as b, nuxtLinkDefaults as c, entry_default as default, encodeRoutePath as e, navigateTo as n, resolveRouteObject as r, tryUseNuxtApp as t, useRouter as u };
//# sourceMappingURL=server.mjs.map
