<template>
  <div style="min-height: calc(100vh - 5rem)">
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
    <div
      style="
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      "
    >
      <ContentRenderer
        :value="data!"
        style="max-width: 1500px; padding-bottom: 2rem"
      />
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

<style>
video {
  max-width: 100%;
  max-height: 90vh;
  height: auto;
}
</style>
