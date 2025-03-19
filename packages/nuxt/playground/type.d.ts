declare module '@nuxt-compose-icons/utils' {
  export { generateColorVariable, getIconSizeClass } from '../src/runtime/utils';
}

declare module '@nuxt-compose-icons/types' {
  import type {
    ComposeIconProps,
    ComposeIconSize,
    IconSizeKey,
    IconSizeKeyValue,
  } from '../src/runtime/types';

  export { IconSize } from '../src/runtime/types';
  export type { ComposeIconProps, ComposeIconSize, ComposeIconSize, IconSizeKey, IconSizeKeyValue };
}

declare module '@nuxt-compose-icons/components' {
  export * from '../src/runtime/components/icons-generated';
}
