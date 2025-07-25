// Define the enum with size keys
// TODO: Create more dynamic sizes from the module options?
export enum IconSize {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
}

export type IconSizeKey = keyof typeof IconSize;
export type IconSizeKeyValue = (typeof IconSize)[IconSizeKey];

// This define the interface for size real values
export interface ComposeIconSize {
  [IconSize.XS]: string;
  [IconSize.SM]: string;
  [IconSize.MD]: string;
  [IconSize.LG]: string;
  [IconSize.XL]: string;
}
