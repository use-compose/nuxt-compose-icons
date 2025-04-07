import type { IconSizeKeyValue } from '../types';
import { IconSize } from '../types';

export const iconSizeClass: { [key in IconSizeKeyValue]: string } = {
  [IconSize.xs]: 'size-xs',
  [IconSize.sm]: 'size-sm',
  [IconSize.md]: 'size-md',
  [IconSize.lg]: 'size-lg',
  [IconSize.xl]: 'size-xl',
};

export function getIconSizeClass(size: IconSizeKeyValue | string): string {
  if (!size) {
    return iconSizeClass[IconSize.md];
  }
  if (Object.keys(iconSizeClass).includes(size)) {
    return iconSizeClass[(size || IconSize.md) as IconSizeKeyValue];
  } else {
    return size;
  }
}
