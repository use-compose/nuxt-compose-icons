import * as path from 'node:path';
import NuxtComposeIcons from '../src/module';
import { IconSize, type ComposeIconSize } from '../src/runtime/types';

const iconSizes: ComposeIconSize = {
  [IconSize.xs]: '0.5rem',
  [IconSize.sm]: '0.875rem',
  [IconSize.md]: '1rem',
  [IconSize.lg]: '1.5rem',
  [IconSize.xl]: '2.5rem',
};

export default defineNuxtConfig({
  modules: [NuxtComposeIcons],
  // Module options
  composeIcons: {
    pathToIcons: path.resolve(__dirname, 'assets/icons'),
    iconSizes,
    generatedComponentOptions: {
      prefix: false,
      suffix: 'Icon',
      case: 'pascal',
    },
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-12-14',
});
