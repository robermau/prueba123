import {
  Divider
} from "/build/_shared/chunk-XEV54K4O.js";
import {
  DecoderText
} from "/build/_shared/chunk-F6WVJQGV.js";
import "/build/_shared/chunk-5U3ZZGYI.js";
import {
  Footer,
  baseMeta
} from "/build/_shared/chunk-TZWDZNAA.js";
import {
  Section
} from "/build/_shared/chunk-E5UFAUNJ.js";
import "/build/_shared/chunk-CTRHRPLG.js";
import {
  Button,
  Heading,
  Icon
} from "/build/_shared/chunk-FR56KFKI.js";
import {
  Text
} from "/build/_shared/chunk-L5E5TRZE.js";
import {
  Transition,
  tokens
} from "/build/_shared/chunk-4NG5WP3M.js";
import {
  classes,
  cssProps,
  msToNum,
  numToMs
} from "/build/_shared/chunk-VSMHCMS2.js";
import "/build/_shared/chunk-6J4CTUD2.js";
import {
  createHotContext
} from "/build/_shared/chunk-HTDTVXTX.js";
import "/build/_shared/chunk-RPIG6INL.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GIAAN75Z.js";
import {
  require_react
} from "/build/_shared/chunk-3DYT5NE2.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js
var require_react_stripe_umd = __commonJS({
  "node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_react()) : typeof define === "function" && define.amd ? define(["exports", "react"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.ReactStripe = {}, global.React));
    })(exports, function(exports2, React) {
      "use strict";
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null)
          return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0)
            continue;
          target[key] = source[key];
        }
        return target;
      }
      function _objectWithoutProperties(source, excluded) {
        if (source == null)
          return {};
        var target = _objectWithoutPropertiesLoose(source, excluded);
        var key, i;
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0)
              continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key))
              continue;
            target[key] = source[key];
          }
        }
        return target;
      }
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      function _iterableToArrayLimit(arr, i) {
        var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
        if (_i == null)
          return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _s4, _e;
        try {
          for (_i = _i.call(arr); !(_n = (_s4 = _i.next()).done); _n = true) {
            _arr.push(_s4.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null)
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function getDefaultExportFromCjs(x) {
        return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
      }
      var propTypes = { exports: {} };
      var ReactPropTypesSecret_1;
      var hasRequiredReactPropTypesSecret;
      function requireReactPropTypesSecret() {
        if (hasRequiredReactPropTypesSecret)
          return ReactPropTypesSecret_1;
        hasRequiredReactPropTypesSecret = 1;
        var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        ReactPropTypesSecret_1 = ReactPropTypesSecret;
        return ReactPropTypesSecret_1;
      }
      var factoryWithThrowingShims;
      var hasRequiredFactoryWithThrowingShims;
      function requireFactoryWithThrowingShims() {
        if (hasRequiredFactoryWithThrowingShims)
          return factoryWithThrowingShims;
        hasRequiredFactoryWithThrowingShims = 1;
        var ReactPropTypesSecret = requireReactPropTypesSecret();
        function emptyFunction() {
        }
        function emptyFunctionWithReset() {
        }
        emptyFunctionWithReset.resetWarningCache = emptyFunction;
        factoryWithThrowingShims = function() {
          function shim(props, propName, componentName, location, propFullName, secret) {
            if (secret === ReactPropTypesSecret) {
              return;
            }
            var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            err.name = "Invariant Violation";
            throw err;
          }
          shim.isRequired = shim;
          function getShim() {
            return shim;
          }
          var ReactPropTypes = {
            array: shim,
            bool: shim,
            func: shim,
            number: shim,
            object: shim,
            string: shim,
            symbol: shim,
            any: shim,
            arrayOf: getShim,
            element: shim,
            elementType: shim,
            instanceOf: getShim,
            node: shim,
            objectOf: getShim,
            oneOf: getShim,
            oneOfType: getShim,
            shape: getShim,
            exact: getShim,
            checkPropTypes: emptyFunctionWithReset,
            resetWarningCache: emptyFunction
          };
          ReactPropTypes.PropTypes = ReactPropTypes;
          return ReactPropTypes;
        };
        return factoryWithThrowingShims;
      }
      {
        propTypes.exports = requireFactoryWithThrowingShims()();
      }
      var propTypesExports = propTypes.exports;
      var PropTypes = /* @__PURE__ */ getDefaultExportFromCjs(propTypesExports);
      var useAttachEvent = function useAttachEvent2(element, event, cb) {
        var cbDefined = !!cb;
        var cbRef = React.useRef(cb);
        React.useEffect(function() {
          cbRef.current = cb;
        }, [cb]);
        React.useEffect(function() {
          if (!cbDefined || !element) {
            return function() {
            };
          }
          var decoratedCb = function decoratedCb2() {
            if (cbRef.current) {
              cbRef.current.apply(cbRef, arguments);
            }
          };
          element.on(event, decoratedCb);
          return function() {
            element.off(event, decoratedCb);
          };
        }, [cbDefined, event, element, cbRef]);
      };
      var usePrevious = function usePrevious2(value) {
        var ref = React.useRef(value);
        React.useEffect(function() {
          ref.current = value;
        }, [value]);
        return ref.current;
      };
      var isUnknownObject = function isUnknownObject2(raw) {
        return raw !== null && _typeof(raw) === "object";
      };
      var isPromise = function isPromise2(raw) {
        return isUnknownObject(raw) && typeof raw.then === "function";
      };
      var isStripe = function isStripe2(raw) {
        return isUnknownObject(raw) && typeof raw.elements === "function" && typeof raw.createToken === "function" && typeof raw.createPaymentMethod === "function" && typeof raw.confirmCardPayment === "function";
      };
      var PLAIN_OBJECT_STR = "[object Object]";
      var isEqual = function isEqual2(left, right) {
        if (!isUnknownObject(left) || !isUnknownObject(right)) {
          return left === right;
        }
        var leftArray = Array.isArray(left);
        var rightArray = Array.isArray(right);
        if (leftArray !== rightArray)
          return false;
        var leftPlainObject = Object.prototype.toString.call(left) === PLAIN_OBJECT_STR;
        var rightPlainObject = Object.prototype.toString.call(right) === PLAIN_OBJECT_STR;
        if (leftPlainObject !== rightPlainObject)
          return false;
        if (!leftPlainObject && !leftArray)
          return left === right;
        var leftKeys = Object.keys(left);
        var rightKeys = Object.keys(right);
        if (leftKeys.length !== rightKeys.length)
          return false;
        var keySet = {};
        for (var i = 0; i < leftKeys.length; i += 1) {
          keySet[leftKeys[i]] = true;
        }
        for (var _i = 0; _i < rightKeys.length; _i += 1) {
          keySet[rightKeys[_i]] = true;
        }
        var allKeys = Object.keys(keySet);
        if (allKeys.length !== leftKeys.length) {
          return false;
        }
        var l = left;
        var r = right;
        var pred = function pred2(key) {
          return isEqual2(l[key], r[key]);
        };
        return allKeys.every(pred);
      };
      var extractAllowedOptionsUpdates = function extractAllowedOptionsUpdates2(options, prevOptions, immutableKeys) {
        if (!isUnknownObject(options)) {
          return null;
        }
        return Object.keys(options).reduce(function(newOptions, key) {
          var isUpdated = !isUnknownObject(prevOptions) || !isEqual(options[key], prevOptions[key]);
          if (immutableKeys.includes(key)) {
            if (isUpdated) {
              console.warn("Unsupported prop change: options.".concat(key, " is not a mutable property."));
            }
            return newOptions;
          }
          if (!isUpdated) {
            return newOptions;
          }
          return _objectSpread2(_objectSpread2({}, newOptions || {}), {}, _defineProperty({}, key, options[key]));
        }, null);
      };
      var INVALID_STRIPE_ERROR$2 = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.";
      var validateStripe = function validateStripe2(maybeStripe) {
        var errorMsg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : INVALID_STRIPE_ERROR$2;
        if (maybeStripe === null || isStripe(maybeStripe)) {
          return maybeStripe;
        }
        throw new Error(errorMsg);
      };
      var parseStripeProp = function parseStripeProp2(raw) {
        var errorMsg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : INVALID_STRIPE_ERROR$2;
        if (isPromise(raw)) {
          return {
            tag: "async",
            stripePromise: Promise.resolve(raw).then(function(result) {
              return validateStripe(result, errorMsg);
            })
          };
        }
        var stripe = validateStripe(raw, errorMsg);
        if (stripe === null) {
          return {
            tag: "empty"
          };
        }
        return {
          tag: "sync",
          stripe
        };
      };
      var registerWithStripeJs = function registerWithStripeJs2(stripe) {
        if (!stripe || !stripe._registerWrapper || !stripe.registerAppInfo) {
          return;
        }
        stripe._registerWrapper({
          name: "react-stripe-js",
          version: "3.10.0"
        });
        stripe.registerAppInfo({
          name: "react-stripe-js",
          version: "3.10.0",
          url: "https://stripe.com/docs/stripe-js/react"
        });
      };
      var ElementsContext = /* @__PURE__ */ React.createContext(null);
      ElementsContext.displayName = "ElementsContext";
      var parseElementsContext = function parseElementsContext2(ctx, useCase) {
        if (!ctx) {
          throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
        }
        return ctx;
      };
      var Elements = function Elements2(_ref) {
        var rawStripeProp = _ref.stripe, options = _ref.options, children = _ref.children;
        var parsed = React.useMemo(function() {
          return parseStripeProp(rawStripeProp);
        }, [rawStripeProp]);
        var _React$useState = React.useState(function() {
          return {
            stripe: parsed.tag === "sync" ? parsed.stripe : null,
            elements: parsed.tag === "sync" ? parsed.stripe.elements(options) : null
          };
        }), _React$useState2 = _slicedToArray(_React$useState, 2), ctx = _React$useState2[0], setContext = _React$useState2[1];
        React.useEffect(function() {
          var isMounted = true;
          var safeSetContext = function safeSetContext2(stripe) {
            setContext(function(ctx2) {
              if (ctx2.stripe)
                return ctx2;
              return {
                stripe,
                elements: stripe.elements(options)
              };
            });
          };
          if (parsed.tag === "async" && !ctx.stripe) {
            parsed.stripePromise.then(function(stripe) {
              if (stripe && isMounted) {
                safeSetContext(stripe);
              }
            });
          } else if (parsed.tag === "sync" && !ctx.stripe) {
            safeSetContext(parsed.stripe);
          }
          return function() {
            isMounted = false;
          };
        }, [parsed, ctx, options]);
        var prevStripe = usePrevious(rawStripeProp);
        React.useEffect(function() {
          if (prevStripe !== null && prevStripe !== rawStripeProp) {
            console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.");
          }
        }, [prevStripe, rawStripeProp]);
        var prevOptions = usePrevious(options);
        React.useEffect(function() {
          if (!ctx.elements) {
            return;
          }
          var updates = extractAllowedOptionsUpdates(options, prevOptions, ["clientSecret", "fonts"]);
          if (updates) {
            ctx.elements.update(updates);
          }
        }, [options, prevOptions, ctx.elements]);
        React.useEffect(function() {
          registerWithStripeJs(ctx.stripe);
        }, [ctx.stripe]);
        return /* @__PURE__ */ React.createElement(ElementsContext.Provider, {
          value: ctx
        }, children);
      };
      Elements.propTypes = {
        stripe: PropTypes.any,
        options: PropTypes.object
      };
      var useElementsContextWithUseCase = function useElementsContextWithUseCase2(useCaseMessage) {
        var ctx = React.useContext(ElementsContext);
        return parseElementsContext(ctx, useCaseMessage);
      };
      var useElements = function useElements2() {
        var _useElementsContextWi = useElementsContextWithUseCase("calls useElements()"), elements = _useElementsContextWi.elements;
        return elements;
      };
      var ElementsConsumer = function ElementsConsumer2(_ref2) {
        var children = _ref2.children;
        var ctx = useElementsContextWithUseCase("mounts <ElementsConsumer>");
        return children(ctx);
      };
      ElementsConsumer.propTypes = {
        children: PropTypes.func.isRequired
      };
      var _excluded$1 = ["on", "session"];
      var CheckoutSdkContext = /* @__PURE__ */ React.createContext(null);
      CheckoutSdkContext.displayName = "CheckoutSdkContext";
      var parseCheckoutSdkContext = function parseCheckoutSdkContext2(ctx, useCase) {
        if (!ctx) {
          throw new Error("Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(useCase, " in an <CheckoutProvider> provider."));
        }
        return ctx;
      };
      var CheckoutContext = /* @__PURE__ */ React.createContext(null);
      CheckoutContext.displayName = "CheckoutContext";
      var extractCheckoutContextValue = function extractCheckoutContextValue2(checkoutSdk, sessionState) {
        if (!checkoutSdk) {
          return null;
        }
        checkoutSdk.on;
        checkoutSdk.session;
        var actions = _objectWithoutProperties(checkoutSdk, _excluded$1);
        if (!sessionState) {
          return Object.assign(checkoutSdk.session(), actions);
        }
        return Object.assign(sessionState, actions);
      };
      var INVALID_STRIPE_ERROR$1 = "Invalid prop `stripe` supplied to `CheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.";
      var CheckoutProvider = function CheckoutProvider2(_ref) {
        var rawStripeProp = _ref.stripe, options = _ref.options, children = _ref.children;
        var parsed = React.useMemo(function() {
          return parseStripeProp(rawStripeProp, INVALID_STRIPE_ERROR$1);
        }, [rawStripeProp]);
        var _React$useState = React.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), session = _React$useState2[0], setSession = _React$useState2[1];
        var _React$useState3 = React.useState(function() {
          return {
            stripe: parsed.tag === "sync" ? parsed.stripe : null,
            checkoutSdk: null
          };
        }), _React$useState4 = _slicedToArray(_React$useState3, 2), ctx = _React$useState4[0], setContext = _React$useState4[1];
        var safeSetContext = function safeSetContext2(stripe, checkoutSdk) {
          setContext(function(ctx2) {
            if (ctx2.stripe && ctx2.checkoutSdk) {
              return ctx2;
            }
            return {
              stripe,
              checkoutSdk
            };
          });
        };
        var initCheckoutCalledRef = React.useRef(false);
        React.useEffect(function() {
          var isMounted = true;
          if (parsed.tag === "async" && !ctx.stripe) {
            parsed.stripePromise.then(function(stripe) {
              if (stripe && isMounted && !initCheckoutCalledRef.current) {
                initCheckoutCalledRef.current = true;
                stripe.initCheckout(options).then(function(checkoutSdk) {
                  if (checkoutSdk) {
                    safeSetContext(stripe, checkoutSdk);
                    checkoutSdk.on("change", setSession);
                  }
                });
              }
            });
          } else if (parsed.tag === "sync" && parsed.stripe && !initCheckoutCalledRef.current) {
            initCheckoutCalledRef.current = true;
            parsed.stripe.initCheckout(options).then(function(checkoutSdk) {
              if (checkoutSdk) {
                safeSetContext(parsed.stripe, checkoutSdk);
                checkoutSdk.on("change", setSession);
              }
            });
          }
          return function() {
            isMounted = false;
          };
        }, [parsed, ctx, options, setSession]);
        var prevStripe = usePrevious(rawStripeProp);
        React.useEffect(function() {
          if (prevStripe !== null && prevStripe !== rawStripeProp) {
            console.warn("Unsupported prop change on CheckoutProvider: You cannot change the `stripe` prop after setting it.");
          }
        }, [prevStripe, rawStripeProp]);
        var prevOptions = usePrevious(options);
        var prevCheckoutSdk = usePrevious(ctx.checkoutSdk);
        React.useEffect(function() {
          var _prevOptions$elements, _options$elementsOpti, _prevOptions$elements2, _options$elementsOpti2;
          if (!ctx.checkoutSdk) {
            return;
          }
          var hasSdkLoaded = Boolean(!prevCheckoutSdk && ctx.checkoutSdk);
          var previousAppearance = prevOptions === null || prevOptions === void 0 ? void 0 : (_prevOptions$elements = prevOptions.elementsOptions) === null || _prevOptions$elements === void 0 ? void 0 : _prevOptions$elements.appearance;
          var currentAppearance = options === null || options === void 0 ? void 0 : (_options$elementsOpti = options.elementsOptions) === null || _options$elementsOpti === void 0 ? void 0 : _options$elementsOpti.appearance;
          var hasAppearanceChanged = !isEqual(currentAppearance, previousAppearance);
          if (currentAppearance && (hasAppearanceChanged || hasSdkLoaded)) {
            ctx.checkoutSdk.changeAppearance(currentAppearance);
          }
          var previousFonts = prevOptions === null || prevOptions === void 0 ? void 0 : (_prevOptions$elements2 = prevOptions.elementsOptions) === null || _prevOptions$elements2 === void 0 ? void 0 : _prevOptions$elements2.fonts;
          var currentFonts = options === null || options === void 0 ? void 0 : (_options$elementsOpti2 = options.elementsOptions) === null || _options$elementsOpti2 === void 0 ? void 0 : _options$elementsOpti2.fonts;
          var hasFontsChanged = !isEqual(previousFonts, currentFonts);
          if (currentFonts && (hasFontsChanged || hasSdkLoaded)) {
            ctx.checkoutSdk.loadFonts(currentFonts);
          }
        }, [options, prevOptions, ctx.checkoutSdk, prevCheckoutSdk]);
        React.useEffect(function() {
          registerWithStripeJs(ctx.stripe);
        }, [ctx.stripe]);
        var checkoutContextValue = React.useMemo(function() {
          return extractCheckoutContextValue(ctx.checkoutSdk, session);
        }, [ctx.checkoutSdk, session]);
        if (!ctx.checkoutSdk) {
          return null;
        }
        return /* @__PURE__ */ React.createElement(CheckoutSdkContext.Provider, {
          value: ctx
        }, /* @__PURE__ */ React.createElement(CheckoutContext.Provider, {
          value: checkoutContextValue
        }, children));
      };
      CheckoutProvider.propTypes = {
        stripe: PropTypes.any,
        options: PropTypes.shape({
          fetchClientSecret: PropTypes.func.isRequired,
          elementsOptions: PropTypes.object
        }).isRequired
      };
      var useCheckoutSdkContextWithUseCase = function useCheckoutSdkContextWithUseCase2(useCaseString) {
        var ctx = React.useContext(CheckoutSdkContext);
        return parseCheckoutSdkContext(ctx, useCaseString);
      };
      var useElementsOrCheckoutSdkContextWithUseCase = function useElementsOrCheckoutSdkContextWithUseCase2(useCaseString) {
        var checkoutSdkContext = React.useContext(CheckoutSdkContext);
        var elementsContext = React.useContext(ElementsContext);
        if (checkoutSdkContext && elementsContext) {
          throw new Error("You cannot wrap the part of your app that ".concat(useCaseString, " in both <CheckoutProvider> and <Elements> providers."));
        }
        if (checkoutSdkContext) {
          return parseCheckoutSdkContext(checkoutSdkContext, useCaseString);
        }
        return parseElementsContext(elementsContext, useCaseString);
      };
      var useCheckout = function useCheckout2() {
        useCheckoutSdkContextWithUseCase("calls useCheckout()");
        var ctx = React.useContext(CheckoutContext);
        if (!ctx) {
          throw new Error("Could not find Checkout Context; You need to wrap the part of your app that calls useCheckout() in an <CheckoutProvider> provider.");
        }
        return ctx;
      };
      var _excluded = ["mode"];
      var capitalized = function capitalized2(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };
      var createElementComponent = function createElementComponent2(type, isServer2) {
        var displayName = "".concat(capitalized(type), "Element");
        var ClientElement = function ClientElement2(_ref) {
          var id = _ref.id, className = _ref.className, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, onBlur = _ref.onBlur, onFocus = _ref.onFocus, onReady = _ref.onReady, onChange = _ref.onChange, onEscape = _ref.onEscape, onClick = _ref.onClick, onLoadError = _ref.onLoadError, onLoaderStart = _ref.onLoaderStart, onNetworksChange = _ref.onNetworksChange, onConfirm = _ref.onConfirm, onCancel = _ref.onCancel, onShippingAddressChange = _ref.onShippingAddressChange, onShippingRateChange = _ref.onShippingRateChange, onSavedPaymentMethodRemove = _ref.onSavedPaymentMethodRemove, onSavedPaymentMethodUpdate = _ref.onSavedPaymentMethodUpdate;
          var ctx = useElementsOrCheckoutSdkContextWithUseCase("mounts <".concat(displayName, ">"));
          var elements = "elements" in ctx ? ctx.elements : null;
          var checkoutSdk = "checkoutSdk" in ctx ? ctx.checkoutSdk : null;
          var _React$useState = React.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), element = _React$useState2[0], setElement = _React$useState2[1];
          var elementRef = React.useRef(null);
          var domNode = React.useRef(null);
          useAttachEvent(element, "blur", onBlur);
          useAttachEvent(element, "focus", onFocus);
          useAttachEvent(element, "escape", onEscape);
          useAttachEvent(element, "click", onClick);
          useAttachEvent(element, "loaderror", onLoadError);
          useAttachEvent(element, "loaderstart", onLoaderStart);
          useAttachEvent(element, "networkschange", onNetworksChange);
          useAttachEvent(element, "confirm", onConfirm);
          useAttachEvent(element, "cancel", onCancel);
          useAttachEvent(element, "shippingaddresschange", onShippingAddressChange);
          useAttachEvent(element, "shippingratechange", onShippingRateChange);
          useAttachEvent(element, "savedpaymentmethodremove", onSavedPaymentMethodRemove);
          useAttachEvent(element, "savedpaymentmethodupdate", onSavedPaymentMethodUpdate);
          useAttachEvent(element, "change", onChange);
          var readyCallback;
          if (onReady) {
            if (type === "expressCheckout") {
              readyCallback = onReady;
            } else {
              readyCallback = function readyCallback2() {
                onReady(element);
              };
            }
          }
          useAttachEvent(element, "ready", readyCallback);
          React.useLayoutEffect(function() {
            if (elementRef.current === null && domNode.current !== null && (elements || checkoutSdk)) {
              var newElement = null;
              if (checkoutSdk) {
                switch (type) {
                  case "payment":
                    newElement = checkoutSdk.createPaymentElement(options);
                    break;
                  case "address":
                    if ("mode" in options) {
                      var mode = options.mode, restOptions = _objectWithoutProperties(options, _excluded);
                      if (mode === "shipping") {
                        newElement = checkoutSdk.createShippingAddressElement(restOptions);
                      } else if (mode === "billing") {
                        newElement = checkoutSdk.createBillingAddressElement(restOptions);
                      } else {
                        throw new Error("Invalid options.mode. mode must be 'billing' or 'shipping'.");
                      }
                    } else {
                      throw new Error("You must supply options.mode. mode must be 'billing' or 'shipping'.");
                    }
                    break;
                  case "expressCheckout":
                    newElement = checkoutSdk.createExpressCheckoutElement(options);
                    break;
                  case "currencySelector":
                    newElement = checkoutSdk.createCurrencySelectorElement();
                    break;
                  case "taxId":
                    newElement = checkoutSdk.createTaxIdElement(options);
                    break;
                  default:
                    throw new Error("Invalid Element type ".concat(displayName, ". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />."));
                }
              } else if (elements) {
                newElement = elements.create(type, options);
              }
              elementRef.current = newElement;
              setElement(newElement);
              if (newElement) {
                newElement.mount(domNode.current);
              }
            }
          }, [elements, checkoutSdk, options]);
          var prevOptions = usePrevious(options);
          React.useEffect(function() {
            if (!elementRef.current) {
              return;
            }
            var updates = extractAllowedOptionsUpdates(options, prevOptions, ["paymentRequest"]);
            if (updates && "update" in elementRef.current) {
              elementRef.current.update(updates);
            }
          }, [options, prevOptions]);
          React.useLayoutEffect(function() {
            return function() {
              if (elementRef.current && typeof elementRef.current.destroy === "function") {
                try {
                  elementRef.current.destroy();
                  elementRef.current = null;
                } catch (error) {
                }
              }
            };
          }, []);
          return /* @__PURE__ */ React.createElement("div", {
            id,
            className,
            ref: domNode
          });
        };
        var ServerElement = function ServerElement2(props) {
          useElementsOrCheckoutSdkContextWithUseCase("mounts <".concat(displayName, ">"));
          var id = props.id, className = props.className;
          return /* @__PURE__ */ React.createElement("div", {
            id,
            className
          });
        };
        var Element = isServer2 ? ServerElement : ClientElement;
        Element.propTypes = {
          id: PropTypes.string,
          className: PropTypes.string,
          onChange: PropTypes.func,
          onBlur: PropTypes.func,
          onFocus: PropTypes.func,
          onReady: PropTypes.func,
          onEscape: PropTypes.func,
          onClick: PropTypes.func,
          onLoadError: PropTypes.func,
          onLoaderStart: PropTypes.func,
          onNetworksChange: PropTypes.func,
          onConfirm: PropTypes.func,
          onCancel: PropTypes.func,
          onShippingAddressChange: PropTypes.func,
          onShippingRateChange: PropTypes.func,
          onSavedPaymentMethodRemove: PropTypes.func,
          onSavedPaymentMethodUpdate: PropTypes.func,
          options: PropTypes.object
        };
        Element.displayName = displayName;
        Element.__elementType = type;
        return Element;
      };
      var isServer = typeof window === "undefined";
      var EmbeddedCheckoutContext = /* @__PURE__ */ React.createContext(null);
      EmbeddedCheckoutContext.displayName = "EmbeddedCheckoutProviderContext";
      var useEmbeddedCheckoutContext = function useEmbeddedCheckoutContext2() {
        var ctx = React.useContext(EmbeddedCheckoutContext);
        if (!ctx) {
          throw new Error("<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>");
        }
        return ctx;
      };
      var INVALID_STRIPE_ERROR = "Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.";
      var EmbeddedCheckoutProvider = function EmbeddedCheckoutProvider2(_ref) {
        var rawStripeProp = _ref.stripe, options = _ref.options, children = _ref.children;
        var parsed = React.useMemo(function() {
          return parseStripeProp(rawStripeProp, INVALID_STRIPE_ERROR);
        }, [rawStripeProp]);
        var embeddedCheckoutPromise = React.useRef(null);
        var loadedStripe = React.useRef(null);
        var _React$useState = React.useState({
          embeddedCheckout: null
        }), _React$useState2 = _slicedToArray(_React$useState, 2), ctx = _React$useState2[0], setContext = _React$useState2[1];
        React.useEffect(function() {
          if (loadedStripe.current || embeddedCheckoutPromise.current) {
            return;
          }
          var setStripeAndInitEmbeddedCheckout = function setStripeAndInitEmbeddedCheckout2(stripe) {
            if (loadedStripe.current || embeddedCheckoutPromise.current)
              return;
            loadedStripe.current = stripe;
            embeddedCheckoutPromise.current = loadedStripe.current.initEmbeddedCheckout(options).then(function(embeddedCheckout) {
              setContext({
                embeddedCheckout
              });
            });
          };
          if (parsed.tag === "async" && !loadedStripe.current && (options.clientSecret || options.fetchClientSecret)) {
            parsed.stripePromise.then(function(stripe) {
              if (stripe) {
                setStripeAndInitEmbeddedCheckout(stripe);
              }
            });
          } else if (parsed.tag === "sync" && !loadedStripe.current && (options.clientSecret || options.fetchClientSecret)) {
            setStripeAndInitEmbeddedCheckout(parsed.stripe);
          }
        }, [parsed, options, ctx, loadedStripe]);
        React.useEffect(function() {
          return function() {
            if (ctx.embeddedCheckout) {
              embeddedCheckoutPromise.current = null;
              ctx.embeddedCheckout.destroy();
            } else if (embeddedCheckoutPromise.current) {
              embeddedCheckoutPromise.current.then(function() {
                embeddedCheckoutPromise.current = null;
                if (ctx.embeddedCheckout) {
                  ctx.embeddedCheckout.destroy();
                }
              });
            }
          };
        }, [ctx.embeddedCheckout]);
        React.useEffect(function() {
          registerWithStripeJs(loadedStripe);
        }, [loadedStripe]);
        var prevStripe = usePrevious(rawStripeProp);
        React.useEffect(function() {
          if (prevStripe !== null && prevStripe !== rawStripeProp) {
            console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.");
          }
        }, [prevStripe, rawStripeProp]);
        var prevOptions = usePrevious(options);
        React.useEffect(function() {
          if (prevOptions == null) {
            return;
          }
          if (options == null) {
            console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.");
            return;
          }
          if (options.clientSecret === void 0 && options.fetchClientSecret === void 0) {
            console.warn("Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`.");
          }
          if (prevOptions.clientSecret != null && options.clientSecret !== prevOptions.clientSecret) {
            console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.");
          }
          if (prevOptions.fetchClientSecret != null && options.fetchClientSecret !== prevOptions.fetchClientSecret) {
            console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.");
          }
          if (prevOptions.onComplete != null && options.onComplete !== prevOptions.onComplete) {
            console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it.");
          }
          if (prevOptions.onShippingDetailsChange != null && options.onShippingDetailsChange !== prevOptions.onShippingDetailsChange) {
            console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onShippingDetailsChange option after setting it.");
          }
          if (prevOptions.onLineItemsChange != null && options.onLineItemsChange !== prevOptions.onLineItemsChange) {
            console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onLineItemsChange option after setting it.");
          }
        }, [prevOptions, options]);
        return /* @__PURE__ */ React.createElement(EmbeddedCheckoutContext.Provider, {
          value: ctx
        }, children);
      };
      var EmbeddedCheckoutClientElement = function EmbeddedCheckoutClientElement2(_ref) {
        var id = _ref.id, className = _ref.className;
        var _useEmbeddedCheckoutC = useEmbeddedCheckoutContext(), embeddedCheckout = _useEmbeddedCheckoutC.embeddedCheckout;
        var isMounted = React.useRef(false);
        var domNode = React.useRef(null);
        React.useLayoutEffect(function() {
          if (!isMounted.current && embeddedCheckout && domNode.current !== null) {
            embeddedCheckout.mount(domNode.current);
            isMounted.current = true;
          }
          return function() {
            if (isMounted.current && embeddedCheckout) {
              try {
                embeddedCheckout.unmount();
                isMounted.current = false;
              } catch (e) {
              }
            }
          };
        }, [embeddedCheckout]);
        return /* @__PURE__ */ React.createElement("div", {
          ref: domNode,
          id,
          className
        });
      };
      var EmbeddedCheckoutServerElement = function EmbeddedCheckoutServerElement2(_ref2) {
        var id = _ref2.id, className = _ref2.className;
        useEmbeddedCheckoutContext();
        return /* @__PURE__ */ React.createElement("div", {
          id,
          className
        });
      };
      var EmbeddedCheckout = isServer ? EmbeddedCheckoutServerElement : EmbeddedCheckoutClientElement;
      var useStripe = function useStripe2() {
        var _useElementsOrCheckou = useElementsOrCheckoutSdkContextWithUseCase("calls useStripe()"), stripe = _useElementsOrCheckou.stripe;
        return stripe;
      };
      var AuBankAccountElement = createElementComponent("auBankAccount", isServer);
      var CardElement = createElementComponent("card", isServer);
      var CardNumberElement = createElementComponent("cardNumber", isServer);
      var CardExpiryElement = createElementComponent("cardExpiry", isServer);
      var CardCvcElement = createElementComponent("cardCvc", isServer);
      var FpxBankElement = createElementComponent("fpxBank", isServer);
      var IbanElement = createElementComponent("iban", isServer);
      var IdealBankElement = createElementComponent("idealBank", isServer);
      var P24BankElement = createElementComponent("p24Bank", isServer);
      var EpsBankElement = createElementComponent("epsBank", isServer);
      var PaymentElement = createElementComponent("payment", isServer);
      var ExpressCheckoutElement = createElementComponent("expressCheckout", isServer);
      var CurrencySelectorElement = createElementComponent("currencySelector", isServer);
      var PaymentRequestButtonElement = createElementComponent("paymentRequestButton", isServer);
      var LinkAuthenticationElement = createElementComponent("linkAuthentication", isServer);
      var AddressElement = createElementComponent("address", isServer);
      var ShippingAddressElement = createElementComponent("shippingAddress", isServer);
      var PaymentMethodMessagingElement = createElementComponent("paymentMethodMessaging", isServer);
      var AffirmMessageElement = createElementComponent("affirmMessage", isServer);
      var AfterpayClearpayMessageElement = createElementComponent("afterpayClearpayMessage", isServer);
      var TaxIdElement = createElementComponent("taxId", isServer);
      exports2.AddressElement = AddressElement;
      exports2.AffirmMessageElement = AffirmMessageElement;
      exports2.AfterpayClearpayMessageElement = AfterpayClearpayMessageElement;
      exports2.AuBankAccountElement = AuBankAccountElement;
      exports2.CardCvcElement = CardCvcElement;
      exports2.CardElement = CardElement;
      exports2.CardExpiryElement = CardExpiryElement;
      exports2.CardNumberElement = CardNumberElement;
      exports2.CheckoutProvider = CheckoutProvider;
      exports2.CurrencySelectorElement = CurrencySelectorElement;
      exports2.Elements = Elements;
      exports2.ElementsConsumer = ElementsConsumer;
      exports2.EmbeddedCheckout = EmbeddedCheckout;
      exports2.EmbeddedCheckoutProvider = EmbeddedCheckoutProvider;
      exports2.EpsBankElement = EpsBankElement;
      exports2.ExpressCheckoutElement = ExpressCheckoutElement;
      exports2.FpxBankElement = FpxBankElement;
      exports2.IbanElement = IbanElement;
      exports2.IdealBankElement = IdealBankElement;
      exports2.LinkAuthenticationElement = LinkAuthenticationElement;
      exports2.P24BankElement = P24BankElement;
      exports2.PaymentElement = PaymentElement;
      exports2.PaymentMethodMessagingElement = PaymentMethodMessagingElement;
      exports2.PaymentRequestButtonElement = PaymentRequestButtonElement;
      exports2.ShippingAddressElement = ShippingAddressElement;
      exports2.TaxIdElement = TaxIdElement;
      exports2.useCheckout = useCheckout;
      exports2.useElements = useElements;
      exports2.useStripe = useStripe;
    });
  }
});

