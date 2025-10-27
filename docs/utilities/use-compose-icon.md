---
outline: [2, 3]
order: 0
---

# useComposeIcon

A helper composable for accessing icons thmeing logic in your app, using CSS Custom Properties. (`--icon-fill`, `--icon-stroke`, `--icon-stroke-width`) and returning reactive bindings ready to be used in your components.

This utility can be useful when you want to apply icon-related styles manually, and is used by all icon components by default.

- Customizable **color**, **stroke**, and **fill** values.
- Consistent **size scaling** via a design system.
- CSS-driven theming support using variables.

---

You can use `useComposeIcon` in any component that uses design tokens or dynamic CSS variables.

## Usage

1. Access the styles and classes used by the icons:

```vue
<script setup lang="ts">
import { useComposeIcon } from 'nuxt-compose-icons';

const { iconStyles, iconClasses } = useComposeIcon(props);
</script>

<template>
  <!-- Will use the styles and classes defined in the icon theme -->
  <span :style="iconStyles" :class="iconClasses">
    <slot />
  </span>
</template>
```

2. Directly use the `buildAttrs` method used to generate the attributes for the icon components:

```vue
<script setup lang="ts">
import { useComposeIcon } from 'nuxt-compose-icons';

const { buildAttrs } = useComposeIcon(props);
</script>

<template>
  <span v-bind="buildAttrs({ class: 'badge' })"><slot /></span>
</template>

<style scoped>
.badge {
  background: var(--icon-fill, var(--badge-bg, #eee));
  color: var(--icon-stroke, var(--badge-fg, #111));
  border-radius: var(--badge-radius, 6px);
  padding: 0.25rem 0.5rem;
}
</style>
```

Type definition:

Parameters

```ts
interface ComposeIconProps {
  color?: string;
  stroke?: string;
  strokeWidth?: string | number;
  fill?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
```

| Name          | Type                                   | Description                                                          |
| ------------- | -------------------------------------- | -------------------------------------------------------------------- |
| `color`       | `string`                               | The color of the icon, defaults to `var(--icon-fill)`                |
| `stroke`      | `string`                               | The stroke color of the icon, defaults to `var(--icon-stroke)`       |
| `strokeWidth` | `string \| number`                     | The stroke width of the icon, defaults to `var(--icon-stroke-width)` |
| `fill`        | `string`                               | The fill color of the icon, defaults to `var(--icon-fill)`           |
| `size`        | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | The size of the icon, defaults to `md`                               |

Returns

```ts
interface UseComposeIcon {
  iconStyles: Record<string, string | undefined>;
  iconClasses: string[];
  iconAttributes: {
    style: Record<string, string | undefined>;
    class: string[];
    viewBox?: string;
  };
  buildSvgAttributes: <T extends Record<string, string | number | undefined>>(
    svgAttributes?: T,
    extraClass?: string | string[],
  ) => T & {
    style: Record<string, string | undefined>;
    class: string[];
  };
}
```

| Name                 | Type                              | Description                                                                     |
| -------------------- | --------------------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------- | ------------------------------ |
| `iconStyles`         | `Record<string, string            | undefined>`                                                                     | Reactive styles object for the icon, including color, stroke, and size.                |
| `iconClasses`        | `string[]`                        | Reactive classes array for the icon, including size and any additional classes. |
| `iconAttributes`     | `{ style: Record<string, string   | undefined>, class: string[], viewBox?: string }`                                | Reactive attributes object for the icon, including style, class, and optional viewBox. |
| `buildSvgAttributes` | `<T extends Record<string, string | number                                                                          | undefined>>(svgAttributes?: T, extraClass?: string                                     | string[]) => T & { style: Record<string, string | undefined>, class: string[] }` |
