import {
  faStar
} from "/build/_shared/chunk-AMGQ7UTP.js";
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

// app/components/Star.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Star.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Star.tsx"
  );
  import.meta.hot.lastModified = "1695277950456.4644";
}
var Star = ({
  lank
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: StarIcon(lank) }, void 0, false, {
    fileName: "app/components/Star.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c = Star;
function StarIcon(lank) {
  const maxLank = 5;
  const starIcon = [];
  for (let i = 0; i < maxLank; i++) {
    if (i < lank) {
      starIcon.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faStar, color: "yellow" }, i, false, {
        fileName: "app/components/Star.tsx",
        lineNumber: 34,
        columnNumber: 21
      }, this));
    } else {
      starIcon.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faStar, color: "gray" }, i, false, {
        fileName: "app/components/Star.tsx",
        lineNumber: 36,
        columnNumber: 21
      }, this));
    }
  }
  return starIcon;
}
_c2 = StarIcon;
var Star_default = Star;
var _c;
var _c2;
$RefreshReg$(_c, "Star");
$RefreshReg$(_c2, "StarIcon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/SkillCard.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/SkillCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/SkillCard.tsx"
  );
  import.meta.hot.lastModified = "1695277950456.4644";
}
var SkillCard = ({
  skill
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white bg-opacity-20 rounded-lg mx-auto mb-5 p-5 w-11/12 md:w-[calc(30%-10px)]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: `${skill.deviconClassName} lg:text-8xl text-7xl mx-auto text-center` }, void 0, false, {
      fileName: "app/components/SkillCard.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/SkillCard.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "my-3 lg:text-2xl text-lg", children: skill.name }, void 0, false, {
      fileName: "app/components/SkillCard.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "skill-card__lank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Star_default, { lank: skill.lank }, void 0, false, {
      fileName: "app/components/SkillCard.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/SkillCard.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/SkillCard.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
};
_c3 = SkillCard;
var SkillCard_default = SkillCard;
var _c3;
$RefreshReg$(_c3, "SkillCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/data/skills.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/data/skills.ts"
  );
  import.meta.hot.lastModified = "1695277950456.4644";
}
var skills = [
  {
    name: "React",
    lank: 4,
    deviconClassName: "devicon-react-original-wordmark"
  },
  {
    name: "NEXT.js",
    lank: 4,
    deviconClassName: "devicon-nextjs-original-wordmark"
  },
  {
    name: "Gatsby",
    lank: 2,
    deviconClassName: "devicon-gatsby-plain-wordmark"
  },
  {
    name: "JavaScript",
    lank: 4,
    deviconClassName: "devicon-javascript-plain"
  },
  {
    name: "TypeScript",
    lank: 3,
    deviconClassName: "devicon-typescript-plain"
  },
  {
    name: "Python",
    lank: 3,
    deviconClassName: "devicon-python-plain-wordmark"
  },
  {
    name: "pytorch",
    lank: 1,
    deviconClassName: "devicon-pytorch-plain-wordmark"
  },
  {
    name: "vim",
    lank: 3,
    deviconClassName: "devicon-vim-plain"
  },
  {
    name: "git",
    lank: 3,
    deviconClassName: "devicon-git-plain-wordmark"
  },
  {
    name: "docker",
    lank: 1,
    deviconClassName: "devicon-docker-plain-wordmark"
  },
  {
    name: "firebase",
    lank: 2,
    deviconClassName: "devicon-firebase-plain-wordmark"
  },
  {
    name: "Google Cloud Platform",
    lank: 1,
    deviconClassName: "devicon-googlecloud-plain-wordmark"
  },
  {
    name: "Arch Linux",
    lank: 3,
    deviconClassName: "devicon-linux-plain"
  }
];

// app/routes/skills.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/skills.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/skills.tsx"
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Background_default, { styleName: "none", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "lg:text-5xl md:text-3xl text-2xl m-5", children: "Skills..." }, void 0, false, {
      fileName: "app/routes/skills.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-wrap", children: skills.map((skill) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SkillCard_default, { skill }, skill.name, false, {
        fileName: "app/routes/skills.tsx",
        lineNumber: 38,
        columnNumber: 18
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/skills.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/skills.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/skills.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_c4 = Index;
var _c4;
$RefreshReg$(_c4, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/skills-W47K2BUB.js.map
