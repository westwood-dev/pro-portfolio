<template>
  <div>
    <h1 class="subtitle">Projects.</h1>
    <div class="projects-cont" ref="projectsCont">
      <div class="projects-holder">
        <div v-for="project in data" class="project">
          <div class="project-image">
            <img src="https://placehold.co/1080x1920" alt="project image" />
          </div>
          <h1 class="project-title">{{ project.title }}</h1>
        </div>
      </div>
    </div>
    <div class="controls">
      <h1>
        <span class="left" @click="handleLeft"><-</span> \
        <span class="right" @click="handleRight">-></span>
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
const projectsCont = ref<HTMLElement | null>(null);

const { data } = await useAsyncData('projects', () =>
  queryContent('projects').find()
);

const handleLeft = () => {
  projectsCont.value!.scrollTo({
    left:
      projectsCont.value!.scrollLeft -
      Number(
        window
          .getComputedStyle(document.querySelector('.project')!)
          .width!.replace('px', '')
      ) -
      16 * 5,
    behavior: 'smooth',
  });

  if (projectsCont.value!.scrollLeft <= 0) {
    projectsCont.value!.scrollTo({
      left: projectsCont.value!.scrollWidth,
      behavior: 'smooth',
    });
  }
};

const handleRight = () => {
  projectsCont.value!.scrollTo({
    left:
      projectsCont.value!.scrollLeft +
      Number(
        window
          .getComputedStyle(document.querySelector('.project')!)
          .width!.replace('px', '')
      ) +
      16 * 5,
    behavior: 'smooth',
  });

  if (
    projectsCont.value!.scrollLeft + window.innerWidth >=
    projectsCont.value!.scrollWidth
  ) {
    projectsCont.value!.scrollTo({
      left: 0,
      behavior: 'smooth',
    });
  }
};
</script>

<style scoped>
.projects-cont {
  max-width: 100vw;
  overflow-x: scroll;
  margin-top: 2.5rem;
}

.projects-holder {
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: 60vh;
  gap: 5rem;
}

.project {
  width: 40vw;
  height: 100%;
  background-color: blueviolet;
}

.project-image {
  max-width: 100%;
  max-height: 55vh;
  background-color: violet;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.project-image img {
  max-width: 100%;
  max-height: 100%;
}

.project-title {
  font-size: 1.25rem;
  margin: 0;
  margin-top: 0.5rem;
  font-weight: 500;
  text-transform: uppercase;
  margin: 1rem 0 0 1rem;
}

.controls {
  /* margin-top: 5rem; */
  float: right;
}

.controls span {
  font-size: 2rem;
  cursor: pointer;
}
</style>
