import {
  Section
} from "/build/_shared/chunk-E5UFAUNJ.js";
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
  Transition,
  tokens
} from "/build/_shared/chunk-4NG5WP3M.js";
import {
  classes,
  cssProps,
  msToNum,
  numToMs,
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

// app/hooks/useParallax.js
var import_react = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\hooks\\useParallax.js"
  );
  import.meta.hot.lastModified = "1759533528992.341";
}
function useParallax(multiplier, onChange) {
  const reduceMotion = useReducedMotion();
  (0, import_react.useEffect)(() => {
    let ticking = false;
    let animationFrame = null;
    const animate = () => {
      const { innerHeight } = window;
      const offsetValue = Math.max(0, window.scrollY) * multiplier;
      const clampedOffsetValue = Math.max(
        -innerHeight,
        Math.min(innerHeight, offsetValue)
      );
      onChange(clampedOffsetValue);
      ticking = false;
    };
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        animationFrame = requestAnimationFrame(animate);
      }
    };
    if (!reduceMotion) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, [multiplier, onChange, reduceMotion]);
}

// app/layouts/project/project.jsx
var import_react2 = __toESM(require_react(), 1);

// app/layouts/project/project.module.css
var project_module_default = { "project": "project-module__project__w6Bx9", "section": "project-module__section__JYVPr", "sectionInner": "project-module__sectionInner__tMr2z", "sectionBackground": "project-module__sectionBackground__dCBAB", "backgroundImage": "project-module__backgroundImage__oD5ZT", "backgroundImageElement": "project-module__backgroundImageElement__DEKZB", "backgroundScrim": "project-module__backgroundScrim__-VMCG", "header": "project-module__header__CiZDP", "headerContent": "project-module__headerContent__wfPG-", "details": "project-module__details__oT9Np", "title": "project-module__title__rBDT0", "projectFadeSlide": "project-module__projectFadeSlide__6FeYJ", "description": "project-module__description__MRRKO", "linkButton": "project-module__linkButton__cSZhZ", "meta": "project-module__meta__-CO3B", "metaItem": "project-module__metaItem__sWJAP", "image": "project-module__image__lwExx", "sectionContent": "project-module__sectionContent__or9OZ", "sectionHeading": "project-module__sectionHeading__GErAq", "sectionText": "project-module__sectionText__bL-ex", "textRow": "project-module__textRow__sfK04", "sectionColumns": "project-module__sectionColumns__mq-73" };

