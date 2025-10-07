import {
  DecoderText
} from "/build/_shared/chunk-F6WVJQGV.js";
import {
  Image
} from "/build/_shared/chunk-KDRXC4FW.js";
import {
  Button,
  Heading
} from "/build/_shared/chunk-FR56KFKI.js";
import {
  Text
} from "/build/_shared/chunk-L5E5TRZE.js";
import {
  Transition
} from "/build/_shared/chunk-4NG5WP3M.js";
import {
  createHotContext
} from "/build/_shared/chunk-HTDTVXTX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GIAAN75Z.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/assets/notfound.jpg
var notfound_default = "/build/_assets/notfound-J26UBL4B.jpg";

// app/assets/notfound.mp4
var notfound_default2 = "/build/_assets/notfound-O4DMM47V.mp4";

// app/assets/flatline.png
var flatline_default = "/build/_assets/flatline-JWOYUSTO.png";

// app/assets/flatline.mp4
var flatline_default2 = "/build/_assets/flatline-UYYGGDOS.mp4";

// app/layouts/error/error.module.css
var error_module_default = { "page": "error-module__page__SuB3S", "videoContainer": "error-module__videoContainer__ogiG-", "video": "error-module__video__tJ3c4", "credit": "error-module__credit__0Go7a", "details": "error-module__details__JIUmS", "text": "error-module__text__CCYV5", "title": "error-module__title__rojWg", "titleFlatline": "error-module__titleFlatline__XbGLm", "subheading": "error-module__subheading__13Erg", "description": "error-module__description__Kr-QX", "button": "error-module__button__g2Qxx" };

// app/layouts/error/error-flatline.svg
var error_flatline_default = "/build/_assets/error-flatline-XVZJ4GZR.svg";

// app/layouts/error/error.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\layouts\\\\error\\\\error.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\layouts\\error\\error.jsx"
  );
}
function Error({
  error
}) {
  const flatlined = !error.status;
  const getMessage = () => {
    switch (error.status) {
      case 404:
        return {
          summary: "Error: Redacci\xF3n",
          message: "No se pudo encontrar esta p\xE1gina. No existe o fue eliminada. O quiz\xE1s no existes y esta p\xE1gina web no pudo encontrarte."
        };
      case 405:
        return {
          summary: "Error: M\xE9todo denegada",
          message: error.data
        };
      default:
        return {
          summary: "Error: Anomalia",
          message: error.statusText || error.data || error.toString()
        };
    }
  };
  const {
    summary,
    message
  } = getMessage();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: error_module_default.page, children: [
    flatlined && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { dangerouslySetInnerHTML: {
      __html: `
            [data-theme='dark'] {
              --primary: oklch(69.27% 0.242 25.41);
              --accent: oklch(69.27% 0.242 25.41);
            }
            [data-theme='light'] {
              --primary: oklch(56.29% 0.182 26.5);
              --accent: oklch(56.29% 0.182 26.5);
            }
          `
    } }, void 0, false, {
      fileName: "app/layouts/error/error.jsx",
      lineNumber: 60,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Transition, { in: true, children: ({
      visible
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: error_module_default.details, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: error_module_default.text, children: [
        !flatlined && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { className: error_module_default.title, "data-visible": visible, level: 0, weight: "bold", children: error.status }, void 0, false, {
          fileName: "app/layouts/error/error.jsx",
          lineNumber: 78,
          columnNumber: 32
        }, this),
        flatlined && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { className: error_module_default.titleFlatline, "data-visible": visible, level: 2, as: "h1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { width: "60", height: "80", viewBox: "0 0 60 80", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("use", { href: `${error_flatline_default}#skull` }, void 0, false, {
            fileName: "app/layouts/error/error.jsx",
            lineNumber: 85,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/layouts/error/error.jsx",
            lineNumber: 84,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DecoderText, { text: "Flatlined", start: visible, delay: 300 }, void 0, false, {
            fileName: "app/layouts/error/error.jsx",
            lineNumber: 87,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/layouts/error/error.jsx",
          lineNumber: 82,
          columnNumber: 31
        }, this),
        !flatlined && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { "aria-hidden": true, className: error_module_default.subheading, "data-visible": visible, as: "h2", level: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DecoderText, { text: summary, start: visible, delay: 300 }, void 0, false, {
          fileName: "app/layouts/error/error.jsx",
          lineNumber: 91,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/layouts/error/error.jsx",
          lineNumber: 89,
          columnNumber: 32
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: error_module_default.description, "data-visible": visible, as: "p", children: message }, void 0, false, {
          fileName: "app/layouts/error/error.jsx",
          lineNumber: 93,
          columnNumber: 17
        }, this),
        flatlined ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { secondary: true, iconHoverShift: true, className: error_module_default.button, "data-visible": visible, href: "https://www.youtube.com/watch?v=EuQzHGcsjlA", icon: "chevron-right", children: "Soporte emocional" }, void 0, false, {
          fileName: "app/layouts/error/error.jsx",
          lineNumber: 96,
          columnNumber: 30
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { secondary: true, iconHoverShift: true, className: error_module_default.button, "data-visible": visible, href: "/", icon: "chevron-right", children: "Volver a la p\xE1gina principal" }, void 0, false, {
          fileName: "app/layouts/error/error.jsx",
          lineNumber: 99,
          columnNumber: 31
        }, this)
      ] }, void 0, true, {
        fileName: "app/layouts/error/error.jsx",
        lineNumber: 77,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/layouts/error/error.jsx",
        lineNumber: 76,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: error_module_default.videoContainer, "data-visible": visible, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { reveal: true, cover: true, noPauseButton: true, delay: 600, className: error_module_default.video, src: flatlined ? flatline_default2 : notfound_default2, placeholder: flatlined ? flatline_default : notfound_default }, void 0, false, {
          fileName: "app/layouts/error/error.jsx",
          lineNumber: 107,
          columnNumber: 15
        }, this),
        flatlined ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: error_module_default.credit, "data-visible": visible, href: "https://www.imdb.com/title/tt0318871/", target: "_blank", rel: "noopener noreferrer", children: "Animaci\xF3n de Berserk (1997)" }, void 0, false, {
          fileName: "app/layouts/error/error.jsx",
          lineNumber: 109,
          columnNumber: 28
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: error_module_default.credit, "data-visible": visible, href: "https://www.imdb.com/title/tt0113568/", target: "_blank", rel: "noopener noreferrer", children: "Animaci\xF3n de Ghost in the Shell (1995)" }, void 0, false, {
          fileName: "app/layouts/error/error.jsx",
          lineNumber: 112,
          columnNumber: 24
        }, this)
      ] }, void 0, true, {
        fileName: "app/layouts/error/error.jsx",
        lineNumber: 106,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/layouts/error/error.jsx",
      lineNumber: 75,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/layouts/error/error.jsx",
      lineNumber: 72,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/layouts/error/error.jsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_c = Error;
var _c;
$RefreshReg$(_c, "Error");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/layouts/error/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\layouts\\error\\index.js"
  );
  import.meta.hot.lastModified = "1759533528995.6213";
}

export {
  Error
};
//# sourceMappingURL=/build/_shared/chunk-KAEONAHT.js.map
