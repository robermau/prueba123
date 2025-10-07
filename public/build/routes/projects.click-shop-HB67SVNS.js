import {
  spr_lesson_builder_dark_placeholder_default
} from "/build/_shared/chunk-4HK5IA4J.js";
import {
  VisuallyHidden
} from "/build/_shared/chunk-5U3ZZGYI.js";
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
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
import {
  Image
} from "/build/_shared/chunk-KDRXC4FW.js";
import "/build/_shared/chunk-4UTHJ3DV.js";
import {
  ThemeProvider,
  useTheme
} from "/build/_shared/chunk-P4P2JTXI.js";
import "/build/_shared/chunk-OSM65NBD.js";
import "/build/_shared/chunk-FR56KFKI.js";
import "/build/_shared/chunk-L5E5TRZE.js";
import "/build/_shared/chunk-4NG5WP3M.js";
import {
  cssProps,
  media
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
import {
  require_react
} from "/build/_shared/chunk-3DYT5NE2.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/assets/spr-background-large.jpg
var spr_background_large_default = "/build/_assets/spr-background-large-IFPZ2AZ6.jpg";

// app/assets/spr-background-placeholder.jpg
var spr_background_placeholder_default = "/build/_assets/spr-background-placeholder-62USQQ5L.jpg";

// app/assets/spr-background.jpg
var spr_background_default = "/build/_assets/spr-background-Y7TR2J6L.jpg";

// app/assets/spr-components-dark-large-new.png
var spr_components_dark_large_new_default = "/build/_assets/spr-components-dark-large-new-KQB3P2EN.png";

// app/assets/spr-components-dark-placeholder.png
var spr_components_dark_placeholder_default = "/build/_assets/spr-components-dark-placeholder-C4T3OU6P.png";

// app/assets/spr-components-dark.png
var spr_components_dark_default = "/build/_assets/spr-components-dark-2E2X64CF.png";

// app/assets/spr-components-light-large-new.png
var spr_components_light_large_new_default = "/build/_assets/spr-components-light-large-new-FTJBY4A7.png";

// app/assets/spr-components-light-placeholder.png
var spr_components_light_placeholder_default = "/build/_assets/spr-components-light-placeholder-QA5TPKLR.png";

// app/assets/spr-components-light.png
var spr_components_light_default = "/build/_assets/spr-components-light-5BH5BULN.png";

// app/assets/spr-lesson-builder-dark-large.png
var spr_lesson_builder_dark_large_default = "/build/_assets/spr-lesson-builder-dark-large-TFOKNDRN.png";

// app/assets/spr-lesson-builder-light-large.png
var spr_lesson_builder_light_large_default = "/build/_assets/spr-lesson-builder-light-large-GETUVLEZ.png";

// app/assets/spr-lesson-builder-light-placeholder.jpg
var spr_lesson_builder_light_placeholder_default = "/build/_assets/spr-lesson-builder-light-placeholder-7YNZKLR4.jpg";

// app/assets/logoClickShop.webp
var logoClickShop_default = "/build/_assets/logoClickShop-LC5NSIN5.webp";

// app/components/segmented-control/segmented-control.jsx
var import_react = __toESM(require_react(), 1);

// app/components/segmented-control/segmented-control.module.css
var segmented_control_module_default = { "container": "segmented-control-module__container__-t9v8", "options": "segmented-control-module__options__f-Fnj", "button": "segmented-control-module__button__TDZKT", "indicator": "segmented-control-module__indicator__rEUvW" };

// app/components/segmented-control/segmented-control.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\segmented-control\\\\segmented-control.jsx"' + id);
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
    "app\\components\\segmented-control\\segmented-control.jsx"
  );
}
var SegmentedControlContext = (0, import_react.createContext)({});
var SegmentedControl = ({
  children,
  currentIndex,
  onChange,
  label,
  ...props
}) => {
  _s();
  const id = (0, import_react.useId)();
  const labelId = `${id}segmented-control-label`;
  const optionRefs = (0, import_react.useRef)([]);
  const [indicator, setIndicator] = (0, import_react.useState)();
  const handleKeyDown = (event) => {
    const {
      length
    } = optionRefs.current;
    const prevIndex = (currentIndex - 1 + length) % length;
    const nextIndex = (currentIndex + 1) % length;
    if (["ArrowLeft", "ArrowUp"].includes(event.key)) {
      onChange(prevIndex);
      optionRefs.current[prevIndex].current.focus();
    } else if (["ArrowRight", "ArrowDown"].includes(event.key)) {
      onChange(nextIndex);
      optionRefs.current[nextIndex].current.focus();
    }
  };
  const registerOption = (0, import_react.useCallback)((optionRef) => {
    optionRefs.current = [...optionRefs.current, optionRef];
  }, []);
  const unRegisterOption = (0, import_react.useCallback)((optionRef) => {
    optionRefs.current = optionRefs.current.filter((ref) => ref !== optionRef);
  }, []);
  (0, import_react.useEffect)(() => {
    const currentOption = optionRefs.current[currentIndex]?.current;
    const resizeObserver = new ResizeObserver(() => {
      const rect = currentOption?.getBoundingClientRect();
      const left = currentOption?.offsetLeft;
      setIndicator({
        width: rect?.width,
        left
      });
    });
    resizeObserver.observe(currentOption);
    return () => {
      resizeObserver.disconnect();
    };
  }, [currentIndex]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SegmentedControlContext.Provider, { value: {
    optionRefs,
    currentIndex,
    onChange,
    registerOption,
    unRegisterOption
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: segmented_control_module_default.container, role: "radiogroup", tabIndex: "0", "aria-labelledby": labelId, onKeyDown: handleKeyDown, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, { as: "label", id: labelId, children: label }, void 0, false, {
      fileName: "app/components/segmented-control/segmented-control.jsx",
      lineNumber: 84,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: segmented_control_module_default.options, children: [
      !!indicator && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: segmented_control_module_default.indicator, "data-last": currentIndex === optionRefs.current.length - 1, style: cssProps(indicator) }, void 0, false, {
        fileName: "app/components/segmented-control/segmented-control.jsx",
        lineNumber: 88,
        columnNumber: 27
      }, this),
      children
    ] }, void 0, true, {
      fileName: "app/components/segmented-control/segmented-control.jsx",
      lineNumber: 87,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/segmented-control/segmented-control.jsx",
    lineNumber: 82,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/segmented-control/segmented-control.jsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
};
_s(SegmentedControl, "+IandmRaFDR5KXcgPOcUWmVfttQ=", false, function() {
  return [import_react.useId];
});
_c = SegmentedControl;
var SegmentedControlOption = ({
  children,
  ...props
}) => {
  _s2();
  const {
    optionRefs,
    currentIndex,
    onChange,
    registerOption,
    unRegisterOption
  } = (0, import_react.useContext)(SegmentedControlContext);
  const optionRef = (0, import_react.useRef)();
  const index = optionRefs.current.indexOf(optionRef);
  const isSelected = currentIndex === index;
  (0, import_react.useEffect)(() => {
    registerOption(optionRef);
    return () => {
      unRegisterOption(optionRef);
    };
  }, [registerOption, unRegisterOption]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: segmented_control_module_default.button, tabIndex: isSelected ? 0 : -1, role: "radio", "aria-checked": isSelected, onClick: () => onChange(index), ref: optionRef, ...props, children }, void 0, false, {
    fileName: "app/components/segmented-control/segmented-control.jsx",
    lineNumber: 119,
    columnNumber: 10
  }, this);
};
_s2(SegmentedControlOption, "BYUyTHelO8hvApx2Jt+11IqkTrg=");
_c2 = SegmentedControlOption;
var _c;
var _c2;
$RefreshReg$(_c, "SegmentedControl");
$RefreshReg$(_c2, "SegmentedControlOption");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/segmented-control/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\segmented-control\\index.js"
  );
  import.meta.hot.lastModified = "1759533528981.7832";
}

