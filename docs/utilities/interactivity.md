---
title: Interactivity
description: Learn how to add hover, active, and focus effects to icons in nuxt-compose-icons.
order: 2
---

# 🧩 Interactivity

`nuxt-compose-icons` icons are **fully reactive** — they can respond to hover, focus, and active states just like buttons or links.

Since all colors and strokes are based on **CSS variables**, you can easily create interactive effects without touching your component logic.

---

## 🎮 Hover and Active States

```css
.compose-icon {
  transition: all 0.2s ease-in-out;
}

.compose-icon:hover {
  --icon-stroke: var(--brand-hover);
}

.compose-icon:active {
  --icon-stroke: var(--brand-active);
  transform: scale(0.96);
}
```
