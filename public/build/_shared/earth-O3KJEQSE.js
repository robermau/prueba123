import {
  throttle
} from "/build/_shared/chunk-T34W37EF.js";
import {
  ACESFilmicToneMapping,
  AmbientLight,
  AnimationMixer,
  Clock,
  DirectionalLight,
  EquirectangularReflectionMapping,
  HDRCubeTextureLoader,
  LinearFilter,
  LoopOnce,
  OrbitControls,
  PMREMGenerator,
  PerspectiveCamera,
  Raycaster,
  SRGBColorSpace,
  Scene,
  Sprite,
  Vector2,
  Vector3,
  WebGLRenderer,
  cleanRenderer,
  cleanScene,
  getChild,
  modelLoader,
  removeLights,
  textureLoader
} from "/build/_shared/chunk-BEIC4OVV.js";
import {
  useWindowSize
} from "/build/_shared/chunk-5WBOF7VA.js";
import {
  Section
} from "/build/_shared/chunk-E5UFAUNJ.js";
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
  media,
  msToNum,
  numToPx,
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

// app/assets/earth.glb
var earth_default = "/build/_assets/earth-KECVD2W3.glb";

// app/assets/milkyway-nx.hdr
var milkyway_nx_default = "/build/_assets/milkyway-nx-B2LSWIPY.hdr";

// app/assets/milkyway-ny.hdr
var milkyway_ny_default = "/build/_assets/milkyway-ny-ABSFT437.hdr";

// app/assets/milkyway-nz.hdr
var milkyway_nz_default = "/build/_assets/milkyway-nz-L425LJDA.hdr";

// app/assets/milkyway-px.hdr
var milkyway_px_default = "/build/_assets/milkyway-px-FERHKW3X.hdr";

// app/assets/milkyway-py.hdr
var milkyway_py_default = "/build/_assets/milkyway-py-PLXMGDNB.hdr";

// app/assets/milkyway-pz.hdr
var milkyway_pz_default = "/build/_assets/milkyway-pz-B33EWIJV.hdr";

// app/assets/milkyway.jpg
var milkyway_default = "/build/_assets/milkyway-37ER5DRR.jpg";

// app/routes/projects.click-shop/earth.jsx
var import_react = __toESM(require_react(), 1);

// app/utils/clamp.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\utils\\clamp.js"
  );
  import.meta.hot.lastModified = "1759533529020.3293";
}
var clamp = (number, boundOne, boundTwo) => {
  if (!boundTwo) {
    return Math.max(number, boundOne) === boundOne ? number : boundOne;
  } else if (Math.min(number, boundOne) === number) {
    return boundOne;
  } else if (Math.max(number, boundTwo) === number) {
    return boundTwo;
  }
  return number;
};

// app/routes/projects.click-shop/earth.module.css
var earth_module_default = { "earth": "earth-module__earth__igZ0G", "loader": "earth-module__loader__gNmwq", "viewport": "earth-module__viewport__qz30s", "canvas": "earth-module__canvas__Z55yX", "labels": "earth-module__labels__yZjqu", "label": "earth-module__label__bd20K", "vignette": "earth-module__vignette__m0bXx", "sections": "earth-module__sections__mK8ch", "section": "earth-module__section__a6mmQ" };

