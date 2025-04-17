<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme';
import LogoIcon from './components/icons/LogoIcon.vue';

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout class="home-layout">
    <template #nav-bar-title-before>
      <LogoIcon size="xl" />
    </template>
  </Layout>
</template>
