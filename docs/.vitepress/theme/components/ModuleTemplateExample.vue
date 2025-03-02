<template>
  <div>
    <VCodeBlock
      :code="vueComponentCode"
      highlightjs
      label="MyComponent.vue"
      lang="html"
      theme="neon-bunny"
    />
    <VCodeBlock
      :code="svgDirectoryCode"
      highlightjs
      label="Hello World"
      lang="bash"
      theme="neon-bunny"
    />
    <CodeHighlighter :code="vueComponentCode" lang="html" title="nuxt.config.ts" />
  </div>
</template>

<script setup lang="ts">
import VCodeBlock from '@wdns/vue-code-block';
import CodeHighlighter from './CodeHighlighter.vue';

// https://github.com/vuejs/vitepress/issues/603
const svgDirectoryCode = `├── icons
  │   ├── add-note.svg
  │   ├── time.svg
  │   ├── slide-right.svg
`;

const vueComponentCode = `<template>
  <section>
    <!-- add-note.svg -->
    <AddNoteIcon size="2rem" color="var(--primary)" />

    <!-- time.svg -->
    <TimeIcon size="xl" color="#36365F" />

    <!-- slide-right.svg -->
    <SlideRightIcon size="2rem" color="var(--primary)" />
  </section>
</template>
`;
</script>

<style scoped></style>
