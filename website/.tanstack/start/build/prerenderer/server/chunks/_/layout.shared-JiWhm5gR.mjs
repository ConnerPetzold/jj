import { jsx, jsxs, Fragment } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';
import * as React__default from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/index.js';
import React__default__default, { useMemo, Fragment as Fragment$1, useState, useLayoutEffect, useRef, useId, useContext, createContext, useEffect } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/index.js';
import { O as TreeContextProvider, P as NavProvider, L as Link2, J as Sidebar$1, F as buttonVariants, I as useNav, G as useSearchContext, H as Search, q as useSidebar, Q as Languages, r as useTreeContext, s as usePathname, t as isActive, u as useI18n, K as Sun, M as Moon, N as Airplay, z as isTabActive, A as ChevronsUpDown, B as Check, g as useOnChange, C as Collapsible, v as ChevronDown, w as CollapsibleTrigger, x as CollapsibleContent, E as ExternalLink, y as useTreePath } from './ssr.mjs';
import { twMerge } from 'file:///Users/conner/jj/website/node_modules/.pnpm/tailwind-merge@3.3.1/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import * as ScrollAreaPrimitive from 'file:///Users/conner/jj/website/node_modules/@radix-ui/react-scroll-area/dist/index.mjs';
import { cva } from 'file:///Users/conner/jj/website/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs';
import { Presence } from 'file:///Users/conner/jj/website/node_modules/@radix-ui/react-presence/dist/index.mjs';
import * as PopoverPrimitive from 'file:///Users/conner/jj/website/node_modules/.pnpm/@radix-ui+react-popover@1.1.15_npkkj65iy67fkpin3gzi42ixdq/node_modules/@radix-ui/react-popover/dist/index.mjs';
import { useTheme } from 'file:///Users/conner/jj/website/node_modules/next-themes/dist/index.mjs';
import * as SelectPrimitive from 'file:///Users/conner/jj/website/node_modules/@radix-ui/react-select/dist/index.mjs';
import { ChevronDownIcon, CheckIcon, ChevronUpIcon } from 'file:///Users/conner/jj/website/node_modules/lucide-react/dist/cjs/lucide-react.js';
import { clsx } from 'file:///Users/conner/jj/website/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs';
import { useRouter, useLocation } from 'file:///Users/conner/jj/website/node_modules/@tanstack/react-router/dist/esm/index.js';

