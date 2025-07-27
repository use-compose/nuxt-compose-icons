export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue'],
  rules: {
    ignoreFiles: [
      '**/dist/**',
      '**/node_modules/**',
      '**/.nuxt/**',
      '**/.output/**',
      '**/.cache/**',
      '**/test-results/**',
    ],
  },
};
