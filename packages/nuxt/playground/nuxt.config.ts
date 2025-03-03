import { resolve } from 'node:path';
import { IconSize, type ComposeIconSize } from '../src/runtime/types';

const iconSizes: ComposeIconSize = {
  [IconSize.xs]: '0.5rem',
  [IconSize.sm]: '0.875rem',
  [IconSize.md]: '1rem',
  [IconSize.lg]: '1.5rem',
  [IconSize.xl]: '2.5rem',
};

export default defineNuxtConfig({
  modules: [
    [
      '../src/module',
      {
        pathToIcons: resolve(__dirname, 'assets/icons'),
        // iconComponentList: iconComponentList,
        iconSizes,
      },
    ],
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-12-14',
});
