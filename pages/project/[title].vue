<template>
  <div>
    <div
      class="title text-colour"
      :style="{
        fontSize:
          Math.max(
            ...String(params.title)
              .split(' ')
              .map((word) => word.length)
          ) *
            1.12 +
          'vw',
        lineHeight:
          Math.max(
            ...String(params.title)
              .split(' ')
              .map((word) => word.length)
          ) *
            1 +
          'vw',
      }"
    >
      {{ params.title }}
    </div>
    <div style="display: flex; justify-content: center; align-items: center">
      <ContentRenderer :value="data!" style="max-width: 1500px" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { params } = useRoute();
const { data } = await useAsyncData(String(params.title), () =>
  queryContent('projects')
    .where({ title: String(params.title) })
    .findOne()
);
</script>
