<template>
  <section class="banner">
    <HighlightedText tag="h1" labeled class="heading">
      <template #highlighted> Compose </template>your own Icon components library
      <h2 class="tagline text-xl">
        Automatically generates customizable Vue components based on SVG files
      </h2>
      <Separator />
    </HighlightedText>

    <IconOverview />
    <ModuleTemplateExample />

    <Features />
  </section>
</template>

<script setup>
import Features from './Features.vue';
import HighlightedText from './HighlightedText.vue';
import IconOverview from './IconOverview.vue';
import ModuleTemplateExample from './ModuleTemplateExample.vue';
import Separator from './Separator.vue';
</script>

<style lang="scss">
@import '../assets/scss/abstracts/mixins';

.banner {
  padding-top: 4svh;
  container-name: banner;
  container-type: inline-size;
  display: grid;
  align-items: center;
  // padding: 7.5rem 0;
  margin-bottom: 1rem;
  width: 100%;
  // min-height: 100svh;

  row-gap: 1rem;
  grid-template-areas:
    'icon-overview'
    'tagline'
    'heading'
    'features'
    'module-template-example';

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
  .icons-overview {
    grid-area: icon-overview;
    height: 100%;
    min-height: 8cqb;
    // grid-row: span 2;
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
}

.features {
  grid-area: features;
}

@include media('md') {
  .banner {
    // align-content: center;
    grid-template-columns: 1fr 3svw 1fr;
    grid-template-areas:
      'heading heading icon-overview'
      'features . module-template-example';
    // 'description description module-template-example'
    // 'module-example module-example module-template-example';
    // grid-template-columns: 1.5fr 1fr;
    // row-gap: unset;
    column-gap: 2rem;
    row-gap: 4rem;
    // justify-content: flex-start;
    // flex-direction: row;

    .title {
      max-width: 90%;
    }
  }
}
@container banner (min-width: 768px) {
  .features {
    grid-template-columns: repeat(2, minmax(260px, 1fr));
    grid-template-rows: repeat(2, minmax(160px, 1fr));
  }
}
</style>
