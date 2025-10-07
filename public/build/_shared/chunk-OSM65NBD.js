import {
  createHotContext
} from "/build/_shared/chunk-HTDTVXTX.js";
import {
  require_react
} from "/build/_shared/chunk-3DYT5NE2.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/hooks/useInViewport.js
var import_react = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\hooks\\useInViewport.js"
  );
  import.meta.hot.lastModified = "1759533528992.341";
}
function useInViewport(elementRef, unobserveOnIntersect, options = {}, shouldObserve = true) {
  const [intersect, setIntersect] = (0, import_react.useState)(false);
  const [isUnobserved, setIsUnobserved] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    if (!elementRef?.current)
      return;
    const observer = new IntersectionObserver(([entry]) => {
      const { isIntersecting, target } = entry;
      setIntersect(isIntersecting);
      if (isIntersecting && unobserveOnIntersect) {
        observer.unobserve(target);
        setIsUnobserved(true);
      }
    }, options);
    if (!isUnobserved && shouldObserve) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [elementRef, unobserveOnIntersect, options, isUnobserved, shouldObserve]);
  return intersect;
}

export {
  useInViewport
};
//# sourceMappingURL=/build/_shared/chunk-OSM65NBD.js.map
