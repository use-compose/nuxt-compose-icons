<template>
  <VueCodeHighlighterMulti :code="code" />
  <VueCodeHighlighter :code="'<p>test</p>'" lang="html" title="index.html" />
</template>

<script setup lang="ts">
// import { VueCodeHighlighterMulti } from 'vue-code-highlighter';
import * as vueCodeH from 'vue-code-highlighter';
import 'vue-code-highlighter/dist/style.css'; // dont forget to import
const { VueCodeHighlighterMulti, VueCodeHighlighter } = vueCodeH;
interface CodeHighlighterProps {
  fileName?: string; // File name to display as metadata
  code: Array<{
    code: string;
    lang: string;
    title?: string;
  }>; // Path to the file containing code to highlight
}

const props: CodeHighlighterProps = defineProps<CodeHighlighterProps>();
</script>
