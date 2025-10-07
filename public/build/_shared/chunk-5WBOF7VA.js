import {
  createHotContext
} from "/build/_shared/chunk-HTDTVXTX.js";
import {
  require_react
} from "/build/_shared/chunk-3DYT5NE2.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/hooks/useWindowSize.js
var import_react = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\hooks\\useWindowSize.js"
  );
  import.meta.hot.lastModified = "1759533528993.355";
}
function useWindowSize() {
  const dimensions = (0, import_react.useRef)(() => ({ w: 1280, h: 800 }));
  const createRuler = (0, import_react.useCallback)(() => {
    let ruler = document.createElement("div");
    ruler.style.position = "fixed";
    ruler.style.height = "100vh";
    ruler.style.width = 0;
    ruler.style.top = 0;
    document.documentElement.appendChild(ruler);
    dimensions.current.w = window.innerWidth;
    dimensions.current.h = ruler.offsetHeight;
    document.documentElement.removeChild(ruler);
    ruler = null;
  }, []);
  const getHeight = (0, import_react.useCallback)(() => {
    const isIOS = navigator?.userAgent.match(/iphone|ipod|ipad/i);
    if (isIOS) {
      createRuler();
      return dimensions.current.h;
    }
    return window.innerHeight;
  }, [createRuler]);
  const getSize = (0, import_react.useCallback)(() => {
    return {
      width: window.innerWidth,
      height: getHeight()
    };
  }, [getHeight]);
  const [windowSize, setWindowSize] = (0, import_react.useState)(dimensions.current);
  (0, import_react.useEffect)(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getSize]);
  return windowSize;
}

export {
  useWindowSize
};
//# sourceMappingURL=/build/_shared/chunk-5WBOF7VA.js.map
