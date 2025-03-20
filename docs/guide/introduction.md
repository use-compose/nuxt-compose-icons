---
outline: [2, 3]
order: 0
---

# Motivation

When we want to implement Icon Components in a Vue or Nuxt codebase, there are different solutions

1. Use a library that will directly provide Icon components and standardize the API

```vue
<template>
  <!-- either access the icon using a "name" prop  -->
  <icon name="home" />
  <!-- or naming the icon from a list of available icons -->
  <icon-home />
  <IconHome />
</template>
```

It's fast and efficient, butcan present some limitations, and often result in a wrapper `div` or `span` tag around the SVG icon, which can be a problem for styling and accessibility.

2. Build your own components directly from SVGs file, puting the `<svg>` tag at the root of the component

```vue MyIcon.vue
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="currentColor"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
    <path d="M2 17l10 5 10-5M12 2v15"></path>
  </svg>
</template>
<!-- Or a wrapper <BaseIcon>...</BaseIcon> -->
```

This solution is more flexible, as it gives more control over each SVG, but can be time-consuming and repetitive, especially when you have a lot of icons to manage.

---

The goal of this module is to propose a balanced approach which gives design flexibility and developer experience, by dynamically generating Vue components from SVG files, which will be accessible as individual components in the Nuxt project.

## Features:

- Build-time parsing:

  - Each icon will be directly accessible and visible as an individual Vue component in the tree, in addition to DevTools support
  - Use of the initial name of the icon, with optional prefix and suffix (`user-badge.svg` -> `IconUserBadge` or `UserBadgeIcon`)

- Runtime access and accessibility:

  - Each `stroke`, `fill` or other attribute will be automatically filled by CSS Custom Properties at build-time based on initial value or a theme
  - No extra wrapper will be present aroung the SVG itself, ###### allowing for more flexibility in styling and accessibility

- Customization and Developer Experience:
  - CSS Custom Properties can be used as cascade for each individual icons and property (fill, stroke, stroke-width, etc.)
  - Can provide auto-completion and type-checking in the IDE for each icons, as they are directly part of the Nuxt Build
