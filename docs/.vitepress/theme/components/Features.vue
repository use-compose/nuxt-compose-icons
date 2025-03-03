<template>
  <div class="features">
    <div v-for="feature in features" :key="feature.title" class="feature">
      <h3 class="feature-title">{{ feature.title }}</h3>
      <p>{{ feature.details }}</p>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    title: 'No extra wrapper needed',
    details: 'Icon component names are derived from the initial SVG file name',
  },
  {
    title: 'Fully dynamic',
    details: 'Generated at build time, customizable at runtime using CSS custom properties',
  },
  {
    title: 'Rendered as pure SVG',
    details: 'The final output is a pure SVG element, avoiding any polluting parent elements',
  },
  {
    title: 'Part of Nuxt build process',
    details:
      'Icons are generated and injected during the build process, and are available as any other components',
  },
];
</script>

<style lang="scss">
@import '../assets/scss/abstracts/mixins';

.features {
  // display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin-top: 2rem;
  display: grid;
}

.feature {
  display: flex;
  min-height: 160px;
  width: 100%;
  padding: 16px 24px;
  flex-direction: column;
  gap: 16px;
  border: 1px solid #5b1215;
  background: rgba(91, 18, 21, 0.25);

  .feature-title {
    font-size: var(--text-lg);
  }
}

@include media('md') {
  .features {
    // flex-direction: column;

    .feature {
      max-width: 280px;
      // width: calc(100% / 2);
    }
  }
}
</style>