// node_modules/@formspree/core/dist/index.js
var require_dist = __commonJS({
  "node_modules/@formspree/core/dist/index.js"(exports, module) {
    var g = Object.defineProperty;
    var j2 = Object.getOwnPropertyDescriptor;
    var V2 = Object.getOwnPropertyNames;
    var L = Object.prototype.hasOwnProperty;
    var Y2 = (e, r) => {
      for (var t in r)
        g(e, t, { get: r[t], enumerable: true });
    };
    var K2 = (e, r, t, o) => {
      if (r && typeof r == "object" || typeof r == "function")
        for (let s of V2(r))
          !L.call(e, s) && s !== t && g(e, s, { get: () => r[s], enumerable: !(o = j2(r, s)) || o.enumerable });
      return e;
    };
    var $2 = (e) => K2(g({}, "__esModule", { value: true }), e);
    var h2 = (e, r, t) => new Promise((o, s) => {
      var i = (a) => {
        try {
          l(t.next(a));
        } catch (m) {
          s(m);
        }
      }, c = (a) => {
        try {
          l(t.throw(a));
        } catch (m) {
          s(m);
        }
      }, l = (a) => a.done ? o(a.value) : Promise.resolve(a.value).then(i, c);
      l((t = t.apply(e, r)).next());
    });
    var W2 = {};
    Y2(W2, { SubmissionError: () => p, appendExtraData: () => E2, createClient: () => R2, getDefaultClient: () => U2, isSubmissionError: () => A2 });
    module.exports = $2(W2);
    var u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var J2 = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
    function I2(e) {
      e = String(e);
      for (var r, t, o, s, i = "", c = 0, l = e.length % 3; c < e.length; ) {
        if ((t = e.charCodeAt(c++)) > 255 || (o = e.charCodeAt(c++)) > 255 || (s = e.charCodeAt(c++)) > 255)
          throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");
        r = t << 16 | o << 8 | s, i += u.charAt(r >> 18 & 63) + u.charAt(r >> 12 & 63) + u.charAt(r >> 6 & 63) + u.charAt(r & 63);
      }
      return l ? i.slice(0, l - 3) + "===".substring(l) : i;
    }
    function O(e) {
      if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !J2.test(e))
        throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
      e += "==".slice(2 - (e.length & 3));
      for (var r, t = "", o, s, i = 0; i < e.length; )
        r = u.indexOf(e.charAt(i++)) << 18 | u.indexOf(e.charAt(i++)) << 12 | (o = u.indexOf(e.charAt(i++))) << 6 | (s = u.indexOf(e.charAt(i++))), t += o === 64 ? String.fromCharCode(r >> 16 & 255) : s === 64 ? String.fromCharCode(r >> 16 & 255, r >> 8 & 255) : String.fromCharCode(r >> 16 & 255, r >> 8 & 255, r & 255);
      return t;
    }
    var G2 = () => navigator.webdriver || !!document.documentElement.getAttribute(O("d2ViZHJpdmVy")) || !!window.callPhantom || !!window._phantom;
    var y2 = class {
      constructor() {
        this.loadedAt = Date.now(), this.webdriver = G2();
      }
      data() {
        return { loadedAt: this.loadedAt, webdriver: this.webdriver };
      }
    };
    var S2 = class {
      constructor(r) {
        this.kind = "success";
        this.next = r.next;
      }
    };
    function w2(e) {
      return "next" in e && typeof e.next == "string";
    }
    var b2 = class {
      constructor(r, t) {
        this.paymentIntentClientSecret = r;
        this.resubmitKey = t;
        this.kind = "stripePluginPending";
      }
    };
    function _2(e) {
      if ("stripe" in e && "resubmitKey" in e && typeof e.resubmitKey == "string") {
        let { stripe: r } = e;
        return typeof r == "object" && r != null && "paymentIntentClientSecret" in r && typeof r.paymentIntentClientSecret == "string";
      }
      return false;
    }
    function A2(e) {
      return e.kind === "error";
    }
    var p = class {
      constructor(...r) {
        this.kind = "error";
        this.formErrors = [];
        this.fieldErrors = /* @__PURE__ */ new Map();
        var t;
        for (let o of r) {
          if (!o.field) {
            this.formErrors.push({ code: o.code && z2(o.code) ? o.code : "UNSPECIFIED", message: o.message });
            continue;
          }
          let s = (t = this.fieldErrors.get(o.field)) != null ? t : [];
          s.push({ code: o.code && Q(o.code) ? o.code : "UNSPECIFIED", message: o.message }), this.fieldErrors.set(o.field, s);
        }
      }
      getFormErrors() {
        return [...this.formErrors];
      }
      getFieldErrors(r) {
        var t;
        return (t = this.fieldErrors.get(r)) != null ? t : [];
      }
      getAllFieldErrors() {
        return Array.from(this.fieldErrors);
      }
    };
    function z2(e) {
      return e in B2;
    }
    var B2 = { BLOCKED: "BLOCKED", EMPTY: "EMPTY", FILES_TOO_BIG: "FILES_TOO_BIG", FORM_NOT_FOUND: "FORM_NOT_FOUND", INACTIVE: "INACTIVE", NO_FILE_UPLOADS: "NO_FILE_UPLOADS", PROJECT_NOT_FOUND: "PROJECT_NOT_FOUND", TOO_MANY_FILES: "TOO_MANY_FILES" };
    function Q(e) {
      return e in Z;
    }
    var Z = { REQUIRED_FIELD_EMPTY: "REQUIRED_FIELD_EMPTY", REQUIRED_FIELD_MISSING: "REQUIRED_FIELD_MISSING", STRIPE_CLIENT_ERROR: "STRIPE_CLIENT_ERROR", STRIPE_SCA_ERROR: "STRIPE_SCA_ERROR", TYPE_EMAIL: "TYPE_EMAIL", TYPE_NUMERIC: "TYPE_NUMERIC", TYPE_TEXT: "TYPE_TEXT" };
    function P(e) {
      return "errors" in e && Array.isArray(e.errors) && e.errors.every((r) => typeof r.message == "string") || "error" in e && typeof e.error == "string";
    }
    var D2 = "4.0.0";
    var v2 = (e) => I2(JSON.stringify(e));
    var N = (e) => {
      let r = `@formspree/core@${D2}`;
      return e ? `${e} ${r}` : r;
    };
    function E2(e, r, t) {
      e instanceof FormData ? e.append(r, t) : e[r] = t;
    }
    function M2(e) {
      return e !== null && typeof e == "object";
    }
    var C2 = class {
      constructor(r = {}) {
        this.project = r.project, this.stripe = r.stripe, typeof window != "undefined" && (this.session = new y2());
      }
      submitForm(s, i) {
        return h2(this, arguments, function* (r, t, o = {}) {
          let c = o.endpoint || "https://formspree.io", l = this.project ? `${c}/p/${this.project}/f/${r}` : `${c}/f/${r}`, a = { Accept: "application/json", "Formspree-Client": N(o.clientName) };
          this.session && (a["Formspree-Session-Data"] = v2(this.session.data())), t instanceof FormData || (a["Content-Type"] = "application/json");
          function m(f2) {
            return h2(this, null, function* () {
              try {
                let n = yield (yield fetch(l, { method: "POST", mode: "cors", body: f2 instanceof FormData ? f2 : JSON.stringify(f2), headers: a })).json();
                if (M2(n)) {
                  if (P(n))
                    return Array.isArray(n.errors) ? new p(...n.errors) : new p({ message: n.error });
                  if (_2(n))
                    return new b2(n.stripe.paymentIntentClientSecret, n.resubmitKey);
                  if (w2(n))
                    return new S2({ next: n.next });
                }
                return new p({ message: "Unexpected response format" });
              } catch (d) {
                let n = d instanceof Error ? d.message : `Unknown error while posting to Formspree: ${JSON.stringify(d)}`;
                return new p({ message: n });
              }
            });
          }
          if (this.stripe && o.createPaymentMethod) {
            let f2 = yield o.createPaymentMethod();
            if (f2.error)
              return new p({ code: "STRIPE_CLIENT_ERROR", field: "paymentMethod", message: "Error creating payment method" });
            E2(t, "paymentMethod", f2.paymentMethod.id);
            let d = yield m(t);
            if (d.kind === "error")
              return d;
            if (d.kind === "stripePluginPending") {
              let n = yield this.stripe.handleCardAction(d.paymentIntentClientSecret);
              if (n.error)
                return new p({ code: "STRIPE_CLIENT_ERROR", field: "paymentMethod", message: "Stripe SCA error" });
              t instanceof FormData ? t.delete("paymentMethod") : delete t.paymentMethod, E2(t, "paymentIntent", n.paymentIntent.id), E2(t, "resubmitKey", d.resubmitKey);
              let x = yield m(t);
              return k2(x), x;
            }
            return d;
          }
          let T2 = yield m(t);
          return k2(T2), T2;
        });
      }
    };
    function k2(e) {
      let { kind: r } = e;
      if (r !== "success" && r !== "error")
        throw new Error(`Unexpected submission result (kind: ${r})`);
    }
    var R2 = (e) => new C2(e);
    var U2 = () => (F2 || (F2 = R2()), F2);
    var F2;
  }
});

