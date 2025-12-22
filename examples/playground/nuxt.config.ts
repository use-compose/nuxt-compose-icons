import type { NuxtComposeIconsOptions } from 'nuxt-compose-icons';

const options: NuxtComposeIconsOptions = {
  pathToIcons: './app/assets/icons',
  iconSizes: {
    xs: '0.5rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
  },
  generatedComponentOptions: {
    suffix: 'Icon',
    case: 'pascal',

    // relative path
    componentsDestDir: './app/components/nuxt-compose-icons',

    // absolute path
    // componentsDestDir: path.resolve('./app/components/nuxt-compose-icons'),
  },

  // dryRun: true,
};
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-compose-icons'],
  // Module options
  composeIcons: options,
  devtools: { enabled: true },
  compatibilityDate: '2024-12-14',
  // css: ['@use-compose/ui/style.css'],
});
