<template>
  <div
    style="
      min-height: calc(100vh - 5rem);
      display: flex;
      flex-direction: column;
      align-items: center;
    "
  >
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
      <NuxtLink to="/">
        <Icon
          name="material-symbols:arrow-forward"
          class="text-colour"
          style="transform: rotate(180deg); margin-bottom: -1vw"
        />
      </NuxtLink>
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
        class="project-content-renderer text-colour"
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

.project-content-renderer {
  max-width: 135vh;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media screen and (max-width: 768px) {
  .project-content-renderer {
    max-width: 100%;
  }
}
</style>
