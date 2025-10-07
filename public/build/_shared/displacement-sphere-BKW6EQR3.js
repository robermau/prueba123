import {
  throttle
} from "/build/_shared/chunk-T34W37EF.js";
import {
  AmbientLight,
  DirectionalLight,
  LinearSRGBColorSpace,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  UniformsUtils,
  Vector2,
  WebGLRenderer,
  cleanRenderer,
  cleanScene,
  removeLights
} from "/build/_shared/chunk-BEIC4OVV.js";
import {
  useWindowSize
} from "/build/_shared/chunk-5WBOF7VA.js";
import {
  useTheme
} from "/build/_shared/chunk-P4P2JTXI.js";
import {
  useInViewport
} from "/build/_shared/chunk-OSM65NBD.js";
import {
  Transition
} from "/build/_shared/chunk-4NG5WP3M.js";
import {
  media,
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

// app/routes/home/displacement-sphere.jsx
var import_react = __toESM(require_react(), 1);

// app/routes/home/displacement-sphere.module.css
var displacement_sphere_module_default = { "canvas": "displacement-sphere-module__canvas__17BOs" };

// app/routes/home/displacement-sphere.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\home\\\\displacement-sphere.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\home\\displacement-sphere.jsx"
  );
}
var fragmentShader = await fetch("/shaders/carousel-fragment.glsl").then((r) => r.text());
var vertexShader = await fetch("/shaders/carousel-vertex.glsl").then((r) => r.text());
var springConfig = {
  stiffness: 30,
  damping: 20,
  mass: 2
};
var DisplacementSphere = (props) => {
  _s();
  const {
    theme
  } = useTheme();
  const start = (0, import_react.useRef)(Date.now());
  const canvasRef = (0, import_react.useRef)();
  const mouse = (0, import_react.useRef)();
  const renderer = (0, import_react.useRef)();
  const camera = (0, import_react.useRef)();
  const scene = (0, import_react.useRef)();
  const lights = (0, import_react.useRef)();
  const uniforms = (0, import_react.useRef)();
  const material = (0, import_react.useRef)();
  const geometry = (0, import_react.useRef)();
  const sphere = (0, import_react.useRef)();
  const reduceMotion = useReducedMotion();
  const isInViewport = useInViewport(canvasRef);
  const windowSize = useWindowSize();
  const rotationX = useSpring(0, springConfig);
  const rotationY = useSpring(0, springConfig);
  (0, import_react.useEffect)(() => {
    const {
      innerWidth,
      innerHeight
    } = window;
    mouse.current = new Vector2(0.8, 0.5);
    renderer.current = new WebGLRenderer({
      canvas: canvasRef.current,
      antialias: false,
      alpha: true,
      powerPreference: "high-performance",
      failIfMajorPerformanceCaveat: true
    });
    renderer.current.setSize(innerWidth, innerHeight);
    renderer.current.setPixelRatio(1);
    renderer.current.outputColorSpace = LinearSRGBColorSpace;
    camera.current = new PerspectiveCamera(54, innerWidth / innerHeight, 0.1, 100);
    camera.current.position.z = 52;
    scene.current = new Scene();
    material.current = new MeshPhongMaterial();
    material.current.onBeforeCompile = (shader) => {
      uniforms.current = UniformsUtils.merge([shader.uniforms, {
        time: {
          type: "f",
          value: 0
        }
      }]);
      shader.uniforms = uniforms.current;
      shader.vertexShader = vertexShader;
      shader.fragmentShader = fragmentShader;
    };
    (0, import_react.startTransition)(() => {
      geometry.current = new SphereGeometry(32, 128, 128);
      sphere.current = new Mesh(geometry.current, material.current);
      sphere.current.position.z = 0;
      sphere.current.modifier = Math.random();
      scene.current.add(sphere.current);
    });
    return () => {
      cleanScene(scene.current);
      cleanRenderer(renderer.current);
    };
  }, []);
  (0, import_react.useEffect)(() => {
    const dirLight = new DirectionalLight(16777215, theme === "light" ? 1.8 : 2);
    const ambientLight = new AmbientLight(16777215, theme === "light" ? 2.7 : 0.4);
    dirLight.position.z = 200;
    dirLight.position.x = 100;
    dirLight.position.y = 100;
    lights.current = [dirLight, ambientLight];
    lights.current.forEach((light) => scene.current.add(light));
    return () => {
      removeLights(lights.current);
    };
  }, [theme]);
  (0, import_react.useEffect)(() => {
    const {
      width,
      height
    } = windowSize;
    const adjustedHeight = height + height * 0.3;
    renderer.current.setSize(width, adjustedHeight);
    camera.current.aspect = width / adjustedHeight;
    camera.current.updateProjectionMatrix();
    if (reduceMotion) {
      renderer.current.render(scene.current, camera.current);
    }
    if (width <= media.mobile) {
      sphere.current.position.x = 14;
      sphere.current.position.y = 10;
    } else if (width <= media.tablet) {
      sphere.current.position.x = 18;
      sphere.current.position.y = 14;
    } else {
      sphere.current.position.x = 22;
      sphere.current.position.y = 16;
    }
  }, [reduceMotion, windowSize]);
  (0, import_react.useEffect)(() => {
    const onMouseMove = throttle((event) => {
      const position = {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight
      };
      rotationX.set(position.y / 2);
      rotationY.set(position.x / 2);
    }, 100);
    if (!reduceMotion && isInViewport) {
      window.addEventListener("mousemove", onMouseMove);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [isInViewport, reduceMotion, rotationX, rotationY]);
  (0, import_react.useEffect)(() => {
    let animation;
    const animate = () => {
      animation = requestAnimationFrame(animate);
      if (uniforms.current !== void 0) {
        uniforms.current.time.value = 5e-5 * (Date.now() - start.current);
      }
      sphere.current.rotation.z += 1e-3;
      sphere.current.rotation.x = rotationX.get();
      sphere.current.rotation.y = rotationY.get();
      renderer.current.render(scene.current, camera.current);
    };
    if (!reduceMotion && isInViewport) {
      animate();
    } else {
      renderer.current.render(scene.current, camera.current);
    }
    return () => {
      cancelAnimationFrame(animation);
    };
  }, [isInViewport, reduceMotion, rotationX, rotationY]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Transition, { in: true, timeout: 3e3, nodeRef: canvasRef, children: ({
    visible,
    nodeRef
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("canvas", { "aria-hidden": true, className: displacement_sphere_module_default.canvas, "data-visible": visible, ref: nodeRef, ...props }, void 0, false, {
    fileName: "app/routes/home/displacement-sphere.jsx",
    lineNumber: 180,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/home/displacement-sphere.jsx",
    lineNumber: 176,
    columnNumber: 10
  }, this);
};
_s(DisplacementSphere, "2bULdpi2BvRvy2RH5wPOwopZ4nc=", false, function() {
  return [useTheme, useReducedMotion, useInViewport, useWindowSize, useSpring, useSpring];
});
_c = DisplacementSphere;
var _c;
$RefreshReg$(_c, "DisplacementSphere");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  DisplacementSphere
};
//# sourceMappingURL=/build/_shared/displacement-sphere-BKW6EQR3.js.map
