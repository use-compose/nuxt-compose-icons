import type { ComposeIconSize } from '../../runtime/types';
import { IconSize } from '../../runtime/types';

// Default icon sizes if none have been provided to the module
const defaultSizes: ComposeIconSize = {
  [IconSize.S]: '1rem',
  [IconSize.M]: '2rem',
  [IconSize.L]: '3rem',
  [IconSize.XL]: '4rem',
};

/*
 * Generate a CSS file with the custom icon sizes provided
 * that will then be used to style the icons (see /runtime/assets/compose-icon.css)
 *
 * .compose-icon {
 *   width: var(--icon-size);
 *   height: var(--icon-size);
 * }
 *
 * .compose-icon.Size-s {
 *  --icon-size: var(--icon-size-s);
 * }
 *
 * If the component prop change, it will update the '--icon-size' value
 * and since it's a CSS variable, it will automatically update the class applied to the icon
 * at runtime without involving too much JavaScript
 */
export function generateCssFile(iconSizes?: ComposeIconSize) {
  const sizes = { ...defaultSizes, ...iconSizes };

  const cssContent = `:root {
  --icon-size-${IconSize.S}: ${sizes[IconSize.S]};
  --icon-size-${IconSize.M}: ${sizes[IconSize.M]};
  --icon-size-${IconSize.L}: ${sizes[IconSize.L]};
  --icon-size-${IconSize.XL}: ${sizes[IconSize.XL]};
}
`;

  return cssContent;
}
