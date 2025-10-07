import {
  useScrollToHash
} from "/build/_shared/chunk-3D5LTXSN.js";
import {
  useWindowSize
} from "/build/_shared/chunk-5WBOF7VA.js";
import {
  Error
} from "/build/_shared/chunk-KAEONAHT.js";
import "/build/_shared/chunk-F6WVJQGV.js";
import {
  VisuallyHidden
} from "/build/_shared/chunk-5U3ZZGYI.js";
import {
  config_default
} from "/build/_shared/chunk-CTRHRPLG.js";
import "/build/_shared/chunk-KDRXC4FW.js";
import "/build/_shared/chunk-4UTHJ3DV.js";
import {
  ThemeProvider,
  gotham_book_default,
  gotham_medium_default,
  themeStyles,
  useTheme
} from "/build/_shared/chunk-P4P2JTXI.js";
import "/build/_shared/chunk-OSM65NBD.js";
import {
  Button,
  Icon
} from "/build/_shared/chunk-FR56KFKI.js";
import "/build/_shared/chunk-L5E5TRZE.js";
import {
  Transition,
  tokens
} from "/build/_shared/chunk-4NG5WP3M.js";
import {
  cssProps,
  media,
  msToNum,
  numToMs
} from "/build/_shared/chunk-VSMHCMS2.js";
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetcher,
  useLoaderData,
  useLocation,
  useNavigation,
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
import {
  require_react
} from "/build/_shared/chunk-3DYT5NE2.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/root.jsx
var import_node = __toESM(require_node(), 1);
var import_react9 = __toESM(require_react(), 1);

// app/assets/logoMP.png
var logoMP_default = "/build/_assets/logoMP-ZXT2UQLL.png";

// app/layouts/navbar/navbar.jsx
var import_react5 = __toESM(require_react(), 1);

// app/layouts/navbar/nav-data.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\layouts\\navbar\\nav-data.js"
  );
  import.meta.hot.lastModified = "1759777583963.0642";
}
var navLinks = [
  {
    label: "Proyectos",
    pathname: "/#project-1"
  },
  {
    label: "Detalles",
    pathname: "/#details"
  },
  {
    label: "Contacto",
    pathname: "/contact"
  }
];
var socialLinks = [
  {
    label: "Instagram",
    url: `${config_default.instagram}`,
    icon: "instagram"
  },
  {
    label: "LinkedIn",
    url: `${config_default.linkedin}`,
    icon: "linkedin"
  },
  {
    label: "GitHub",
    url: `https://github.com/${config_default.github}`,
    icon: "github"
  }
];

// app/layouts/navbar/nav-toggle.module.css
var nav_toggle_module_default = { "toggle": "nav-toggle-module__toggle__gctfR", "inner": "nav-toggle-module__inner__O1kfu", "icon": "nav-toggle-module__icon__lwp7P" };

