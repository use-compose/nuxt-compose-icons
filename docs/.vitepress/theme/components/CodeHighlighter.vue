<template>
  <VueCodeHighlighterMulti :code="code" :lang="lang" title="vue" />
</template>

<script setup lang="ts">
// import { VueCodeHighlighterMulti } from 'vue-code-highlighter';
import * as vueCodeH from 'vue-code-highlighter';
import 'vue-code-highlighter/dist/style.css'; // dont forget to import
const { VueCodeHighlighterMulti } = vueCodeH;
interface CodeHighlighterProps {
  lang: string; // Programming language for syntax highlighting
  fileName?: string; // File name to display as metadata
  code:
    | string
    | Array<{
        code: string;
        lang: string;
        title?: string;
      }>; // Path to the file containing code to highlight
}

const props: CodeHighlighterProps = defineProps<CodeHighlighterProps>();
</script>

<style scoped></style>
