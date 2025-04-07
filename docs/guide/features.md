---
outline: [2, 3]
order: 1
---

# Features:

- Build-time parsing:

  - Each icon will be automatically imported and registered in the Nuxt project as individual Vue component in the tree
  - Use of the initial name of the icon, with optional prefix and suffix (`user-badge.svg` -> `IconUserBadge`, `UserBadgeIcon` or `user-badge`)

- Runtime access and accessibility / customization:

  - Each `stroke`, `fill` or other style attributes will be automatically filled by CSS Custom Properties at build-time based on initial value or a theme
  - Since CSS Custom Properties work at runtime, they can be used to dynamically change icons components in cascade for each individual icons and property (fill, stroke, stroke-width, etc.)
  - No extra wrapper will be present aroung the SVG itself, ###### allowing for more flexibility in styling and accessibility

- Customization and Developer Experience:

  - Can provide auto-completion and type-checking in the IDE for each icons, as they are directly part of the Nuxt Build
  - Full Vue DevTools support