// node_modules/@stripe/stripe-js/dist/pure.js
var require_pure = __commonJS({
  "node_modules/@stripe/stripe-js/dist/pure.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    var RELEASE_TRAIN = "v3";
    var runtimeVersionToUrlVersion = function runtimeVersionToUrlVersion2(version) {
      return version === 3 ? "v3" : version;
    };
    var ORIGIN = "https://js.stripe.com";
    var STRIPE_JS_URL = "".concat(ORIGIN, "/v3");
    var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
    var STRIPE_JS_URL_REGEX = /^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/;
    var EXISTING_SCRIPT_MESSAGE = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used";
    var isStripeJSURL = function isStripeJSURL2(url) {
      return V3_URL_REGEX.test(url) || STRIPE_JS_URL_REGEX.test(url);
    };
    var findScript = function findScript2() {
      var scripts = document.querySelectorAll('script[src^="'.concat(ORIGIN, '"]'));
      for (var i = 0; i < scripts.length; i++) {
        var script = scripts[i];
        if (!isStripeJSURL(script.src)) {
          continue;
        }
        return script;
      }
      return null;
    };
    var injectScript = function injectScript2(params) {
      var queryString = params && !params.advancedFraudSignals ? "?advancedFraudSignals=false" : "";
      var script = document.createElement("script");
      script.src = "".concat(STRIPE_JS_URL).concat(queryString);
      var headOrBody = document.head || document.body;
      if (!headOrBody) {
        throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
      }
      headOrBody.appendChild(script);
      return script;
    };
    var registerWrapper = function registerWrapper2(stripe, startTime) {
      if (!stripe || !stripe._registerWrapper) {
        return;
      }
      stripe._registerWrapper({
        name: "stripe-js",
        version: "5.10.0",
        startTime
      });
    };
    var stripePromise = null;
    var onErrorListener = null;
    var onLoadListener = null;
    var onError = function onError2(reject) {
      return function(cause) {
        reject(new Error("Failed to load Stripe.js", {
          cause
        }));
      };
    };
    var onLoad = function onLoad2(resolve, reject) {
      return function() {
        if (window.Stripe) {
          resolve(window.Stripe);
        } else {
          reject(new Error("Stripe.js not available"));
        }
      };
    };
    var loadScript = function loadScript2(params) {
      if (stripePromise !== null) {
        return stripePromise;
      }
      stripePromise = new Promise(function(resolve, reject) {
        if (typeof window === "undefined" || typeof document === "undefined") {
          resolve(null);
          return;
        }
        if (window.Stripe && params) {
          console.warn(EXISTING_SCRIPT_MESSAGE);
        }
        if (window.Stripe) {
          resolve(window.Stripe);
          return;
        }
        try {
          var script = findScript();
          if (script && params) {
            console.warn(EXISTING_SCRIPT_MESSAGE);
          } else if (!script) {
            script = injectScript(params);
          } else if (script && onLoadListener !== null && onErrorListener !== null) {
            var _script$parentNode;
            script.removeEventListener("load", onLoadListener);
            script.removeEventListener("error", onErrorListener);
            (_script$parentNode = script.parentNode) === null || _script$parentNode === void 0 ? void 0 : _script$parentNode.removeChild(script);
            script = injectScript(params);
          }
          onLoadListener = onLoad(resolve, reject);
          onErrorListener = onError(reject);
          script.addEventListener("load", onLoadListener);
          script.addEventListener("error", onErrorListener);
        } catch (error) {
          reject(error);
          return;
        }
      });
      return stripePromise["catch"](function(error) {
        stripePromise = null;
        return Promise.reject(error);
      });
    };
    var initStripe = function initStripe2(maybeStripe, args, startTime) {
      if (maybeStripe === null) {
        return null;
      }
      var pk = args[0];
      var isTestKey = pk.match(/^pk_test/);
      var version = runtimeVersionToUrlVersion(maybeStripe.version);
      var expectedVersion = RELEASE_TRAIN;
      if (isTestKey && version !== expectedVersion) {
        console.warn("Stripe.js@".concat(version, " was loaded on the page, but @stripe/stripe-js@").concat("5.10.0", " expected Stripe.js@").concat(expectedVersion, ". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning"));
      }
      var stripe = maybeStripe.apply(void 0, args);
      registerWrapper(stripe, startTime);
      return stripe;
    };
    var validateLoadParams = function validateLoadParams2(params) {
      var errorMessage = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(params), "\n");
      if (params === null || _typeof(params) !== "object") {
        throw new Error(errorMessage);
      }
      if (Object.keys(params).length === 1 && typeof params.advancedFraudSignals === "boolean") {
        return params;
      }
      throw new Error(errorMessage);
    };
    var loadParams;
    var loadStripeCalled = false;
    var loadStripe = function loadStripe2() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      loadStripeCalled = true;
      var startTime = Date.now();
      return loadScript(loadParams).then(function(maybeStripe) {
        return initStripe(maybeStripe, args, startTime);
      });
    };
    loadStripe.setLoadParameters = function(params) {
      if (loadStripeCalled && loadParams) {
        var validatedParams = validateLoadParams(params);
        var parameterKeys = Object.keys(validatedParams);
        var sameParameters = parameterKeys.reduce(function(previousValue, currentValue) {
          var _loadParams;
          return previousValue && params[currentValue] === ((_loadParams = loadParams) === null || _loadParams === void 0 ? void 0 : _loadParams[currentValue]);
        }, true);
        if (sameParameters) {
          return;
        }
      }
      if (loadStripeCalled) {
        throw new Error("You cannot change load parameters after calling loadStripe");
      }
      loadParams = validateLoadParams(params);
    };
    exports.loadStripe = loadStripe;
  }
});

