import {
  faGithub,
  faTwitter
} from "/build/_shared/chunk-QSOIECHI.js";
import {
  FontAwesomeIcon
} from "/build/_shared/chunk-GHI6QCKZ.js";
import "/build/_shared/chunk-7A2YMHIB.js";
import {
  Background_default
} from "/build/_shared/chunk-I4AOATCP.js";
import {
  createHotContext
} from "/build/_shared/chunk-JPUYSU3G.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1695277950460.4644";
}
var meta = () => {
  return [{
    title: "@lovelovetrb"
  }, {
    name: "description",
    content: "@lovelovetrb portfolio page build with remix"
  }];
};
function Index() {
  const profile = [{
    title: "job",
    content: "College Student"
  }, {
    title: "major",
    content: "informatics / Natural Language Proceccing"
  }, {
    title: "age",
    content: `${(/* @__PURE__ */ new Date()).getFullYear() - 2002} years old`
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Background_default, { styleName: "right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-10 md:my-20 mx-1 p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex mt-10 lg:mt-20 flex-col lg:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "icon.jpeg", alt: "icon", className: "w-3/4 md:w-1/3 rounded-[50%] mx-auto" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5 lg:ml-10 flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "lg:text-3xl text-xl mt-5 text-center lg:text-left", children: [
        "\u99AC\u5834 \u6D77\u597D (Mizuki Baba)",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", { className: "block md:hidden" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 51,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "cursor-pointer text-xl ml-3", href: "https://twitter.com/lovelovetrb", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faTwitter }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 53,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 52,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "cursor-pointer text-xl  ml-3", href: "https://github.com/lovelovetrb", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faGithub }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 56,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 55,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 49,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "mt-5 lg:mt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: profile.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "text-md lg:text-lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: item.title }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 62,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: item.content }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 63,
          columnNumber: 23
        }, this)
      ] }, item.title, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 61,
        columnNumber: 40
      }, this)) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 60,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 59,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 46,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 45,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-SHWAFO5Y.js.map
