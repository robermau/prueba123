import {
  deviceModels
} from "/build/_shared/chunk-EFEOB3ZE.js";
import {
  Divider
} from "/build/_shared/chunk-XEV54K4O.js";
import {
  useScrollToHash
} from "/build/_shared/chunk-3D5LTXSN.js";
import {
  useWindowSize
} from "/build/_shared/chunk-5WBOF7VA.js";
import {
  DecoderText
} from "/build/_shared/chunk-F6WVJQGV.js";
import {
  spr_lesson_builder_dark_placeholder_default
} from "/build/_shared/chunk-4HK5IA4J.js";
import {
  VisuallyHidden
} from "/build/_shared/chunk-5U3ZZGYI.js";
import {
  slice_app_large_default,
  slice_app_placeholder_default
} from "/build/_shared/chunk-AMAHXKIC.js";
import {
  Footer,
  baseMeta
} from "/build/_shared/chunk-TZWDZNAA.js";
import {
  Section
} from "/build/_shared/chunk-E5UFAUNJ.js";
import {
  config_default
} from "/build/_shared/chunk-CTRHRPLG.js";
import {
  Image
} from "/build/_shared/chunk-KDRXC4FW.js";
import "/build/_shared/chunk-4UTHJ3DV.js";
import {
  useTheme
} from "/build/_shared/chunk-P4P2JTXI.js";
import "/build/_shared/chunk-OSM65NBD.js";
import {
  Button,
  Heading
} from "/build/_shared/chunk-FR56KFKI.js";
import {
  Loader,
  Text
} from "/build/_shared/chunk-L5E5TRZE.js";
import {
  Transition,
  tokens
} from "/build/_shared/chunk-4NG5WP3M.js";
import {
  cssProps,
  media
} from "/build/_shared/chunk-VSMHCMS2.js";
import {
  Link
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
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/assets/gamestack-list-large.png
var gamestack_list_large_default = "/build/_assets/gamestack-list-large-5PRVSR7T.png";

// app/assets/gamestack-list-placeholder.jpg
var gamestack_list_placeholder_default = "/build/_assets/gamestack-list-placeholder-N44KDLOZ.jpg";

// app/assets/gamestack-login-large.png
var gamestack_login_large_default = "/build/_assets/gamestack-login-large-OF6CYVN4.png";

// app/assets/gamestack-login-placeholder.jpg
var gamestack_login_placeholder_default = "/build/_assets/gamestack-login-placeholder-5V67XEFL.jpg";

// app/assets/spr-lesson-builder-dark-large.jpg
var spr_lesson_builder_dark_large_default = "/build/_assets/spr-lesson-builder-dark-large-MH5MJ5XC.jpg";

// app/assets/spr-lesson-builder-dark.png
var spr_lesson_builder_dark_default = "/build/_assets/spr-lesson-builder-dark-SVDQTFYJ.png";

// app/hooks/useInterval.js
var import_react = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\hooks\\useInterval.js"
  );
  import.meta.hot.lastModified = "1759533528992.341";
}
function useInterval(callback, delay, reset) {
  const savedCallback = (0, import_react.useRef)();
  (0, import_react.useEffect)(() => {
    savedCallback.current = callback;
  });
  (0, import_react.useEffect)(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, reset]);
}

// app/hooks/usePrevious.js
var import_react2 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\hooks\\usePrevious.js"
  );
  import.meta.hot.lastModified = "1759533528993.355";
}
function usePrevious(value) {
  const ref = (0, import_react2.useRef)();
  (0, import_react2.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

// app/routes/home/intro.jsx
var import_react5 = __toESM(require_react(), 1);

// app/hooks/useHydrated.js
var import_react3 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\hooks\\useHydrated.js"
  );
  import.meta.hot.lastModified = "1759533528992.341";
}
function subscribe() {
  return () => {
  };
}
function useHydrated() {
  return (0, import_react3.useSyncExternalStore)(
    subscribe,
    () => true,
    () => false
  );
}

