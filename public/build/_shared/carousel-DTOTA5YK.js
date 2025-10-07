import {
  Color,
  LinearFilter,
  LinearSRGBColorSpace,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  WebGLRenderer,
  cleanRenderer,
  cleanScene,
  textureLoader
} from "/build/_shared/chunk-BEIC4OVV.js";
import {
  resolveSrcFromSrcSet
} from "/build/_shared/chunk-4UTHJ3DV.js";
import {
  useInViewport
} from "/build/_shared/chunk-OSM65NBD.js";
import {
  animate,
  cssProps,
  useReducedMotion
} from "/build/_shared/chunk-VSMHCMS2.js";
import {
  createHotContext
} from "/build/_shared/chunk-HTDTVXTX.js";
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

// app/components/carousel/carousel.jsx
var import_react = __toESM(require_react(), 1);

// app/components/carousel/carousel.module.css
var carousel_module_default = { "carousel": "carousel-module__carousel__VMfuy", "content": "carousel-module__content__3EbHu", "imageWrapper": "carousel-module__imageWrapper__Ip-dB", "canvasWrapper": "carousel-module__canvasWrapper__9srfA", "canvas": "carousel-module__canvas__NZTS0", "placeholder": "carousel-module__placeholder__P-DcB", "button": "carousel-module__button__MBfGb", "nav": "carousel-module__nav__9nvIC", "navButton": "carousel-module__navButton__0Q4nb" };

