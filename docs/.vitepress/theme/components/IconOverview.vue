<template>
  <div class="icons-overview parallax">
    <div class="parallax__layer parallax__layer--back">
      <Component
        v-for="(icon, index) in icons"
        :is="icon"
        :key="index"
        class="icon"
        size="xl"
        :style="generateRandomStyles(index)"
      />
    </div>
    <div class="parallax__layer parallax__layer--base">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  AjouterIcon,
  ArticleIcon,
  BoiteAQuestion2Icon,
  BoiteAQuestionIcon,
  BookmarkIcon,
  BoutonFBIcon,
  BoutonInstaIcon,
  BoutonTwitterIcon,
  BrouillonIcon,
  ClocheIcon,
  CroixFermerIcon,
  CuicuiIcon,
  DevelopperIcon,
  EditIcon,
  EnveloppeIcon,
  FIcon,
  FacebookIcon,
  FlecheIcon,
  FlecheRetourIcon,
  Group37Icon,
  Group38Icon,
  GroupeIcon,
  ImportIcon,
  InstaIcon,
  InstagramIcon,
  LexiqueIcon,
  LinkIcon,
  LoupeIcon,
  MegaphoneIcon,
  MessageIcon,
  PersonnagesClesIcon,
  PictosCartes01Icon,
  PictosCartes02Icon,
  PictosCartes03Icon,
  PictosCartes04Icon,
  PictosCartes05Icon,
  PictosCartes06Icon,
  PictosEditeurAjouterImageIcon,
  PictosEditeurAjouterLienIcon,
  PictosEditeurAlignerDroiteIcon,
  PictosEditeurAlignerGaucheIcon,
  PictosEditeurAlignerMilieuIcon,
  PictosEditeurCitationIcon,
  PictosEditeurCommentaireIcon,
  PictosEditeurCouleurBlancIcon,
  PictosEditeurCouleurNoirIcon,
  PictosEditeurCouleurRougeIcon,
  PictosEditeurDeroulerIcon,
  PictosEditeurEncartIcon,
  PictosEditeurGrasIcon,
  PictosEditeurItaliqueIcon,
  PictosEditeurParagrapheIcon,
  PictosEditeurPucesIcon,
  PictosEditeurSouligneIcon,
  PictosEditeurSurlignageBlancIcon,
  PictosEditeurSurlignageNoirIcon,
  PictosEditeurSurlignageRougeIcon,
  PictosEditeurTitre1Icon,
  PictosEditeurTitre2Icon,
  PictosEditeurTraitIcon,
  PictosModulesAnonymeIcon,
  PictosModulesChronologieIcon,
  PictosModulesMettreEnAvantIcon,
  PictosModulesValiderIcon,
  Placeholder01Icon,
  PoingIcon,
  ProfilIcon,
  ReduireIcon,
  RevueDePresseIcon,
  SaveIcon,
  TexteIcon,
  TrashIcon,
  TwitterIcon,
} from './icons';
import './icons/assets/compose-icon.css';
import './icons/assets/compose-sizes.css';

const icons = ref([
  AjouterIcon,
  ArticleIcon,
  BoiteAQuestion2Icon,
  BoiteAQuestionIcon,
  BookmarkIcon,
  BoutonFBIcon,
  BoutonInstaIcon,
  BoutonTwitterIcon,
  BrouillonIcon,
  ClocheIcon,
  CroixFermerIcon,
  CuicuiIcon,
  DevelopperIcon,
  EditIcon,
  EnveloppeIcon,
  FIcon,
  FacebookIcon,
  FlecheIcon,
  FlecheRetourIcon,
  Group37Icon,
  Group38Icon,
  GroupeIcon,
  ImportIcon,
  InstaIcon,
  InstagramIcon,
  LexiqueIcon,
  LinkIcon,
  LoupeIcon,
  MegaphoneIcon,
  MessageIcon,
  PersonnagesClesIcon,
  PictosCartes01Icon,
  PictosCartes02Icon,
  PictosCartes03Icon,
  PictosCartes04Icon,
  PictosCartes05Icon,
  PictosCartes06Icon,
  PictosEditeurAjouterImageIcon,
  PictosEditeurAjouterLienIcon,
  PictosEditeurAlignerDroiteIcon,
  PictosEditeurAlignerGaucheIcon,
  PictosEditeurAlignerMilieuIcon,
  PictosEditeurCitationIcon,
  PictosEditeurCommentaireIcon,
  PictosEditeurCouleurBlancIcon,
  PictosEditeurCouleurNoirIcon,
  PictosEditeurCouleurRougeIcon,
  PictosEditeurDeroulerIcon,
  PictosEditeurEncartIcon,
  PictosEditeurGrasIcon,
  PictosEditeurItaliqueIcon,
  PictosEditeurParagrapheIcon,
  PictosEditeurPucesIcon,
  PictosEditeurSouligneIcon,
  PictosEditeurSurlignageBlancIcon,
  PictosEditeurSurlignageNoirIcon,
  PictosEditeurSurlignageRougeIcon,
  PictosEditeurTitre1Icon,
  PictosEditeurTitre2Icon,
  PictosEditeurTraitIcon,
  PictosModulesAnonymeIcon,
  PictosModulesChronologieIcon,
  PictosModulesMettreEnAvantIcon,
  PictosModulesValiderIcon,
  Placeholder01Icon,
  PoingIcon,
  ProfilIcon,
  ReduireIcon,
  RevueDePresseIcon,
  SaveIcon,
  TexteIcon,
  TrashIcon,
  TwitterIcon,
]);
console.log('📟 - icons → ', icons);

const tt = icons.value.map((icon, index) => {
  const newIcon = icon;
  console.log('📟 - newIcon → ', newIcon);
  return {
    ...newIcon,
    ...{ style: generateRandomStyles(index) },
  };
});

console.log('📟 - tt → ', tt);
function generateRandomStyles(index) {
  return {
    '--top': `${Math.random() * 70 + index + 1}%`, // 10% to 90%
    '--left': `${Math.random() * 80 + index + 1}%`, // 10% to 90%
    '--scale': `${Math.random() * 90 + 50}%`, // 50% to 100%
  };
}

const randomStyles = generateRandomStyles();
</script>

<style lang="scss">
.icons-overview {
  z-index: 0;
  position: absolute;
  inset: 0;

  .icon {
    position: absolute;
    top: var(--top);
    left: var(--left);
    transform: scale(var(--scale));
  }
}
</style>