// node_modules/@stripe/stripe-js/pure/index.js
var require_pure2 = __commonJS({
  "node_modules/@stripe/stripe-js/pure/index.js"(exports, module) {
    module.exports = require_pure();
  }
});

// app/components/input/input.jsx
var import_react2 = __toESM(require_react(), 1);

// app/components/input/text-area.jsx
var import_react = __toESM(require_react(), 1);

// app/components/input/text-area.module.css
var text_area_module_default = { "textarea": "text-area-module__textarea__u58rs" };

// app/components/input/text-area.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\input\\\\text-area.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\input\\text-area.jsx"
  );
}
var TextArea = ({
  className,
  resize = "none",
  value,
  onChange,
  minRows = 1,
  maxRows,
  ...rest
}) => {
  _s();
  const [rows, setRows] = (0, import_react.useState)(minRows);
  const [textareaDimensions, setTextareaDimensions] = (0, import_react.useState)();
  const textareaRef = (0, import_react.useRef)();
  (0, import_react.useEffect)(() => {
    const style = getComputedStyle(textareaRef.current);
    const lineHeight = parseInt(style.lineHeight, 10);
    const paddingHeight = parseInt(style.paddingTop, 10) + parseInt(style.paddingBottom, 10);
    setTextareaDimensions({
      lineHeight,
      paddingHeight
    });
  }, []);
  const handleChange = (event) => {
    onChange(event);
    const {
      lineHeight,
      paddingHeight
    } = textareaDimensions;
    const previousRows = event.target.rows;
    event.target.rows = minRows;
    const currentRows = ~~((event.target.scrollHeight - paddingHeight) / lineHeight);
    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }
    if (maxRows && currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }
    setRows(maxRows && currentRows > maxRows ? maxRows : currentRows);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { className: classes(text_area_module_default.textarea, className), ref: textareaRef, onChange: handleChange, style: cssProps({
    resize
  }), rows, value, ...rest }, void 0, false, {
    fileName: "app/components/input/text-area.jsx",
    lineNumber: 64,
    columnNumber: 10
  }, this);
};
_s(TextArea, "CUlpykf2GQVTbqmSxcDqgKNeA/Y=");
_c = TextArea;
var _c;
$RefreshReg$(_c, "TextArea");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/input/input.module.css
var input_module_default = { "container": "input-module__container__kkjWZ", "content": "input-module__content__kG0OK", "input": "input-module__input__SDam6", "root": "input-module__root__VdEVq", "underline": "input-module__underline__lqyKb", "label": "input-module__label__PMrKI", "error": "input-module__error__6J0F4", "errorMessage": "input-module__errorMessage__Sf0KK" };

