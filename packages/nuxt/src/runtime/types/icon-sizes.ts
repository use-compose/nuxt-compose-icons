// Define the icon sizes as a literal object
export const IconSize = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
} as const;

export type IconSizeKey = keyof typeof IconSize;
export type IconSizeKeyValue = (typeof IconSize)[IconSizeKey];
export interface ComposeIconSize {
  [IconSize.XS]: string;
  [IconSize.SM]: string;
  [IconSize.MD]: string;
  [IconSize.LG]: string;
  [IconSize.XL]: string;
}
