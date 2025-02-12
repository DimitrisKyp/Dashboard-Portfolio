import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: { react: { version: "19.0.0" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    extends: [
      "xo",
      "prettier",
      "plugin:prettier/recommended", // Prettier integration with ESLint
      "eslint-config-prettier",
    ],
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

      // Custom ESLint rules
      "max-len": ["error", { code: 130 }],
      "capitalized-comments": "off",
      "max-params": ["error", 6],
      "new-cap": "off",
      "no-unused-vars": "warn",
      "no-await-in-loop": "warn",
      "no-else-return": "warn",
      "function-paren-newline": "off",
      "function-call-argument-newline": ["error", "consistent"],
      "multiline-comment-style": "off",
    },
  },
);
