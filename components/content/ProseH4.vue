<template>
  <h4 :id="props.id">
    <slot />
  </h4>
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
h4 {
  font-size: 2rem;
  font-weight: 700;
  line-height: 2rem;
  margin: 1.5rem 0;
  text-transform: uppercase;
}
</style>
