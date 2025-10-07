import {
  classes,
  cssProps,
  useReducedMotion
} from "/build/_shared/chunk-VSMHCMS2.js";
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

// app/components/text/text.module.css
var text_module_default = { "text": "text-module__text__KmYWM" };

// app/components/text/text.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\text\\\\text.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\text\\text.jsx"
  );
}
var Text = ({
  children,
  size = "m",
  as: Component = "span",
  align = "auto",
  weight = "auto",
  secondary,
  className,
  ...rest
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Component, { className: classes(text_module_default.text, className), "data-align": align, "data-size": size, "data-weight": weight, "data-secondary": secondary, ...rest, children }, void 0, false, {
    fileName: "app/components/text/text.jsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
};
_c = Text;
var _c;
$RefreshReg$(_c, "Text");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/text/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\text\\index.js"
  );
  import.meta.hot.lastModified = "1759533528985.8308";
}

// app/components/loader/loader.jsx
var import_react = __toESM(require_react(), 1);

// app/components/loader/loader.module.css
var loader_module_default = { "loader": "loader-module__loader__CLh4a", "text": "loader-module__text__hJb7K", "span": "loader-module__span__HPbpu", "loaderSpan": "loader-module__loaderSpan__WKqtW" };

// app/components/loader/loader.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\loader\\\\loader.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\loader\\loader.jsx"
  );
}
var Loader = _s((0, import_react.forwardRef)(_c2 = _s(({
  className,
  style,
  width = 32,
  height = 4,
  text = "Loading...",
  center,
  ...rest
}, ref) => {
  _s();
  const reduceMotion = useReducedMotion();
  if (reduceMotion) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { className: classes(loader_module_default.text, className), weight: "medium", ...rest, children: text }, void 0, false, {
      fileName: "app/components/loader/loader.jsx",
      lineNumber: 38,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { ref, className: classes(loader_module_default.loader, className), "data-center": center, style: cssProps({
    width,
    height
  }, style), ...rest, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: loader_module_default.span }, void 0, false, {
    fileName: "app/components/loader/loader.jsx",
    lineNumber: 47,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/loader/loader.jsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}, "yAKkJs7CtWSNDV8HpmqLOOhKJtw=", false, function() {
  return [useReducedMotion];
})), "yAKkJs7CtWSNDV8HpmqLOOhKJtw=", false, function() {
  return [useReducedMotion];
});
_c22 = Loader;
var _c2;
var _c22;
$RefreshReg$(_c2, "Loader$forwardRef");
$RefreshReg$(_c22, "Loader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/loader/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\loader\\index.js"
  );
  import.meta.hot.lastModified = "1759533528974.694";
}

export {
  Text,
  Loader
};
//# sourceMappingURL=/build/_shared/chunk-L5E5TRZE.js.map
