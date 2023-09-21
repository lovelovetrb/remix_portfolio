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

// app/routes/form.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/form.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/form.tsx"
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
  const googleFormFetch = async (formContent) => {
    await fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSfZQZGFQcOIj74-C-nGznPnCatKjrrTMskVxnpKOtP4IA5ZFg/formResponse", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `entry.1318356055=${formContent.name}&entry.1295676376=${formContent.email}&entry.1428027242=${formContent.body}`
    }).then((res) => {
      if (res.ok) {
        alert("\u9001\u4FE1\u3057\u307E\u3057\u305F");
      } else {
        alert("\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F");
      }
    }).catch((err) => alert(`\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F: ${err}`));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const formContent = {
      name: encodeURIComponent(e.currentTarget[0].value),
      email: encodeURIComponent(e.currentTarget[1].value),
      body: encodeURIComponent(e.currentTarget[2].value)
    };
    console.log(formContent);
    googleFormFetch(formContent);
    e.currentTarget.reset();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Background_default, { styleName: "none", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "lg:text-5xl md:text-3xl text-xl m-5", children: "Contact" }, void 0, false, {
      fileName: "app/routes/form.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white bg-opacity-20 rounded-lg mx-auto p-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "form", onSubmit: submitHandler, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "my-3 text-xl", children: "\u304A\u540D\u524D" }, void 0, false, {
        fileName: "app/routes/form.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", className: "w-full", placeholder: "\u25EF\u25EF \u25EF\u25EF", required: true }, void 0, false, {
        fileName: "app/routes/form.tsx",
        lineNumber: 66,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/form.tsx",
        lineNumber: 65,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "my-3 text-xl", children: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9" }, void 0, false, {
        fileName: "app/routes/form.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", className: "w-full", placeholder: "example@example.com", required: true }, void 0, false, {
        fileName: "app/routes/form.tsx",
        lineNumber: 70,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/form.tsx",
        lineNumber: 69,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "my-3 text-xl", children: "\u672C\u6587" }, void 0, false, {
        fileName: "app/routes/form.tsx",
        lineNumber: 72,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { className: "w-full h-[10em]", placeholder: "\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9", required: true }, void 0, false, {
        fileName: "app/routes/form.tsx",
        lineNumber: 74,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/form.tsx",
        lineNumber: 73,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "bg-white bg-opacity-60 rounded-xl mt-3 py-3 px-5 text-black", type: "submit", value: "\u9001\u4FE1" }, void 0, false, {
        fileName: "app/routes/form.tsx",
        lineNumber: 77,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/form.tsx",
        lineNumber: 76,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/form.tsx",
      lineNumber: 63,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/form.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/form.tsx",
    lineNumber: 60,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/form.tsx",
    lineNumber: 59,
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
//# sourceMappingURL=/build/routes/form-6AZQWFAB.js.map
