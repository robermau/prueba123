import {
  throttle
} from "/build/_shared/chunk-T34W37EF.js";
import {
  ACESFilmicToneMapping,
  CubeTextureLoader,
  DirectionalLight,
  Group,
  MathUtils,
  PMREMGenerator,
  PerspectiveCamera,
  SRGBColorSpace,
  Scene,
  WebGLRenderer,
  cleanRenderer,
  cleanScene,
  modelLoader,
  removeLights
} from "/build/_shared/chunk-BEIC4OVV.js";
import {
  useInViewport
} from "/build/_shared/chunk-OSM65NBD.js";
import {
  Loader
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
  useReducedMotion,
  useSpring
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

// app/assets/volkihar-cube-nx.jpg
var volkihar_cube_nx_default = "/build/_assets/volkihar-cube-nx-MFIMTLYF.jpg";

// app/assets/volkihar-cube-ny.jpg
var volkihar_cube_ny_default = "/build/_assets/volkihar-cube-ny-6LBFMIGT.jpg";

// app/assets/volkihar-cube-nz.jpg
var volkihar_cube_nz_default = "/build/_assets/volkihar-cube-nz-BFG5BMZH.jpg";

// app/assets/volkihar-cube-px.jpg
var volkihar_cube_px_default = "/build/_assets/volkihar-cube-px-ZMAH6DUL.jpg";

// app/assets/volkihar-cube-py.jpg
var volkihar_cube_py_default = "/build/_assets/volkihar-cube-py-I3IS6N2S.jpg";

// app/assets/volkihar-cube-pz.jpg
var volkihar_cube_pz_default = "/build/_assets/volkihar-cube-pz-47DP52Y5.jpg";

// app/assets/volkihar-knight.glb
var volkihar_knight_default = "/build/_assets/volkihar-knight-2YXUC67A.glb";

// app/routes/projects.volkihar-knight/armor.jsx
var import_react = __toESM(require_react(), 1);

// app/routes/projects.volkihar-knight/armor.module.css
var armor_module_default = { "armor": "armor-module__armor__bN7R0", "loader": "armor-module__loader__JIDiX", "canvas": "armor-module__canvas__Jnb1A" };

// app/routes/projects.volkihar-knight/armor.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\projects.volkihar-knight\\\\armor.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\projects.volkihar-knight\\armor.jsx"
  );
}
var rotationSpringConfig = {
  stiffness: 40,
  damping: 20,
  mass: 1.5
};
var Armor = ({
  showDelay = 0,
  cameraPosition = {
    x: 0,
    y: 0,
    z: 6
  },
  className,
  alt,
  ...rest
}) => {
  _s();
  const [loaded, setLoaded] = (0, import_react.useState)(false);
  const [visible, setVisible] = (0, import_react.useState)(false);
  const [loaderVisible, setLoaderVisible] = (0, import_react.useState)(false);
  const container = (0, import_react.useRef)();
  const canvas = (0, import_react.useRef)();
  const camera = (0, import_react.useRef)();
  const modelGroup = (0, import_react.useRef)();
  const scene = (0, import_react.useRef)();
  const renderer = (0, import_react.useRef)();
  const lights = (0, import_react.useRef)();
  const isInViewport = useInViewport(container, false, {
    threshold: 0.4
  });
  const reduceMotion = useReducedMotion();
  const rotationX = useSpring(0, rotationSpringConfig);
  const rotationY = useSpring(0, rotationSpringConfig);
  (0, import_react.useEffect)(() => {
    const {
      clientWidth,
      clientHeight
    } = container.current;
    renderer.current = new WebGLRenderer({
      canvas: canvas.current,
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
      failIfMajorPerformanceCaveat: true
    });
    renderer.current.setPixelRatio(2);
    renderer.current.setSize(clientWidth, clientHeight);
    renderer.current.outputColorSpace = SRGBColorSpace;
    renderer.current.toneMapping = ACESFilmicToneMapping;
    camera.current = new PerspectiveCamera(36, clientWidth / clientHeight, 0.1, 100);
    camera.current.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    scene.current = new Scene();
    const cubeTextureLoader = new CubeTextureLoader();
    modelGroup.current = new Group();
    scene.current.add(modelGroup.current);
    const pmremGenerator = new PMREMGenerator(renderer.current);
    pmremGenerator.compileCubemapShader();
    const keyLight = new DirectionalLight(16777215, 2.6);
    const fillLight = new DirectionalLight(16777215, 1);
    const backLight = new DirectionalLight(16777215, 1.3);
    keyLight.position.set(1, 0.1, 2);
    fillLight.position.set(-1, 0.1, 8);
    backLight.position.set(-2, 2, -3);
    lights.current = [backLight, keyLight, fillLight];
    lights.current.forEach((light) => scene.current.add(light));
    const load = async () => {
      const loadGltf = modelLoader.loadAsync(volkihar_knight_default);
      const loadEnv = cubeTextureLoader.loadAsync([volkihar_cube_nx_default, volkihar_cube_ny_default, volkihar_cube_nz_default, volkihar_cube_px_default, volkihar_cube_py_default, volkihar_cube_pz_default]);
      const [gltf, envTexture] = await Promise.all([loadGltf, loadEnv]);
      modelGroup.current.add(gltf.scene);
      gltf.scene.rotation.y = MathUtils.degToRad(180);
      gltf.scene.position.y = -1.6;
      const {
        texture
      } = pmremGenerator.fromCubemap(envTexture);
      scene.current.environment = texture;
      pmremGenerator.dispose();
      await renderer.current.initTexture(scene.current.environment);
      modelGroup.current.traverse(async (node) => {
        if (node.material) {
          await renderer.current.initTexture(node.material);
        }
      });
      setLoaded(true);
      renderFrame();
    };
    (0, import_react.startTransition)(() => {
      load();
      setTimeout(() => {
        setLoaderVisible(true);
      }, 1e3);
    });
    const unsubscribeX = rotationX.on("change", (value) => {
      modelGroup.current.rotation.x = value;
      renderFrame();
    });
    const unsubscribeY = rotationY.on("change", (value) => {
      modelGroup.current.rotation.y = value;
      renderFrame();
    });
    return () => {
      removeLights(lights.current);
      cleanScene(scene.current);
      cleanRenderer(renderer.current);
      unsubscribeX();
      unsubscribeY();
    };
  }, []);
  const renderFrame = (0, import_react.useCallback)(() => {
    renderer.current.render(scene.current, camera.current);
  }, []);
  (0, import_react.useEffect)(() => {
    const onMouseMove = throttle((event) => {
      const {
        innerWidth,
        innerHeight
      } = window;
      const position = {
        x: (event.clientX - innerWidth / 2) / innerWidth,
        y: (event.clientY - innerHeight / 2) / innerHeight
      };
      rotationX.set(position.y / 2);
      rotationY.set(position.x / 2);
    }, 100);
    if (isInViewport) {
      setVisible(true);
    }
    if (isInViewport && !reduceMotion) {
      window.addEventListener("mousemove", onMouseMove);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [isInViewport, reduceMotion, rotationX, rotationY]);
  (0, import_react.useEffect)(() => {
    const handleResize = () => {
      if (!container.current)
        return;
      const {
        clientWidth,
        clientHeight
      } = container.current;
      renderer.current.setSize(clientWidth, clientHeight);
      camera.current.aspect = clientWidth / clientHeight;
      camera.current.updateProjectionMatrix();
      renderFrame();
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [renderFrame]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: classes(armor_module_default.armor, className), ref: container, role: "img", "aria-label": alt, ...rest, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Transition, { unmount: true, in: !loaded && loaderVisible, timeout: msToNum(tokens.base.durationL), children: ({
      visible: visible2
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Loader, { className: armor_module_default.loader, "data-visible": visible2 }, void 0, false, {
      fileName: "app/routes/projects.volkihar-knight/armor.jsx",
      lineNumber: 206,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/projects.volkihar-knight/armor.jsx",
      lineNumber: 202,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("canvas", { className: armor_module_default.canvas, ref: canvas, "data-loaded": loaded && visible, style: cssProps({
      delay: numToMs(showDelay)
    }) }, void 0, false, {
      fileName: "app/routes/projects.volkihar-knight/armor.jsx",
      lineNumber: 208,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/projects.volkihar-knight/armor.jsx",
    lineNumber: 200,
    columnNumber: 10
  }, this);
};
_s(Armor, "5eBfin4pBCDeANjClIy0HE/UCtE=", false, function() {
  return [useInViewport, useReducedMotion, useSpring, useSpring];
});
_c = Armor;
var _c;
$RefreshReg$(_c, "Armor");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Armor
};
//# sourceMappingURL=/build/_shared/armor-WPZO7ABK.js.map
