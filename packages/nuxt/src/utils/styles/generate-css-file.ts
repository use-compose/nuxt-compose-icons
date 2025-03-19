import type { ComposeIconSize } from '../../runtime/types';
import { IconSize } from '../../runtime/types';

// Default icon sizes if none have been provided to the module
const defaultSizes: ComposeIconSize = {
  [IconSize.xs]: '0.5rem',
  [IconSize.sm]: '0.75rem',
  [IconSize.md]: '1rem',
  [IconSize.lg]: '1.5rem',
  [IconSize.xl]: '2rem',
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
export function generateCssFile(iconSizes?: ComposeIconSize): string {
  const sizes = { ...defaultSizes, ...iconSizes };

  const cssContent = `:root {
  --icon-size-${IconSize.xs}: ${sizes[IconSize.xs]};
  --icon-size-${IconSize.sm}: ${sizes[IconSize.sm]};
  --icon-size-${IconSize.md}: ${sizes[IconSize.md]};
  --icon-size-${IconSize.lg}: ${sizes[IconSize.lg]};
  --icon-size-${IconSize.xl}: ${sizes[IconSize.xl]};
}
`;

  return cssContent;
}
