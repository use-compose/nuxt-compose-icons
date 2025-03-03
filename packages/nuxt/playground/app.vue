<template>
  <div class="wrapper">
    <NuxtPage />
  </div>
</template>

<script setup></script>

<style>
body {
  margin: 0;
}
/* https://css-tricks.com/use-css-clamp-to-create-a-more-flexible-wrapper-utility/ */
.wrapper {
  width: clamp(16rem, 90vw, 120rem);
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
