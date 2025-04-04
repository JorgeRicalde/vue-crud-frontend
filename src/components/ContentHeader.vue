<script setup lang="ts">
const props = defineProps<{ title: string | null }>();
</script>

<template>
  <div class="content-header">
    <div class="container-fluid">
      <h1 class="m-0 text-white">{{ props.title }}</h1>
    </div>
  </div>
</template>

<style scoped></style>
