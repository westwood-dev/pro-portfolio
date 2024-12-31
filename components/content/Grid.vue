<template>
  <div class="grid">
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ col?: string; row?: string }>();
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(65vh, 1fr));
  gap: 1rem;
  max-width: 100%;
  margin: 1rem 0;
}

@media screen and (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
