import {
  Loader
} from "/build/_shared/chunk-L5E5TRZE.js";
import {
  Transition
} from "/build/_shared/chunk-4NG5WP3M.js";
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

// app/components/icon/icon.module.css
var icon_module_default = { "icon": "icon-module__icon__r1Pyw" };

// app/components/icon/icon.jsx
var import_react = __toESM(require_react(), 1);

// app/components/icon/icons.svg
var icons_default = "/build/_assets/icons-GMFDO5DU.svg";

// app/components/icon/icon.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\icon\\\\icon.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\icon\\icon.jsx"
  );
}
var Icon = (0, import_react.forwardRef)(_c = ({
  icon,
  className,
  size,
  ...rest
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { "aria-hidden": true, ref, className: classes(icon_module_default.icon, className), width: size || 24, height: size || 24, ...rest, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("use", { href: `${icons_default}#${icon}` }, void 0, false, {
    fileName: "app/components/icon/icon.jsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/icon/icon.jsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
});
_c2 = Icon;
var _c;
var _c2;
$RefreshReg$(_c, "Icon$forwardRef");
$RefreshReg$(_c2, "Icon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/icon/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\icon\\index.js"
  );
  import.meta.hot.lastModified = "1759533528967.1262";
}

// app/components/button/button.jsx
var import_react3 = __toESM(require_react(), 1);

// app/components/button/button.module.css
var button_module_default = { "button": "button-module__button__SARA3", "text": "button-module__text__4sqkJ", "loader": "button-module__loader__VfprI", "icon": "button-module__icon__eDsbl" };

// app/components/button/button.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\button\\\\button.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\button\\button.jsx"
  );
}
function isExternalLink(href) {
  return href?.includes("://");
}
var Button = (0, import_react3.forwardRef)(_c3 = ({
  href,
  ...rest
}, ref) => {
  if (isExternalLink(href) || !href) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ButtonContent, { href, ref, ...rest }, void 0, false, {
      fileName: "app/components/button/button.jsx",
      lineNumber: 35,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ButtonContent, { unstable_viewTransition: true, as: Link, prefetch: "intent", to: href, ref, ...rest }, void 0, false, {
    fileName: "app/components/button/button.jsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
});
_c22 = Button;
var ButtonContent = (0, import_react3.forwardRef)(_c32 = ({
  className,
  as,
  secondary,
  loading,
  loadingText = "loading",
  icon,
  iconEnd,
  iconHoverShift,
  iconOnly,
  children,
  rel,
  target,
  href,
  disabled,
  ...rest
}, ref) => {
  const isExternal = isExternalLink(href);
  const defaultComponent = href ? "a" : "button";
  const Component = as || defaultComponent;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Component, { className: classes(button_module_default.button, className), "data-loading": loading, "data-icon-only": iconOnly, "data-secondary": secondary, "data-icon": icon, href, rel: rel || isExternal ? "noopener noreferrer" : void 0, target: target || isExternal ? "_blank" : void 0, disabled, ref, ...rest, children: [
    !!icon && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { className: button_module_default.icon, "data-start": !iconOnly, "data-shift": iconHoverShift, icon }, void 0, false, {
      fileName: "app/components/button/button.jsx",
      lineNumber: 62,
      columnNumber: 20
    }, this),
    !!children && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: button_module_default.text, children }, void 0, false, {
      fileName: "app/components/button/button.jsx",
      lineNumber: 63,
      columnNumber: 24
    }, this),
    !!iconEnd && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { className: button_module_default.icon, "data-end": !iconOnly, "data-shift": iconHoverShift, icon: iconEnd }, void 0, false, {
      fileName: "app/components/button/button.jsx",
      lineNumber: 64,
      columnNumber: 23
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Transition, { unmount: true, in: loading, children: ({
      visible,
      nodeRef
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Loader, { ref: nodeRef, className: button_module_default.loader, size: 32, text: loadingText, "data-visible": visible }, void 0, false, {
      fileName: "app/components/button/button.jsx",
      lineNumber: 69,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/button/button.jsx",
      lineNumber: 65,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/button/button.jsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
});
_c4 = ButtonContent;
var _c3;
var _c22;
var _c32;
var _c4;
$RefreshReg$(_c3, "Button$forwardRef");
$RefreshReg$(_c22, "Button");
$RefreshReg$(_c32, "ButtonContent$forwardRef");
$RefreshReg$(_c4, "ButtonContent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/button/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\button\\index.js"
  );
  import.meta.hot.lastModified = "1759533528955.2102";
}

// app/components/heading/heading.jsx
var import_react4 = __toESM(require_react(), 1);

// app/components/heading/heading.module.css
var heading_module_default = { "heading": "heading-module__heading__AdbmM" };

// app/components/heading/heading.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\heading\\\\heading.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\heading\\heading.jsx"
  );
}
var Heading = ({
  children,
  level = 1,
  as,
  align = "auto",
  weight = "medium",
  className,
  ...rest
}) => {
  const clampedLevel = Math.min(Math.max(level, 0), 5);
  const Component = as || `h${Math.max(clampedLevel, 1)}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Component, { className: classes(heading_module_default.heading, className), "data-align": align, "data-weight": weight, "data-level": clampedLevel, ...rest, children }, void 0, false, {
    fileName: "app/components/heading/heading.jsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/heading/heading.jsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
};
_c5 = Heading;
var _c5;
$RefreshReg$(_c5, "Heading");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/heading/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\heading\\index.js"
  );
  import.meta.hot.lastModified = "1759533528965.3445";
}

export {
  Icon,
  Button,
  Heading
};
//# sourceMappingURL=/build/_shared/chunk-FR56KFKI.js.map