const ScrollArea = React__default.forwardRef(({ className, children, ...props }, ref) => jsxs(ScrollAreaPrimitive.Root, { ref, type: "scroll", className: twMerge("overflow-hidden", className), ...props, children: [children, jsx(ScrollAreaPrimitive.Corner, {}), jsx(ScrollBar, { orientation: "vertical" })] }));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
const ScrollViewport = React__default.forwardRef(({ className, children, ...props }, ref) => jsx(ScrollAreaPrimitive.Viewport, { ref, className: twMerge("size-full rounded-[inherit]", className), ...props, children }));
ScrollViewport.displayName = ScrollAreaPrimitive.Viewport.displayName;
const ScrollBar = React__default.forwardRef(({ className, orientation = "vertical", ...props }, ref) => jsx(ScrollAreaPrimitive.Scrollbar, { ref, orientation, className: twMerge("flex select-none data-[state=hidden]:animate-fd-fade-out", orientation === "vertical" && "h-full w-1.5", orientation === "horizontal" && "h-1.5 flex-col", className), ...props, children: jsx(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-fd-border" }) }));
ScrollBar.displayName = ScrollAreaPrimitive.Scrollbar.displayName;
function useMediaQuery(query, disabled = false) {
  const [isMatch, setMatch] = useState(null);
  useEffect(() => {
    if (disabled) return;
    const mediaQueryList = window.matchMedia(query);
    const handleChange = () => {
      setMatch(mediaQueryList.matches);
    };
    handleChange();
    mediaQueryList.addEventListener("change", handleChange);
    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [disabled, query]);
  return isMatch;
}
const itemVariants$1 = cva("relative flex flex-row items-center gap-2 rounded-lg p-2 ps-(--sidebar-item-offset) text-start text-fd-muted-foreground [overflow-wrap:anywhere] [&_svg]:size-4 [&_svg]:shrink-0", {
  variants: {
    active: {
      true: "bg-fd-primary/10 text-fd-primary",
      false: "transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none"
    }
  }
});
const Context$1 = createContext(null);
const FolderContext = createContext(null);
function Sidebar({ defaultOpenLevel = 0, prefetch = true, Mobile, Content }) {
  var _a;
  const isMobile = (_a = useMediaQuery("(width < 768px)")) != null ? _a : false;
  const context = useMemo(() => {
    return {
      defaultOpenLevel,
      prefetch,
      level: 1
    };
  }, [defaultOpenLevel, prefetch]);
  return jsx(Context$1.Provider, { value: context, children: isMobile && Mobile != null ? Mobile : Content });
}
function SidebarContent(props) {
  const { collapsed } = useSidebar();
  const [hover, setHover] = useState(false);
  const timerRef = useRef(0);
  const closeTimeRef = useRef(0);
  useOnChange(collapsed, () => {
    setHover(false);
    closeTimeRef.current = Date.now() + 150;
  });
  return jsx("aside", { id: "nd-sidebar", ...props, "data-collapsed": collapsed, className: twMerge("fixed left-0 rtl:left-auto rtl:right-(--removed-body-scroll-bar-size,0) flex flex-col items-end top-(--fd-sidebar-top) bottom-(--fd-sidebar-margin) z-20 bg-fd-card text-sm border-e transition-[top,opacity,translate,width] duration-200 max-md:hidden *:w-(--fd-sidebar-width)", collapsed && [
    "rounded-xl border translate-x-(--fd-sidebar-offset) rtl:-translate-x-(--fd-sidebar-offset)",
    hover ? "z-50 shadow-lg" : "opacity-0"
  ], props.className), style: {
    ...props.style,
    "--fd-sidebar-offset": hover ? "calc(var(--spacing) * 2)" : "calc(16px - 100%)",
    "--fd-sidebar-margin": collapsed ? "0.5rem" : "0px",
    "--fd-sidebar-top": `calc(var(--fd-banner-height) + var(--fd-nav-height) + var(--fd-sidebar-margin))`,
    width: collapsed ? "var(--fd-sidebar-width)" : "calc(var(--spacing) + var(--fd-sidebar-width) + var(--fd-layout-offset))"
  }, onPointerEnter: (e) => {
    if (!collapsed || e.pointerType === "touch" || closeTimeRef.current > Date.now())
      return;
    window.clearTimeout(timerRef.current);
    setHover(true);
  }, onPointerLeave: (e) => {
    if (!collapsed || e.pointerType === "touch")
      return;
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setHover(false);
      closeTimeRef.current = Date.now() + 150;
    }, Math.min(e.clientX, document.body.clientWidth - e.clientX) > 100 ? 0 : 500);
  }, children: props.children });
}
function SidebarContentMobile({ className, children, ...props }) {
  const { open, setOpen } = useSidebar();
  const state = open ? "open" : "closed";
  return jsxs(Fragment, { children: [jsx(Presence, { present: open, children: jsx("div", { "data-state": state, className: "fixed z-40 inset-0 backdrop-blur-xs data-[state=open]:animate-fd-fade-in data-[state=closed]:animate-fd-fade-out", onClick: () => setOpen(false) }) }), jsx(Presence, { present: open, children: ({ present }) => jsx("aside", { id: "nd-sidebar-mobile", ...props, "data-state": state, className: twMerge("fixed text-[15px] flex flex-col shadow-lg border-s end-0 inset-y-0 w-[85%] max-w-[380px] z-40 bg-fd-background data-[state=open]:animate-fd-sidebar-in data-[state=closed]:animate-fd-sidebar-out", !present && "invisible", className), children }) })] });
}
function SidebarHeader(props) {
  return jsx("div", { ...props, className: twMerge("flex flex-col gap-3 p-4 pb-2", props.className), children: props.children });
}
function SidebarFooter(props) {
  return jsx("div", { ...props, className: twMerge("flex flex-col border-t p-4 pt-2", props.className), children: props.children });
}
function SidebarViewport(props) {
  return jsx(ScrollArea, { ...props, className: twMerge("h-full", props.className), children: jsx(ScrollViewport, { className: "p-4 overscroll-contain", style: {
    "--sidebar-item-offset": "calc(var(--spacing) * 2)",
    maskImage: "linear-gradient(to bottom, transparent, white 12px, white calc(100% - 12px), transparent)"
  }, children: props.children }) });
}
function SidebarSeparator(props) {
  return jsx("p", { ...props, className: twMerge("inline-flex items-center gap-2 mb-1.5 px-2 ps-(--sidebar-item-offset) empty:mb-0 [&_svg]:size-4 [&_svg]:shrink-0", props.className), children: props.children });
}
function SidebarItem({ icon, ...props }) {
  const pathname = usePathname();
  const active = props.href !== void 0 && isActive(props.href, pathname, false);
  const { prefetch } = useInternalContext();
  return jsxs(Link2, { ...props, "data-active": active, className: twMerge(itemVariants$1({ active }), props.className), prefetch, children: [icon != null ? icon : props.external ? jsx(ExternalLink, {}) : null, props.children] });
}
function SidebarFolder({ defaultOpen = false, ...props }) {
  const [open, setOpen] = useState(defaultOpen);
  useOnChange(defaultOpen, (v) => {
    if (v)
      setOpen(v);
  });
  return jsx(Collapsible, { open, onOpenChange: setOpen, ...props, children: jsx(FolderContext.Provider, { value: useMemo(() => ({ open, setOpen }), [open]), children: props.children }) });
}
function SidebarFolderTrigger({ className, ...props }) {
  const { open } = useFolderContext();
  return jsxs(CollapsibleTrigger, { className: twMerge(itemVariants$1({ active: false }), "w-full", className), ...props, children: [props.children, jsx(ChevronDown, { "data-icon": true, className: twMerge("ms-auto transition-transform", !open && "-rotate-90") })] });
}
function SidebarFolderLink(props) {
  const { open, setOpen } = useFolderContext();
  const { prefetch } = useInternalContext();
  const pathname = usePathname();
  const active = props.href !== void 0 && isActive(props.href, pathname, false);
  return jsxs(Link2, { ...props, "data-active": active, className: twMerge(itemVariants$1({ active }), "w-full", props.className), onClick: (e) => {
    if (e.target instanceof Element && e.target.matches("[data-icon], [data-icon] *")) {
      setOpen(!open);
      e.preventDefault();
    } else {
      setOpen(active ? !open : true);
    }
  }, prefetch, children: [props.children, jsx(ChevronDown, { "data-icon": true, className: twMerge("ms-auto transition-transform", !open && "-rotate-90") })] });
}
function SidebarFolderContent(props) {
  const { level, ...ctx } = useInternalContext();
  return jsx(CollapsibleContent, { ...props, className: twMerge("relative", level === 1 && [
    "before:content-[''] before:absolute before:w-px before:inset-y-1 before:bg-fd-border before:start-2.5",
    "**:data-[active=true]:before:content-[''] **:data-[active=true]:before:bg-fd-primary **:data-[active=true]:before:absolute **:data-[active=true]:before:w-px **:data-[active=true]:before:inset-y-2.5 **:data-[active=true]:before:start-2.5"
  ], props.className), style: {
    "--sidebar-item-offset": `calc(var(--spacing) * ${(level + 1) * 3})`,
    ...props.style
  }, children: jsx(Context$1.Provider, { value: useMemo(() => ({
    ...ctx,
    level: level + 1
  }), [ctx, level]), children: props.children }) });
}
function SidebarTrigger({ children, ...props }) {
  const { setOpen } = useSidebar();
  return jsx("button", { ...props, "aria-label": "Open Sidebar", onClick: () => setOpen((prev) => !prev), children });
}
function SidebarCollapseTrigger(props) {
  const { collapsed, setCollapsed } = useSidebar();
  return jsx("button", { type: "button", "aria-label": "Collapse Sidebar", "data-collapsed": collapsed, ...props, onClick: () => {
    setCollapsed((prev) => !prev);
  }, children: props.children });
}
function useFolderContext() {
  const ctx = useContext(FolderContext);
  if (!ctx)
    throw new Error("Missing sidebar folder");
  return ctx;
}
function useInternalContext() {
  const ctx = useContext(Context$1);
  if (!ctx)
    throw new Error("<Sidebar /> component required.");
  return ctx;
}
function SidebarPageTree(props) {
  const { root } = useTreeContext();
  return useMemo(() => {
    var _a;
    const { Separator, Item, Folder } = (_a = props.components) != null ? _a : {};
    function renderSidebarList(items, level) {
      return items.map((item, i) => {
        if (item.type === "separator") {
          if (Separator)
            return jsx(Separator, { item }, i);
          return jsxs(SidebarSeparator, { className: twMerge(i !== 0 && "mt-6"), children: [item.icon, item.name] }, i);
        }
        if (item.type === "folder") {
          const children = renderSidebarList(item.children, level + 1);
          if (Folder)
            return jsx(Folder, { item, level, children }, i);
          return jsx(PageTreeFolder, { item, children }, i);
        }
        if (Item)
          return jsx(Item, { item }, item.url);
        return jsx(SidebarItem, { href: item.url, external: item.external, icon: item.icon, children: item.name }, item.url);
      });
    }
    return jsx(Fragment$1, { children: renderSidebarList(root.children, 1) }, root.$id);
  }, [props.components, root]);
}
function PageTreeFolder({ item, ...props }) {
  var _a;
  const { defaultOpenLevel, level } = useInternalContext();
  const path = useTreePath();
  return jsxs(SidebarFolder, { defaultOpen: ((_a = item.defaultOpen) != null ? _a : defaultOpenLevel >= level) || path.includes(item), children: [item.index ? jsxs(SidebarFolderLink, { href: item.index.url, external: item.index.external, ...props, children: [item.icon, item.name] }) : jsxs(SidebarFolderTrigger, { ...props, children: [item.icon, item.name] }), jsx(SidebarFolderContent, { children: props.children })] });
}
const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = React__default.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => jsx(PopoverPrimitive.Portal, { children: jsx(PopoverPrimitive.Content, { ref, align, sideOffset, side: "bottom", className: twMerge("z-50 origin-(--radix-popover-content-transform-origin) min-w-[240px] max-w-[98vw] rounded-xl border bg-fd-popover/60 backdrop-blur-lg p-2 text-sm text-fd-popover-foreground shadow-lg focus-visible:outline-none data-[state=closed]:animate-fd-popover-out data-[state=open]:animate-fd-popover-in", className), ...props }) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
function RootToggle({ options, placeholder, ...props }) {
  const [open, setOpen] = useState(false);
  const { closeOnRedirect } = useSidebar();
  const pathname = usePathname();
  const selected = useMemo(() => {
    return options.findLast((item2) => isTabActive(item2, pathname));
  }, [options, pathname]);
  const onClick = () => {
    closeOnRedirect.current = false;
    setOpen(false);
  };
  const item = selected ? jsxs(Fragment, { children: [jsx("div", { className: "size-9 shrink-0 md:size-5", children: selected.icon }), jsxs("div", { children: [jsx("p", { className: "text-sm font-medium", children: selected.title }), jsx("p", { className: "text-[13px] text-fd-muted-foreground empty:hidden md:hidden", children: selected.description })] })] }) : placeholder;
  return jsxs(Popover, { open, onOpenChange: setOpen, children: [item && jsxs(PopoverTrigger, { ...props, className: twMerge("flex items-center gap-2 rounded-lg p-2 border bg-fd-secondary/50 text-start text-fd-secondary-foreground transition-colors hover:bg-fd-accent data-[state=open]:bg-fd-accent data-[state=open]:text-fd-accent-foreground", props.className), children: [item, jsx(ChevronsUpDown, { className: "shrink-0 ms-auto size-4 text-fd-muted-foreground" })] }), jsx(PopoverContent, { className: "flex flex-col gap-1 w-(--radix-popover-trigger-width) overflow-hidden p-1", children: options.map((item2) => {
    var _a;
    const isActive2 = selected && item2.url === selected.url;
    if (!isActive2 && item2.unlisted)
      return;
    return jsxs(Link2, { href: item2.url, onClick, ...item2.props, className: twMerge("flex items-center gap-2 rounded-lg p-1.5 hover:bg-fd-accent hover:text-fd-accent-foreground", (_a = item2.props) == null ? void 0 : _a.className), children: [jsx("div", { className: "shrink-0 size-9 md:mt-1 md:mb-auto md:size-5", children: item2.icon }), jsxs("div", { children: [jsx("p", { className: "text-sm font-medium", children: item2.title }), jsx("p", { className: "text-[13px] text-fd-muted-foreground empty:hidden", children: item2.description })] }), jsx(Check, { className: twMerge("shrink-0 ms-auto size-3.5 text-fd-primary", !isActive2 && "invisible") })] }, item2.url);
  }) })] });
}
function BaseLinkItem({ ref, item, ...props }) {
  var _a;
  const pathname = usePathname();
  const activeType = (_a = item.active) != null ? _a : "url";
  const active = activeType !== "none" && isActive(item.url, pathname, activeType === "nested-url");
  return jsx(Link2, { ref, href: item.url, external: item.external, ...props, "data-active": active, children: props.children });
}
function getLinks(links = [], githubUrl) {
  let result = links != null ? links : [];
  if (githubUrl)
    result = [
      ...result,
      {
        type: "icon",
        url: githubUrl,
        text: "Github",
        label: "GitHub",
        icon: jsx("svg", { role: "img", viewBox: "0 0 24 24", fill: "currentColor", children: jsx("path", { d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" }) }),
        external: true
      }
    ];
  return result;
}
function LanguageToggle(props) {
  const context = useI18n();
  if (!context.locales)
    throw new Error("Missing `<I18nProvider />`");
  return jsxs(Popover, { children: [jsx(PopoverTrigger, { "aria-label": context.text.chooseLanguage, ...props, className: twMerge(buttonVariants({
    color: "ghost",
    className: "gap-1.5 p-1.5"
  }), props.className), children: props.children }), jsxs(PopoverContent, { className: "flex flex-col overflow-hidden p-0", children: [jsx("p", { className: "mb-1 p-2 text-xs font-medium text-fd-muted-foreground", children: context.text.chooseLanguage }), context.locales.map((item) => jsx("button", { type: "button", className: twMerge("p-2 text-start text-sm", item.locale === context.locale ? "bg-fd-primary/10 font-medium text-fd-primary" : "hover:bg-fd-accent hover:text-fd-accent-foreground"), onClick: () => {
    var _a;
    (_a = context.onChange) == null ? void 0 : _a.call(context, item.locale);
  }, children: item.name }, item.locale))] })] });
}
function LanguageToggleText(props) {
  var _a, _b;
  const context = useI18n();
  const text = (_b = (_a = context.locales) == null ? void 0 : _a.find((item) => item.locale === context.locale)) == null ? void 0 : _b.name;
  return jsx("span", { ...props, children: text });
}
function SearchToggle({ hideIfDisabled, size = "icon-sm", color = "ghost", ...props }) {
  const { setOpenSearch, enabled } = useSearchContext();
  if (hideIfDisabled && !enabled)
    return null;
  return jsx("button", { type: "button", className: twMerge(buttonVariants({
    size,
    color
  }), props.className), "data-search": "", "aria-label": "Open Search", onClick: () => {
    setOpenSearch(true);
  }, children: jsx(Search, {}) });
}
function LargeSearchToggle({ hideIfDisabled, ...props }) {
  const { enabled, hotKey, setOpenSearch } = useSearchContext();
  const { text } = useI18n();
  if (hideIfDisabled && !enabled)
    return null;
  return jsxs("button", { type: "button", "data-search-full": "", ...props, className: twMerge("inline-flex items-center gap-2 rounded-lg border bg-fd-secondary/50 p-1.5 ps-2 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground", props.className), onClick: () => {
    setOpenSearch(true);
  }, children: [jsx(Search, { className: "size-4" }), text.search, jsx("div", { className: "ms-auto inline-flex gap-0.5", children: hotKey.map((k, i) => jsx("kbd", { className: "rounded-md border bg-fd-background px-1.5", children: k.display }, i)) })] });
}
function Navbar(props) {
  const { isTransparent } = useNav();
  return jsx("header", { id: "nd-subnav", ...props, className: twMerge("fixed top-(--fd-banner-height) left-0 right-(--removed-body-scroll-bar-size,0) z-30 flex items-center ps-4 pe-2.5 border-b transition-colors backdrop-blur-sm", !isTransparent && "bg-fd-background/80", props.className), children: props.children });
}
function LayoutBody(props) {
  const { collapsed } = useSidebar();
  return jsx("main", { id: "nd-docs-layout", ...props, className: twMerge("flex flex-1 flex-col pt-(--fd-nav-height) transition-[padding] fd-default-layout", !collapsed && "mx-(--fd-layout-offset)", props.className), style: {
    ...props.style,
    paddingInlineStart: collapsed ? "min(calc(100vw - var(--fd-page-width)), var(--fd-sidebar-width))" : "var(--fd-sidebar-width)"
  }, children: props.children });
}
function CollapsibleControl() {
  const { collapsed } = useSidebar();
  return jsxs("div", { className: twMerge("fixed flex shadow-lg transition-opacity rounded-xl p-0.5 border bg-fd-muted text-fd-muted-foreground z-10 max-md:hidden xl:start-4 max-xl:end-4", !collapsed && "pointer-events-none opacity-0"), style: {
    top: "calc(var(--fd-banner-height) + var(--fd-tocnav-height) + var(--spacing) * 4)"
  }, children: [jsx(SidebarCollapseTrigger, { className: twMerge(buttonVariants({
    color: "ghost",
    size: "icon-sm",
    className: "rounded-lg"
  })), children: jsx(Sidebar$1, {}) }), jsx(SearchToggle, { className: "rounded-lg", hideIfDisabled: true })] });
}
const itemVariants = cva("size-6.5 rounded-full p-1.5 text-fd-muted-foreground", {
  variants: {
    active: {
      true: "bg-fd-accent text-fd-accent-foreground",
      false: "text-fd-muted-foreground"
    }
  }
});
const full = [
  ["light", Sun],
  ["dark", Moon],
  ["system", Airplay]
];
function ThemeToggle({ className, mode = "light-dark", ...props }) {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useLayoutEffect(() => {
    setMounted(true);
  }, []);
  const container = twMerge("inline-flex items-center rounded-full border p-1", className);
  if (mode === "light-dark") {
    const value2 = mounted ? resolvedTheme : null;
    return jsx("button", { className: container, "aria-label": `Toggle Theme`, onClick: () => setTheme(value2 === "light" ? "dark" : "light"), "data-theme-toggle": "", ...props, children: full.map(([key, Icon]) => {
      if (key === "system")
        return;
      return jsx(Icon, { fill: "currentColor", className: twMerge(itemVariants({ active: value2 === key })) }, key);
    }) });
  }
  const value = mounted ? theme : null;
  return jsx("div", { className: container, "data-theme-toggle": "", ...props, children: full.map(([key, Icon]) => jsx("button", { "aria-label": key, className: twMerge(itemVariants({ active: value === key })), onClick: () => setTheme(key), children: jsx(Icon, { className: "size-full", fill: "currentColor" }) }, key)) });
}
var Context = createContext({
  nonce: void 0
});
function getElement(id) {
  return document.querySelector(`[data-fd-if-empty="${id}"]`);
}
function isEmpty(node) {
  for (let i = 0; i < node.childNodes.length; i++) {
    const child = node.childNodes.item(i);
    if (child.nodeType === Node.TEXT_NODE || child.nodeType === Node.ELEMENT_NODE && window.getComputedStyle(child).display !== "none") {
      return false;
    }
  }
  return true;
}
function HideIfEmpty({
  as: Comp,
  ...props
}) {
  const id = useId();
  const { nonce } = useContext(Context);
  const [empty, setEmpty] = useState(() => {
  });
  useEffect(() => {
    const handleResize = () => {
      const element = getElement(id);
      if (element) setEmpty(isEmpty(element));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [id]);
  const init = (id2) => {
    var _a;
    const element = getElement(id2);
    if (element) element.hidden = isEmpty(element);
    const script = document.currentScript;
    if (script) (_a = script.parentNode) == null ? void 0 : _a.removeChild(script);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Comp,
      {
        ...props,
        "data-fd-if-empty": id,
        hidden: empty != null ? empty : false
      }
    ),
    empty === void 0 && /* @__PURE__ */ jsx(
      "script",
      {
        nonce,
        dangerouslySetInnerHTML: {
          __html: `{${getElement};${isEmpty};(${init})("${id}")}`
        }
      }
    )
  ] });
}
const defaultTransform = (option, node) => {
  if (!node.icon)
    return option;
  return {
    ...option,
    icon: jsx("div", { className: "size-full [&_svg]:size-full max-md:p-1.5 max-md:rounded-md max-md:border max-md:bg-fd-secondary", children: node.icon })
  };
};
function getSidebarTabs(tree, { transform = defaultTransform } = {}) {
  const results = [];
  function scanOptions(node, unlisted) {
    var _a;
    if ("root" in node && node.root) {
      const urls = getFolderUrls(node);
      if (urls.size > 0) {
        const option = {
          url: (_a = urls.values().next().value) != null ? _a : "",
          title: node.name,
          icon: node.icon,
          unlisted,
          description: node.description,
          urls
        };
        const mapped = transform ? transform(option, node) : option;
        if (mapped)
          results.push(mapped);
      }
    }
    for (const child of node.children) {
      if (child.type === "folder")
        scanOptions(child, unlisted);
    }
  }
  scanOptions(tree);
  if (tree.fallback)
    scanOptions(tree.fallback, true);
  return results;
}
function getFolderUrls(folder, output = /* @__PURE__ */ new Set()) {
  if (folder.index)
    output.add(folder.index.url);
  for (const child of folder.children) {
    if (child.type === "page" && !child.external)
      output.add(child.url);
    if (child.type === "folder")
      getFolderUrls(child, output);
  }
  return output;
}
function DocsLayout({ nav: { transparentMode, ...nav } = {}, sidebar: { tabs: sidebarTabs, enabled: sidebarEnabled = true, ...sidebarProps } = {}, searchToggle = {}, disableThemeSwitch = false, themeSwitch = { enabled: !disableThemeSwitch }, i18n = false, children, ...props }) {
  var _a, _b, _c, _d, _e, _f;
  const tabs = useMemo(() => {
    if (Array.isArray(sidebarTabs)) {
      return sidebarTabs;
    }
    if (typeof sidebarTabs === "object") {
      return getSidebarTabs(props.tree, sidebarTabs);
    }
    if (sidebarTabs !== false) {
      return getSidebarTabs(props.tree);
    }
    return [];
  }, [sidebarTabs, props.tree]);
  const links = getLinks((_a = props.links) != null ? _a : [], props.githubUrl);
  const sidebarVariables = twMerge("md:[--fd-sidebar-width:268px] lg:[--fd-sidebar-width:286px]");
  function sidebar() {
    var _a2, _b2, _c2, _d2, _e2;
    const { footer, banner, collapsible = true, component, components, defaultOpenLevel, prefetch, ...rest } = sidebarProps;
    if (component)
      return component;
    const iconLinks = links.filter((item) => item.type === "icon");
    const viewport = jsxs(SidebarViewport, { children: [links.filter((v) => v.type !== "icon").map((item, i, list) => jsx(SidebarLinkItem, { item, className: twMerge(i === list.length - 1 && "mb-4") }, i)), jsx(SidebarPageTree, { components })] });
    const mobile = jsxs(SidebarContentMobile, { ...rest, children: [jsxs(SidebarHeader, { children: [jsxs("div", { className: "flex text-fd-muted-foreground items-center gap-1.5", children: [jsx("div", { className: "flex flex-1", children: iconLinks.map((item, i) => jsx(BaseLinkItem, { item, className: twMerge(buttonVariants({
      size: "icon-sm",
      color: "ghost",
      className: "p-2"
    })), "aria-label": item.label, children: item.icon }, i)) }), i18n ? jsxs(LanguageToggle, { children: [jsx(Languages, { className: "size-4.5" }), jsx(LanguageToggleText, {})] }) : null, themeSwitch.enabled !== false && ((_a2 = themeSwitch.component) != null ? _a2 : jsx(ThemeToggle, { className: "p-0", mode: themeSwitch.mode })), jsx(SidebarTrigger, { className: twMerge(buttonVariants({
      color: "ghost",
      size: "icon-sm",
      className: "p-2"
    })), children: jsx(Sidebar$1, {}) })] }), tabs.length > 0 && jsx(RootToggle, { options: tabs }), banner] }), viewport, jsx(SidebarFooter, { className: "empty:hidden", children: footer })] });
    const content = jsxs(SidebarContent, { ...rest, children: [jsxs(SidebarHeader, { children: [jsxs("div", { className: "flex", children: [jsx(Link2, { href: (_b2 = nav.url) != null ? _b2 : "/", className: "inline-flex text-[15px] items-center gap-2.5 font-medium me-auto", children: nav.title }), nav.children, collapsible && jsx(SidebarCollapseTrigger, { className: twMerge(buttonVariants({
      color: "ghost",
      size: "icon-sm",
      className: "mb-auto text-fd-muted-foreground"
    })), children: jsx(Sidebar$1, {}) })] }), searchToggle.enabled !== false && ((_d2 = (_c2 = searchToggle.components) == null ? void 0 : _c2.lg) != null ? _d2 : jsx(LargeSearchToggle, { hideIfDisabled: true })), tabs.length > 0 && jsx(RootToggle, { options: tabs }), banner] }), viewport, jsxs(HideIfEmpty, { as: SidebarFooter, children: [jsxs("div", { className: "flex text-fd-muted-foreground items-center empty:hidden", children: [i18n ? jsx(LanguageToggle, { children: jsx(Languages, { className: "size-4.5" }) }) : null, iconLinks.map((item, i) => jsx(BaseLinkItem, { item, className: twMerge(buttonVariants({ size: "icon-sm", color: "ghost" })), "aria-label": item.label, children: item.icon }, i)), themeSwitch.enabled !== false && ((_e2 = themeSwitch.component) != null ? _e2 : jsx(ThemeToggle, { className: "ms-auto p-0", mode: themeSwitch.mode }))] }), footer] })] });
    return jsx(Sidebar, { defaultOpenLevel, prefetch, Mobile: mobile, Content: jsxs(Fragment, { children: [collapsible && jsx(CollapsibleControl, {}), content] }) });
  }
  return jsx(TreeContextProvider, { tree: props.tree, children: jsxs(NavProvider, { transparentMode, children: [nav.enabled !== false && ((_e = nav.component) != null ? _e : jsxs(Navbar, { className: "h-(--fd-nav-height) on-root:[--fd-nav-height:56px] md:on-root:[--fd-nav-height:0px] md:hidden", children: [jsx(Link2, { href: (_b = nav.url) != null ? _b : "/", className: "inline-flex items-center gap-2.5 font-semibold", children: nav.title }), jsx("div", { className: "flex-1", children: nav.children }), searchToggle.enabled !== false && ((_d = (_c = searchToggle.components) == null ? void 0 : _c.sm) != null ? _d : jsx(SearchToggle, { className: "p-2", hideIfDisabled: true })), sidebarEnabled && jsx(SidebarTrigger, { className: twMerge(buttonVariants({
    color: "ghost",
    size: "icon-sm",
    className: "p-2"
  })), children: jsx(Sidebar$1, {}) })] })), jsxs(LayoutBody, { ...props.containerProps, className: twMerge("md:[&_#nd-page_article]:pt-12 xl:[--fd-toc-width:286px] xl:[&_#nd-page_article]:px-8", sidebarEnabled && sidebarVariables, (_f = props.containerProps) == null ? void 0 : _f.className), children: [sidebarEnabled && sidebar(), children] })] }) });
}
function SidebarLinkItem({ item, ...props }) {
  if (item.type === "menu")
    return jsxs(SidebarFolder, { ...props, children: [item.url ? jsxs(SidebarFolderLink, { href: item.url, external: item.external, children: [item.icon, item.text] }) : jsxs(SidebarFolderTrigger, { children: [item.icon, item.text] }), jsx(SidebarFolderContent, { children: item.items.map((child, i) => jsx(SidebarLinkItem, { item: child }, i)) })] });
  if (item.type === "custom")
    return jsx("div", { ...props, children: item.children });
  return jsx(SidebarItem, { href: item.url, icon: item.icon, external: item.external, ...props, children: item.text });
}
function DiscordIcon({ className }) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 576 512",
      className,
      children: [
        /* @__PURE__ */ jsx("title", { children: "Discord" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            d: "M492.5 69.8c-.2-.3-.4-.6-.8-.7-38.1-17.5-78.4-30-119.7-37.1-.4-.1-.8 0-1.1 .1s-.6 .4-.8 .8c-5.5 9.9-10.5 20.2-14.9 30.6-44.6-6.8-89.9-6.8-134.4 0-4.5-10.5-9.5-20.7-15.1-30.6-.2-.3-.5-.6-.8-.8s-.7-.2-1.1-.2c-41.3 7.1-81.6 19.6-119.7 37.1-.3 .1-.6 .4-.8 .7-76.2 113.8-97.1 224.9-86.9 334.5 0 .3 .1 .5 .2 .8s.3 .4 .5 .6c44.4 32.9 94 58 146.8 74.2 .4 .1 .8 .1 1.1 0s.7-.4 .9-.7c11.3-15.4 21.4-31.8 30-48.8 .1-.2 .2-.5 .2-.8s0-.5-.1-.8-.2-.5-.4-.6-.4-.3-.7-.4c-15.8-6.1-31.2-13.4-45.9-21.9-.3-.2-.5-.4-.7-.6s-.3-.6-.3-.9 0-.6 .2-.9 .3-.5 .6-.7c3.1-2.3 6.2-4.7 9.1-7.1 .3-.2 .6-.4 .9-.4s.7 0 1 .1c96.2 43.9 200.4 43.9 295.5 0 .3-.1 .7-.2 1-.2s.7 .2 .9 .4c2.9 2.4 6 4.9 9.1 7.2 .2 .2 .4 .4 .6 .7s.2 .6 .2 .9-.1 .6-.3 .9-.4 .5-.6 .6c-14.7 8.6-30 15.9-45.9 21.8-.2 .1-.5 .2-.7 .4s-.3 .4-.4 .7-.1 .5-.1 .8 .1 .5 .2 .8c8.8 17 18.8 33.3 30 48.8 .2 .3 .6 .6 .9 .7s.8 .1 1.1 0c52.9-16.2 102.6-41.3 147.1-74.2 .2-.2 .4-.4 .5-.6s.2-.5 .2-.8c12.3-126.8-20.5-236.9-86.9-334.5zm-302 267.7c-29 0-52.8-26.6-52.8-59.2s23.4-59.2 52.8-59.2c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.4 59.2-52.8 59.2zm195.4 0c-29 0-52.8-26.6-52.8-59.2s23.4-59.2 52.8-59.2c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.2 59.2-52.8 59.2z"
          }
        )
      ]
    }
  );
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Select({
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Root, { "data-slot": "select", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
    SelectPrimitive.Content,
    {
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      ...props,
      children: [
        /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsx(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(CheckIcon, { className: "size-4" }) }) }),
        /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
      ]
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(ChevronUpIcon, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-4" })
    }
  );
}
async function getRemoteVersions() {
  const response = await fetch("/versions.json");
  if (!response.ok) {
    return [];
  }
  const data = await response.json();
  return data;
}
const remoteVersions = getRemoteVersions();
function VersionPicker() {
  const router = useRouter();
  const { pathname } = useLocation();
  const [versions, setVersions] = React__default__default.useState([]);
  React__default__default.useEffect(() => {
    remoteVersions.then(setVersions);
  }, []);
  const currentVersion = versions.find(({ version, aliases }) => {
    return [version, ...aliases].some(
      (alias) => pathname.startsWith(`/${alias}/`)
    );
  }) || versions.find(({ aliases }) => aliases.includes("latest"));
  if (versions.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxs(
    Select,
    {
      value: currentVersion == null ? void 0 : currentVersion.version,
      onValueChange: (value) => {
        router.navigate({ to: `/${value}` });
      },
      children: [
        /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[100px]", size: "sm", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Version" }) }),
        /* @__PURE__ */ jsx(SelectContent, { children: versions.map(({ version, title, aliases }) => /* @__PURE__ */ jsxs(SelectItem, { value: version, children: [
          title,
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: aliases.join(", ") })
        ] }, version)) })
      ]
    }
  );
}
function baseOptions() {
  return {
    nav: {
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("img", { src: "/images/jj-logo.svg", alt: "Jujutsu", width: 24, height: 24 }),
        "Jujutsu"
      ] }),
      children: /* @__PURE__ */ jsx("div", { className: "grow ml-2", children: /* @__PURE__ */ jsx(VersionPicker, {}) })
    },
    githubUrl: "https://github.com/jj-vcs/jj",
    links: [
      {
        type: "icon",
        label: "Discord",
        icon: /* @__PURE__ */ jsx(DiscordIcon, {}),
        text: "Discord",
        url: "https://discord.gg/dkmfj3aGQN"
      }
    ]
  };
}

export { DocsLayout as D, baseOptions as b };
//# sourceMappingURL=layout.shared-JiWhm5gR.mjs.map
