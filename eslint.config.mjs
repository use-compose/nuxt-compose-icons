import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    rules: { 'no-console': 'error' },
    settings: {
      'editor.formatOnSave': true,
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
    rules: {
      'vue/multi-word-component-names': [
        'error',
        {
          ignores: ['index'],
        },
      ],
    },
  },
  {
    ignores: [
      '**/dist/',
      '**/cache/',
      '**/.nuxt/',
      '**/.nvm/',
      '**/.output/',
      '**/.husky/',
      '**/icons-generated/',
      '**/.vitepress/theme/components/',
    ],
  },
  eslintConfigPrettier,
];
