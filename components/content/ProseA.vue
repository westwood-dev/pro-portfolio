<template>
  <NuxtLink :href="props.href" :target="props.target">
    <slot />
    <Icon
      v-if="props.target === '_blank' || props.target == null"
      name="material-symbols:arrow-outward"
      size="0.75rem"
    />
    <Icon v-else name="material-symbols:arrow-forward" size="0.75rem" />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String as PropType<
      | '_blank'
      | '_parent'
      | '_self'
      | '_top'
      | (string & object)
      | null
      | undefined
    >,
    default: undefined,
    required: false,
  },
});
</script>

<style scoped>
a {
  color: rgb(var(--link));
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  text-decoration: underline;
}
</style>
