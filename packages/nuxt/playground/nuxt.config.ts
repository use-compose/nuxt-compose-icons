import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { type ComposeIconSize } from '../src/runtime/types';

const iconSizes: ComposeIconSize = {
  xs: '0.5rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '2rem',
  xl: '4rem',
};

export default defineNuxtConfig({
  modules: [fileURLToPath(new URL('../src/module', import.meta.url))],
  // Module options
  composeIcons: {
    pathToIcons: path.resolve(fileURLToPath(new URL('./assets/icons', import.meta.url))),
    iconSizes,
    generatedComponentOptions: {
      suffix: 'Icon',
      case: 'pascal',
      // componentsDestDir: path.resolve('./components/nuxt-compose-icons'),
    },
    // dryRun: true,
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-12-14',
  // css: ['@use-compose/ui/style.css'],
});
