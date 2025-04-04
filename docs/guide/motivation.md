---
outline: [2, 3]
order: 0
---

# Motivation

Implementing Icon Components in a Vue or Nuxt codebase represents several challenges, which can lead to different solutions:

1. Use a library that can wrap your existing ones or provide an existing list of icons, and standardize the API

```vue
<template>
  <!-- either access the icon using a "name" prop  -->
  <icon name="home" />
  <!-- or naming the icon from a list of available icons -->
  <icon-home />
  <IconHome />
</template>
```

It's fast and efficient, but can present some limitations in terms of customizations, and often result in a wrapper `div` or `span` tag around the SVG icon in the HTML template, which can be a problem for styling and accessibility.

```html
<div class="icon-wrapper">
  <!-- The real icon -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <!-- ... -->
  </svg>
</div>
```

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

The goal of this module is to propose a balanced approach which gives design flexibility and developer experience, by dynamically generating Vue components from existing SVG files, naming them accordingly and that will be accessible as individual components in the Nuxt project.