// app/routes/projects.click-shop/click-shop.jsx
var import_react2 = __toESM(require_react(), 1);

// app/routes/projects.click-shop/click-shop.module.css
var click_shop_module_default = { "video": "click-shop-module__video__qHsZH", "sidebarImages": "click-shop-module__sidebarImages__QsjPq", "sidebarImage": "click-shop-module__sidebarImage__wVRO9" };

// app/routes/projects.click-shop/click-shop.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\projects.click-shop\\\\click-shop.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\projects.click-shop\\click-shop.jsx"
  );
}
var Earth = (0, import_react2.lazy)(_c3 = () => import("/build/_shared/earth-O3KJEQSE.js").then((module) => ({
  default: module.Earth
})));
_c22 = Earth;
var EarthSection = (0, import_react2.lazy)(_c32 = () => import("/build/_shared/earth-O3KJEQSE.js").then((module) => ({
  default: module.EarthSection
})));
_c4 = EarthSection;
var title = "Dise\xF1ando el futuro del E-Commerce";
var description = "Soy estudiante y co-fundador de Click-Shop, una startup de e-commerce. Como CEO part-time, desarrollo y dise\xF1o en mis tiempos libres, combinando interes e intriga.";
var roles = ["Dise\xF1ador", "Back End", "Front End", "Director Creativo"];
var meta = () => {
  return baseMeta({
    title,
    description,
    prefix: "Proyectos"
  });
};
var ClickShop = () => {
  _s3();
  const {
    theme,
    toggleTheme
  } = useTheme();
  const isDark = theme === "dark";
  const themes = ["dark", "light"];
  const handleThemeChange = (index) => {
    toggleTheme(themes[index]);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectContainer, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectBackground, { opacity: isDark ? 0.5 : 0.8, src: spr_background_default, srcSet: `${spr_background_default} 1080w, ${spr_background_large_default} 2160w`, placeholder: spr_background_placeholder_default }, void 0, false, {
        fileName: "app/routes/projects.click-shop/click-shop.jsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectHeader, { title, description, url: "https://click-shop.ar", roles }, void 0, false, {
        fileName: "app/routes/projects.click-shop/click-shop.jsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectSection, { padding: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectSectionContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectImage, { raised: true, srcSet: isDark ? `${spr_lesson_builder_dark_large_default} 1280w, ${spr_lesson_builder_dark_large_default} 2560w` : `${spr_lesson_builder_light_large_default} 1280w, ${spr_lesson_builder_light_large_default} 2560w`, width: 1280, height: 800, placeholder: isDark ? spr_lesson_builder_dark_placeholder_default : spr_lesson_builder_light_placeholder_default, sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`, alt: "The aero lesson builder app dragging an audio component into a screen about plant cells." }, theme, false, {
        fileName: "app/routes/projects.click-shop/click-shop.jsx",
        lineNumber: 84,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/projects.click-shop/click-shop.jsx",
        lineNumber: 83,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/projects.click-shop/click-shop.jsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectSection, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectTextRow, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectSectionHeading, { children: "El problema" }, void 0, false, {
          fileName: "app/routes/projects.click-shop/click-shop.jsx",
          lineNumber: 90,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectSectionText, { children: "En octubre de 2024, iniciamos el desarrollo de una nueva plataforma de e-commerce pensada desde cero para resolver las limitaciones que enfrentan emprendedores, comerciantes y negocios al vender en l\xEDnea. Las soluciones existentes suelen fragmentar la experiencia o imponer comisiones que dificultan la rentabilidad. El objetivo principal del proyecto fue crear un entorno unificado donde los usuarios pudieran comercializar productos, recibir pedidos, gestionar stock y concretar ventas sin intermediarios ni costos ocultos. La plataforma busca reducir las barreras t\xE9cnicas para quienes reci\xE9n comienzan, pero con una arquitectura lo suficientemente flexible como para escalar junto a negocios en crecimiento." }, void 0, false, {
          fileName: "app/routes/projects.click-shop/click-shop.jsx",
          lineNumber: 91,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/projects.click-shop/click-shop.jsx",
        lineNumber: 89,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/projects.click-shop/click-shop.jsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectSection, { light: isDark, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectSectionContent, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Image, { srcSet: isDark ? `${spr_components_dark_default} 1024w, ${spr_components_dark_large_new_default} 2048w` : `${spr_components_light_default} 1024w, ${spr_components_light_large_new_default} 2048w`, width: 1024, hright: 800, placeholder: isDark ? spr_components_dark_placeholder_default : spr_components_light_placeholder_default, alt: `A set of ${theme} themed components for the aero design system`, sizes: "100vw" }, theme, false, {
          fileName: "app/routes/projects.click-shop/click-shop.jsx",
          lineNumber: 98,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectTextRow, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SegmentedControl, { currentIndex: themes.indexOf(theme), onChange: handleThemeChange, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SegmentedControlOption, { children: "Tema oscuro" }, void 0, false, {
            fileName: "app/routes/projects.click-shop/click-shop.jsx",
            lineNumber: 103,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SegmentedControlOption, { children: "Tema claro" }, void 0, false, {
            fileName: "app/routes/projects.click-shop/click-shop.jsx",
            lineNumber: 104,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/projects.click-shop/click-shop.jsx",
          lineNumber: 101,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/projects.click-shop/click-shop.jsx",
          lineNumber: 100,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/projects.click-shop/click-shop.jsx",
        lineNumber: 97,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/projects.click-shop/click-shop.jsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ThemeProvider, { theme: "dark", "data-invert": true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Earth, { className: click_shop_module_default.earth, hideMeshes: (0, import_react2.useMemo)(() => ["Atmosphere", "EarthPartial", "Chunk", "EarthFull"], []), position: (0, import_react2.useMemo)(() => [0, 0, 0], []), labels: (0, import_react2.useMemo)(() => [{
        position: [0.54, 0.19, 0.18],
        text: "Pacific ring of fire",
        hidden: true
      }, {
        position: [0.47, -0.38, 0.04],
        text: "Ruapehu",
        hidden: true
      }, {
        position: [0.22, 0.44, -0.35],
        text: "St. Helens",
        hidden: true
      }, {
        position: [0.16, -0.06, 0.58],
        text: "Krakatoa",
        hidden: true
      }, {
        position: [0.11, 0.2, -0.56],
        text: "Par\xEDcutin",
        hidden: true
      }, {
        position: [0.52, 0.2, -0.23],
        text: "K\u012Blauea",
        hidden: true
      }, {
        position: [-0.24, 0.75, 0.24],
        text: "Mantle",
        delay: 800,
        hidden: true
      }, {
        position: [-0.24, 0.55, 0.24],
        text: "Outer core",
        delay: 800,
        hidden: true
      }, {
        position: [-0.24, 0.35, 0.24],
        text: "Inner core",
        delay: 800,
        hidden: true
      }], []), scale: 0.6, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(EarthSection, { scrim: true, animations: ["0:loop"], camera: [0, 0, 1.5], meshes: ["Atmosphere", "EarthFull"], children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectSection, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectSectionContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectTextRow, { center: true, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectSectionHeading, { children: "Comercio digital de pr\xF3xima generaci\xF3n" }, void 0, false, {
            fileName: "app/routes/projects.click-shop/click-shop.jsx",
            lineNumber: 159,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectSectionText, { children: "La plataforma busca llevar la digitalizaci\xF3n al siguiente nivel, permitiendo a emprendedores gestionar ventas, pedidos y stock sin papel ni procesos manuales. Su flexibilidad tambi\xE9n impulsa la inclusi\xF3n tecnol\xF3gica desde edades tempranas, fomentando una cultura emprendedora en las nuevas generaciones." }, void 0, false, {
            fileName: "app/routes/projects.click-shop/click-shop.jsx",
            lineNumber: 162,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/projects.click-shop/click-shop.jsx",
          lineNumber: 158,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/projects.click-shop/click-shop.jsx",
          lineNumber: 157,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/projects.click-shop/click-shop.jsx",
          lineNumber: 156,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/projects.click-shop/click-shop.jsx",
          lineNumber: 154,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(EarthSection, { animations: ["0:loop"], camera: [0, 0, 2.4], meshes: ["Atmosphere", "EarthFull"] }, void 0, false, {
          fileName: "app/routes/projects.click-shop/click-shop.jsx",
          lineNumber: 169,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(EarthSection, { animations: ["0:loop"], camera: [1.14, -1.39, 0.94], meshes: ["Atmosphere", "EarthFull"], children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectSection, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectSectionContent, { width: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectTextRow, { justify: "end", width: "s", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectSectionHeading, { level: 4, as: "h3", children: "Democratizando el comercio digital" }, void 0, false, {
            fileName: "app/routes/projects.click-shop/click-shop.jsx",
            lineNumber: 176,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectSectionText, { children: "Con acceso a herramientas y sin necesidad de infraestructura f\xEDsica, emprendedores pueden validar, vender y construir marcas personales desde cualquier lugar. Esta accesibilidad redefine qui\xE9n puede participar en la econom\xEDa y c\xF3mo se construye valor en la era digital." }, void 0, false, {
            fileName: "app/routes/projects.click-shop/click-shop.jsx",
            lineNumber: 179,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/projects.click-shop/click-shop.jsx",
          lineNumber: 175,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/projects.click-shop/click-shop.jsx",
          lineNumber: 174,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/projects.click-shop/click-shop.jsx",
          lineNumber: 173,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/projects.click-shop/click-shop.jsx",
          lineNumber: 171,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(EarthSection, { animations: ["0:loop"], camera: [1.17, 0.69, -1.47], meshes: ["Atmosphere", "EarthFull"], labels: ["Pacific ring of fire", "Ruapehu", "St. Helens", "Krakatoa", "Par\xEDcutin", "K\u012Blauea"], children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectSection, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectSectionContent, { width: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectTextRow, { justify: "start", width: "s", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectSectionHeading, { level: 4, as: "h3", children: "Alcance sin fronteras" }, void 0, false, {
            fileName: "app/routes/projects.click-shop/click-shop.jsx",
            lineNumber: 191,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectSectionText, { children: "El e-commerce permite a los negocios trascender las limitaciones f\xEDsicas, llegando a clientes en cualquier parte del pa\xEDs o del mundo. Esto habilita nuevas fuentes de ingresos, incluso para emprendimientos peque\xF1os que antes depend\xEDan exclusivamente de la venta local." }, void 0, false, {
            fileName: "app/routes/projects.click-shop/click-shop.jsx",
            lineNumber: 194,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/projects.click-shop/click-shop.jsx",
          lineNumber: 190,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/projects.click-shop/click-shop.jsx",
          lineNumber: 189,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/projects.click-shop/click-shop.jsx",
          lineNumber: 188,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/projects.click-shop/click-shop.jsx",
          lineNumber: 186,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(EarthSection, { animations: ["0:loop"], camera: [1.81, 0.51, 0.43], meshes: ["Atmosphere", "EarthFull"], labels: ["Pacific ring of fire", "Ruapehu", "St. Helens", "Krakatoa", "Par\xEDcutin", "K\u012Blauea"] }, void 0, false, {
          fileName: "app/routes/projects.click-shop/click-shop.jsx",
          lineNumber: 201,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(EarthSection, { animations: ["0:loop"], camera: [0.37, 1.02, 1.84], meshes: ["EarthPartial", "Chunk"], labels: ["Clientes", "Ventas", "Ingresos"], children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectSection, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectSectionContent, { width: "xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectTextRow, { justify: "end", width: "s", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectSectionHeading, { level: 4, as: "h3", children: "Personalizaci\xF3n y flexibilidad" }, void 0, false, {
            fileName: "app/routes/projects.click-shop/click-shop.jsx",
            lineNumber: 208,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectSectionText, { children: "El comercio digital permite ofrecer productos y servicios de manera personalizada, aumentando la satisfacci\xF3n y fidelizaci\xF3n de los clientes." }, void 0, false, {
            fileName: "app/routes/projects.click-shop/click-shop.jsx",
            lineNumber: 211,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/projects.click-shop/click-shop.jsx",
          lineNumber: 207,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/projects.click-shop/click-shop.jsx",
          lineNumber: 206,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/projects.click-shop/click-shop.jsx",
          lineNumber: 205,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/projects.click-shop/click-shop.jsx",
          lineNumber: 203,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(EarthSection, { scrimReverse: true, animations: ["0:loop"], camera: [0.37, 1.02, 1.84], meshes: ["Atmosphere", "EarthFull"] }, void 0, false, {
          fileName: "app/routes/projects.click-shop/click-shop.jsx",
          lineNumber: 218,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/projects.click-shop/click-shop.jsx",
        lineNumber: 113,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/projects.click-shop/click-shop.jsx",
        lineNumber: 112,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/projects.click-shop/click-shop.jsx",
        lineNumber: 111,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectSection, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectSectionContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectTextRow, { center: true, centerMobile: true, noMargin: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: logoClickShop_default, alt: "Logo ClickShop", style: {
          width: "75px",
          height: "60px",
          color: "currentColor",
          marginBottom: "2em"
        } }, void 0, false, {
          fileName: "app/routes/projects.click-shop/click-shop.jsx",
          lineNumber: 227,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectSectionHeading, { children: "Resultados del proyecto" }, void 0, false, {
          fileName: "app/routes/projects.click-shop/click-shop.jsx",
          lineNumber: 235,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectSectionText, { children: [
          "Lo que surgi\xF3 como una idea hoy est\xE1 validado por m\xE1s de 10 tiendas, consolid\xE1ndose como una ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { href: "https://click-shop.ar", children: "plataforma confiable" }, void 0, false, {
            fileName: "app/routes/projects.click-shop/click-shop.jsx",
            lineNumber: 238,
            columnNumber: 41
          }, this),
          " para gestionar ventas, sentando las bases para el comercio digital de pr\xF3xima generaci\xF3n."
        ] }, void 0, true, {
          fileName: "app/routes/projects.click-shop/click-shop.jsx",
          lineNumber: 236,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/projects.click-shop/click-shop.jsx",
        lineNumber: 225,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/projects.click-shop/click-shop.jsx",
        lineNumber: 224,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/projects.click-shop/click-shop.jsx",
        lineNumber: 223,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/projects.click-shop/click-shop.jsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/routes/projects.click-shop/click-shop.jsx",
      lineNumber: 246,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/projects.click-shop/click-shop.jsx",
    lineNumber: 76,
    columnNumber: 10
  }, this);
};
_s3(ClickShop, "JA8sd0IDtxO8P2VuDIbQg85FIW0=", false, function() {
  return [useTheme];
});
_c5 = ClickShop;
var click_shop_default = ClickShop;
var _c3;
var _c22;
var _c32;
var _c4;
var _c5;
$RefreshReg$(_c3, "Earth$lazy");
$RefreshReg$(_c22, "Earth");
$RefreshReg$(_c32, "EarthSection$lazy");
$RefreshReg$(_c4, "EarthSection");
$RefreshReg$(_c5, "ClickShop");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/projects.click-shop/route.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\projects.click-shop\\route.js"
  );
  import.meta.hot.lastModified = "1759783379203.4866";
}
export {
  click_shop_default as default,
  meta
};
//# sourceMappingURL=/build/routes/projects.click-shop-HB67SVNS.js.map
