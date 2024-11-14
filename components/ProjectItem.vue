<template>
  <div>
    {{ props.project.title }}
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  project: {
    title: string;
    link: string;
    img: string;
  };
}>();
</script>

<style></style>