// app/layouts/project/project.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\layouts\\\\project\\\\project.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\layouts\\project\\project.jsx"
  );
}
var initDelay = 300;
function ProjectHeader({
  title,
  description,
  linkLabel = "Ver sitio web",
  url,
  roles,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { className: classes(project_module_default.header, className), as: "section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: project_module_default.headerContent, style: cssProps({
    initDelay: numToMs(initDelay)
  }), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: project_module_default.details, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { className: project_module_default.title, level: 2, as: "h1", children: title }, void 0, false, {
        fileName: "app/layouts/project/project.jsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: project_module_default.description, size: "xl", as: "p", children: description }, void 0, false, {
        fileName: "app/layouts/project/project.jsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      !!url && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { secondary: true, iconHoverShift: true, className: project_module_default.linkButton, icon: "chevron-right", href: url, children: linkLabel }, void 0, false, {
        fileName: "app/layouts/project/project.jsx",
        lineNumber: 53,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/layouts/project/project.jsx",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    !!roles?.length && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: project_module_default.meta, children: roles?.map((role, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: project_module_default.metaItem, style: cssProps({
      delay: numToMs(initDelay + 300 + index * 140)
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { secondary: true, children: role }, void 0, false, {
      fileName: "app/layouts/project/project.jsx",
      lineNumber: 63,
      columnNumber: 17
    }, this) }, role, false, {
      fileName: "app/layouts/project/project.jsx",
      lineNumber: 59,
      columnNumber: 42
    }, this)) }, void 0, false, {
      fileName: "app/layouts/project/project.jsx",
      lineNumber: 58,
      columnNumber: 29
    }, this)
  ] }, void 0, true, {
    fileName: "app/layouts/project/project.jsx",
    lineNumber: 42,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/layouts/project/project.jsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_c = ProjectHeader;
var ProjectContainer = ({
  className,
  ...rest
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: classes(project_module_default.project, className), ...rest }, void 0, false, {
  fileName: "app/layouts/project/project.jsx",
  lineNumber: 73,
  columnNumber: 7
}, this);
_c2 = ProjectContainer;
var ProjectSection = (0, import_react2.forwardRef)(_c3 = ({
  className,
  light,
  padding = "both",
  fullHeight,
  backgroundOverlayOpacity = 0.9,
  backgroundElement,
  children,
  ...rest
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: classes(project_module_default.section, className), "data-light": light, "data-full-height": fullHeight, ref, ...rest, children: [
  !!backgroundElement && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: project_module_default.sectionBackground, style: cssProps({
    opacity: backgroundOverlayOpacity
  }), children: backgroundElement }, void 0, false, {
    fileName: "app/layouts/project/project.jsx",
    lineNumber: 86,
    columnNumber: 31
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { className: project_module_default.sectionInner, "data-padding": padding, children }, void 0, false, {
    fileName: "app/layouts/project/project.jsx",
    lineNumber: 92,
    columnNumber: 7
  }, this)
] }, void 0, true, {
  fileName: "app/layouts/project/project.jsx",
  lineNumber: 84,
  columnNumber: 12
}, this));
_c4 = ProjectSection;
var ProjectBackground = ({
  opacity = 0.7,
  className,
  ...rest
}) => {
  _s();
  const imageRef = (0, import_react2.useRef)();
  useParallax(0.6, (value) => {
    if (!imageRef.current)
      return;
    imageRef.current.style.setProperty("--offset", `${value}px`);
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Transition, { in: true, timeout: msToNum(tokens.base.durationM), children: ({
    visible,
    nodeRef
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: classes(project_module_default.backgroundImage, className), "data-visible": visible, ref: nodeRef, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: project_module_default.backgroundImageElement, ref: imageRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { cover: true, alt: "", role: "presentation", ...rest }, void 0, false, {
      fileName: "app/layouts/project/project.jsx",
      lineNumber: 115,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/layouts/project/project.jsx",
      lineNumber: 114,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: project_module_default.backgroundScrim, style: cssProps({
      opacity
    }) }, void 0, false, {
      fileName: "app/layouts/project/project.jsx",
      lineNumber: 117,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/layouts/project/project.jsx",
    lineNumber: 112,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/layouts/project/project.jsx",
    lineNumber: 108,
    columnNumber: 10
  }, this);
};
_s(ProjectBackground, "615p5zDhVGdpQMHUc+G0PGYZvgY=", false, function() {
  return [useParallax];
});
_c5 = ProjectBackground;
var ProjectImage = ({
  className,
  alt,
  ...rest
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: classes(project_module_default.image, className), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { reveal: true, alt, delay: 300, ...rest }, void 0, false, {
  fileName: "app/layouts/project/project.jsx",
  lineNumber: 132,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/layouts/project/project.jsx",
  lineNumber: 131,
  columnNumber: 7
}, this);
_c6 = ProjectImage;
var ProjectSectionContent = ({
  className,
  width = "l",
  ...rest
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: classes(project_module_default.sectionContent, className), "data-width": width, ...rest }, void 0, false, {
  fileName: "app/layouts/project/project.jsx",
  lineNumber: 139,
  columnNumber: 7
}, this);
_c7 = ProjectSectionContent;
var ProjectSectionHeading = ({
  className,
  level = 3,
  as = "h2",
  ...rest
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { className: classes(project_module_default.sectionHeading, className), as, level, align: "auto", ...rest }, void 0, false, {
  fileName: "app/layouts/project/project.jsx",
  lineNumber: 146,
  columnNumber: 7
}, this);
_c8 = ProjectSectionHeading;
var ProjectSectionText = ({
  className,
  ...rest
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: classes(project_module_default.sectionText, className), size: "l", as: "p", ...rest }, void 0, false, {
  fileName: "app/layouts/project/project.jsx",
  lineNumber: 151,
  columnNumber: 7
}, this);
_c9 = ProjectSectionText;
var ProjectTextRow = ({
  center,
  stretch,
  justify = "center",
  width = "m",
  noMargin,
  className,
  centerMobile,
  ...rest
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: classes(project_module_default.textRow, className), "data-center": center, "data-stretch": stretch, "data-center-mobile": centerMobile, "data-no-margin": noMargin, "data-width": width, "data-justify": justify, ...rest }, void 0, false, {
  fileName: "app/layouts/project/project.jsx",
  lineNumber: 162,
  columnNumber: 7
}, this);
_c0 = ProjectTextRow;
var ProjectSectionColumns = ({
  className,
  centered,
  ...rest
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProjectSectionContent, { className: classes(project_module_default.sectionColumns, className), "data-centered": centered, ...rest }, void 0, false, {
  fileName: "app/layouts/project/project.jsx",
  lineNumber: 168,
  columnNumber: 7
}, this);
_c1 = ProjectSectionColumns;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
var _c0;
var _c1;
$RefreshReg$(_c, "ProjectHeader");
$RefreshReg$(_c2, "ProjectContainer");
$RefreshReg$(_c3, "ProjectSection$forwardRef");
$RefreshReg$(_c4, "ProjectSection");
$RefreshReg$(_c5, "ProjectBackground");
$RefreshReg$(_c6, "ProjectImage");
$RefreshReg$(_c7, "ProjectSectionContent");
$RefreshReg$(_c8, "ProjectSectionHeading");
$RefreshReg$(_c9, "ProjectSectionText");
$RefreshReg$(_c0, "ProjectTextRow");
$RefreshReg$(_c1, "ProjectSectionColumns");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/layouts/project/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\layouts\\project\\index.js"
  );
  import.meta.hot.lastModified = "1759533529001.0464";
}

export {
  ProjectHeader,
  ProjectContainer,
  ProjectSection,
  ProjectBackground,
  ProjectImage,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
  ProjectSectionColumns
};
//# sourceMappingURL=/build/_shared/chunk-ELMSMHD5.js.map
