import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow
} from "/build/_shared/chunk-ELMSMHD5.js";
import {
  Footer,
  Link,
  baseMeta
} from "/build/_shared/chunk-TZWDZNAA.js";
import "/build/_shared/chunk-E5UFAUNJ.js";
import "/build/_shared/chunk-CTRHRPLG.js";
import "/build/_shared/chunk-KDRXC4FW.js";
import "/build/_shared/chunk-4UTHJ3DV.js";
import "/build/_shared/chunk-P4P2JTXI.js";
import "/build/_shared/chunk-OSM65NBD.js";
import "/build/_shared/chunk-FR56KFKI.js";
import "/build/_shared/chunk-L5E5TRZE.js";
import "/build/_shared/chunk-4NG5WP3M.js";
import {
  classes
} from "/build/_shared/chunk-VSMHCMS2.js";
import "/build/_shared/chunk-6J4CTUD2.js";
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

// app/assets/uses-background-placeholder.jpg
var uses_background_placeholder_default = "/build/_assets/uses-background-placeholder-FAJ4JRZS.jpg";

// app/assets/uses-background.mp4
var uses_background_default = "/build/_assets/uses-background-63TXPIYB.mp4";

// app/components/list/list.module.css
var list_module_default = { "list": "list-module__list__Uql6b", "item": "list-module__item__ELv2e" };

