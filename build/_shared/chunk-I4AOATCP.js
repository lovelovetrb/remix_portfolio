import {
  createHotContext
} from "/build/_shared/chunk-JPUYSU3G.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Background.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Background.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Background.tsx"
  );
  import.meta.hot.lastModified = "1695277950456.4644";
}
var Background = ({
  children,
  styleName
}) => {
  const leftStyle = "md:clip-path-left bg-white bg-opacity-20 md:mt-20";
  const rightStyle = "md:clip-path-right bg-white bg-opacity-20 md:mt-20";
  const noneStyle = "";
  const styling = () => {
    switch (styleName) {
      case "left":
        return leftStyle;
      case "right":
        return rightStyle;
      case "none":
        return noneStyle;
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `md:px-4 md:py-8 m-3 md:m-0 rounded-2xl md:rounded-none ${styling()}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto lg:max-w-5xl", children }, void 0, false, {
    fileName: "app/components/Background.tsx",
    lineNumber: 40,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Background.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
};
_c = Background;
var Background_default = Background;
var _c;
$RefreshReg$(_c, "Background");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Background_default
};
//# sourceMappingURL=/build/_shared/chunk-I4AOATCP.js.map