// app/components/input/input.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\input\\\\input.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\input\\input.jsx"
  );
}
var Input = ({
  id,
  label,
  value,
  multiline,
  className,
  style,
  error,
  onBlur,
  autoComplete,
  required,
  maxLength,
  type,
  onChange,
  name,
  ...rest
}) => {
  _s2();
  const [focused, setFocused] = (0, import_react2.useState)(false);
  const generatedId = (0, import_react2.useId)();
  const errorRef = (0, import_react2.useRef)();
  const inputId = id || `${generatedId}input`;
  const labelId = `${inputId}-label`;
  const errorId = `${inputId}-error`;
  const InputElement = multiline ? TextArea : "input";
  const handleBlur = (event) => {
    setFocused(false);
    if (onBlur) {
      onBlur(event);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: classes(input_module_default.container, className), "data-error": !!error, style, ...rest, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: input_module_default.content, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: input_module_default.label, "data-focused": focused, "data-filled": !!value, id: labelId, htmlFor: inputId, children: label }, void 0, false, {
        fileName: "app/components/input/input.jsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InputElement, { className: input_module_default.input, id: inputId, "aria-labelledby": labelId, "aria-describedby": error ? errorId : void 0, onFocus: () => setFocused(true), onBlur: handleBlur, value, onChange, autoComplete, required, maxLength, type, name }, void 0, false, {
        fileName: "app/components/input/input.jsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: input_module_default.underline, "data-focused": focused }, void 0, false, {
        fileName: "app/components/input/input.jsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/input/input.jsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Transition, { unmount: true, in: error, timeout: msToNum(tokens.base.durationM), children: ({
      visible,
      nodeRef
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { ref: nodeRef, className: input_module_default.error, "data-visible": visible, id: errorId, role: "alert", style: cssProps({
      height: visible ? errorRef.current?.getBoundingClientRect().height : 0
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: input_module_default.errorMessage, ref: errorRef, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { icon: "error" }, void 0, false, {
        fileName: "app/components/input/input.jsx",
        lineNumber: 79,
        columnNumber: 15
      }, this),
      error
    ] }, void 0, true, {
      fileName: "app/components/input/input.jsx",
      lineNumber: 78,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/input/input.jsx",
      lineNumber: 74,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/input/input.jsx",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/input/input.jsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
};
_s2(Input, "+ApwUwQhsDc1iDnEiuzYwqEfAq0=", false, function() {
  return [import_react2.useId];
});
_c2 = Input;
var _c2;
$RefreshReg$(_c2, "Input");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/input/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\input\\index.js"
  );
  import.meta.hot.lastModified = "1759533528969.1982";
}

// app/hooks/useFormInput.js
var import_react3 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\hooks\\useFormInput.js"
  );
  import.meta.hot.lastModified = "1759533528991.303";
}
function useFormInput(initialValue = "") {
  const [value, setValue] = (0, import_react3.useState)(initialValue);
  const [error, setError] = (0, import_react3.useState)();
  const [isDirty, setIsDirty] = (0, import_react3.useState)(false);
  const handleChange = (event) => {
    setValue(event.target.value);
    setIsDirty(true);
    if (error && event.target.checkValidity()) {
      setError(null);
    }
  };
  const handleInvalid = (event) => {
    event.preventDefault();
    setError(event.target.validationMessage);
  };
  const handleBlur = (event) => {
    if (isDirty) {
      event.target.checkValidity();
    }
  };
  return {
    value,
    error,
    onChange: handleChange,
    onBlur: handleBlur,
    onInvalid: handleInvalid
  };
}

