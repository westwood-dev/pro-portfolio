<template>
  <h3 :id="props.id">
    <slot />
  </h3>
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
h3 {
  font-size: 3rem;
  font-weight: 700;
  line-height: 3rem;
  margin: 1.5rem 0;
  text-transform: uppercase;
}
</style>
