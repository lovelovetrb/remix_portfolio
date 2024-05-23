/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "eslint-config-prettier",
    "eslint:recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2021,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  globals: {
    React: true,
    JSX: true,
  },
  rules: {
    "no-restricted-imports": [
      "error",
      {
        patterns: ["./", "../"],
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
