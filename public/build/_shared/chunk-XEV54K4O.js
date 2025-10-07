import {
  classes,
  cssProps,
  numToMs
} from "/build/_shared/chunk-VSMHCMS2.js";
import {
  createHotContext
} from "/build/_shared/chunk-HTDTVXTX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GIAAN75Z.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/divider/divider.module.css
var divider_module_default = { "divider": "divider-module__divider__szpR-", "line": "divider-module__line__TdvjY", "notch": "divider-module__notch__ZQYLT" };

// app/components/divider/divider.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\divider\\\\divider.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\divider\\divider.jsx"
  );
}
var Divider = ({
  lineWidth,
  lineHeight,
  notchWidth,
  notchHeight,
  collapseDelay,
  collapsed,
  className,
  style,
  ...rest
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: classes(divider_module_default.divider, className), style: cssProps({
  lineWidth,
  lineHeight,
  notchWidth,
  notchHeight,
  collapseDelay: numToMs(collapseDelay)
}, style), ...rest, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: divider_module_default.line, "data-collapsed": collapsed }, void 0, false, {
    fileName: "app/components/divider/divider.jsx",
    lineNumber: 40,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: divider_module_default.notch, "data-collapsed": collapsed, style: cssProps({
    collapseDelay: numToMs(collapseDelay + 160)
  }) }, void 0, false, {
    fileName: "app/components/divider/divider.jsx",
    lineNumber: 41,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/divider/divider.jsx",
  lineNumber: 32,
  columnNumber: 7
}, this);
_c = Divider;
Divider.defaultProps = {
  lineWidth: "100%",
  lineHeight: "2px",
  notchWidth: "90px",
  notchHeight: "10px",
  collapsed: false,
  collapseDelay: 0
};
var _c;
$RefreshReg$(_c, "Divider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/divider/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\divider\\index.js"
  );
  import.meta.hot.lastModified = "1759533528962.1804";
}

export {
  Divider
};
//# sourceMappingURL=/build/_shared/chunk-XEV54K4O.js.map
