<template>
  <!-- <VPHomeHero> -->
  <IconOverview />

  <div class="wrapper">
    <div class="home-content">
      <Banner />
    </div>
  </div>
  <!-- </VPHomeHero> -->
</template>

<script setup>
import Banner from './Banner.vue';
import IconOverview from './IconOverview.vue';
</script>

<style>
.wrapper {
  z-index: 0;
  position: relative;
}
</style>
