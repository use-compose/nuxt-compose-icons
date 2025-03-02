<template>
  <div class="icons-overview">
    <component
      v-for="(icon, index) in icons"
      :is="icon"
      :key="index"
      class="icon"
      size="xl"
      color="red"
      v-bind="randomStyles[index]"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ArrowLeftIcon from './icons/ArrowLeftIcon.vue';
import './icons/assets/compose-icon.css';
import './icons/assets/compose-sizes.css';
import AvatarUserIcon from './icons/AvatarUserIcon.vue';
import CalendarIcon from './icons/CalendarIcon.vue';
import CircleCheckIcon from './icons/CircleCheckIcon.vue';
import CompletedIcon from './icons/CompletedIcon.vue';
import CropIcon from './icons/CropIcon.vue';
import DownloadIcon from './icons/DownloadIcon.vue';
import DropboxIcon from './icons/DropboxIcon.vue';
import EditorAlighRightIcon from './icons/EditorAlighRightIcon.vue';
import EditorBoldIcon from './icons/EditorBoldIcon.vue';

const icons = ref([
  ArrowLeftIcon,
  AvatarUserIcon,
  CalendarIcon,
  CircleCheckIcon,
  CompletedIcon,
  CropIcon,
  DownloadIcon,
  DropboxIcon,
  EditorAlighRightIcon,
  EditorBoldIcon,
]);

const generateRandomStyles = () => {
  return Array.from({ length: 10 }, () => ({
    style: {
      '--top': `${Math.random() * 90 + 10}%`, // 10% to 90%
      '--left': `${Math.random() * 90 + 20}%`, // 10% to 90%
      '--scale': `${Math.random() * 90 + 10}%`, // 50% to 100%
    },
  }));
};

const randomStyles = ref(generateRandomStyles());
</script>

<style lang="scss">
.icons-overview {
  position: relative;

  .icon {
    position: absolute;
    top: var(--top);
    left: var(--left);
    transform: scale(var(--scale));
  }
}
</style>
