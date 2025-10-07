import {
  classes
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

// app/components/visually-hidden/visually-hidden.jsx
var import_react = __toESM(require_react(), 1);

// app/components/visually-hidden/visually-hidden.module.css
var visually_hidden_module_default = { "hidden": "visually-hidden-module__hidden__JJv3L" };

// app/components/visually-hidden/visually-hidden.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\visually-hidden\\\\visually-hidden.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\visually-hidden\\visually-hidden.jsx"
  );
}
var VisuallyHidden = (0, import_react.forwardRef)(_c = ({
  className,
  showOnFocus,
  as: Component = "span",
  children,
  visible,
  ...rest
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Component, { className: classes(visually_hidden_module_default.hidden, className), "data-hidden": !visible && !showOnFocus, "data-show-on-focus": showOnFocus, ref, ...rest, children }, void 0, false, {
    fileName: "app/components/visually-hidden/visually-hidden.jsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
});
_c2 = VisuallyHidden;
var _c;
var _c2;
$RefreshReg$(_c, "VisuallyHidden$forwardRef");
$RefreshReg$(_c2, "VisuallyHidden");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/visually-hidden/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\visually-hidden\\index.js"
  );
  import.meta.hot.lastModified = "1759533528989.2766";
}

export {
  VisuallyHidden
};
//# sourceMappingURL=/build/_shared/chunk-5U3ZZGYI.js.map
