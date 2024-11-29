<template>
  <h2 :id="props.id">
    <slot />
  </h2>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports';

const props = defineProps<{ id?: string }>();

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(
  () =>
    props.id &&
    ((typeof headings?.anchorLinks === 'boolean' &&
      headings?.anchorLinks === true) ||
      (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h2))
);
</script>

<style scoped>
h2 {
  font-size: 5rem;
  font-weight: 700;
  line-height: 5rem;
  margin: 1.5rem 0;
  text-transform: uppercase;
}

@media screen and (max-width: 768px) {
  h2 {
    font-size: 3rem;
    line-height: 3rem;
  }
}
</style>
