<template>
  <Component :is="tag" :class="getClasses">
    <span>
      <slot name="highlighted" />
    </span>
    <slot />
  </Component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface HighlightedProps {
  tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  active?: boolean;
  labeled?: boolean;
}

const props = withDefaults(defineProps<HighlightedProps>(), {
  tag: 'span',
  active: true,
  labeled: false,
});

const getClasses = computed(() => [
  'highlighted',
  { active: props.active, labeled: props.labeled },
]);
</script>

<style scoped lang="scss">
@import '../assets/scss/abstracts/mixins';

.highlighted {
  font-family: 'gotham', sans-serif;
  // text-transform: uppercase;
  font-weight: 900;
  margin: 0;
  position: relative;

  > span {
    background-image: linear-gradient(var(--clr-primary), var(--clr-primary));
    position: relative;
    box-decoration-break: clone;
    padding: 2px;
    color: var(--clr-text);
  }

  &.labeled {
    > span {
      left: clamp(-20px, -1.4vw, -4px);
      padding-left: clamp(4px, 1.4vw, 20px);
    }
  }
  @include media(md) {
    &.animate {
      > span {
        background-size: 0% 100%;
        -webkit-background-clip: padding-box, text;
        background-clip: padding-box, text;
        background-repeat: no-repeat;
        background-position: left;
        animation: animate-out 0.3s 0s forwards;
      }

      &.active {
        > span {
          animation: animate-in 0.4s 0.1s forwards;
        }
      }
    }
  }
}
</style>
