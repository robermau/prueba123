import {
  useReducedMotion
} from "/build/_shared/chunk-VSMHCMS2.js";
import {
  useLocation,
  useNavigate
} from "/build/_shared/chunk-6J4CTUD2.js";
import {
  createHotContext
} from "/build/_shared/chunk-HTDTVXTX.js";
import {
  require_react
} from "/build/_shared/chunk-3DYT5NE2.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/hooks/useScrollToHash.js
var import_react2 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\hooks\\useScrollToHash.js"
  );
  import.meta.hot.lastModified = "1759533528993.355";
}
function useScrollToHash() {
  const scrollTimeout = (0, import_react2.useRef)();
  const location = useLocation();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const scrollToHash = (0, import_react2.useCallback)(
    (hash, onDone) => {
      const id = hash.split("#")[1];
      const targetElement = document.getElementById(id);
      targetElement.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      const handleScroll = () => {
        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          window.removeEventListener("scroll", handleScroll);
          if (window.location.pathname === location.pathname) {
            onDone?.();
            navigate(`${location.pathname}#${id}`, { scroll: false });
          }
        }, 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(scrollTimeout.current);
      };
    },
    [navigate, reduceMotion, location.pathname]
  );
  return scrollToHash;
}

export {
  useScrollToHash
};
//# sourceMappingURL=/build/_shared/chunk-3D5LTXSN.js.map
