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
import BoutonTwitterIcon from './icons/BoutonTwitterIcon.vue';
import CalendarIcon from './icons/CalendarIcon.vue';
import CircleCheckIcon from './icons/CircleCheckIcon.vue';
import CompletedIcon from './icons/CompletedIcon.vue';
import CropIcon from './icons/CropIcon.vue';
import DownloadIcon from './icons/DownloadIcon.vue';
import DropboxIcon from './icons/DropboxIcon.vue';
import EditIcon from './icons/EditIcon.vue';
import EditorAlighRightIcon from './icons/EditorAlighRightIcon.vue';
import EditorBoldIcon from './icons/EditorBoldIcon.vue';
import EnveloppeIcon from './icons/EnveloppeIcon.vue';
import PictosEditeurAlignerGaucheIcon from './icons/PictosEditeurAlignerGaucheIcon.vue';
import PictosEditeurCitationIcon from './icons/PictosEditeurCitationIcon.vue';
import PictosEditeurCommentaireIcon from './icons/PictosEditeurCommentaireIcon.vue';
import PictosEditeurCouleurBlancIcon from './icons/PictosEditeurCouleurBlancIcon.vue';
import PictosEditeurCouleurNoirIcon from './icons/PictosEditeurCouleurNoirIcon.vue';

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
  BoutonTwitterIcon,
  EditIcon,
  EnveloppeIcon,
  PictosEditeurAlignerGaucheIcon,
  PictosEditeurCitationIcon,
  PictosEditeurCommentaireIcon,
  PictosEditeurCouleurBlancIcon,
  PictosEditeurCouleurNoirIcon,
]);

const generateRandomStyles = () => {
  return Array.from({ length: 10 }, () => ({
    style: {
      '--top': `${Math.random() * 70 + 1}%`, // 10% to 90%
      '--left': `${Math.random() * 80 + 1}%`, // 10% to 90%
      '--scale': `${Math.random() * 90 + 50}%`, // 50% to 100%
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
