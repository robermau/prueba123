import {
  createHotContext
} from "/build/_shared/chunk-HTDTVXTX.js";

// app/assets/iphone-11.glb
var iphone_11_default = "/build/_assets/iphone-11-S4EFIVYB.glb";

// app/assets/macbook-pro.glb
var macbook_pro_default = "/build/_assets/macbook-pro-C6DU7EB5.glb";

// app/components/model/device-models.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\model\\device-models.js"
  );
  import.meta.hot.lastModified = "1759533528975.7024";
}
var ModelAnimationType = {
  SpringUp: "spring-up",
  LaptopOpen: "laptop-open"
};
var deviceModels = {
  phone: {
    url: iphone_11_default,
    width: 374,
    height: 512,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.SpringUp
  },
  laptop: {
    url: macbook_pro_default,
    width: 1280,
    height: 800,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.LaptopOpen
  }
};

export {
  ModelAnimationType,
  deviceModels
};
//# sourceMappingURL=/build/_shared/chunk-EFEOB3ZE.js.map
