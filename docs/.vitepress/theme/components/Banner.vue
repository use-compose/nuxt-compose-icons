<template>
  <section class="banner">
    <HighlightedText tag="h1" labeled class="heading">
      <template #highlighted> Compose </template>your own Icon components library
    </HighlightedText>
    <p class="tagline text-xl">
      Nuxt
      <HighlightedText tag="span"><template #highlighted>Compose</template></HighlightedText>
      Ico<span class="primary">n</span>s is a Module that automatically generates customizable Vue
      components based on SVG files
    </p>
    <IconOverview />
    <ModuleTemplateExample class="module-template-example" />

    <Features />
  </section>
</template>

<script setup>
import Features from './Features.vue';
import HighlightedText from './HighlightedText.vue';
import IconOverview from './IconOverview.vue';
import ModuleTemplateExample from './ModuleTemplateExample.vue';
</script>

<style lang="scss" scoped>
@import '../assets/scss/abstracts/mixins';

.banner {
  padding-top: 4svh;
  container-name: banner;
  container-type: inline-size;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: center;
  // padding: 7.5rem 0;
  margin-bottom: 1rem;
  width: 100%;
  // min-height: 100svh;

  row-gap: 1rem;
  grid-template-areas:
    'tagline tagline'
    'icon-overview icon-overview'
    'heading heading'
    'features features'
    'module-template-example module-template-example';

  // 'module-template-example module-template-example';
  // grid-template-columns: auto 1fr;

  // .app-title {
  //   grid-area: title;
  //   margin: 0;
  //   font-size: $text-5-5;
  // }

  // .description {
  //   grid-area: description;
  //   // height: 100%;
  //   // text-align: center;
  // }

  // .module-example {
  //   grid-area: module-example;
  // }

  // .module-template-example {
  //   grid-area: module-template-example;
  //   font-size: 14px;
  //   // height: 100%;

  //   :deep .prism-code {
  //     // height: 100%;
  //   }
  // }
  &:deep(.icons-overview) {
    grid-area: icon-overview;
    height: 100%;
    grid-row: span 2;
  }
}

.heading {
  grid-area: heading;
  align-self: end;
}

.tagline {
  grid-area: tagline;
  align-self: end;
  font-size: var(--text-lg);

  &::first-letter {
    color: var(--clr-primary);
  }
}

.module-template-example {
  grid-area: module-template-example;
  min-width: 25svw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
}

.features {
  grid-area: features;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(160px, 1fr));
}

@include media('lg') {
  .banner {
    grid-template-areas:
      'heading icon-overview icon-overview'
      'tagline icon-overview icon-overview'
      'module-template-example features features'
      'module-template-example features features';
    // 'description description module-template-example'
    // 'module-example module-example module-template-example';
    // grid-template-columns: 1.5fr 1fr;
    // row-gap: unset;
    column-gap: 2rem;
    // justify-content: flex-start;
    // flex-direction: row;

    .title {
      max-width: 90%;
    }
  }
  .features {
    grid-template-columns: repeat(2, minmax(260px, 1fr));
    grid-template-rows: repeat(2, minmax(160px, 1fr));
  }

  .module-template-example {
    flex-direction: row;
  }
}
</style>
