module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
    "./.eslintrc-auto-import.json",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      // 支持装饰器
      legacyDecorators: true,
    },
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": 1,
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": 0,
  },
};