// app/routes/home/intro.module.css
var intro_module_default = { "intro": "intro-module__intro__7k9vk", "text": "intro-module__text__-gIqp", "name": "intro-module__name__75ymq", "title": "intro-module__title__I9wY1", "row": "intro-module__row__UbQTY", "word": "intro-module__word__BttZj", "introTextReveal": "intro-module__introTextReveal__gigpy", "line": "intro-module__line__uWNLY", "introLine": "intro-module__introLine__4GJDW", "scrollIndicator": "intro-module__scrollIndicator__oDnUq", "introScrollIndicator": "intro-module__introScrollIndicator__-vEmE", "mobileScrollIndicator": "intro-module__mobileScrollIndicator__uHDjV", "introMobileScrollIndicator": "intro-module__introMobileScrollIndicator__zweSQ" };

// app/routes/home/intro.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\home\\\\intro.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\home\\intro.jsx"
  );
}
var DisplacementSphere = (0, import_react5.lazy)(_c = () => import("/build/_shared/displacement-sphere-BKW6EQR3.js").then((module) => ({
  default: module.DisplacementSphere
})));
_c2 = DisplacementSphere;
function Intro({
  id,
  sectionRef,
  scrollIndicatorHidden,
  ...rest
}) {
  _s();
  const {
    theme
  } = useTheme();
  const {
    disciplines
  } = config_default;
  const [disciplineIndex, setDisciplineIndex] = (0, import_react5.useState)(0);
  const prevTheme = usePrevious(theme);
  const introLabel = [disciplines.slice(0, -1).join(", "), disciplines.slice(-1)[0]].join(", and ");
  const currentDiscipline = disciplines.find((item, index) => index === disciplineIndex);
  const titleId = `${id}-title`;
  const scrollToHash = useScrollToHash();
  const isHydrated = useHydrated();
  useInterval(() => {
    const index = (disciplineIndex + 1) % disciplines.length;
    setDisciplineIndex(index);
  }, 5e3, theme);
  (0, import_react5.useEffect)(() => {
    if (prevTheme && prevTheme !== theme) {
      setDisciplineIndex(0);
    }
  }, [theme, prevTheme]);
  const handleScrollClick = (event) => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { className: intro_module_default.intro, as: "section", ref: sectionRef, id, "aria-labelledby": titleId, tabIndex: -1, ...rest, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Transition, { in: true, timeout: 3e3, children: ({
    visible,
    status
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    isHydrated && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DisplacementSphere, {}, void 0, false, {
      fileName: "app/routes/home/intro.jsx",
      lineNumber: 80,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/home/intro.jsx",
      lineNumber: 79,
      columnNumber: 28
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: intro_module_default.text, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: intro_module_default.name, "data-visible": visible, id: titleId, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DecoderText, { text: config_default.name, delay: 500 }, void 0, false, {
        fileName: "app/routes/home/intro.jsx",
        lineNumber: 84,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/home/intro.jsx",
        lineNumber: 83,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { level: 0, as: "h2", className: intro_module_default.title, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, { className: intro_module_default.label, children: `${config_default.role} + ${introLabel}` }, void 0, false, {
          fileName: "app/routes/home/intro.jsx",
          lineNumber: 87,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": true, className: intro_module_default.row, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: intro_module_default.word, "data-status": status, style: cssProps({
            delay: tokens.base.durationXS
          }), children: config_default.role }, void 0, false, {
            fileName: "app/routes/home/intro.jsx",
            lineNumber: 91,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: intro_module_default.line, "data-status": status }, void 0, false, {
            fileName: "app/routes/home/intro.jsx",
            lineNumber: 97,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/intro.jsx",
          lineNumber: 90,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: intro_module_default.row, children: disciplines.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Transition, { unmount: true, in: item === currentDiscipline, timeout: {
          enter: 3e3,
          exit: 2e3
        }, children: ({
          status: status2,
          nodeRef
        }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": true, ref: nodeRef, className: intro_module_default.word, "data-plus": true, "data-status": status2, style: cssProps({
          delay: tokens.base.durationL
        }), children: item }, void 0, false, {
          fileName: "app/routes/home/intro.jsx",
          lineNumber: 108,
          columnNumber: 23
        }, this) }, item, false, {
          fileName: "app/routes/home/intro.jsx",
          lineNumber: 100,
          columnNumber: 44
        }, this)) }, void 0, false, {
          fileName: "app/routes/home/intro.jsx",
          lineNumber: 99,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/intro.jsx",
        lineNumber: 86,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/intro.jsx",
      lineNumber: 82,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/#project-1", className: intro_module_default.scrollIndicator, "data-status": status, "data-hidden": scrollIndicatorHidden, onClick: handleScrollClick, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, { children: "Scroll to projects" }, void 0, false, {
      fileName: "app/routes/home/intro.jsx",
      lineNumber: 120,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/home/intro.jsx",
      lineNumber: 118,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/#project-1", className: intro_module_default.mobileScrollIndicator, "data-status": status, "data-hidden": scrollIndicatorHidden, onClick: handleScrollClick, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, { children: "Scroll to projects" }, void 0, false, {
        fileName: "app/routes/home/intro.jsx",
        lineNumber: 124,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { "aria-hidden": true, stroke: "currentColor", width: "43", height: "15", viewBox: "0 0 43 15", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M1 1l20.5 12L42 1", strokeWidth: "2", fill: "none" }, void 0, false, {
        fileName: "app/routes/home/intro.jsx",
        lineNumber: 127,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/home/intro.jsx",
        lineNumber: 125,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/intro.jsx",
      lineNumber: 122,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/intro.jsx",
    lineNumber: 78,
    columnNumber: 13
  }, this) }, theme, false, {
    fileName: "app/routes/home/intro.jsx",
    lineNumber: 74,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/intro.jsx",
    lineNumber: 72,
    columnNumber: 10
  }, this);
}
_s(Intro, "VzRXrgsfTZ+8baLnKZbr5IYhLuA=", false, function() {
  return [useTheme, usePrevious, useScrollToHash, useHydrated, useInterval];
});
_c3 = Intro;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "DisplacementSphere$lazy");
$RefreshReg$(_c2, "DisplacementSphere");
$RefreshReg$(_c3, "Intro");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/assets/profile-large.png
var profile_large_default = "/build/_assets/profile-large-FKMKIAVQ.png";

