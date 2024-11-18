<template>
  <div class="grid">
    <!-- <p>GRID VIEW {{ props.col }} x {{ props.row }}</p> -->
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ col?: string; row?: string }>();
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  max-width: 100%;
}

@media screen and (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
