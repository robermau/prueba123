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

// app/components/section/section.jsx
var import_react = __toESM(require_react(), 1);

// app/components/section/section.module.css
var section_module_default = { "section": "section-module__section__0LpwB" };

// app/components/section/section.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\section\\\\section.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\section\\section.jsx"
  );
}
var Section = (0, import_react.forwardRef)(_c = ({
  as: Component = "div",
  children,
  className,
  ...rest
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Component, { className: classes(section_module_default.section, className), ref, ...rest, children }, void 0, false, {
  fileName: "app/components/section/section.jsx",
  lineNumber: 28,
  columnNumber: 12
}, this));
_c2 = Section;
var _c;
var _c2;
$RefreshReg$(_c, "Section$forwardRef");
$RefreshReg$(_c2, "Section");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/section/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\section\\index.js"
  );
  import.meta.hot.lastModified = "1759533528980.5876";
}

export {
  Section
};
//# sourceMappingURL=/build/_shared/chunk-E5UFAUNJ.js.map
