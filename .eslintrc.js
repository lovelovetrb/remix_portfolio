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
  rules: {
    "no-undef": ["error", { ignore: ["React", "JSX"] }],
    "no-restricted-imports": [
      "error",
      {
        patterns: ["./", "../"],
      },
    ],
  },
};
