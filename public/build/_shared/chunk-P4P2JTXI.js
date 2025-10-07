import {
  themes,
  tokens
} from "/build/_shared/chunk-4NG5WP3M.js";
import {
  classes,
  media
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

// app/assets/fonts/gotham-bold-italic.woff2
var gotham_bold_italic_default = "/build/_assets/gotham-bold-italic-OLGVLVDA.woff2";

// app/assets/fonts/gotham-bold.woff2
var gotham_bold_default = "/build/_assets/gotham-bold-YCA2Z2KD.woff2";

// app/assets/fonts/gotham-book-italic.woff2
var gotham_book_italic_default = "/build/_assets/gotham-book-italic-GDMS7P5O.woff2";

// app/assets/fonts/gotham-book.woff2
var gotham_book_default = "/build/_assets/gotham-book-6DKF6M3J.woff2";

// app/assets/fonts/gotham-medium-italic.woff2
var gotham_medium_italic_default = "/build/_assets/gotham-medium-italic-7A76FGFF.woff2";

// app/assets/fonts/gotham-medium.woff2
var gotham_medium_default = "/build/_assets/gotham-medium-ZMMBQFZI.woff2";

// app/assets/fonts/ipa-gothic.woff2
var ipa_gothic_default = "/build/_assets/ipa-gothic-UH26V325.woff2";

// app/components/theme-provider/theme-provider.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\theme-provider\\\\theme-provider.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\theme-provider\\theme-provider.jsx"
  );
  import.meta.hot.lastModified = "1759533528987.0044";
}
var ThemeContext = (0, import_react.createContext)({});
var ThemeProvider = ({
  theme = "dark",
  children,
  className,
  as: Component = "div",
  toggleTheme,
  ...rest
}) => {
  _s();
  const parentTheme = useTheme();
  const isRootProvider = !parentTheme.theme;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeContext.Provider, { value: {
    theme,
    toggleTheme: toggleTheme || parentTheme.toggleTheme
  }, children: [
    isRootProvider && children,
    !isRootProvider && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Component, { className: classes(className), "data-theme": theme, ...rest, children }, void 0, false, {
      fileName: "app/components/theme-provider/theme-provider.jsx",
      lineNumber: 51,
      columnNumber: 27
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/theme-provider/theme-provider.jsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
};
_s(ThemeProvider, "wx/O0zHKMflp//dbND8uyV8Pn1o=", false, function() {
  return [useTheme];
});
_c = ThemeProvider;
function useTheme() {
  _s2();
  const currentTheme = (0, import_react.useContext)(ThemeContext);
  return currentTheme;
}
_s2(useTheme, "k3RAQkdJKyotGBSeeZK8LkvRfUc=");
function squish(styles) {
  return styles.replace(/\s\s+/g, " ");
}
function createThemeProperties(theme) {
  return squish(Object.keys(theme).map((key) => `--${key}: ${theme[key]};`).join("\n\n"));
}
function createMediaTokenProperties() {
  return squish(Object.keys(media).map((key) => {
    return `
        @media (max-width: ${media[key]}px) {
          :root {
            ${createThemeProperties(tokens[key])}
          }
        }
      `;
  }).join("\n"));
}
var layerStyles = squish(`
  @layer theme, base, components, layout;
`);
var tokenStyles = squish(`
  :root {
    ${createThemeProperties(tokens.base)}
  }

  ${createMediaTokenProperties()}

  [data-theme='dark'] {
    ${createThemeProperties(themes.dark)}
  }

  [data-theme='light'] {
    ${createThemeProperties(themes.light)}
  }
`);
var fontStyles = squish(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${gotham_book_default}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${gotham_book_italic_default}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${gotham_medium_default}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${gotham_medium_italic_default}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${gotham_bold_default}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${gotham_bold_italic_default}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${ipa_gothic_default}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`);
var themeStyles = squish(`
  ${layerStyles}

  @layer theme {
    ${tokenStyles}
    ${fontStyles}
  }
`);
var _c;
$RefreshReg$(_c, "ThemeProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/theme-provider/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\theme-provider\\index.js"
  );
  import.meta.hot.lastModified = "1759533528987.0044";
}

export {
  gotham_book_default,
  gotham_medium_default,
  ThemeProvider,
  useTheme,
  themeStyles
};
//# sourceMappingURL=/build/_shared/chunk-P4P2JTXI.js.map
