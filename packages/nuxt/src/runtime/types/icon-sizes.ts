// Define the enum with size keys
// TODO-NEW-DESIGN-SYSTEM: use specific values from the custom Tailwind theme?
export enum IconSize {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

export type IconSizeKey = keyof typeof IconSize;
export type IconSizeKeyValue = (typeof IconSize)[IconSizeKey];

// This define the interface for size real values
export interface ComposeIconSize {
  [IconSize.xs]: string;
  [IconSize.sm]: string;
  [IconSize.md]: string;
  [IconSize.lg]: string;
  [IconSize.xl]: string;
}
