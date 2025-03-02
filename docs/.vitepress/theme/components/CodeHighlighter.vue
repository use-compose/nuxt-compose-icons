<template>
  <VueCodeHighlighter :code="code" :lang="lang" title="vue" />
</template>

<script setup lang="ts">
import { VueCodeHighlighter } from 'vue-code-highlighter';
import 'vue-code-highlighter/dist/style.css'; // dont forget to import

interface CodeHighlighterProps {
  lang: string; // Programming language for syntax highlighting
  fileName?: string; // File name to display as metadata
  code: string; // Path to the file containing code to highlight
}

const props: CodeHighlighterProps = defineProps<CodeHighlighterProps>();
</script>

<style scoped></style>