// app/layouts/navbar/nav-toggle.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\layouts\\\\navbar\\\\nav-toggle.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\layouts\\navbar\\nav-toggle.jsx"
  );
}
var NavToggle = ({
  menuOpen,
  ...rest
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { iconOnly: true, className: nav_toggle_module_default.toggle, "aria-label": "Menu", "aria-expanded": menuOpen, ...rest, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: nav_toggle_module_default.inner, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: nav_toggle_module_default.icon, "data-menu": true, "data-open": menuOpen, icon: "menu" }, void 0, false, {
      fileName: "app/layouts/navbar/nav-toggle.jsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: nav_toggle_module_default.icon, "data-close": true, "data-open": menuOpen, icon: "close" }, void 0, false, {
      fileName: "app/layouts/navbar/nav-toggle.jsx",
      lineNumber: 31,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/layouts/navbar/nav-toggle.jsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/layouts/navbar/nav-toggle.jsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_c = NavToggle;
var _c;
$RefreshReg$(_c, "NavToggle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/layouts/navbar/theme-toggle.jsx
var import_react = __toESM(require_react(), 1);

// app/layouts/navbar/theme-toggle.module.css
var theme_toggle_module_default = { "toggle": "theme-toggle-module__toggle__ls80m", "circle": "theme-toggle-module__circle__jvMd-", "mask": "theme-toggle-module__mask__CPuNg", "path": "theme-toggle-module__path__rq6eK" };

// app/layouts/navbar/theme-toggle.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\layouts\\\\navbar\\\\theme-toggle.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\layouts\\navbar\\theme-toggle.jsx"
  );
}
var ThemeToggle = ({
  isMobile,
  ...rest
}) => {
  _s();
  const id = (0, import_react.useId)();
  const {
    toggleTheme
  } = useTheme();
  const maskId = `${id}theme-toggle-mask`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { iconOnly: true, className: theme_toggle_module_default.toggle, "data-mobile": isMobile, "aria-label": "Toggle theme", onClick: () => toggleTheme(), ...rest, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { "aria-hidden": true, className: theme_toggle_module_default.svg, width: "38", height: "38", viewBox: "0 0 38 38", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("mask", { id: maskId, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("circle", { className: theme_toggle_module_default.circle, "data-mask": true, cx: "19", cy: "19", r: "13" }, void 0, false, {
        fileName: "app/layouts/navbar/theme-toggle.jsx",
        lineNumber: 40,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("circle", { className: theme_toggle_module_default.mask, cx: "25", cy: "14", r: "9" }, void 0, false, {
        fileName: "app/layouts/navbar/theme-toggle.jsx",
        lineNumber: 41,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/layouts/navbar/theme-toggle.jsx",
      lineNumber: 39,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/layouts/navbar/theme-toggle.jsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { className: theme_toggle_module_default.path, d: "M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5" }, void 0, false, {
      fileName: "app/layouts/navbar/theme-toggle.jsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("circle", { className: theme_toggle_module_default.circle, mask: `url(#${maskId})`, cx: "19", cy: "19", r: "12" }, void 0, false, {
      fileName: "app/layouts/navbar/theme-toggle.jsx",
      lineNumber: 46,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/layouts/navbar/theme-toggle.jsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/layouts/navbar/theme-toggle.jsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
};
_s(ThemeToggle, "XQibJXztYMiosVv8FVGlRP+Ji9A=", false, function() {
  return [import_react.useId, useTheme];
});
_c2 = ThemeToggle;
var _c2;
$RefreshReg$(_c2, "ThemeToggle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/react-icons/lib/iconBase.mjs
var import_react3 = __toESM(require_react(), 1);

// node_modules/react-icons/lib/iconContext.mjs
var import_react2 = __toESM(require_react(), 1);
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react2.default.createContext && /* @__PURE__ */ import_react2.default.createContext(DefaultContext);

// node_modules/react-icons/lib/iconBase.mjs
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /* @__PURE__ */ import_react3.default.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return (props) => /* @__PURE__ */ import_react3.default.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = (conf) => {
    var {
      attr,
      size,
      title
    } = props, svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return /* @__PURE__ */ import_react3.default.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /* @__PURE__ */ import_react3.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? /* @__PURE__ */ import_react3.default.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}

// node_modules/react-icons/fa/index.mjs
function FaGithub(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 496 512" }, "child": [{ "tag": "path", "attr": { "d": "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" }, "child": [] }] })(props);
}
function FaInstagram(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 448 512" }, "child": [{ "tag": "path", "attr": { "d": "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" }, "child": [] }] })(props);
}
function FaLinkedin(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 448 512" }, "child": [{ "tag": "path", "attr": { "d": "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" }, "child": [] }] })(props);
}

// app/layouts/navbar/navbar.module.css
var navbar_module_default = { "navbar": "navbar-module__navbar__46DuX", "logo": "navbar-module__logo__Z2qRL", "logoImage": "navbar-module__logoImage__IL26W", "nav": "navbar-module__nav__DIzD5", "navList": "navbar-module__navList__a1gft", "navLink": "navbar-module__navLink__4J-M7", "navIcons": "navbar-module__navIcons__a2SJE", "navIconLink": "navbar-module__navIconLink__VohwH", "navIcon": "navbar-module__navIcon__svnGC", "mobileNav": "navbar-module__mobileNav__L4ba-", "mobileNavLink": "navbar-module__mobileNavLink__n-kxj" };

// app/layouts/navbar/navbar.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\layouts\\\\navbar\\\\navbar.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\layouts\\navbar\\navbar.jsx"
  );
}
var socialLinks2 = [{
  label: "Instagram",
  url: config_default.instagram,
  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(FaInstagram, { size: 24 }, void 0, false, {
    fileName: "app/layouts/navbar/navbar.jsx",
    lineNumber: 38,
    columnNumber: 9
  }, this)
}, {
  label: "LinkedIn",
  url: config_default.linkedin,
  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(FaLinkedin, { size: 24 }, void 0, false, {
    fileName: "app/layouts/navbar/navbar.jsx",
    lineNumber: 42,
    columnNumber: 9
  }, this)
}, {
  label: "GitHub",
  url: `https://github.com/${config_default.github}`,
  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(FaGithub, { size: 24 }, void 0, false, {
    fileName: "app/layouts/navbar/navbar.jsx",
    lineNumber: 46,
    columnNumber: 9
  }, this)
}];
var Navbar = () => {
  _s2();
  const [current, setCurrent] = (0, import_react5.useState)();
  const [menuOpen, setMenuOpen] = (0, import_react5.useState)(false);
  const [target, setTarget] = (0, import_react5.useState)();
  const {
    theme
  } = useTheme();
  const location = useLocation();
  const windowSize = useWindowSize();
  const headerRef = (0, import_react5.useRef)();
  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 696;
  const scrollToHash = useScrollToHash();
  (0, import_react5.useEffect)(() => {
    setCurrent(`${location.pathname}${location.hash}`);
  }, [location]);
  (0, import_react5.useEffect)(() => {
    if (!target || location.pathname !== "/")
      return;
    setCurrent(`${location.pathname}${target}`);
    scrollToHash(target, () => setTarget(null));
  }, [location.pathname, scrollToHash, target]);
  (0, import_react5.useEffect)(() => {
    const navItems = document.querySelectorAll("[data-navbar-item]");
    const inverseTheme = theme === "dark" ? "light" : "dark";
    const {
      innerHeight
    } = window;
    let inverseMeasurements = [];
    let navItemMeasurements = [];
    const isOverlap = (rect1, rect2, scrollY) => {
      return !(rect1.bottom - scrollY < rect2.top || rect1.top - scrollY > rect2.bottom);
    };
    const resetNavTheme = () => {
      for (const measurement of navItemMeasurements) {
        measurement.element.dataset.theme = "";
      }
    };
    const handleInversion = () => {
      const invertedElements = document.querySelectorAll(`[data-theme='${inverseTheme}'][data-invert]`);
      if (!invertedElements)
        return;
      inverseMeasurements = Array.from(invertedElements).map((item) => ({
        element: item,
        top: item.offsetTop,
        bottom: item.offsetTop + item.offsetHeight
      }));
      const {
        scrollY
      } = window;
      resetNavTheme();
      for (const inverseMeasurement of inverseMeasurements) {
        if (inverseMeasurement.top - scrollY > innerHeight || inverseMeasurement.bottom - scrollY < 0) {
          continue;
        }
        for (const measurement of navItemMeasurements) {
          if (isOverlap(inverseMeasurement, measurement, scrollY)) {
            measurement.element.dataset.theme = inverseTheme;
          } else {
            measurement.element.dataset.theme = "";
          }
        }
      }
    };
    if (theme === "light") {
      navItemMeasurements = Array.from(navItems).map((item) => {
        const rect = item.getBoundingClientRect();
        return {
          element: item,
          top: rect.top,
          bottom: rect.bottom
        };
      });
      document.addEventListener("scroll", handleInversion);
      handleInversion();
    }
    return () => {
      document.removeEventListener("scroll", handleInversion);
      resetNavTheme();
    };
  }, [theme, windowSize, location.key]);
  const getCurrent = (url = "") => {
    const nonTrailing = current?.endsWith("/") ? current?.slice(0, -1) : current;
    if (url === nonTrailing) {
      return "page";
    }
    return "";
  };
  const handleNavItemClick = (event) => {
    const hash = event.currentTarget.href.split("#")[1];
    setTarget(null);
    if (hash && location.pathname === "/") {
      setTarget(`#${hash}`);
      event.preventDefault();
    }
  };
  const handleMobileNavClick = (event) => {
    handleNavItemClick(event);
    if (menuOpen)
      setMenuOpen(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: navbar_module_default.navbar, ref: headerRef, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: location.pathname === "/" ? "/#intro" : "/", className: navbar_module_default.logo, onClick: handleMobileNavClick, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: logoMP_default, width: 48, height: 48, alt: "Logo Mauricio Pucheta" }, void 0, false, {
      fileName: "app/layouts/navbar/navbar.jsx",
      lineNumber: 162,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/layouts/navbar/navbar.jsx",
      lineNumber: 159,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavToggle, { onClick: () => setMenuOpen(!menuOpen), menuOpen }, void 0, false, {
      fileName: "app/layouts/navbar/navbar.jsx",
      lineNumber: 166,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: navbar_module_default.nav, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: navbar_module_default.navList, children: navLinks.map(({
        label,
        pathname
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { unstable_viewTransition: true, prefetch: "intent", to: pathname, "data-navbar-item": true, className: navbar_module_default.navLink, "aria-current": getCurrent(pathname), onClick: handleNavItemClick, children: label }, label, false, {
        fileName: "app/layouts/navbar/navbar.jsx",
        lineNumber: 172,
        columnNumber: 15
      }, this)) }, void 0, false, {
        fileName: "app/layouts/navbar/navbar.jsx",
        lineNumber: 168,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavbarIcons, { desktop: true }, void 0, false, {
        fileName: "app/layouts/navbar/navbar.jsx",
        lineNumber: 177,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/layouts/navbar/navbar.jsx",
      lineNumber: 167,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Transition, { unmount: true, in: menuOpen, timeout: msToNum(tokens.base.durationL), children: ({
      visible,
      nodeRef
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: navbar_module_default.mobileNav, "data-visible": visible, ref: nodeRef, children: [
      navLinks.map(({
        label,
        pathname
      }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { unstable_viewTransition: true, prefetch: "intent", to: pathname, className: navbar_module_default.mobileNavLink, "data-visible": visible, "aria-current": getCurrent(pathname), onClick: handleMobileNavClick, style: cssProps({
        transitionDelay: numToMs(Number(msToNum(tokens.base.durationS)) + index * 50)
      }), children: label }, label, false, {
        fileName: "app/layouts/navbar/navbar.jsx",
        lineNumber: 187,
        columnNumber: 22
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavbarIcons, {}, void 0, false, {
        fileName: "app/layouts/navbar/navbar.jsx",
        lineNumber: 193,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ThemeToggle, { isMobile: true }, void 0, false, {
        fileName: "app/layouts/navbar/navbar.jsx",
        lineNumber: 194,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/layouts/navbar/navbar.jsx",
      lineNumber: 183,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/layouts/navbar/navbar.jsx",
      lineNumber: 179,
      columnNumber: 7
    }, this),
    !isMobile && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ThemeToggle, { "data-navbar-item": true }, void 0, false, {
      fileName: "app/layouts/navbar/navbar.jsx",
      lineNumber: 197,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/layouts/navbar/navbar.jsx",
    lineNumber: 157,
    columnNumber: 10
  }, this);
};
_s2(Navbar, "Gr3YcUEJ03HFL/4Nw90UAIqImxo=", false, function() {
  return [useTheme, useLocation, useWindowSize, useScrollToHash];
});
_c3 = Navbar;
var NavbarIcons = ({
  desktop
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: navbar_module_default.navIcons, children: socialLinks2.map(({
  label,
  url,
  icon
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { "data-navbar-item": desktop || void 0, className: navbar_module_default.navIconLink, "aria-label": label, href: url, target: "_blank", rel: "noopener noreferrer", children: icon }, label, false, {
  fileName: "app/layouts/navbar/navbar.jsx",
  lineNumber: 211,
  columnNumber: 9
}, this)) }, void 0, false, {
  fileName: "app/layouts/navbar/navbar.jsx",
  lineNumber: 206,
  columnNumber: 7
}, this);
_c22 = NavbarIcons;
var _c3;
var _c22;
$RefreshReg$(_c3, "Navbar");
$RefreshReg$(_c22, "NavbarIcons");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/layouts/navbar/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\layouts\\navbar\\index.js"
  );
  import.meta.hot.lastModified = "1759533528995.6213";
}

// app/components/progress/progress.jsx
var import_react7 = __toESM(require_react(), 1);

// app/components/progress/progress.module.css
var progress_module_default = { "progress": "progress-module__progress__06fop" };

// app/components/progress/progress.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\progress\\\\progress.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\progress\\progress.jsx"
  );
}
function Progress() {
  _s3();
  const [animationComplete, setAnimationComplete] = (0, import_react7.useState)(false);
  const [visible, setVisible] = (0, import_react7.useState)(false);
  const {
    state
  } = useNavigation();
  const progressRef = (0, import_react7.useRef)();
  const timeout = (0, import_react7.useRef)(0);
  (0, import_react7.useEffect)(() => {
    clearTimeout(timeout.current);
    if (state !== "idle") {
      timeout.current = setTimeout(() => {
        setVisible(true);
      }, 500);
    } else if (animationComplete) {
      timeout.current = setTimeout(() => {
        setVisible(false);
      }, 300);
    }
  }, [state, animationComplete]);
  (0, import_react7.useEffect)(() => {
    if (!progressRef.current)
      return;
    const controller = new AbortController();
    if (state !== "idle") {
      return setAnimationComplete(false);
    }
    Promise.all(progressRef.current.getAnimations({
      subtree: true
    }).map((animation) => animation.finished)).then(() => {
      if (controller.signal.aborted)
        return;
      setAnimationComplete(true);
    });
    return () => {
      controller.abort();
    };
  }, [state]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: progress_module_default.progress, "data-status": state, "data-visible": visible, "data-complete": animationComplete, ref: progressRef }, void 0, false, {
    fileName: "app/components/progress/progress.jsx",
    lineNumber: 61,
    columnNumber: 10
  }, this);
}
_s3(Progress, "3grDkiukmdfv1b0iAmm/uyC4QWY=", false, function() {
  return [useNavigation];
});
_c4 = Progress;
var _c4;
$RefreshReg$(_c4, "Progress");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/progress/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\progress\\index.js"
  );
  import.meta.hot.lastModified = "1759533528979.4612";
}

// app/root.module.css
var root_module_default = { "container": "root-module__container__UjqpW", "skip": "root-module__skip__UAFb7" };

// app/root.jsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
var _s22 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.jsx"
  );
}
var links = () => [{
  rel: "preload",
  href: gotham_medium_default,
  as: "font",
  type: "font/woff2",
  crossOrigin: ""
}, {
  rel: "preload",
  href: gotham_book_default,
  as: "font",
  type: "font/woff2",
  crossOrigin: ""
}, {
  rel: "manifest",
  href: "/manifest.json"
}, {
  rel: "icon",
  href: "/app/assets/logoMP.png"
}, {
  rel: "icon",
  href: "/app/assets/logoMP.png",
  type: "image/svg+xml"
}, {
  rel: "shortcut_icon",
  href: "/shortcut.png",
  type: "image/png",
  sizes: "64x64"
}, {
  rel: "apple-touch-icon",
  href: "/icon-256.png",
  sizes: "256x256"
}, {
  rel: "author",
  href: "/humans.txt",
  type: "text/plain"
}];
function App() {
  _s4();
  let {
    canonicalUrl,
    theme
  } = useLoaderData();
  const fetcher = useFetcher();
  const {
    state
  } = useNavigation();
  if (fetcher.formData?.has("theme")) {
    theme = fetcher.formData.get("theme");
  }
  function toggleTheme(newTheme) {
    fetcher.submit({
      theme: newTheme ? newTheme : theme === "dark" ? "light" : "dark"
    }, {
      action: "/api/set-theme",
      method: "post"
    });
  }
  (0, import_react9.useEffect)(() => {
    console.info(`${config_default.ascii}
`, `Taking a peek huh? Check out the source code: ${config_default.repo}

`);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 135,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { name: "theme-color", content: theme === "dark" ? "#111" : "#F2F2F2" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 137,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { name: "color-scheme", content: theme === "light" ? "light dark" : "dark light" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 138,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("style", { dangerouslySetInnerHTML: {
        __html: themeStyles
      } }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 140,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 143,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 144,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("link", { rel: "canonical", href: canonicalUrl }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 145,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 133,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { "data-theme": theme, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ThemeProvider, { theme, toggleTheme, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Progress, {}, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 149,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(VisuallyHidden, { showOnFocus: true, as: "a", className: root_module_default.skip, href: "#main-content", children: "Skip to main content" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 150,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Navbar, {}, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 153,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { id: "main-content", className: root_module_default.container, tabIndex: -1, "data-loading": state === "loading", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 156,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 154,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 148,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 159,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 160,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 147,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 132,
    columnNumber: 10
  }, this);
}
_s4(App, "AzIQ0eBwfGdjD5IhTejuhxfKe5Q=", false, function() {
  return [useLoaderData, useFetcher, useNavigation];
});
_c5 = App;
function ErrorBoundary() {
  _s22();
  const error = useRouteError();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 173,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 174,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { name: "theme-color", content: "#111" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 175,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { name: "color-scheme", content: "dark light" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 176,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("style", { dangerouslySetInnerHTML: {
        __html: themeStyles
      } }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 177,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 180,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 181,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 172,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { "data-theme": "dark", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Error, { error }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 184,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 185,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 186,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 183,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 171,
    columnNumber: 10
  }, this);
}
_s22(ErrorBoundary, "oAgjgbJzsRXlB89+MoVumxMQqKM=", false, function() {
  return [useRouteError];
});
_c23 = ErrorBoundary;
var _c5;
var _c23;
$RefreshReg$(_c5, "App");
$RefreshReg$(_c23, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  App as default,
  links
};
//# sourceMappingURL=/build/root-TMGJHZCY.js.map
