---
outline: [2, 3]
order: 1
---

# Features:

## Build-time parsing:

-

- Runtime access and accessibility / customization:

  - Each `stroke`, `fill` or other style attributes will be automatically filled by CSS Custom Properties at build-time based on initial value or a theme
  - Since CSS Custom Properties work at runtime, they can be used to dynamically change icons components in cascade for each individual icons and property (fill, stroke, stroke-width, etc.)
  - No extra wrapper will be present aroung the SVG itself, ###### allowing for more flexibility in styling and accessibility

- Customization and Developer Experience:

  - Can provide auto-completion and type-checking in the IDE for each icons, as they are directly part of the Nuxt Build
  - Full Vue DevTools support

An overview of what this module provides at build and runtime.

## Build-time Parsing

### Component Generation

- One Vue component is created per `.svg` file
- Use of the initial name of the icon, converted to PascalCase or snake-case with optional prefix and suffix.
  Example `user-badge.svg` can give:
  - `<IconUserBadge />`
  - `<UserBadgeIcon />`
  - `<user-badge />`
- Optional support for folder-based namespacing - icon Components can directly be generated in your codebase, making versioning possible

### Nuxt Integration

- Full auto-import support (no manual registration) - each icon will be automatically imported and registered in the Nuxt project as individual Vue component in the tree
- Type-safe usage in `<template>`
- Works with Volar, `<script setup>`, and TSX

## SVG Output - Accessibility

- Components render a single `<svg>` element
- No additional wrappers or nested templates
- Attributes from the original SVG are preserved

## CSS Custom Properties

- `fill`, `stroke`, and `stroke-width` are replaced by `var(--icon-*)`
- Original value is preserved as fallback
- Enables runtime theming with CSS variables
- Compatible with global tokens or scoped styles

The aim is to combine the control and quality of hand-authored components with the scalability and consistency of a build tool.

## Comparison with Other Icon Strategies

| Feature / Approach   | Third-party Libraries | Manual Vue Components | SVG Loaders (`vite-svg-loader`) | **This Module**    |
| -------------------- | --------------------- | --------------------- | ------------------------------- | ------------------ |
| **Setup**            | ✅ Easy               | ⚠️ Manual             | ⚠️ Requires config              | ✅ Minimal         |
| **Output**           | `<svg>` (clean)       | `<svg>` (custom)      | `<svg>` (inline)                | `<svg>` (clean)    |
| **Theming**          | ⚠️ Limited props      | ✅ Full control       | ✅ Flexible via CSS             | ✅ CSS variables   |
| **DX & Typing**      | ✅ Standard           | ✅ Full control       | ✅ With imports                 | ✅ Auto-typed      |
| **Scalability**      | ✅ Tree-shakable      | ⚠️ Tedious manually   | ✅ File-based, fast             | ✅ Build-optimized |
| **Nuxt Integration** | ✅ Works by default   | ✅ Auto-importable    | ✅ With module/plugin           | ✅ Native support  |

## Example

```xml
<!-- Input: user-badge.svg -->
<svg fill="#000" stroke="#fff" stroke-width="2">
  <path d="..." />
</svg>
```

```vue
<!-- Output: IconUserBadge.vue -->
<template>
  <svg
    :fill="var(--icon-fill, #000)"
    :stroke="var(--icon-stroke, #fff)"
    :stroke-width="var(--icon-stroke-width, 2)"
  >
    <path d="..." />
  </svg>
</template>
```

This provides a balance of control, flexibility, and developer experience, tailored for projects using custom icons or building design systems.
