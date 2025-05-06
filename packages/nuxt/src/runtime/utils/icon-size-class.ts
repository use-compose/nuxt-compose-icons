import type { IconSizeKeyValue } from '../types';
import { IconSize } from '../types';

export const iconSizeClass: { [key in IconSizeKeyValue]: string } = {
  [IconSize.XS]: 'size-xs',
  [IconSize.SM]: 'size-sm',
  [IconSize.MD]: 'size-md',
  [IconSize.LG]: 'size-lg',
  [IconSize.XL]: 'size-xl',
};

export function getIconSizeClass(size: IconSizeKeyValue | string): string {
  if (Object.keys(iconSizeClass).includes(size)) {
    return iconSizeClass[(size || IconSize.MD) as IconSizeKeyValue];
  } else {
    return size;
  }
}
