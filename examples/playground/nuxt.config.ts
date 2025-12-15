import type { NuxtComposeIconsOptions } from 'nuxt-compose-icons';
import * as path from 'path';
import { fileURLToPath } from 'url';

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
    componentsDestDir: path.resolve(
      fileURLToPath(new URL('./app/components/nuxt-compose-icons', import.meta.url)),
    ),
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
