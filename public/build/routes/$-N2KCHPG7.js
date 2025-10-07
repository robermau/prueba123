import {
  Error
} from "/build/_shared/chunk-KAEONAHT.js";
import "/build/_shared/chunk-F6WVJQGV.js";
import "/build/_shared/chunk-5U3ZZGYI.js";
import "/build/_shared/chunk-KDRXC4FW.js";
import "/build/_shared/chunk-4UTHJ3DV.js";
import "/build/_shared/chunk-P4P2JTXI.js";
import "/build/_shared/chunk-OSM65NBD.js";
import "/build/_shared/chunk-FR56KFKI.js";
import "/build/_shared/chunk-L5E5TRZE.js";
import "/build/_shared/chunk-4NG5WP3M.js";
import "/build/_shared/chunk-VSMHCMS2.js";
import {
  useRouteError
} from "/build/_shared/chunk-6J4CTUD2.js";
import {
  createHotContext
} from "/build/_shared/chunk-HTDTVXTX.js";
import "/build/_shared/chunk-RPIG6INL.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GIAAN75Z.js";
import "/build/_shared/chunk-3DYT5NE2.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/$.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\$.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\$.jsx"
  );
  import.meta.hot.lastModified = "1759533529003.3206";
}
var meta = () => {
  return [{
    title: "404 | Redacted"
  }];
};
function ErrorBoundary() {
  _s();
  const error = useRouteError();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Error, { error }, void 0, false, {
    fileName: "app/routes/$.jsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_s(ErrorBoundary, "oAgjgbJzsRXlB89+MoVumxMQqKM=", false, function() {
  return [useRouteError];
});
_c = ErrorBoundary;
var _c;
$RefreshReg$(_c, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  meta
};
//# sourceMappingURL=/build/routes/$-N2KCHPG7.js.map
