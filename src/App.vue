<script setup lang="ts">
import Nav from './components/Nav.vue';
import Aside from './components/Aside.vue';
</script>

<template>
  <Nav />
  <Aside />

  <div class="content-wrapper">
    <router-view />
  </div>
</template>

<style scoped></style>
