---
outline: [2, 3]
order: 3
---

# Configuration

This module supports multiple configuration options to control icon generation, theming, and component registration. All options are passed under the `composeIcons` key in your `nuxt.config.ts`.

## Basic example

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-compose-icons'],
  composeIcons: {
    pathToIcons: './assets/icons',
  },
});
```

---

## Options

### `pathToIcons`

- **Type:** `string`
- **Required unless `iconComponentList` is used**
- Directory containing your `.svg` icon files.
- The module will scan and convert each file into a Vue component.

```ts
composeIcons: {
  pathToIcons: './assets/icons',
}
```

---

### `iconComponentList`

- **Type:** `Record<string, Component>`
- **Default:** `{}`
- An alternative to `pathToIcons`, for manually registering Vue components.

Use this to:

- Register pre-existing or third-party icon components
- Integrate with other icon sets
- Skip file system parsing

```ts
composeIcons: {
  iconComponentList: {
    'custom-icon': CustomIcon,
    'logo': LogoIcon,
  }
}
```

> Component names are still processed using `prefix`, `suffix`, and `case` rules.

---

### `generatedComponentOptions`

Controls how generated component names are formatted and where they are written.

```ts
composeIcons: {
  generatedComponentOptions: {
    prefix: 'My',
    suffix: 'Icon',
    case: 'kebab',
    componentsDestDir: 'components/generated',
  }
}
```

| Option              | Type                  | Default               | Description                                         |
| ------------------- | --------------------- | --------------------- | --------------------------------------------------- |
| `prefix`            | `string \| undefined` | `undefined`           | Prepended to the component name (e.g. `MyUserIcon`) |
| `suffix`            | `string`              | `"Icon"`              | Appended to the name (e.g. `UserIcon`)              |
| `case`              | `'pascal' \| 'kebab'` | `'pascal'`            | Naming convention for the component file name       |
| `componentsDestDir` | `string`              | `.nuxt/compose-icons` | Directory for generated Vue components              |

---

### `iconSizes`

- **Type:** `Record<string, string>`
- **Default:**

```ts
{
  xs: '0.5rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2.5rem',
}
```

- Used to generate utility-friendly `--icon-size-*` variables
- CSS file is automatically injected into the Nuxt build
- Can be overridden by your own theming layer

---

### `dryRun`

- **Type:** `boolean`
- **Default:** `false`
- Enables preview mode without writing files. Logs intended component names and exits before build continues.

```ts
composeIcons: {
  dryRun: true;
}
```

---

## CSS Integration

The module generates and injects two files into `nuxt.options.css` at build time:

- `compose-sizes.css`: exposes `--icon-size-{key}` variables
- `compose-icon.css`: optional base styling for icon components

You can override them or provide your own themes using these variables.

---

## Required Conditions

You **must provide either**:

- `pathToIcons`: to generate icons from `.svg` files
- **or** `iconComponentList`: to manually register existing components

Providing neither will result in a build error.

---

## Advanced Notes

- All icons are auto-registered via `components:extend`
- The module supports HMR and SSR
- Future features may include:
  - per-icon config
  - composables and variants

For implementation details, see [why we use literal templates](https://nuxt-compose-icons.arthurplazanet.com/why-literal-strings-to-create-vue-components).
