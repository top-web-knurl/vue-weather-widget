import vue from "eslint-plugin-vue";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  ...vue.configs["flat/recommended"],

  {
    files: ["**/*.js"],
    rules: {
      "indent": ["error", 2]
    }
  },

  {
    files: ["**/*.vue"],
    rules: {
      "vue/html-indent": ["error", 4] 
    }
  },

  // Общие настройки для .js и .vue
  {
    files: ["**/*.vue", "**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/require-default-prop": "off"
    }
  }
];