// app/routes/contact/contact.jsx
var import_react9 = __toESM(require_react(), 1);

// app/routes/contact/contact.module.css
var contact_module_default = { "contact": "contact-module__contact__n2XMS", "form": "contact-module__form__4W4F-", "title": "contact-module__title__-fCli", "divider": "contact-module__divider__TE-yZ", "input": "contact-module__input__ddk7S", "botkiller": "contact-module__botkiller__0uxaC", "button": "contact-module__button__Se1qR", "complete": "contact-module__complete__RRn1U", "completeTitle": "contact-module__completeTitle__-Haq2", "completeText": "contact-module__completeText__twaFB", "completeButton": "contact-module__completeButton__OwrQg", "formError": "contact-module__formError__pNp7h", "formErrorContent": "contact-module__formErrorContent__mdL26", "formErrorMessage": "contact-module__formErrorMessage__auRJo", "formErrorIcon": "contact-module__formErrorIcon__MZFlX", "footer": "contact-module__footer__fJgYh" };

// node_modules/@formspree/react/dist/index.mjs
var import_react_stripe_js = __toESM(require_react_stripe_umd(), 1);
var import_react4 = __toESM(require_react(), 1);
var import_core = __toESM(require_dist(), 1);
var import_react_stripe_js2 = __toESM(require_react_stripe_umd(), 1);
var import_pure = __toESM(require_pure2(), 1);
var import_react5 = __toESM(require_react(), 1);
var import_react6 = __toESM(require_react(), 1);
var import_react_stripe_js3 = __toESM(require_react_stripe_umd(), 1);
var import_react7 = __toESM(require_react(), 1);
var import_core2 = __toESM(require_dist(), 1);
var import_react8 = __toESM(require_react(), 1);
var import_core3 = __toESM(require_dist(), 1);
var import_react_stripe_js4 = __toESM(require_react_stripe_umd(), 1);
function V(e) {
  let { prefix: t, field: r, errors: o, ...s } = e;
  if (o == null)
    return null;
  let n = r ? o.getFieldErrors(r) : o.getFormErrors();
  return n.length === 0 ? null : import_react4.default.createElement("div", { ...s }, t ? `${t} ` : null, n.map((a) => a.message).join(", "));
}
var E = (0, import_react7.createContext)({ elements: null });
function v() {
  return (0, import_react7.useContext)(E);
}
var h = import_react5.default.createContext(null);
function b() {
  return (0, import_react5.useContext)(h) ?? { client: (0, import_core.getDefaultClient)() };
}
var D = "3.0.0";
var z = `@formspree/react@${D}`;
function F(e, t = {}) {
  let r = b(), { client: o = r.client, extraData: s, origin: n } = t, { elements: a } = v(), { stripe: i } = o;
  return async function(p) {
    let m = I(p) ? $(p) : p;
    if (typeof s == "object")
      for (let [u, g] of Object.entries(s)) {
        let d;
        typeof g == "function" ? d = await g() : d = g, d !== void 0 && (0, import_core3.appendExtraData)(m, u, d);
      }
    let c = a?.getElement(import_react_stripe_js4.CardElement), x = i && c ? () => i.createPaymentMethod({ type: "card", card: c, billing_details: G(m) }) : void 0;
    return o.submitForm(e, m, { endpoint: n, clientName: z, createPaymentMethod: x });
  };
}
function I(e) {
  return "preventDefault" in e && typeof e.preventDefault == "function";
}
function $(e) {
  e.preventDefault();
  let t = e.currentTarget;
  if (t.tagName != "FORM")
    throw new Error("submit was triggered for a non-form element");
  return new FormData(t);
}
function G(e) {
  let t = { address: Y(e) };
  for (let r of ["name", "email", "phone"]) {
    let o = e instanceof FormData ? e.get(r) : e[r];
    o && typeof o == "string" && (t[r] = o);
  }
  return t;
}
function Y(e) {
  let t = {};
  for (let [r, o] of [["address_line1", "line1"], ["address_line2", "line2"], ["address_city", "city"], ["address_country", "country"], ["address_state", "state"], ["address_postal_code", "postal_code"]]) {
    let s = e instanceof FormData ? e.get(r) : e[r];
    s && typeof s == "string" && (t[o] = s);
  }
  return t;
}
function J(e, t = {}) {
  let [r, o] = (0, import_react8.useState)(null), [s, n] = (0, import_react8.useState)(null), [a, i] = (0, import_react8.useState)(false), [l, p] = (0, import_react8.useState)(false);
  if (!e)
    throw new Error('You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")');
  let m = F(e, { client: t.client, extraData: t.data, origin: t.endpoint });
  return [{ errors: r, result: s, submitting: a, succeeded: l }, async function(x) {
    i(true);
    let u = await m(x);
    i(false), (0, import_core2.isSubmissionError)(u) ? (o(u), p(false)) : (o(null), n(u), p(true));
  }, function() {
    o(null), n(null), i(false), p(false);
  }];
}

