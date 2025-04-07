<template>
  <div class="icon-overview">
    <Component
      :is="component"
      v-for="(component, index) in components"
      :key="index"
      :color="iconStyles"
      :class="iconSize"
      :some-prop="`Component ${index + 1}`"
    />
    <AlarmBellIcon />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, resolveComponent, type Component } from 'vue';
import type { ComposeIconSize } from '../../src/runtime/types';
import { IconSize } from '../../src/runtime/types';
import { getIconSizeClass } from '../../src/runtime/utils';
import * as AllIcons from './nuxt-compose-icons';

interface IconOverviewProps {
  size: ComposeIconSize;
  color: string;
}

const props = defineProps<IconOverviewProps>();

// const components = ref<ReturnType<typeof defineAsyncComponent>[]>([]);
const components = ref<(Component | string)[]>([]);

const loadComponents = () => {
  return Object.keys(AllIcons).map((file) => {
    const component = resolveComponent(file);
    return component;
  });
};

onMounted(() => {
  components.value = loadComponents();
});

const iconSize = computed(() => {
  return getIconSizeClass(IconSize.xl || 'xl');
});

const iconStyles = computed(() => {
  return props.color;
});
</script>

<style>
.icon-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(1rem, 1fr));
  gap: 2rem;
}
</style>
