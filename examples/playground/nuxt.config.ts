import type { NuxtComposeIconsOptions } from 'nuxt-compose-icons';
import Module from 'nuxt-compose-icons';

const options: NuxtComposeIconsOptions = {
  pathToIcons: './app/assets/icons',
  iconSizes: {
    xs: '0.5rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
  },

  // dryRun: true,
};
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [Module],
  composeIcons: options,
});