// app/assets/profile-placeholder.jpg
var profile_placeholder_default = "/build/_assets/profile-placeholder-KNKUW3WA.jpg";

// app/assets/profile.png
var profile_default = "/build/_assets/profile-FKMKIAVQ.png";

// app/routes/home/profile.jsx
var import_react6 = __toESM(require_react(), 1);

// app/routes/home/katakana.svg
var katakana_default = "/build/_assets/katakana-FXSAGDO3.svg";

// app/routes/home/profile.module.css
var profile_module_default = { "profile": "profile-module__profile__7hNxv", "content": "profile-module__content__9BsSW", "column": "profile-module__column__czfVX", "title": "profile-module__title__-QwOv", "description": "profile-module__description__gJPD-", "tag": "profile-module__tag__VVKtL", "tagText": "profile-module__tagText__XHBZ3", "image": "profile-module__image__lOqP1", "svg": "profile-module__svg__FWH9p", "button": "profile-module__button__3eYJe" };

// app/routes/home/profile.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\home\\\\profile.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\home\\profile.jsx"
  );
}
var ProfileText = ({
  visible,
  titleId
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react6.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Heading, { className: profile_module_default.title, "data-visible": visible, level: 3, id: titleId, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DecoderText, { text: "\xA1Hola a todos!", start: visible, delay: 500 }, void 0, false, {
    fileName: "app/routes/home/profile.jsx",
    lineNumber: 42,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/profile.jsx",
    lineNumber: 41,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { className: profile_module_default.description, "data-visible": visible, size: "l", as: "p", children: "Soy Mauri, vivo en C\xF3rdoba y estudio online programaci\xF3n web. Mis proyectos incluyen dise\xF1o de UX y animaciones de UI. Mi facilidad con el c\xF3digo me permite prototipar y validar experiencias r\xE1pidamente." }, void 0, false, {
    fileName: "app/routes/home/profile.jsx",
    lineNumber: 44,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { className: profile_module_default.description, "data-visible": visible, size: "l", as: "p", children: "En mi tiempo libre me gusta jugar al f\xFAtbol, videojuegos y pasar tiempo con amigos. Siempre estoy dispuesto a escuchar sobre nuevos proyectos, as\xED que no dudes en escribirme." }, void 0, false, {
    fileName: "app/routes/home/profile.jsx",
    lineNumber: 47,
    columnNumber: 7
  }, this)
] }, void 0, true, {
  fileName: "app/routes/home/profile.jsx",
  lineNumber: 40,
  columnNumber: 7
}, this);
_c4 = ProfileText;
var Profile = ({
  id,
  visible,
  sectionRef
}) => {
  _s2();
  const [focused, setFocused] = (0, import_react6.useState)(false);
  const titleId = `${id}-title`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Section, { className: profile_module_default.profile, onFocus: () => setFocused(true), onBlur: () => setFocused(false), as: "section", id, ref: sectionRef, "aria-labelledby": titleId, tabIndex: -1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Transition, { in: visible || focused, timeout: 0, children: ({
    visible: visible2,
    nodeRef
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: profile_module_default.content, ref: nodeRef, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: profile_module_default.column, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProfileText, { visible: visible2, titleId }, void 0, false, {
        fileName: "app/routes/home/profile.jsx",
        lineNumber: 68,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { secondary: true, className: profile_module_default.button, "data-visible": visible2, href: "/contact", icon: "send", children: "\xA1Enviame un mensaje!" }, void 0, false, {
        fileName: "app/routes/home/profile.jsx",
        lineNumber: 69,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profile.jsx",
      lineNumber: 67,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: profile_module_default.column, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: profile_module_default.tag, "aria-hidden": true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Divider, { notchWidth: "64px", notchHeight: "8px", collapsed: !visible2, collapseDelay: 1e3 }, void 0, false, {
          fileName: "app/routes/home/profile.jsx",
          lineNumber: 76,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: profile_module_default.tagText, "data-visible": visible2, children: "Acerca de m\xED" }, void 0, false, {
          fileName: "app/routes/home/profile.jsx",
          lineNumber: 78,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/profile.jsx",
        lineNumber: 75,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: profile_module_default.image, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Image, { reveal: true, delay: 100, placeholder: profile_placeholder_default, srcSet: `${profile_default} 480w, ${profile_large_default} 960w`, width: 960, height: 1280, sizes: `(max-width: ${media.mobile}px) 100vw, 480px`, alt: "Foto Mauricio Pucheta" }, void 0, false, {
          fileName: "app/routes/home/profile.jsx",
          lineNumber: 83,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { className: profile_module_default.svg, "data-visible": visible2, viewBox: "0 0 136 766", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("use", { href: `${katakana_default}#katakana-profile` }, void 0, false, {
          fileName: "app/routes/home/profile.jsx",
          lineNumber: 86,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/home/profile.jsx",
          lineNumber: 85,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/profile.jsx",
        lineNumber: 82,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/profile.jsx",
      lineNumber: 74,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/profile.jsx",
    lineNumber: 66,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/home/profile.jsx",
    lineNumber: 62,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/profile.jsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
};
_s2(Profile, "rwqZf9cBjrH2zIMw/NeLpi+hjZQ=");
_c22 = Profile;
var _c4;
var _c22;
$RefreshReg$(_c4, "ProfileText");
$RefreshReg$(_c22, "Profile");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/home/project-summary.jsx
var import_react7 = __toESM(require_react(), 1);

// app/routes/home/project-summary.module.css
var project_summary_module_default = { "summary": "project-summary-module__summary__Qfeul", "content": "project-summary-module__content__hnB2y", "details": "project-summary-module__details__43CF1", "preview": "project-summary-module__preview__byZvr", "model": "project-summary-module__model__l0LkK", "loader": "project-summary-module__loader__Ztk-H", "svg": "project-summary-module__svg__ImNuU", "index": "project-summary-module__index__8moKJ", "indexNumber": "project-summary-module__indexNumber__ytF-w", "title": "project-summary-module__title__vDiPG", "description": "project-summary-module__description__Uw5Ku", "button": "project-summary-module__button__Sj79x" };

// app/routes/home/project-summary.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\home\\\\project-summary.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\home\\project-summary.jsx"
  );
}
var Model = (0, import_react7.lazy)(_c5 = () => import("/build/_shared/model-GYJMY3IA.js").then((module) => ({
  default: module.Model
})));
_c23 = Model;
function ProjectSummary({
  id,
  visible: sectionVisible,
  sectionRef,
  index,
  title,
  description,
  model,
  buttonText,
  buttonLink,
  alternate,
  ...rest
}) {
  _s3();
  const [focused, setFocused] = (0, import_react7.useState)(false);
  const [modelLoaded, setModelLoaded] = (0, import_react7.useState)(false);
  const {
    theme
  } = useTheme();
  const {
    width
  } = useWindowSize();
  const isHydrated = useHydrated();
  const titleId = `${id}-title`;
  const isMobile = width <= media.tablet;
  const svgOpacity = theme === "light" ? 0.7 : 1;
  const indexText = index < 10 ? `0${index}` : index;
  const phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`;
  const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;
  function handleModelLoad() {
    setModelLoaded(true);
  }
  function renderKatakana(device, visible) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { type: "project", "data-visible": visible && modelLoaded, "data-light": theme === "light", style: cssProps({
      opacity: svgOpacity
    }), className: project_summary_module_default.svg, "data-device": device, viewBox: "0 0 751 136", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("use", { href: `${katakana_default}#katakana-project` }, void 0, false, {
      fileName: "app/routes/home/project-summary.jsx",
      lineNumber: 77,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/home/project-summary.jsx",
      lineNumber: 73,
      columnNumber: 12
    }, this);
  }
  function renderDetails(visible) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: project_summary_module_default.details, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { "aria-hidden": true, className: project_summary_module_default.index, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Divider, { notchWidth: "64px", notchHeight: "8px", collapsed: !visible, collapseDelay: 1e3 }, void 0, false, {
          fileName: "app/routes/home/project-summary.jsx",
          lineNumber: 83,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: project_summary_module_default.indexNumber, "data-visible": visible, children: indexText }, void 0, false, {
          fileName: "app/routes/home/project-summary.jsx",
          lineNumber: 85,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/project-summary.jsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Heading, { level: 3, as: "h2", className: project_summary_module_default.title, "data-visible": visible, id: titleId, children: title }, void 0, false, {
        fileName: "app/routes/home/project-summary.jsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { className: project_summary_module_default.description, "data-visible": visible, as: "p", children: description }, void 0, false, {
        fileName: "app/routes/home/project-summary.jsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: project_summary_module_default.button, "data-visible": visible, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { iconHoverShift: true, href: buttonLink, iconEnd: "arrow-right", children: buttonText }, void 0, false, {
        fileName: "app/routes/home/project-summary.jsx",
        lineNumber: 97,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/home/project-summary.jsx",
        lineNumber: 96,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/project-summary.jsx",
      lineNumber: 81,
      columnNumber: 12
    }, this);
  }
  function renderPreview(visible) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: project_summary_module_default.preview, children: [
      model.type === "laptop" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
        renderKatakana("laptop", visible),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: project_summary_module_default.model, "data-device": "laptop", children: [
          !modelLoaded && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Loader, { center: true, className: project_summary_module_default.loader, "data-visible": visible }, void 0, false, {
            fileName: "app/routes/home/project-summary.jsx",
            lineNumber: 108,
            columnNumber: 32
          }, this),
          isHydrated && visible && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react7.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Model, { alt: model.alt, cameraPosition: {
            x: 0,
            y: 0,
            z: 8
          }, showDelay: 700, onLoad: handleModelLoad, show: visible, models: [{
            ...deviceModels.laptop,
            texture: {
              ...model.textures[0],
              sizes: laptopSizes
            }
          }] }, void 0, false, {
            fileName: "app/routes/home/project-summary.jsx",
            lineNumber: 110,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/home/project-summary.jsx",
            lineNumber: 109,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/project-summary.jsx",
          lineNumber: 107,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/project-summary.jsx",
        lineNumber: 105,
        columnNumber: 37
      }, this),
      model.type === "phone" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
        renderKatakana("phone", visible),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: project_summary_module_default.model, "data-device": "phone", children: [
          !modelLoaded && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Loader, { center: true, className: project_summary_module_default.loader, "data-visible": visible }, void 0, false, {
            fileName: "app/routes/home/project-summary.jsx",
            lineNumber: 128,
            columnNumber: 32
          }, this),
          isHydrated && visible && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react7.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Model, { alt: model.alt, cameraPosition: {
            x: 0,
            y: 0,
            z: 11.5
          }, showDelay: 300, onLoad: handleModelLoad, show: visible, models: [{
            ...deviceModels.phone,
            position: {
              x: -0.6,
              y: 1.1,
              z: 0
            },
            texture: {
              ...model.textures[0],
              sizes: phoneSizes
            }
          }, {
            ...deviceModels.phone,
            position: {
              x: 0.6,
              y: -0.5,
              z: 0.3
            },
            texture: {
              ...model.textures[1],
              sizes: phoneSizes
            }
          }] }, void 0, false, {
            fileName: "app/routes/home/project-summary.jsx",
            lineNumber: 130,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/home/project-summary.jsx",
            lineNumber: 129,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/home/project-summary.jsx",
          lineNumber: 127,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home/project-summary.jsx",
        lineNumber: 125,
        columnNumber: 36
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home/project-summary.jsx",
      lineNumber: 104,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Section, { className: project_summary_module_default.summary, "data-alternate": alternate, "data-first": index === 1, onFocus: () => setFocused(true), onBlur: () => setFocused(false), as: "section", "aria-labelledby": titleId, ref: sectionRef, id, tabIndex: -1, ...rest, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: project_summary_module_default.content, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Transition, { in: sectionVisible || focused, children: ({
    visible
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    !alternate && !isMobile && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
      renderDetails(visible),
      renderPreview(visible)
    ] }, void 0, true, {
      fileName: "app/routes/home/project-summary.jsx",
      lineNumber: 170,
      columnNumber: 43
    }, this),
    (alternate || isMobile) && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
      renderPreview(visible),
      renderDetails(visible)
    ] }, void 0, true, {
      fileName: "app/routes/home/project-summary.jsx",
      lineNumber: 174,
      columnNumber: 43
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/project-summary.jsx",
    lineNumber: 169,
    columnNumber: 15
  }, this) }, void 0, false, {
    fileName: "app/routes/home/project-summary.jsx",
    lineNumber: 166,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/home/project-summary.jsx",
    lineNumber: 165,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home/project-summary.jsx",
    lineNumber: 163,
    columnNumber: 10
  }, this);
}
_s3(ProjectSummary, "T+Np+6EbpCpEFAeyXNm62qDaVQI=", false, function() {
  return [useTheme, useWindowSize, useHydrated];
});
_c32 = ProjectSummary;
var _c5;
var _c23;
var _c32;
$RefreshReg$(_c5, "Model$lazy");
$RefreshReg$(_c23, "Model");
$RefreshReg$(_c32, "ProjectSummary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/home/home.jsx
var import_react8 = __toESM(require_react(), 1);

// app/routes/home/home.module.css
var home_module_default = { "home": "home-module__home__bDEQd" };

// app/routes/home/home.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\home\\\\home.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\home\\home.jsx"
  );
}
var links = () => {
  return [{
    rel: "prefetch",
    href: "/draco/draco_wasm_wrapper.js",
    as: "script",
    type: "text/javascript",
    importance: "low"
  }, {
    rel: "prefetch",
    href: "/draco/draco_decoder.wasm",
    as: "fetch",
    type: "application/wasm",
    importance: "low"
  }];
};
var meta = () => {
  return baseMeta({
    title: "Fullstack Developer",
    description: `Portafolio de dise\xF1o de ${config_default.name}: un Desarrollador Fullstack Junior que trabaja en aplicaciones web con un enfoque en experiencia, accesibilidad y escalabilidad.`
  });
};
var Home = () => {
  _s4();
  const [visibleSections, setVisibleSections] = (0, import_react8.useState)([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = (0, import_react8.useState)(false);
  const intro = (0, import_react8.useRef)();
  const projectOne = (0, import_react8.useRef)();
  const projectTwo = (0, import_react8.useRef)();
  const projectThree = (0, import_react8.useRef)();
  const details = (0, import_react8.useRef)();
  (0, import_react8.useEffect)(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];
    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target;
          observer.unobserve(section);
          if (visibleSections.includes(section))
            return;
          setVisibleSections((prevSections) => [...prevSections, section]);
        }
      });
    }, {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.1
    });
    const indicatorObserver = new IntersectionObserver(([entry]) => {
      setScrollIndicatorHidden(!entry.isIntersecting);
    }, {
      rootMargin: "-100% 0px 0px 0px"
    });
    sections.forEach((section) => {
      sectionObserver.observe(section.current);
    });
    indicatorObserver.observe(intro.current);
    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: home_module_default.home, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Intro, { id: "intro", sectionRef: intro, scrollIndicatorHidden }, void 0, false, {
      fileName: "app/routes/home/home.jsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ProjectSummary, { id: "project-1", sectionRef: projectOne, visible: visibleSections.includes(projectOne.current), index: 1, title: "El futuro de las compras, construido hoy", description: "Creando una plataforma para potenciar a los emprendedores digitales", buttonText: "Ver startup", buttonLink: "/projects/click-shop", model: {
      type: "laptop",
      alt: "Smart Sparrow lesson builder",
      textures: [{
        srcSet: `${spr_lesson_builder_dark_default} 1280w, ${spr_lesson_builder_dark_large_default} 2560w`,
        placeholder: spr_lesson_builder_dark_placeholder_default
      }]
    } }, void 0, false, {
      fileName: "app/routes/home/home.jsx",
      lineNumber: 105,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ProjectSummary, { id: "project-2", alternate: true, sectionRef: projectTwo, visible: visibleSections.includes(projectTwo.current), index: 2, title: "Dise\xF1o de landing pages profesionales", description: "Dise\xF1o y desarrollo de landing pages de alto rendimiento con Astro, React.js y Next.js", buttonText: "Ver ejemplo", buttonLink: "https://akaguapy.netlify.app/", model: {
      type: "phone",
      alt: "Landing Akaguapy",
      textures: [{
        srcSet: `${gamestack_login_large_default} 375w, ${gamestack_login_large_default} 750w`,
        placeholder: gamestack_login_placeholder_default
      }, {
        srcSet: `${gamestack_list_large_default} 375w, ${gamestack_list_large_default} 750w`,
        placeholder: gamestack_list_placeholder_default
      }]
    } }, void 0, false, {
      fileName: "app/routes/home/home.jsx",
      lineNumber: 114,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ProjectSummary, { id: "project-3", sectionRef: projectThree, visible: visibleSections.includes(projectThree.current), index: 3, title: "Software a medida para negocios", description: "Desarrollo de sistemas personalizados que se adaptan a las necesidades \xFAnicas de cada empresa", buttonText: "Ver m\xE1s", buttonLink: "/projects/soft-med", model: {
      type: "laptop",
      alt: "Softwares a medida",
      textures: [{
        srcSet: `${slice_app_large_default} 800w, ${slice_app_large_default} 1920w`,
        placeholder: slice_app_placeholder_default
      }]
    } }, void 0, false, {
      fileName: "app/routes/home/home.jsx",
      lineNumber: 126,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Profile, { sectionRef: details, visible: visibleSections.includes(details.current), id: "details" }, void 0, false, {
      fileName: "app/routes/home/home.jsx",
      lineNumber: 135,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/routes/home/home.jsx",
      lineNumber: 137,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/home.jsx",
    lineNumber: 102,
    columnNumber: 10
  }, this);
};
_s4(Home, "jkGBVzf7T9SRMHqi00LXIGsvc8M=");
_c6 = Home;
var _c6;
$RefreshReg$(_c6, "Home");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/home/route.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\home\\route.js"
  );
  import.meta.hot.lastModified = "1759533529013.6433";
}
export {
  Home as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/home-KEKG6CGC.js.map
