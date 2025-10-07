import {
  resolveSrcFromSrcSet
} from "/build/_shared/chunk-4UTHJ3DV.js";
import {
  useTheme
} from "/build/_shared/chunk-P4P2JTXI.js";
import {
  useInViewport
} from "/build/_shared/chunk-OSM65NBD.js";
import {
  Button,
  Icon
} from "/build/_shared/chunk-FR56KFKI.js";
import {
  classes,
  cssProps,
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

// app/hooks/useHasMounted.js
var import_react = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\hooks\\useHasMounted.js"
  );
  import.meta.hot.lastModified = "1759533528991.303";
}
function useHasMounted() {
  const [mounted, setMounted] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    setMounted(true);
  }, []);
  return mounted;
}

// app/components/image/image.jsx
var import_react2 = __toESM(require_react(), 1);

// app/components/image/image.module.css
var image_module_default = { "image": "image-module__image__tpmj9", "container": "image-module__container__-6RB5", "elementWrapper": "image-module__elementWrapper__wili2", "placeholder": "image-module__placeholder__Y1AuN", "element": "image-module__element__BJ3ki", "button": "image-module__button__9e7NM" };

// app/components/image/image.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\image\\\\image.jsx"' + id);
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
    "app\\components\\image\\image.jsx"
  );
}
var Image = ({
  className,
  style,
  reveal,
  delay = 0,
  raised,
  src: baseSrc,
  srcSet,
  placeholder,
  ...rest
}) => {
  _s();
  const [loaded, setLoaded] = (0, import_react2.useState)(false);
  const {
    theme
  } = useTheme();
  const containerRef = (0, import_react2.useRef)();
  const src = baseSrc || srcSet.split(" ")[0];
  const inViewport = useInViewport(containerRef, !getIsVideo(src));
  const onLoad = (0, import_react2.useCallback)(() => {
    setLoaded(true);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: classes(image_module_default.image, className), "data-visible": inViewport || loaded, "data-reveal": reveal, "data-raised": raised, "data-theme": theme, style: cssProps({
    delay: numToMs(delay)
  }, style), ref: containerRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ImageElements, { delay, onLoad, loaded, inViewport, reveal, src, srcSet, placeholder, ...rest }, void 0, false, {
    fileName: "app/components/image/image.jsx",
    lineNumber: 57,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/image/image.jsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
};
_s(Image, "lH+f6SQiCrNhf27ktGR+YZwd5kU=", false, function() {
  return [useTheme, useInViewport];
});
_c = Image;
var ImageElements = ({
  onLoad,
  loaded,
  inViewport,
  srcSet,
  placeholder,
  delay,
  src,
  alt,
  play = true,
  restartOnPause,
  reveal,
  sizes,
  width,
  height,
  noPauseButton,
  cover,
  ...rest
}) => {
  _s2();
  const reduceMotion = useReducedMotion();
  const [showPlaceholder, setShowPlaceholder] = (0, import_react2.useState)(true);
  const [playing, setPlaying] = (0, import_react2.useState)(!reduceMotion);
  const [videoSrc, setVideoSrc] = (0, import_react2.useState)();
  const [videoInteracted, setVideoInteracted] = (0, import_react2.useState)(false);
  const placeholderRef = (0, import_react2.useRef)();
  const videoRef = (0, import_react2.useRef)();
  const isVideo = getIsVideo(src);
  const showFullRes = inViewport;
  const hasMounted = useHasMounted();
  (0, import_react2.useEffect)(() => {
    const resolveVideoSrc = async () => {
      const resolvedVideoSrc = await resolveSrcFromSrcSet({
        srcSet,
        sizes
      });
      setVideoSrc(resolvedVideoSrc);
    };
    if (isVideo && srcSet) {
      resolveVideoSrc();
    } else if (isVideo) {
      setVideoSrc(src);
    }
  }, [isVideo, sizes, src, srcSet]);
  (0, import_react2.useEffect)(() => {
    if (!videoRef.current || !videoSrc)
      return;
    const playVideo = () => {
      setPlaying(true);
      videoRef.current.play();
    };
    const pauseVideo = () => {
      setPlaying(false);
      videoRef.current.pause();
    };
    if (!play) {
      pauseVideo();
      if (restartOnPause) {
        videoRef.current.currentTime = 0;
      }
    }
    if (videoInteracted)
      return;
    if (!inViewport) {
      pauseVideo();
    } else if (inViewport && !reduceMotion && play) {
      playVideo();
    }
  }, [inViewport, play, reduceMotion, restartOnPause, videoInteracted, videoSrc]);
  const togglePlaying = (event) => {
    event.preventDefault();
    setVideoInteracted(true);
    if (videoRef.current.paused) {
      setPlaying(true);
      videoRef.current.play();
    } else {
      setPlaying(false);
      videoRef.current.pause();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: image_module_default.elementWrapper, "data-reveal": reveal, "data-visible": inViewport || loaded, style: cssProps({
    delay: numToMs(delay + 1e3)
  }), children: [
    isVideo && hasMounted && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("video", { muted: true, loop: true, playsInline: true, className: image_module_default.element, "data-loaded": loaded, "data-cover": cover, autoPlay: !reduceMotion, onLoadStart: onLoad, src: videoSrc, "aria-label": alt, ref: videoRef, ...rest }, void 0, false, {
        fileName: "app/components/image/image.jsx",
        lineNumber: 148,
        columnNumber: 11
      }, this),
      !noPauseButton && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: image_module_default.button, onClick: togglePlaying, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: playing ? "pause" : "play" }, void 0, false, {
          fileName: "app/components/image/image.jsx",
          lineNumber: 151,
          columnNumber: 15
        }, this),
        playing ? "Pause" : "Play"
      ] }, void 0, true, {
        fileName: "app/components/image/image.jsx",
        lineNumber: 150,
        columnNumber: 30
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/image/image.jsx",
      lineNumber: 147,
      columnNumber: 33
    }, this),
    !isVideo && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: image_module_default.element, "data-loaded": loaded, "data-cover": cover, onLoad, decoding: "async", src: showFullRes ? src : void 0, srcSet: showFullRes ? srcSet : void 0, width, height, alt, sizes, ...rest }, void 0, false, {
      fileName: "app/components/image/image.jsx",
      lineNumber: 155,
      columnNumber: 20
    }, this),
    showPlaceholder && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { "aria-hidden": true, className: image_module_default.placeholder, "data-loaded": loaded, "data-cover": cover, style: cssProps({
      delay: numToMs(delay)
    }), ref: placeholderRef, src: placeholder, width, height, onTransitionEnd: () => setShowPlaceholder(false), decoding: "async", loading: "lazy", alt: "", role: "presentation" }, void 0, false, {
      fileName: "app/components/image/image.jsx",
      lineNumber: 156,
      columnNumber: 27
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/image/image.jsx",
    lineNumber: 143,
    columnNumber: 10
  }, this);
};
_s2(ImageElements, "AsvcytVeqaEJHB+a8NcQFqiceIY=", false, function() {
  return [useReducedMotion, useHasMounted];
});
_c2 = ImageElements;
function getIsVideo(src) {
  return typeof src === "string" && src.includes(".mp4");
}
var _c;
var _c2;
$RefreshReg$(_c, "Image");
$RefreshReg$(_c2, "ImageElements");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/image/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\image\\index.js"
  );
  import.meta.hot.lastModified = "1759533528969.1982";
}

export {
  Image
};
//# sourceMappingURL=/build/_shared/chunk-KDRXC4FW.js.map
