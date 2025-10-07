import {
  VisuallyHidden
} from "/build/_shared/chunk-5U3ZZGYI.js";
import {
  classes,
  useReducedMotion,
  useSpring
} from "/build/_shared/chunk-VSMHCMS2.js";
import {
  createHotContext
} from "/build/_shared/chunk-HTDTVXTX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GIAAN75Z.js";
import {
  require_react
} from "/build/_shared/chunk-3DYT5NE2.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/decoder-text/decoder-text.jsx
var import_react = __toESM(require_react(), 1);

// app/utils/delay.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\utils\\delay.js"
  );
  import.meta.hot.lastModified = "1759533529021.6753";
}
async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// app/components/decoder-text/decoder-text.module.css
var decoder_text_module_default = { "text": "decoder-text-module__text__BHlln", "glyph": "decoder-text-module__glyph__atVYn", "value": "decoder-text-module__value__NNNE7" };

// app/components/decoder-text/decoder-text.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\decoder-text\\\\decoder-text.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\decoder-text\\decoder-text.jsx"
  );
}
var glyphs = ["\u30A2", "\u30A4", "\u30A6", "\u30A8", "\u30AA", "\u30AB", "\u30AD", "\u30AF", "\u30B1", "\u30B3", "\u30B5", "\u30B7", "\u30B9", "\u30BB", "\u30BD", "\u30BF", "\u30C1", "\u30C4", "\u30C6", "\u30C8", "\u30CA", "\u30CB", "\u30CC", "\u30CD", "\u30CE", "\u30CF", "\u30D2", "\u30D5", "\u30D8", "\u30DB", "\u30DE", "\u30DF", "\u30E0", "\u30E1", "\u30E2", "\u30E4", "\u30E6", "\u30E8", "\u30FC", "\u30E9", "\u30EA", "\u30EB", "\u30EC", "\u30ED", "\u30EF", "\u30F0", "\u30F1", "\u30F2", "\u30F3", "\u30AC", "\u30AE", "\u30B0", "\u30B2", "\u30B4", "\u30B6", "\u30B8", "\u30BA", "\u30BC", "\u30BE", "\u30C0", "\u30C2", "\u30C5", "\u30C7", "\u30C9", "\u30D0", "\u30D3", "\u30D6", "\u30D9", "\u30DC", "\u30D1", "\u30D4", "\u30D7", "\u30DA", "\u30DD"];
var CharType = {
  Glyph: "glyph",
  Value: "value"
};
function shuffle(content, output, position) {
  return content.map((value, index) => {
    if (index < position) {
      return {
        type: CharType.Value,
        value
      };
    }
    if (position % 1 < 0.5) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return {
        type: CharType.Glyph,
        value: glyphs[rand]
      };
    }
    return {
      type: CharType.Glyph,
      value: output[index].value
    };
  });
}
var DecoderText = _s((0, import_react.memo)(_c = _s(({
  text,
  start = true,
  delay: startDelay = 0,
  className,
  ...rest
}) => {
  _s();
  const output = (0, import_react.useRef)([{
    type: CharType.Glyph,
    value: ""
  }]);
  const container = (0, import_react.useRef)();
  const reduceMotion = useReducedMotion();
  const decoderSpring = useSpring(0, {
    stiffness: 8,
    damping: 5
  });
  (0, import_react.useEffect)(() => {
    const containerInstance = container.current;
    const content = text.split("");
    let animation;
    const renderOutput = () => {
      const characterMap = output.current.map((item) => {
        return `<span class="${decoder_text_module_default[item.type]}">${item.value}</span>`;
      });
      containerInstance.innerHTML = characterMap.join("");
    };
    const unsubscribeSpring = decoderSpring.on("change", (value) => {
      output.current = shuffle(content, output.current, value);
      renderOutput();
    });
    const startSpring = async () => {
      await delay(startDelay);
      decoderSpring.set(content.length);
    };
    if (start && !animation && !reduceMotion) {
      startSpring();
    }
    if (reduceMotion) {
      output.current = content.map((value, index) => ({
        type: CharType.Value,
        value: content[index]
      }));
      renderOutput();
    }
    return () => {
      unsubscribeSpring?.();
    };
  }, [decoderSpring, reduceMotion, start, startDelay, text]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: classes(decoder_text_module_default.text, className), ...rest, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, { className: decoder_text_module_default.label, children: text }, void 0, false, {
      fileName: "app/components/decoder-text/decoder-text.jsx",
      lineNumber: 106,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": true, className: decoder_text_module_default.content, ref: container }, void 0, false, {
      fileName: "app/components/decoder-text/decoder-text.jsx",
      lineNumber: 107,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/decoder-text/decoder-text.jsx",
    lineNumber: 105,
    columnNumber: 10
  }, this);
}, "E3iwMcTxjwZT3tdksj9lY3ZvkF0=", false, function() {
  return [useReducedMotion, useSpring];
})), "E3iwMcTxjwZT3tdksj9lY3ZvkF0=", false, function() {
  return [useReducedMotion, useSpring];
});
_c2 = DecoderText;
var _c;
var _c2;
$RefreshReg$(_c, "DecoderText$memo");
$RefreshReg$(_c2, "DecoderText");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/decoder-text/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\decoder-text\\index.js"
  );
  import.meta.hot.lastModified = "1759533528961.1814";
}

export {
  DecoderText
};
//# sourceMappingURL=/build/_shared/chunk-F6WVJQGV.js.map
