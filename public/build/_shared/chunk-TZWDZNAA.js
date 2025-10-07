import {
  config_default
} from "/build/_shared/chunk-CTRHRPLG.js";
import {
  Text
} from "/build/_shared/chunk-L5E5TRZE.js";
import {
  classes
} from "/build/_shared/chunk-VSMHCMS2.js";
import {
  Link
} from "/build/_shared/chunk-6J4CTUD2.js";
import {
  createHotContext
} from "/build/_shared/chunk-HTDTVXTX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GIAAN75Z.js";
import {
  require_react
} from "/build/_shared/chunk-3DYT5NE2.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/link/link.jsx
var import_react = __toESM(require_react(), 1);

// app/components/link/link.module.css
var link_module_default = { "link": "link-module__link__LvEEB" };

// app/components/link/link.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\link\\\\link.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\link\\link.jsx"
  );
}
var VALID_EXT = ["txt", "png", "jpg"];
function isAnchor(href) {
  const isValidExtension = VALID_EXT.includes(href?.split(".").pop());
  return href?.includes("://") || href?.[0] === "#" || isValidExtension;
}
var Link2 = (0, import_react.forwardRef)(_c = ({
  rel,
  target,
  children,
  secondary,
  className,
  href,
  ...rest
}, ref) => {
  const isExternal = href?.includes("://");
  const relValue = rel || (isExternal ? "noreferrer noopener" : void 0);
  const targetValue = target || (isExternal ? "_blank" : void 0);
  const linkProps = {
    className: classes(link_module_default.link, className),
    ["data-secondary"]: secondary,
    rel: relValue,
    href,
    target: targetValue,
    ref,
    ...rest
  };
  if (isAnchor(href)) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { ...linkProps, href, children }, void 0, false, {
      fileName: "app/components/link/link.jsx",
      lineNumber: 53,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { unstable_viewTransition: true, prefetch: "intent", ...linkProps, to: href, children }, void 0, false, {
    fileName: "app/components/link/link.jsx",
    lineNumber: 57,
    columnNumber: 10
  }, this);
});
_c2 = Link2;
var _c;
var _c2;
$RefreshReg$(_c, "Link$forwardRef");
$RefreshReg$(_c2, "Link");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/link/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\link\\index.js"
  );
  import.meta.hot.lastModified = "1759533528971.4917";
}

// app/components/footer/footer.module.css
var footer_module_default = { "footer": "footer-module__footer__KsomK", "link": "footer-module__link__tCL51", "date": "footer-module__date__RNpgt" };

// app/components/footer/footer.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\footer\\\\footer.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\footer\\footer.jsx"
  );
}
var Footer = ({
  className
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: classes(footer_module_default.footer, className), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { size: "s", align: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: footer_module_default.date, children: `\xA9 ${(/* @__PURE__ */ new Date()).getFullYear()} ${config_default.name}` }, void 0, false, {
  fileName: "app/components/footer/footer.jsx",
  lineNumber: 29,
  columnNumber: 7
}, this) }, void 0, false, {
  fileName: "app/components/footer/footer.jsx",
  lineNumber: 28,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/footer/footer.jsx",
  lineNumber: 27,
  columnNumber: 7
}, this);
_c3 = Footer;
var _c3;
$RefreshReg$(_c3, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/footer/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\footer\\index.js"
  );
  import.meta.hot.lastModified = "1759533528963.235";
}

// app/utils/meta.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\utils\\meta.js"
  );
  import.meta.hot.lastModified = "1759533529022.7224";
}
var { name, url, twitter } = config_default;
var defaultOgImage = `${url}/social-image.png`;
function baseMeta({
  title,
  description,
  prefix = name,
  ogImage = defaultOgImage
}) {
  const titleText = [prefix, title].filter(Boolean).join(" | ");
  return [
    { title: titleText },
    { name: "description", content: description },
    { name: "author", content: name },
    { property: "og:image", content: ogImage },
    { property: "og:image:alt", content: "Banner for the site" },
    { property: "og:image:width", content: "1280" },
    { property: "og:image:height", content: "800" },
    { property: "og:title", content: titleText },
    { property: "og:site_name", content: name },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:description", content: description },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:description", content: description },
    { property: "twitter:title", content: titleText },
    { property: "twitter:site", content: url },
    { property: "twitter:creator", content: twitter },
    { property: "twitter:image", content: ogImage }
  ];
}

export {
  Link2 as Link,
  Footer,
  baseMeta
};
//# sourceMappingURL=/build/_shared/chunk-TZWDZNAA.js.map
