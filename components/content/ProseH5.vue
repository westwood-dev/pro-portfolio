<template>
  <h5 :id="props.id">
    <slot />
  </h5>
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
h5 {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5;
  margin: 1.5rem 0;
  text-transform: uppercase;
}
</style>
