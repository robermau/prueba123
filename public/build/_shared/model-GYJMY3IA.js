import {
  throttle
} from "/build/_shared/chunk-T34W37EF.js";
import {
  AmbientLight,
  Color,
  DirectionalLight,
  Group,
  HorizontalBlurShader,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  MeshDepthMaterial,
  OrthographicCamera,
  PerspectiveCamera,
  PlaneGeometry,
  SRGBColorSpace,
  Scene,
  ShaderMaterial,
  Vector3,
  VerticalBlurShader,
  WebGLRenderTarget,
  WebGLRenderer,
  cleanRenderer,
  cleanScene,
  modelLoader,
  removeLights,
  textureLoader
} from "/build/_shared/chunk-BEIC4OVV.js";
import {
  ModelAnimationType
} from "/build/_shared/chunk-EFEOB3ZE.js";
import {
  resolveSrcFromSrcSet
} from "/build/_shared/chunk-4UTHJ3DV.js";
import {
  useInViewport
} from "/build/_shared/chunk-OSM65NBD.js";
import {
  animate,
  classes,
  cssProps,
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

// app/components/model/model.jsx
var import_react = __toESM(require_react(), 1);

// app/components/model/model.module.css
var model_module_default = { "model": "model-module__model__qMqUg", "canvas": "model-module__canvas__iryn2" };

// app/components/model/model.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\model\\\\model.jsx"' + id);
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
    "app\\components\\model\\model.jsx"
  );
}
var MeshType = {
  Frame: "Frame",
  Logo: "Logo",
  Screen: "Screen"
};
var rotationSpringConfig = {
  stiffness: 40,
  damping: 20,
  mass: 1.4,
  restSpeed: 1e-3
};
var Model = ({
  models,
  show = true,
  showDelay = 0,
  cameraPosition = {
    x: 0,
    y: 0,
    z: 8
  },
  style,
  className,
  onLoad,
  alt,
  ...rest
}) => {
  _s();
  const [loaded, setLoaded] = (0, import_react.useState)(false);
  const container = (0, import_react.useRef)();
  const canvas = (0, import_react.useRef)();
  const camera = (0, import_react.useRef)();
  const modelGroup = (0, import_react.useRef)();
  const scene = (0, import_react.useRef)();
  const renderer = (0, import_react.useRef)();
  const shadowGroup = (0, import_react.useRef)();
  const renderTarget = (0, import_react.useRef)();
  const renderTargetBlur = (0, import_react.useRef)();
  const shadowCamera = (0, import_react.useRef)();
  const depthMaterial = (0, import_react.useRef)();
  const horizontalBlurMaterial = (0, import_react.useRef)();
  const verticalBlurMaterial = (0, import_react.useRef)();
  const plane = (0, import_react.useRef)();
  const lights = (0, import_react.useRef)();
  const blurPlane = (0, import_react.useRef)();
  const fillPlane = (0, import_react.useRef)();
  const isInViewport = useInViewport(container, false, {
    threshold: 0.2
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
    camera.current = new PerspectiveCamera(36, clientWidth / clientHeight, 0.1, 100);
    camera.current.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    scene.current = new Scene();
    modelGroup.current = new Group();
    scene.current.add(modelGroup.current);
    const ambientLight = new AmbientLight(16777215, 1.2);
    const keyLight = new DirectionalLight(16777215, 1.1);
    const fillLight = new DirectionalLight(16777215, 0.8);
    fillLight.position.set(-6, 2, 2);
    keyLight.position.set(0.5, 0, 0.866);
    lights.current = [ambientLight, keyLight, fillLight];
    lights.current.forEach((light) => scene.current.add(light));
    shadowGroup.current = new Group();
    scene.current.add(shadowGroup.current);
    shadowGroup.current.position.set(0, 0, -0.8);
    shadowGroup.current.rotateX(Math.PI / 2);
    const renderTargetSize = 512;
    const planeWidth = 8;
    const planeHeight = 8;
    const cameraHeight = 1.5;
    const shadowOpacity = 0.8;
    const shadowDarkness = 3;
    renderTarget.current = new WebGLRenderTarget(renderTargetSize, renderTargetSize);
    renderTarget.current.texture.generateMipmaps = false;
    renderTargetBlur.current = new WebGLRenderTarget(renderTargetSize, renderTargetSize);
    renderTargetBlur.current.texture.generateMipmaps = false;
    const planeGeometry = new PlaneGeometry(planeWidth, planeHeight).rotateX(Math.PI / 2);
    const planeMaterial = new MeshBasicMaterial({
      map: renderTarget.current.texture,
      opacity: shadowOpacity,
      transparent: true
    });
    plane.current = new Mesh(planeGeometry, planeMaterial);
    plane.current.scale.y = -1;
    shadowGroup.current.add(plane.current);
    blurPlane.current = new Mesh(planeGeometry);
    blurPlane.current.visible = false;
    shadowGroup.current.add(blurPlane.current);
    const fillMaterial = new MeshBasicMaterial({
      color: 16777215,
      opacity: 0,
      transparent: true
    });
    fillPlane.current = new Mesh(planeGeometry, fillMaterial);
    fillPlane.current.rotateX(Math.PI);
    fillPlane.current.position.y -= 1e-5;
    shadowGroup.current.add(fillPlane.current);
    shadowCamera.current = new OrthographicCamera(-planeWidth / 2, planeWidth / 2, planeHeight / 2, -planeHeight / 2, 0, cameraHeight);
    shadowCamera.current.rotation.x = Math.PI / 2;
    shadowGroup.current.add(shadowCamera.current);
    depthMaterial.current = new MeshDepthMaterial();
    depthMaterial.current.userData.darkness = {
      value: shadowDarkness
    };
    depthMaterial.current.onBeforeCompile = (shader) => {
      shader.uniforms.darkness = depthMaterial.current.userData.darkness;
      shader.fragmentShader = `
        uniform float darkness;
        ${shader.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );", "gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );")}
      `;
    };
    depthMaterial.current.depthTest = false;
    depthMaterial.current.depthWrite = false;
    horizontalBlurMaterial.current = new ShaderMaterial(HorizontalBlurShader);
    horizontalBlurMaterial.current.depthTest = false;
    verticalBlurMaterial.current = new ShaderMaterial(VerticalBlurShader);
    verticalBlurMaterial.current.depthTest = false;
    const unsubscribeX = rotationX.on("change", renderFrame);
    const unsubscribeY = rotationY.on("change", renderFrame);
    return () => {
      renderTarget.current.dispose();
      renderTargetBlur.current.dispose();
      removeLights(lights.current);
      cleanScene(scene.current);
      cleanRenderer(renderer.current);
      unsubscribeX();
      unsubscribeY();
    };
  }, []);
  const blurShadow = (0, import_react.useCallback)((amount) => {
    blurPlane.current.visible = true;
    blurPlane.current.material = horizontalBlurMaterial.current;
    blurPlane.current.material.uniforms.tDiffuse.value = renderTarget.current.texture;
    horizontalBlurMaterial.current.uniforms.h.value = amount * (1 / 256);
    renderer.current.setRenderTarget(renderTargetBlur.current);
    renderer.current.render(blurPlane.current, shadowCamera.current);
    blurPlane.current.material = verticalBlurMaterial.current;
    blurPlane.current.material.uniforms.tDiffuse.value = renderTargetBlur.current.texture;
    verticalBlurMaterial.current.uniforms.v.value = amount * (1 / 256);
    renderer.current.setRenderTarget(renderTarget.current);
    renderer.current.render(blurPlane.current, shadowCamera.current);
    blurPlane.current.visible = false;
  }, []);
  const renderFrame = (0, import_react.useCallback)(() => {
    const blurAmount = 5;
    const initialBackground = scene.current.background;
    scene.current.background = null;
    scene.current.overrideMaterial = depthMaterial.current;
    renderer.current.setRenderTarget(renderTarget.current);
    renderer.current.render(scene.current, shadowCamera.current);
    scene.current.overrideMaterial = null;
    blurShadow(blurAmount);
    blurShadow(blurAmount * 0.4);
    renderer.current.setRenderTarget(null);
    scene.current.background = initialBackground;
    modelGroup.current.rotation.x = rotationX.get();
    modelGroup.current.rotation.y = rotationY.get();
    renderer.current.render(scene.current, camera.current);
  }, [blurShadow, rotationX, rotationY]);
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
      rotationY.set(position.x / 2);
      rotationX.set(position.y / 2);
    }, 100);
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: classes(model_module_default.model, className), "data-loaded": loaded, style: cssProps({
    delay: numToMs(showDelay)
  }, style), ref: container, role: "img", "aria-label": alt, ...rest, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("canvas", { className: model_module_default.canvas, ref: canvas }, void 0, false, {
      fileName: "app/components/model/model.jsx",
      lineNumber: 295,
      columnNumber: 7
    }, this),
    models.map((model, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Device, { renderer, modelGroup, show, showDelay, renderFrame, index, setLoaded, onLoad, model }, JSON.stringify(model.position), false, {
      fileName: "app/components/model/model.jsx",
      lineNumber: 296,
      columnNumber: 37
    }, this))
  ] }, void 0, true, {
    fileName: "app/components/model/model.jsx",
    lineNumber: 291,
    columnNumber: 10
  }, this);
};
_s(Model, "B3XkTTt5rCLz8807Y9SGdicChk0=", false, function() {
  return [useInViewport, useReducedMotion, useSpring, useSpring];
});
_c = Model;
var Device = ({
  renderer,
  model,
  modelGroup,
  renderFrame,
  index,
  showDelay,
  setLoaded,
  onLoad,
  show
}) => {
  _s2();
  const [loadDevice, setLoadDevice] = (0, import_react.useState)();
  const reduceMotion = useReducedMotion();
  const placeholderScreen = (0, import_react.createRef)();
  (0, import_react.useEffect)(() => {
    const applyScreenTexture = async (texture, node) => {
      texture.colorSpace = SRGBColorSpace;
      texture.flipY = false;
      texture.anisotropy = renderer.current.capabilities.getMaxAnisotropy();
      texture.generateMipmaps = false;
      await renderer.current.initTexture(texture);
      node.material.color = new Color(16777215);
      node.material.transparent = true;
      node.material.map = texture;
    };
    const load = async () => {
      const {
        texture,
        position,
        url
      } = model;
      let loadFullResTexture;
      let playAnimation;
      const [placeholder, gltf] = await Promise.all([await textureLoader.loadAsync(texture.placeholder), await modelLoader.loadAsync(url)]);
      modelGroup.current.add(gltf.scene);
      gltf.scene.traverse(async (node) => {
        if (node.material) {
          node.material.color = new Color(2039845);
        }
        if (node.name === MeshType.Screen) {
          placeholderScreen.current = node.clone();
          placeholderScreen.current.material = node.material.clone();
          node.parent.add(placeholderScreen.current);
          placeholderScreen.current.material.opacity = 1;
          placeholderScreen.current.position.z += 1e-3;
          applyScreenTexture(placeholder, placeholderScreen.current);
          loadFullResTexture = async () => {
            const image = await resolveSrcFromSrcSet(texture);
            const fullSize = await textureLoader.loadAsync(image);
            await applyScreenTexture(fullSize, node);
            animate(1, 0, {
              onUpdate: (value) => {
                placeholderScreen.current.material.opacity = value;
                renderFrame();
              }
            });
          };
        }
      });
      const targetPosition = new Vector3(position.x, position.y, position.z);
      if (reduceMotion) {
        gltf.scene.position.set(...targetPosition.toArray());
      }
      if (model.animation === ModelAnimationType.SpringUp) {
        playAnimation = () => {
          const startPosition = new Vector3(targetPosition.x, targetPosition.y - 1, targetPosition.z);
          gltf.scene.position.set(...startPosition.toArray());
          animate(startPosition.y, targetPosition.y, {
            type: "spring",
            delay: (300 * index + showDelay) / 1e3,
            stiffness: 60,
            damping: 20,
            mass: 1,
            restSpeed: 1e-4,
            restDelta: 1e-4,
            onUpdate: (value) => {
              gltf.scene.position.y = value;
              renderFrame();
            }
          });
        };
      }
      if (model.animation === ModelAnimationType.LaptopOpen) {
        playAnimation = () => {
          const frameNode = gltf.scene.children.find((node) => node.name === MeshType.Frame);
          const startRotation = new Vector3(MathUtils.degToRad(90), 0, 0);
          const endRotation = new Vector3(0, 0, 0);
          gltf.scene.position.set(...targetPosition.toArray());
          frameNode.rotation.set(...startRotation.toArray());
          return animate(startRotation.x, endRotation.x, {
            type: "spring",
            delay: (300 * index + showDelay + 300) / 1e3,
            stiffness: 80,
            damping: 20,
            restSpeed: 1e-4,
            restDelta: 1e-4,
            onUpdate: (value) => {
              frameNode.rotation.x = value;
              renderFrame();
            }
          });
        };
      }
      return {
        loadFullResTexture,
        playAnimation
      };
    };
    setLoadDevice({
      start: load
    });
  }, []);
  (0, import_react.useEffect)(() => {
    if (!loadDevice || !show)
      return;
    let animation;
    const onModelLoad = async () => {
      const {
        loadFullResTexture,
        playAnimation
      } = await loadDevice.start();
      setLoaded(true);
      onLoad?.();
      if (!reduceMotion) {
        animation = playAnimation();
      }
      await loadFullResTexture();
      if (reduceMotion) {
        renderFrame();
      }
    };
    (0, import_react.startTransition)(() => {
      onModelLoad();
    });
    return () => {
      animation?.stop();
    };
  }, [loadDevice, show]);
};
_s2(Device, "GLCd2e6s5fVivvxZ6Z+Ka4Xvmmo=", false, function() {
  return [useReducedMotion];
});
_c2 = Device;
var _c;
var _c2;
$RefreshReg$(_c, "Model");
$RefreshReg$(_c2, "Device");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/model/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\model\\index.js"
  );
  import.meta.hot.lastModified = "1759533528975.7024";
}
export {
  Model
};
//# sourceMappingURL=/build/_shared/model-GYJMY3IA.js.map