// app/components/list/list.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\list\\\\list.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\list\\list.jsx"
  );
}
var List = ({
  ordered,
  children,
  className,
  ...rest
}) => {
  const Element = ordered ? "ol" : "ul";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Element, { className: classes(list_module_default.list, className), ...rest, children }, void 0, false, {
    fileName: "app/components/list/list.jsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_c = List;
var ListItem = ({
  children,
  ...rest
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: list_module_default.item, ...rest, children }, void 0, false, {
    fileName: "app/components/list/list.jsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
};
_c2 = ListItem;
var _c;
var _c2;
$RefreshReg$(_c, "List");
$RefreshReg$(_c2, "ListItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/list/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\list\\index.js"
  );
  import.meta.hot.lastModified = "1759533528972.5588";
}

// app/components/table/table.module.css
var table_module_default = { "table": "table-module__table__z4bD8", "row": "table-module__row__-1gYo", "head": "table-module__head__gCEbh", "headCell": "table-module__headCell__f6oyt", "cell": "table-module__cell__qK5Aw" };

// app/components/table/table.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\table\\\\table.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\table\\table.jsx"
  );
}
var Table = ({
  children
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("table", { className: table_module_default.table, children }, void 0, false, {
  fileName: "app/components/table/table.jsx",
  lineNumber: 23,
  columnNumber: 7
}, this);
_c3 = Table;
var TableRow = ({
  children
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tr", { className: table_module_default.row, children }, void 0, false, {
  fileName: "app/components/table/table.jsx",
  lineNumber: 27,
  columnNumber: 7
}, this);
_c22 = TableRow;
var TableHead = ({
  children
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("thead", { className: table_module_default.head, children }, void 0, false, {
  fileName: "app/components/table/table.jsx",
  lineNumber: 31,
  columnNumber: 7
}, this);
_c32 = TableHead;
var TableBody = ({
  children
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tbody", { className: table_module_default.body, children }, void 0, false, {
  fileName: "app/components/table/table.jsx",
  lineNumber: 35,
  columnNumber: 7
}, this);
_c4 = TableBody;
var TableHeadCell = ({
  children
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { className: table_module_default.headCell, children }, void 0, false, {
  fileName: "app/components/table/table.jsx",
  lineNumber: 39,
  columnNumber: 7
}, this);
_c5 = TableHeadCell;
var TableCell = ({
  children
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: table_module_default.cell, children }, void 0, false, {
  fileName: "app/components/table/table.jsx",
  lineNumber: 43,
  columnNumber: 7
}, this);
_c6 = TableCell;
var _c3;
var _c22;
var _c32;
var _c4;
var _c5;
var _c6;
$RefreshReg$(_c3, "Table");
$RefreshReg$(_c22, "TableRow");
$RefreshReg$(_c32, "TableHead");
$RefreshReg$(_c4, "TableBody");
$RefreshReg$(_c5, "TableHeadCell");
$RefreshReg$(_c6, "TableCell");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/table/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\table\\index.js"
  );
  import.meta.hot.lastModified = "1759533528983.802";
}

// app/routes/uses/uses.module.css
var uses_module_default = { "uses": "uses-module__uses__Npis0", "section": "uses-module__section__pn-0u" };

// app/routes/uses/uses.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\uses\\\\uses.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\uses\\uses.jsx"
  );
}
var meta = () => {
  return baseMeta({
    title: "Uses",
    description: "A list of hardware and software I use to do my thing"
  });
};
var Uses = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProjectContainer, { className: uses_module_default.uses, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProjectBackground, { src: uses_background_default, placeholder: uses_background_placeholder_default, opacity: 0.7 }, void 0, false, {
        fileName: "app/routes/uses/uses.jsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProjectHeader, { title: "Uses", description: "A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and code things. And yeah, that is a Johnny Mnemonic GIF in the background." }, void 0, false, {
        fileName: "app/routes/uses/uses.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProjectSection, { padding: "none", className: uses_module_default.section, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProjectSectionContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProjectTextRow, { width: "m", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProjectSectionHeading, { children: "Design" }, void 0, false, {
          fileName: "app/routes/uses/uses.jsx",
          lineNumber: 45,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProjectSectionText, { as: "div", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(List, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListItem, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { href: "https://www.figma.com", children: "Figma" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 49,
              columnNumber: 21
            }, this),
            " is my primary tool for UI design these days. Made the switch from Sketch in 2020 and haven\u2019t looked back. I\u2019ve also created",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { href: "https://www.figma.com/@hamish", children: "a few plugins" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 52,
              columnNumber: 21
            }, this),
            " that you can install."
          ] }, void 0, true, {
            fileName: "app/routes/uses/uses.jsx",
            lineNumber: 48,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListItem, { children: [
            "Any motion graphics I create are created in Adobe After Effects. So far I haven\u2019t found a non-Adobe product that\u2019s as good. If anyone has suggestions please ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { href: "/contact", children: "message me" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 58,
              columnNumber: 40
            }, this),
            "."
          ] }, void 0, true, {
            fileName: "app/routes/uses/uses.jsx",
            lineNumber: 55,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListItem, { children: [
            "For any 3D models and video editing I use",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { href: "https://www.blender.org/", children: "Blender" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 62,
              columnNumber: 21
            }, this),
            ". Since 2.8 it\u2019s become way simpler to use and in a lot of ways better than expensive paid tools like 3DS Max or Maya."
          ] }, void 0, true, {
            fileName: "app/routes/uses/uses.jsx",
            lineNumber: 60,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/uses/uses.jsx",
          lineNumber: 47,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/uses/uses.jsx",
          lineNumber: 46,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/uses/uses.jsx",
        lineNumber: 44,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/uses/uses.jsx",
        lineNumber: 43,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/uses/uses.jsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProjectSection, { padding: "none", className: uses_module_default.section, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProjectSectionContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProjectTextRow, { width: "m", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProjectSectionHeading, { children: "Development" }, void 0, false, {
          fileName: "app/routes/uses/uses.jsx",
          lineNumber: 74,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProjectSectionText, { as: "div", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(List, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListItem, { children: [
            "I use ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { href: "https://vscodium.com/", children: "VSCodium" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 78,
              columnNumber: 27
            }, this),
            " as my text editor, with the Tokyo Night theme and Operator Mono as my typeface of choice."
          ] }, void 0, true, {
            fileName: "app/routes/uses/uses.jsx",
            lineNumber: 77,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListItem, { children: "Firefox is my main browser for both development and general use." }, void 0, false, {
            fileName: "app/routes/uses/uses.jsx",
            lineNumber: 82,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListItem, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { href: "https://reactjs.org/", children: "React" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 86,
              columnNumber: 21
            }, this),
            " is my front end Javascript library of choice. The component-centric mental model is the first thing that truly made sense to me as a designer."
          ] }, void 0, true, {
            fileName: "app/routes/uses/uses.jsx",
            lineNumber: 85,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListItem, { children: [
            "For 3D effects and image shaders I use",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { href: "https://threejs.org/", children: "three.js" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 92,
              columnNumber: 21
            }, this),
            ". It has a bit of a learning curve but you can do some really powerful stuff with it."
          ] }, void 0, true, {
            fileName: "app/routes/uses/uses.jsx",
            lineNumber: 90,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListItem, { children: [
            "For CSS I\u2019ve used a myriad pre-processors and css-in-js solutions like styled-components, but these days I\u2019m using vanilla CSS with",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { href: "https://postcss.org/", children: "PostCSS" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 98,
              columnNumber: 21
            }, this),
            " to get upcoming CSS features today."
          ] }, void 0, true, {
            fileName: "app/routes/uses/uses.jsx",
            lineNumber: 95,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListItem, { children: [
            "For Javascript animations I use",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { href: "https://www.framer.com/motion/", children: "Framer Motion" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 103,
              columnNumber: 21
            }, this),
            ", it\u2019s a great way to add spring animations to React and three.js."
          ] }, void 0, true, {
            fileName: "app/routes/uses/uses.jsx",
            lineNumber: 101,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListItem, { children: [
            "For building and testing UI components in isolation I use",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { href: "https://storybook.js.org/", children: "Storybook" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 108,
              columnNumber: 21
            }, this),
            ". Check out the",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { href: "https://storybook.hamishw.com", children: "storybook for this website" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 109,
              columnNumber: 21
            }, this),
            "."
          ] }, void 0, true, {
            fileName: "app/routes/uses/uses.jsx",
            lineNumber: 106,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/uses/uses.jsx",
          lineNumber: 76,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/uses/uses.jsx",
          lineNumber: 75,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/uses/uses.jsx",
        lineNumber: 73,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/uses/uses.jsx",
        lineNumber: 72,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/uses/uses.jsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProjectSection, { padding: "none", className: uses_module_default.section, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProjectSectionContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProjectTextRow, { stretch: true, width: "m", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProjectSectionHeading, { children: "System" }, void 0, false, {
          fileName: "app/routes/uses/uses.jsx",
          lineNumber: 122,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Table, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableBody, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableRow, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableHeadCell, { children: "Desktop" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 126,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, { children: "Custom built" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 127,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/uses/uses.jsx",
            lineNumber: 125,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableRow, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableHeadCell, { children: "Operating system" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 130,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, { children: "Arch Linux (by the way)" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 131,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/uses/uses.jsx",
            lineNumber: 129,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableRow, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableHeadCell, { children: "Browser" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 134,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, { children: "Zen Browser" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 135,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/uses/uses.jsx",
            lineNumber: 133,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableRow, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableHeadCell, { children: "Monitor" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 138,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, { children: "1440p IPS 144hz LG 27GL850" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 139,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/uses/uses.jsx",
            lineNumber: 137,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableRow, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableHeadCell, { children: "Keyboard" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 142,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, { children: "Tofu65" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 143,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/uses/uses.jsx",
            lineNumber: 141,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableRow, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableHeadCell, { children: "Mouse" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 146,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, { children: "Logitech G403" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 147,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/uses/uses.jsx",
            lineNumber: 145,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableRow, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableHeadCell, { children: "Laptop" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 150,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, { children: "Macbook Pro 14\u2033" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 151,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/uses/uses.jsx",
            lineNumber: 149,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableRow, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableHeadCell, { children: "Headphones" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 154,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, { children: "Audio Technica ATH-M50x/Apple Airpods" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 155,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/uses/uses.jsx",
            lineNumber: 153,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableRow, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableHeadCell, { children: "Microphone" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 158,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, { children: "Blue Yeti" }, void 0, false, {
              fileName: "app/routes/uses/uses.jsx",
              lineNumber: 159,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/uses/uses.jsx",
            lineNumber: 157,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/uses/uses.jsx",
          lineNumber: 124,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/uses/uses.jsx",
          lineNumber: 123,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/uses/uses.jsx",
        lineNumber: 121,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/uses/uses.jsx",
        lineNumber: 120,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/uses/uses.jsx",
        lineNumber: 119,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/uses/uses.jsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/routes/uses/uses.jsx",
      lineNumber: 167,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/uses/uses.jsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
};
_c7 = Uses;
var _c7;
$RefreshReg$(_c7, "Uses");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/uses/route.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\uses\\route.js"
  );
  import.meta.hot.lastModified = "1759533529019.3264";
}
export {
  Uses as default,
  meta
};
//# sourceMappingURL=/build/routes/uses-5XCIH5ES.js.map
