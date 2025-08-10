import * as path from 'node:path';
import { IconsModule as NuxtComposeIcons } from '../index';
import { type ComposeIconSize } from '../src/runtime/types';

const iconSizes: ComposeIconSize = {
  xs: '0.5rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '2rem',
  xl: '4rem',
};

export default defineNuxtConfig({
  modules: [NuxtComposeIcons],
  // Module options
  composeIcons: {
    pathToIcons: path.resolve(__dirname, 'assets/icons'),
    iconSizes,
    generatedComponentOptions: {
      suffix: 'Icon',
      case: 'pascal',
      componentsDestDir: path.resolve(__dirname, './components/nuxt-compose-icons'),
    },
    // dryRun: true,
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-12-14',
  css: ['@use-compose/ui/style.css'],
});