// app/routes/contact/contact.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\contact\\\\contact.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\contact\\contact.jsx"
  );
}
var meta = () => {
  return baseMeta({
    title: "Contacto",
    description: "Env\xEDame un mensaje si est\xE1s interesado en discutir un proyecto o si simplemente quieres saludarme."
  });
};
var Contact = () => {
  _s3();
  const errorRef = (0, import_react9.useRef)();
  const email = useFormInput("");
  const message = useFormInput("");
  const initDelay = tokens.base.durationS;
  const [state, handleSubmit] = J("mkgqzaeb");
  const sending = state.submitting;
  const success = state.succeeded;
  const errors = state.errors;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Section, { className: contact_module_default.contact, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Transition, { unmount: true, in: !success, timeout: 1600, children: ({
      status,
      nodeRef
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { onSubmit: handleSubmit, className: contact_module_default.form, ref: nodeRef, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Heading, { className: contact_module_default.title, "data-status": status, level: 3, as: "h1", style: getDelay(tokens.base.durationXS, initDelay, 0.3), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DecoderText, { text: "\xA1D\xED Hola!", start: status !== "exited", delay: 300 }, void 0, false, {
        fileName: "app/routes/contact/contact.jsx",
        lineNumber: 65,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/contact/contact.jsx",
        lineNumber: 63,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Divider, { className: contact_module_default.divider, "data-status": status, style: getDelay(tokens.base.durationXS, initDelay, 0.4) }, void 0, false, {
        fileName: "app/routes/contact/contact.jsx",
        lineNumber: 67,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input, { className: contact_module_default.botkiller, label: "Name", name: "name", maxLength: 512 }, void 0, false, {
        fileName: "app/routes/contact/contact.jsx",
        lineNumber: 71,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input, { required: true, className: contact_module_default.input, "data-status": status, style: getDelay(tokens.base.durationXS, initDelay), autoComplete: "email", label: "Tu email", type: "email", name: "email", maxLength: 512, ...email }, void 0, false, {
        fileName: "app/routes/contact/contact.jsx",
        lineNumber: 74,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(V, { prefix: "Email", field: "email", errors }, void 0, false, {
        fileName: "app/routes/contact/contact.jsx",
        lineNumber: 76,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input, { required: true, multiline: true, className: contact_module_default.input, "data-status": status, style: getDelay(tokens.base.durationS, initDelay), autoComplete: "off", label: "Mensaje", name: "message", maxLength: 4096, ...message }, void 0, false, {
        fileName: "app/routes/contact/contact.jsx",
        lineNumber: 78,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(V, { prefix: "Mensaje", field: "message", errors }, void 0, false, {
        fileName: "app/routes/contact/contact.jsx",
        lineNumber: 80,
        columnNumber: 13
      }, this),
      errors && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Transition, { unmount: true, in: Object.keys(errors).length > 0, timeout: msToNum(tokens.base.durationM), children: ({
        status: errorStatus,
        nodeRef: nodeRef2
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: contact_module_default.formError, ref: nodeRef2, "data-status": errorStatus, style: cssProps({
        height: errorStatus ? errorRef.current?.offsetHeight : 0
      }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: contact_module_default.formErrorContent, ref: errorRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: contact_module_default.formErrorMessage, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Icon, { className: contact_module_default.formErrorIcon, icon: "error" }, void 0, false, {
          fileName: "app/routes/contact/contact.jsx",
          lineNumber: 93,
          columnNumber: 25
        }, this),
        "Hay un problema con los datos del formulario."
      ] }, void 0, true, {
        fileName: "app/routes/contact/contact.jsx",
        lineNumber: 92,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/routes/contact/contact.jsx",
        lineNumber: 91,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/contact/contact.jsx",
        lineNumber: 87,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/contact/contact.jsx",
        lineNumber: 82,
        columnNumber: 24
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { className: contact_module_default.button, "data-status": status, "data-sending": sending, style: getDelay(tokens.base.durationM, initDelay), disabled: sending, loading: sending, loadingText: "Enviando...", icon: "send", type: "submit", children: "Enviar mensaje" }, void 0, false, {
        fileName: "app/routes/contact/contact.jsx",
        lineNumber: 100,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contact/contact.jsx",
      lineNumber: 61,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/contact/contact.jsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Transition, { unmount: true, in: success, children: ({
      status,
      nodeRef
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: contact_module_default.complete, "aria-live": "polite", ref: nodeRef, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Heading, { level: 3, as: "h3", className: contact_module_default.completeTitle, "data-status": status, children: "Mensaje enviado" }, void 0, false, {
        fileName: "app/routes/contact/contact.jsx",
        lineNumber: 113,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { size: "l", as: "p", className: contact_module_default.completeText, "data-status": status, style: getDelay(tokens.base.durationXS), children: "Me pondr\xE9 en contacto contigo en un par de d\xEDas, qu\xE9date tranquilo/a." }, void 0, false, {
        fileName: "app/routes/contact/contact.jsx",
        lineNumber: 117,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { secondary: true, iconHoverShift: true, className: contact_module_default.completeButton, "data-status": status, style: getDelay(tokens.base.durationM), href: "/", icon: "chevron-right", children: "Volver a la p\xE1gina de inicio" }, void 0, false, {
        fileName: "app/routes/contact/contact.jsx",
        lineNumber: 121,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contact/contact.jsx",
      lineNumber: 112,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/contact/contact.jsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Footer, { className: contact_module_default.footer }, void 0, false, {
      fileName: "app/routes/contact/contact.jsx",
      lineNumber: 128,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/contact/contact.jsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
};
_s3(Contact, "1148lCJ8p8DQhq8xz2CMv5NEcaI=", false, function() {
  return [useFormInput, useFormInput, J];
});
_c3 = Contact;
function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({
    delay: numToMs((msToNum(offset) + numDelay).toFixed(0))
  });
}
var _c3;
$RefreshReg$(_c3, "Contact");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/contact/route.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\contact\\route.js"
  );
  import.meta.hot.lastModified = "1759792796057.5522";
}
export {
  Contact as default,
  meta
};
//# sourceMappingURL=/build/routes/contact-6O5ZFNSW.js.map