// app/routes/projects.click-shop/earth.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\projects.click-shop\\\\earth.jsx"' + id);
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
    "app\\routes\\projects.click-shop\\earth.jsx"
  );
}
var nullTarget = {
  x: 0,
  y: 0,
  z: 2
};
var interpolatePosition = (value, nextValue, percent) => value + percent * (nextValue - value);
var positionToString = (value) => Object.keys(value).map((key) => parseFloat(Math.round(value[key] * 100) / 100).toFixed(2)).join(", ");
var getPositionValues = (section) => {
  if (!section || !section.camera)
    return nullTarget;
  return {
    x: section.camera[0],
    y: section.camera[1],
    z: section.camera[2]
  };
};
var isEqualPosition = (position1, position2) => {
  const round = (num = 0) => Math.round((num + Number.EPSILON) * 100) / 100;
  return round(position1?.x) === round(position2?.x) && round(position1?.y) === round(position2?.y) && round(position1?.z) === round(position2?.z);
};
var cameraSpringConfig = {
  stiffness: 80,
  damping: 40,
  mass: 2,
  restSpeed: 1e-3,
  restDelta: 1e-3
};
var chunkSpringConfig = {
  stiffness: 40,
  damping: 30,
  mass: 2,
  restSpeed: 1e-3,
  restDelta: 1e-3
};
var opacitySpringConfig = {
  stiffness: 40,
  damping: 30
};
var EarthContext = (0, import_react.createContext)({});
var Earth = ({
  position = [0, 0, 0],
  scale = 1,
  hideMeshes = [],
  labels = [],
  className,
  children
}) => {
  _s();
  const [loaded, setLoaded] = (0, import_react.useState)(false);
  const [grabbing, setGrabbing] = (0, import_react.useState)(false);
  const [visible, setVisible] = (0, import_react.useState)(false);
  const [loaderVisible, setLoaderVisible] = (0, import_react.useState)(false);
  const sectionRefs = (0, import_react.useRef)([]);
  const container = (0, import_react.useRef)();
  const labelContainer = (0, import_react.useRef)();
  const canvas = (0, import_react.useRef)();
  const scene = (0, import_react.useRef)();
  const renderer = (0, import_react.useRef)();
  const camera = (0, import_react.useRef)();
  const clock = (0, import_react.useRef)();
  const mouse = (0, import_react.useRef)();
  const raycaster = (0, import_react.useRef)();
  const sceneModel = (0, import_react.useRef)();
  const animations = (0, import_react.useRef)();
  const mixer = (0, import_react.useRef)();
  const inViewport = useInViewport(canvas);
  const animationFrame = (0, import_react.useRef)();
  const initCameraPosition = (0, import_react.useRef)(getPositionValues(sectionRefs.current[0]));
  const labelElements = (0, import_react.useRef)([]);
  const controls = (0, import_react.useRef)();
  const envMap = (0, import_react.useRef)();
  const contentAdded = (0, import_react.useRef)();
  const mounted = (0, import_react.useRef)();
  const {
    width: windowWidth,
    height: windowHeight
  } = useWindowSize();
  const reduceMotion = useReducedMotion();
  const cameraXSpring = useSpring(0, cameraSpringConfig);
  const cameraYSpring = useSpring(0, cameraSpringConfig);
  const cameraZSpring = useSpring(0, cameraSpringConfig);
  const chunkXSpring = useSpring(0, chunkSpringConfig);
  const chunkYSpring = useSpring(0, chunkSpringConfig);
  const chunkZSpring = useSpring(0, chunkSpringConfig);
  const opacitySpring = useSpring(0, opacitySpringConfig);
  const renderFrame = (0, import_react.useCallback)(() => {
    if (!inViewport) {
      cancelAnimationFrame(animationFrame.current);
      return;
    }
    animationFrame.current = requestAnimationFrame(renderFrame);
    const delta = clock.current.getDelta();
    mixer.current.update(delta);
    controls.current.update();
    renderer.current.render(scene.current, camera.current);
    labelElements.current.forEach((label) => {
      const {
        element,
        position: position2,
        sprite
      } = label;
      const vector = new Vector3(...position2);
      const meshDistance = camera.current.position.distanceTo(sceneModel.current.position);
      const spriteDistance = camera.current.position.distanceTo(sprite.position);
      const spriteBehindObject = spriteDistance > meshDistance;
      vector.project(camera.current);
      vector.x = Math.round((0.5 + vector.x / 2) * window.innerWidth);
      vector.y = Math.round((0.5 - vector.y / 2) * window.innerHeight);
      element.style.setProperty("--posX", numToPx(vector.x));
      element.style.setProperty("--posY", numToPx(vector.y));
      if (spriteBehindObject) {
        element.dataset.occluded = true;
      } else {
        element.dataset.occluded = false;
      }
    });
  }, [inViewport]);
  (0, import_react.useEffect)(() => {
    mounted.current = true;
    const {
      innerWidth,
      innerHeight
    } = window;
    renderer.current = new WebGLRenderer({
      canvas: canvas.current,
      antialias: false,
      alpha: true,
      powerPreference: "high-performance",
      failIfMajorPerformanceCaveat: true
    });
    renderer.current.setPixelRatio(1);
    renderer.current.outputColorSpace = SRGBColorSpace;
    renderer.current.toneMapping = ACESFilmicToneMapping;
    camera.current = new PerspectiveCamera(54, innerWidth / innerHeight, 0.1, 100);
    camera.current.position.x = initCameraPosition.current.x;
    camera.current.position.y = initCameraPosition.current.y;
    camera.current.position.z = initCameraPosition.current.z;
    camera.current.lookAt(0, 0, 0);
    cameraXSpring.set(camera.current.position.x, false);
    cameraYSpring.set(camera.current.position.y, false);
    cameraZSpring.set(camera.current.position.z, false);
    scene.current = new Scene();
    clock.current = new Clock();
    raycaster.current = new Raycaster();
    const ambientLight = new AmbientLight(2236962, 0.05);
    const dirLight = new DirectionalLight(16777215, 1.5);
    dirLight.position.set(3, 0, 1);
    const lights = [ambientLight, dirLight];
    lights.forEach((light) => scene.current.add(light));
    controls.current = new OrbitControls(camera.current, canvas.current);
    controls.current.enableZoom = false;
    controls.current.enablePan = false;
    controls.current.enableDamping = false;
    controls.current.rotateSpeed = 0.5;
    return () => {
      mounted.current = false;
      cancelAnimationFrame(animationFrame.current);
      removeLights(lights);
      cleanScene(scene.current);
      cleanRenderer(renderer.current);
    };
  }, []);
  (0, import_react.useEffect)(() => {
    const handleControlStart = () => {
      setGrabbing(true);
      cameraXSpring.stop();
      cameraYSpring.stop();
      cameraZSpring.stop();
    };
    const handleControlEnd = () => {
      cameraXSpring.set(camera.current.position.x, false);
      cameraYSpring.set(camera.current.position.y, false);
      cameraZSpring.set(camera.current.position.z, false);
      setGrabbing(false);
    };
    controls.current.addEventListener("start", handleControlStart);
    controls.current.addEventListener("end", handleControlEnd);
    return () => {
      controls.current.removeEventListener("start", handleControlStart);
      controls.current.removeEventListener("end", handleControlEnd);
    };
  }, [cameraXSpring, cameraYSpring, cameraZSpring]);
  (0, import_react.useEffect)(() => {
    if (!loaded)
      return;
    const chunk = getChild("Chunk", sceneModel.current);
    const atmosphere = getChild("Atmosphere", sceneModel.current);
    const handleCameraChange = (axis, value) => {
      camera.current.position[axis] = value;
    };
    const unsubscribeCameraX = cameraXSpring.on("change", (value) => handleCameraChange("x", value));
    const unsubscribeCameraY = cameraYSpring.on("change", (value) => handleCameraChange("y", value));
    const unsubscribeCameraZ = cameraZSpring.on("change", (value) => handleCameraChange("z", value));
    const handleChunkChange = (axis, value) => {
      chunk.position[axis] = value;
    };
    const unsubscribeChunkX = chunkXSpring.on("change", (value) => handleChunkChange("x", value));
    const unsubscribeChunkY = chunkYSpring.on("change", (value) => handleChunkChange("y", value));
    const unsubscribeChunkZ = chunkZSpring.on("change", (value) => handleChunkChange("z", value));
    const unsubscribeOpacity = opacitySpring.on("change", (value) => {
      atmosphere.material.opacity = value;
    });
    return () => {
      unsubscribeCameraX();
      unsubscribeCameraY();
      unsubscribeCameraZ();
      unsubscribeChunkX();
      unsubscribeChunkY();
      unsubscribeChunkZ();
      unsubscribeOpacity();
    };
  }, [cameraXSpring, cameraYSpring, cameraZSpring, chunkXSpring, chunkYSpring, chunkZSpring, loaded, opacitySpring]);
  (0, import_react.useEffect)(() => {
    if (windowWidth <= media.tablet) {
      controls.current.enabled = false;
    }
  }, [windowWidth]);
  (0, import_react.useEffect)(() => {
    if (loaded)
      return;
    const hdrLoader = new HDRCubeTextureLoader();
    const pmremGenerator = new PMREMGenerator(renderer.current);
    pmremGenerator.compileCubemapShader();
    const loadModel = async () => {
      const gltf = await modelLoader.loadAsync(earth_default);
      sceneModel.current = gltf.scene;
      animations.current = gltf.animations;
      mixer.current = new AnimationMixer(sceneModel.current);
      mixer.current.timeScale = 0.1;
      sceneModel.current.traverse(async (child) => {
        const {
          material,
          name
        } = child;
        if (name === "Atmosphere") {
          material.alphaMap = material.map;
        }
        if (material) {
          await renderer.current.initTexture(material);
        }
      });
      sceneModel.current.position.x = position[0];
      sceneModel.current.position.y = position[1];
      sceneModel.current.position.z = position[2];
      sceneModel.current.scale.x = scale;
      sceneModel.current.scale.y = scale;
      sceneModel.current.scale.z = scale;
    };
    const loadEnv = async () => {
      const hdrTexture = await hdrLoader.loadAsync([milkyway_nx_default, milkyway_ny_default, milkyway_nz_default, milkyway_px_default, milkyway_py_default, milkyway_pz_default]);
      hdrTexture.magFilter = LinearFilter;
      envMap.current = pmremGenerator.fromCubemap(hdrTexture);
      pmremGenerator.dispose();
      await renderer.current.initTexture(envMap.current.texture);
    };
    const loadBackground = async () => {
      const backgroundTexture = await textureLoader.loadAsync(milkyway_default);
      backgroundTexture.mapping = EquirectangularReflectionMapping;
      backgroundTexture.colorSpace = SRGBColorSpace;
      scene.current.background = backgroundTexture;
      await renderer.current.initTexture(backgroundTexture);
    };
    const handleLoad = async () => {
      await Promise.all([loadBackground(), loadEnv(), loadModel()]);
      sceneModel.current.traverse(({
        material
      }) => {
        if (material) {
          material.envMap = envMap.current.texture;
          material.needsUpdate = true;
        }
      });
      if (mounted.current) {
        setLoaded(true);
      }
    };
    (0, import_react.startTransition)(() => {
      handleLoad();
      setTimeout(() => {
        setLoaderVisible(true);
      }, 1e3);
    });
  }, [loaded, position, scale]);
  (0, import_react.useEffect)(() => {
    if (loaded && !contentAdded.current) {
      scene.current.add(sceneModel.current);
      contentAdded.current = true;
    }
    if (loaded && inViewport) {
      setVisible(true);
      renderFrame();
    }
    return () => {
      cancelAnimationFrame(animationFrame.current);
    };
  }, [renderFrame, inViewport, loaded]);
  (0, import_react.useEffect)(() => {
    if (loaded) {
      labelContainer.current.innerHTML = "";
      labelElements.current = labels.map((label) => {
        const element = document.createElement("div");
        element.classList.add(earth_module_default.label);
        element.dataset.hidden = true;
        element.style.setProperty("--delay", `${label.delay || 0}ms`);
        element.textContent = label.text;
        labelContainer.current.appendChild(element);
        const sprite = new Sprite();
        sprite.position.set(...label.position);
        sprite.scale.set(60, 60, 1);
        return {
          element,
          ...label,
          sprite
        };
      });
    }
  }, [labels, loaded]);
  (0, import_react.useEffect)(() => {
    renderer.current.setSize(windowWidth, windowHeight);
    camera.current.aspect = windowWidth / windowHeight;
    camera.current.updateProjectionMatrix();
  }, [windowWidth, windowHeight]);
  (0, import_react.useEffect)(() => {
    const currentCanvas = canvas.current;
    const handleMouseUp = (event) => {
      const {
        innerWidth,
        innerHeight
      } = window;
      const cameraPosition = positionToString(camera.current.position);
      console.info({
        cameraPosition
      });
      mouse.current = new Vector2(event.clientX / innerWidth * 2 - 1, -(event.clientY / innerHeight) * 2 + 1);
      raycaster.current.setFromCamera(mouse.current, camera.current);
      const intersects = raycaster.current.intersectObjects(scene.current.children, true);
      if (intersects.length > 0) {
        const clickPosition = positionToString(intersects[0].point);
        console.info({
          clickPosition
        });
      }
    };
    if (true) {
      currentCanvas.addEventListener("click", handleMouseUp);
    }
    return () => {
      currentCanvas.removeEventListener("click", handleMouseUp);
    };
  }, []);
  const handleScroll = (0, import_react.useCallback)(() => {
    if (!container.current)
      return;
    const {
      offsetTop
    } = container.current;
    const {
      innerHeight
    } = window;
    const currentScrollY = window.scrollY - offsetTop;
    let prevTarget;
    const updateMeshes = (index) => {
      const visibleMeshes = sectionRefs.current[index].meshes;
      sceneModel.current.traverse((child) => {
        const {
          name
        } = child;
        const chunk = getChild("Chunk", sceneModel.current);
        const isVisible = visibleMeshes?.includes(name);
        const isHidden = hideMeshes?.includes(name);
        if (isVisible) {
          if (name === "Atmosphere") {
            child.visible = true;
            opacitySpring.set(1);
          } else if (name === "Chunk") {
            const chunkTarget = new Vector3(-0.4, 0.4, 0.4);
            child.visible = true;
            if (reduceMotion) {
              child.position.set(...chunkTarget.toArray());
            } else {
              chunkXSpring.set(chunkTarget.x);
              chunkYSpring.set(chunkTarget.y);
              chunkZSpring.set(chunkTarget.z);
            }
          } else if (name === "EarthFull" && chunk.visible) {
            child.visible = false;
          } else {
            child.visible = true;
          }
        } else if (isHidden && !isVisible) {
          if (name === "Atmosphere") {
            opacitySpring.set(0);
          } else if (name === "Chunk") {
            const chunkTarget = new Vector3(0, 0, 0);
            if (isEqualPosition(chunkTarget, chunk.position)) {
              child.visible = false;
            }
            chunkXSpring.set(chunkTarget.x);
            chunkYSpring.set(chunkTarget.y);
            chunkZSpring.set(chunkTarget.z);
          } else if (name === "EarthPartial" && chunk.visible) {
            child.visible = true;
          } else {
            child.visible = false;
          }
        }
      });
    };
    const updateAnimation = (index) => {
      const sectionAnimations = sectionRefs.current[index].animations;
      if (reduceMotion)
        return;
      animations.current.forEach((clip, index2) => {
        if (!sectionAnimations.find((section) => section.includes(index2.toString()))) {
          const animation = mixer.current.clipAction(clip);
          animation.reset().stop();
        }
      });
      if (animations.current.length && sectionRefs.current[index].animations) {
        sectionAnimations.forEach((animItem) => {
          const values = animItem.split(":");
          const clip = animations.current[Number(values[0])];
          const animation = mixer.current.clipAction(clip);
          if (!values[1] || values[1] !== "loop") {
            animation.clampWhenFinished = true;
            animation.loop = LoopOnce;
          }
          animation.play();
        });
      }
    };
    const updateLabels = (index) => {
      labelElements.current.forEach((label) => {
        if (label.hidden) {
          label.element.dataset.hidden = true;
          label.element.setAttribute("aria-hidden", true);
        }
      });
      const sectionLabels = sectionRefs.current[index].labels;
      sectionLabels.forEach((label) => {
        const matches = labelElements.current.filter((item) => item.text === label);
        matches.forEach((match) => {
          match.element.dataset.hidden = false;
          match.element.setAttribute("aria-hidden", false);
        });
      });
    };
    const update = () => {
      const sectionCount = sectionRefs.current.length - 1;
      const absoluteSection = Math.floor(currentScrollY / innerHeight);
      const currentSectionIndex = clamp(absoluteSection, 0, sectionCount);
      const currentSection = sectionRefs.current[currentSectionIndex];
      const nextSection = sectionRefs.current[currentSectionIndex + 1];
      const currentTarget = getPositionValues(currentSection) || nullTarget;
      const nextTarget = getPositionValues(nextSection) || nullTarget;
      const sectionScrolled = (currentScrollY - innerHeight * currentSectionIndex) / innerHeight;
      const scrollPercent = clamp(sectionScrolled, 0, 1);
      const currentX = interpolatePosition(currentTarget.x, nextTarget.x, scrollPercent);
      const currentY = interpolatePosition(currentTarget.y, nextTarget.y, scrollPercent);
      const currentZ = interpolatePosition(currentTarget.z, nextTarget.z, scrollPercent);
      if (prevTarget !== currentTarget && sectionRefs.current.length && currentSection) {
        updateMeshes(currentSectionIndex);
        updateAnimation(currentSectionIndex);
        updateLabels(currentSectionIndex);
      }
      prevTarget = currentTarget;
      if (grabbing)
        return;
      if (reduceMotion) {
        camera.current.position.set(currentX, currentY, currentZ);
        return;
      }
      cameraXSpring.set(currentX);
      cameraYSpring.set(currentY);
      cameraZSpring.set(currentZ);
    };
    requestAnimationFrame(update);
  }, [cameraXSpring, cameraYSpring, cameraZSpring, chunkXSpring, chunkYSpring, chunkZSpring, grabbing, hideMeshes, opacitySpring, reduceMotion]);
  (0, import_react.useEffect)(() => {
    const throttledScroll = throttle(handleScroll, 100);
    if (loaded && inViewport) {
      window.addEventListener("scroll", throttledScroll);
    }
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [handleScroll, inViewport, loaded, opacitySpring]);
  const registerSection = (0, import_react.useCallback)((section) => {
    sectionRefs.current = [...sectionRefs.current, section];
  }, []);
  const unregisterSection = (0, import_react.useCallback)((section) => {
    sectionRefs.current = sectionRefs.current.filter((item) => item !== section);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EarthContext.Provider, { value: {
    registerSection,
    unregisterSection
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: classes(earth_module_default.earth, className), ref: container, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: earth_module_default.viewport, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("canvas", { className: earth_module_default.canvas, "data-visible": loaded && visible, "data-grabbing": grabbing, ref: canvas }, void 0, false, {
        fileName: "app/routes/projects.click-shop/earth.jsx",
        lineNumber: 550,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: earth_module_default.labels, "aria-live": "polite", ref: labelContainer }, void 0, false, {
        fileName: "app/routes/projects.click-shop/earth.jsx",
        lineNumber: 552,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: earth_module_default.vignette }, void 0, false, {
        fileName: "app/routes/projects.click-shop/earth.jsx",
        lineNumber: 553,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/projects.click-shop/earth.jsx",
      lineNumber: 549,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: earth_module_default.sections, children }, void 0, false, {
      fileName: "app/routes/projects.click-shop/earth.jsx",
      lineNumber: 555,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Transition, { unmount: true, in: !loaded && loaderVisible, timeout: msToNum(tokens.base.durationL), children: (visible2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { className: earth_module_default.loader, "data-visible": visible2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Loader, {}, void 0, false, {
      fileName: "app/routes/projects.click-shop/earth.jsx",
      lineNumber: 559,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/projects.click-shop/earth.jsx",
      lineNumber: 558,
      columnNumber: 23
    }, this) }, void 0, false, {
      fileName: "app/routes/projects.click-shop/earth.jsx",
      lineNumber: 556,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/projects.click-shop/earth.jsx",
    lineNumber: 548,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/projects.click-shop/earth.jsx",
    lineNumber: 544,
    columnNumber: 10
  }, this);
};
_s(Earth, "xgJD/vdxTYyVQ4C2I/cyrqNWQdE=", false, function() {
  return [useInViewport, useWindowSize, useReducedMotion, useSpring, useSpring, useSpring, useSpring, useSpring, useSpring, useSpring];
});
_c = Earth;
var EarthSection = _s2((0, import_react.memo)(_c2 = _s2(({
  children,
  scrim,
  scrimReverse,
  className,
  camera = [0, 0, 0],
  animations = [],
  meshes = [],
  labels = []
}) => {
  _s2();
  const {
    registerSection,
    unregisterSection
  } = (0, import_react.useContext)(EarthContext);
  const sectionRef = (0, import_react.useRef)();
  const stringifiedDeps = JSON.stringify(animations) + JSON.stringify(camera) + JSON.stringify(labels) + JSON.stringify(meshes);
  (0, import_react.useEffect)(() => {
    const section = {
      camera,
      animations,
      meshes,
      labels,
      sectionRef
    };
    registerSection(section);
    return () => {
      unregisterSection(section);
    };
  }, [stringifiedDeps, registerSection, unregisterSection]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: classes(earth_module_default.section, className), "data-scrim": scrim, "data-scrim-reverse": scrimReverse, ref: sectionRef, children }, void 0, false, {
    fileName: "app/routes/projects.click-shop/earth.jsx",
    lineNumber: 600,
    columnNumber: 10
  }, this);
}, "nNFNSOG9ePEJfIF4M4dEq5wXmPU=")), "nNFNSOG9ePEJfIF4M4dEq5wXmPU=");
_c3 = EarthSection;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "Earth");
$RefreshReg$(_c2, "EarthSection$memo");
$RefreshReg$(_c3, "EarthSection");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Earth,
  EarthSection
};
//# sourceMappingURL=/build/_shared/earth-O3KJEQSE.js.map