// app/components/carousel/carousel.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\carousel\\\\carousel.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\carousel\\carousel.jsx"
  );
}
var fragment = await fetch("/shaders/carousel-fragment.glsl").then((r) => r.text());
var vertex = await fetch("/shaders/carousel-vertex.glsl").then((r) => r.text());
function determineIndex(imageIndex, index, images, direction) {
  if (index !== null)
    return index;
  const length = images.length;
  const prevIndex = (imageIndex - 1 + length) % length;
  const nextIndex = (imageIndex + 1) % length;
  const finalIndex = direction > 0 ? nextIndex : prevIndex;
  return finalIndex;
}
var Carousel = ({
  width,
  height,
  images,
  placeholder,
  ...rest
}) => {
  _s();
  const [dragging, setDragging] = (0, import_react.useState)(false);
  const [imageIndex, setImageIndex] = (0, import_react.useState)(0);
  const [loaded, setLoaded] = (0, import_react.useState)(false);
  const [showPlaceholder, setShowPlaceholder] = (0, import_react.useState)(true);
  const [textures, setTextures] = (0, import_react.useState)();
  const [canvasRect, setCanvasRect] = (0, import_react.useState)();
  const canvas = (0, import_react.useRef)();
  const imagePlane = (0, import_react.useRef)();
  const geometry = (0, import_react.useRef)();
  const material = (0, import_react.useRef)();
  const scene = (0, import_react.useRef)();
  const camera = (0, import_react.useRef)();
  const renderer = (0, import_react.useRef)();
  const animating = (0, import_react.useRef)(false);
  const swipeDirection = (0, import_react.useRef)();
  const lastSwipePosition = (0, import_react.useRef)();
  const scheduledAnimationFrame = (0, import_react.useRef)();
  const reduceMotion = useReducedMotion();
  const inViewport = useInViewport(canvas, true);
  const placeholderRef = (0, import_react.useRef)();
  const initSwipeX = (0, import_react.useRef)();
  const currentImageAlt = `Slide ${imageIndex + 1} of ${images.length}. ${images[imageIndex].alt}`;
  (0, import_react.useEffect)(() => {
    if (dragging) {
      document.body.style.cursor = "grabbing";
    }
    return () => {
      document.body.style.cursor = "";
    };
  }, [dragging]);
  (0, import_react.useEffect)(() => {
    const cameraOptions = [width / -2, width / 2, height / 2, height / -2, 1, 1e3];
    renderer.current = new WebGLRenderer({
      canvas: canvas.current,
      antialias: false,
      alpha: true,
      powerPreference: "high-performance",
      failIfMajorPerformanceCaveat: true
    });
    camera.current = new OrthographicCamera(...cameraOptions);
    scene.current = new Scene();
    renderer.current.setPixelRatio(2);
    renderer.current.setClearColor(1118481, 1);
    renderer.current.setSize(width, height);
    renderer.current.domElement.style.width = "100%";
    renderer.current.domElement.style.height = "auto";
    scene.current.background = new Color(1118481);
    camera.current.position.z = 1;
    return () => {
      animating.current = false;
      cleanScene(scene.current);
      cleanRenderer(renderer.current);
    };
  }, [height, width]);
  (0, import_react.useEffect)(() => {
    let mounted = true;
    const loadImages = async () => {
      const anisotropy = renderer.current.capabilities.getMaxAnisotropy();
      const texturePromises = images.map(async (image) => {
        const imageSrc = image.srcSet ? await resolveSrcFromSrcSet(image) : image.src;
        const imageTexture = await textureLoader.loadAsync(imageSrc);
        await renderer.current.initTexture(imageTexture);
        imageTexture.colorSpace = LinearSRGBColorSpace;
        imageTexture.minFilter = LinearFilter;
        imageTexture.magFilter = LinearFilter;
        imageTexture.anisotropy = anisotropy;
        imageTexture.generateMipmaps = false;
        return imageTexture;
      });
      const textures2 = await Promise.all(texturePromises);
      if (!mounted)
        return;
      material.current = new ShaderMaterial({
        uniforms: {
          dispFactor: {
            type: "f",
            value: 0
          },
          direction: {
            type: "f",
            value: 1
          },
          currentImage: {
            type: "t",
            value: textures2[0]
          },
          nextImage: {
            type: "t",
            value: textures2[1]
          },
          reduceMotion: {
            type: "b",
            value: reduceMotion
          }
        },
        vertexShader: vertex,
        fragmentShader: fragment,
        transparent: false,
        opacity: 1
      });
      geometry.current = new PlaneGeometry(width, height, 1);
      imagePlane.current = new Mesh(geometry.current, material.current);
      imagePlane.current.position.set(0, 0, 0);
      scene.current.add(imagePlane.current);
      setLoaded(true);
      setTextures(textures2);
      requestAnimationFrame(() => {
        renderer.current.render(scene.current, camera.current);
      });
    };
    if (inViewport && !loaded) {
      loadImages();
    }
    return () => {
      mounted = false;
    };
  }, [height, images, inViewport, loaded, reduceMotion, width]);
  const goToIndex = (0, import_react.useCallback)(({
    index,
    direction = 1
  }) => {
    if (!textures)
      return;
    setImageIndex(index);
    const {
      uniforms
    } = material.current;
    uniforms.nextImage.value = textures[index];
    uniforms.direction.value = direction;
    const onComplete = () => {
      uniforms.currentImage.value = textures[index];
      uniforms.dispFactor.value = 0;
      animating.current = false;
    };
    if (uniforms.dispFactor.value !== 1) {
      animating.current = true;
      animate(uniforms.dispFactor.value, 1, {
        type: "spring",
        stiffness: 100,
        damping: 20,
        restSpeed: 1e-3,
        restDelta: 1e-3,
        onUpdate: (value) => {
          uniforms.dispFactor.value = value;
        },
        onComplete
      });
    }
  }, [textures]);
  const navigate = (0, import_react.useCallback)(({
    direction,
    index = null,
    ...rest2
  }) => {
    if (!loaded)
      return;
    if (animating.current) {
      cancelAnimationFrame(scheduledAnimationFrame.current);
      scheduledAnimationFrame.current = requestAnimationFrame(() => navigate({
        direction,
        index,
        ...rest2
      }));
      return;
    }
    const finalIndex = determineIndex(imageIndex, index, textures, direction);
    goToIndex({
      index: finalIndex,
      direction,
      ...rest2
    });
  }, [goToIndex, imageIndex, loaded, textures]);
  const onNavClick = (0, import_react.useCallback)((index) => {
    if (index === imageIndex)
      return;
    const direction = index > imageIndex ? 1 : -1;
    navigate({
      direction,
      index
    });
  }, [imageIndex, navigate]);
  (0, import_react.useEffect)(() => {
    const handleResize = () => {
      const rect = canvas.current.getBoundingClientRect();
      setCanvasRect(rect);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  (0, import_react.useEffect)(() => {
    let animation;
    const animate2 = () => {
      animation = requestAnimationFrame(animate2);
      if (animating.current) {
        renderer.current.render(scene.current, camera.current);
      }
    };
    animation = requestAnimationFrame(animate2);
    return () => {
      cancelAnimationFrame(animation);
    };
  }, []);
  (0, import_react.useEffect)(() => {
    if (placeholder) {
      const purgePlaceholder = () => {
        setShowPlaceholder(false);
      };
      const placeholderElement = placeholderRef.current;
      placeholderElement.addEventListener("transitionend", purgePlaceholder);
      return () => {
        if (placeholderElement) {
          placeholderElement.removeEventListener("transitionend", purgePlaceholder);
        }
      };
    }
  }, [placeholder]);
  const onSwipeMove = (0, import_react.useCallback)((x) => {
    if (animating.current || !material.current || !textures)
      return;
    lastSwipePosition.current = x;
    const absoluteX = Math.abs(x);
    const containerWidth = canvasRect.width;
    swipeDirection.current = x > 0 ? -1 : 1;
    const swipePercentage = 1 - (absoluteX - containerWidth) / containerWidth * -1;
    const nextIndex = determineIndex(imageIndex, null, images, swipeDirection.current);
    const uniforms = material.current.uniforms;
    const displacementClamp = Math.min(Math.max(swipePercentage, 0), 1);
    uniforms.currentImage.value = textures[imageIndex];
    uniforms.nextImage.value = textures[nextIndex];
    uniforms.direction.value = swipeDirection.current;
    uniforms.dispFactor.value = displacementClamp;
    requestAnimationFrame(() => {
      renderer.current.render(scene.current, camera.current);
    });
  }, [canvasRect, imageIndex, images, textures]);
  const onSwipeEnd = (0, import_react.useCallback)(() => {
    if (!material.current)
      return;
    const uniforms = material.current.uniforms;
    const duration = (1 - uniforms.dispFactor.value) * 1e3;
    const position = Math.abs(lastSwipePosition.current);
    const minSwipeDistance = canvasRect.width * 0.2;
    lastSwipePosition.current = 0;
    if (animating.current)
      return;
    if (position === 0 || !position)
      return;
    if (position > minSwipeDistance) {
      navigate({
        duration,
        direction: swipeDirection.current
      });
    } else {
      uniforms.currentImage.value = uniforms.nextImage.value;
      uniforms.nextImage.value = uniforms.currentImage.value;
      uniforms.dispFactor.value = 1 - uniforms.dispFactor.value;
      navigate({
        direction: swipeDirection.current * -1,
        index: imageIndex
      });
    }
  }, [canvasRect, imageIndex, navigate]);
  const handlePointerMove = (0, import_react.useCallback)((event) => {
    onSwipeMove(event.clientX - initSwipeX.current);
  }, [onSwipeMove]);
  const handlePointerUp = (0, import_react.useCallback)(() => {
    setDragging(false);
    onSwipeEnd();
    document.removeEventListener("pointerup", handlePointerUp);
    document.removeEventListener("pointermove", handlePointerMove);
  }, [handlePointerMove, onSwipeEnd]);
  const handlePointerDown = (0, import_react.useCallback)((event) => {
    initSwipeX.current = event.clientX;
    setDragging(true);
    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerup", handlePointerUp);
  }, [handlePointerMove, handlePointerUp]);
  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowRight":
        navigate({
          direction: 1
        });
        break;
      case "ArrowLeft":
        navigate({
          direction: -1
        });
        break;
    }
  };
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: carousel_module_default.carousel, onKeyDown: handleKeyDown, ...rest, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: carousel_module_default.content, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: carousel_module_default.imageWrapper, "data-dragging": dragging, onPointerDown: handlePointerDown, style: cssProps({
          aspectRatio: `${width} / ${height}`
        }), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "aria-atomic": true, className: carousel_module_default.canvasWrapper, "aria-live": "polite", "aria-label": currentImageAlt, role: "img", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("canvas", { "aria-hidden": true, className: carousel_module_default.canvas, ref: canvas }, void 0, false, {
            fileName: "app/components/carousel/carousel.jsx",
            lineNumber: 345,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/components/carousel/carousel.jsx",
            lineNumber: 343,
            columnNumber: 11
          }, this),
          showPlaceholder && placeholder && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { "aria-hidden": true, className: carousel_module_default.placeholder, "data-loaded": loaded && !!textures, src: placeholder, ref: placeholderRef, alt: "", role: "presentation" }, void 0, false, {
            fileName: "app/components/carousel/carousel.jsx",
            lineNumber: 347,
            columnNumber: 46
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/carousel/carousel.jsx",
          lineNumber: 339,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: carousel_module_default.button, "data-prev": true, "aria-label": "Previous slide", onClick: () => navigate({
          direction: -1
        }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, {}, void 0, false, {
          fileName: "app/components/carousel/carousel.jsx",
          lineNumber: 353,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/components/carousel/carousel.jsx",
          lineNumber: 349,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: carousel_module_default.button, "data-next": true, "aria-label": "Next slide", onClick: () => navigate({
          direction: 1
        }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, {}, void 0, false, {
          fileName: "app/components/carousel/carousel.jsx",
          lineNumber: 359,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/components/carousel/carousel.jsx",
          lineNumber: 355,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/carousel/carousel.jsx",
        lineNumber: 338,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: carousel_module_default.nav, children: images.map((image, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: carousel_module_default.navButton, onClick: () => onNavClick(index), "aria-label": `Jump to slide ${index + 1}`, "aria-pressed": index === imageIndex }, image.alt, false, {
        fileName: "app/components/carousel/carousel.jsx",
        lineNumber: 363,
        columnNumber: 39
      }, this)) }, void 0, false, {
        fileName: "app/components/carousel/carousel.jsx",
        lineNumber: 362,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/carousel/carousel.jsx",
      lineNumber: 337,
      columnNumber: 5
    }, this)
  );
};
_s(Carousel, "1TPVH2Hhjdrj9yBO6+Fq/IHfAj4=", false, function() {
  return [useReducedMotion, useInViewport];
});
_c = Carousel;
function ArrowLeft() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { fill: "currentColor", width: "18", height: "42", viewBox: "0 0 18 42", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M18.03 1.375L16.47.125-.031 20.75l16.5 20.625 1.562-1.25L2.53 20.75z" }, void 0, false, {
    fileName: "app/components/carousel/carousel.jsx",
    lineNumber: 374,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/carousel/carousel.jsx",
    lineNumber: 373,
    columnNumber: 10
  }, this);
}
_c2 = ArrowLeft;
function ArrowRight() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { fill: "currentColor", width: "18", height: "42", viewBox: "0 0 18 42", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M-.03 1.375L1.53.125l16.5 20.625-16.5 20.625-1.562-1.25 15.5-19.375z" }, void 0, false, {
    fileName: "app/components/carousel/carousel.jsx",
    lineNumber: 380,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/carousel/carousel.jsx",
    lineNumber: 379,
    columnNumber: 10
  }, this);
}
_c3 = ArrowRight;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "Carousel");
$RefreshReg$(_c2, "ArrowLeft");
$RefreshReg$(_c3, "ArrowRight");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/carousel/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\carousel\\index.js"
  );
  import.meta.hot.lastModified = "1759533528957.3867";
}
export {
  Carousel
};
//# sourceMappingURL=/build/_shared/carousel-DTOTA5YK.js.map
