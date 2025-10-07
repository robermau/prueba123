import {
  createHotContext
} from "/build/_shared/chunk-HTDTVXTX.js";

// app/utils/throttle.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\utils\\throttle.js"
  );
  import.meta.hot.lastModified = "1759533529023.7258";
}
function throttle(func, timeFrame) {
  let lastTime = 0;
  return function(...args) {
    const now = /* @__PURE__ */ new Date();
    if (now - lastTime >= timeFrame) {
      func(...args);
      lastTime = now;
    }
  };
}

export {
  throttle
};
//# sourceMappingURL=/build/_shared/chunk-T34W37EF.js.map
