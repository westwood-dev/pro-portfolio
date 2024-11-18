<template>
  <div>
    <div class="projects-cont" ref="projectsCont">
      <div class="projects-holder">
        <div v-for="project in data" class="project">
          <NuxtLink
            :to="'/project/' + project.title"
            class="project-title text-colour"
          >
            {{
              (project.title?.length || 0) <= 30
                ? project.title
                : project.title?.substring(0, 29) + '...'
            }}
          </NuxtLink>
          <div class="project-arrow">
            <Icon name="material-symbols:arrow-forward" size="5vw" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('projects', () =>
  queryContent('projects').find()
);
</script>

<style scoped>
.projects-cont {
  width: 100%;
}

.projects-holder {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  border: solid rgb(var(--text));
  border-width: var(--border-width) 0 0 0;
  transition: border-color 0.5s;
}

.project {
  width: 100%;
  border: solid rgb(var(--text));
  border-width: 0 0 var(--border-width) 0;
  transition: border-color 0.5s;
  display: flex;
  flex-direction: row;
  max-height: 6vw;
  overflow: hidden;
  position: relative;
}

.project a {
  text-transform: uppercase;
  margin: 0;
  font-size: 4.75vw;
  text-decoration: none;
}

.project-arrow {
  height: 100%;
  position: absolute;
  right: -5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(var(--text));
}

.project:hover {
  background-color: rgb(var(--text));
  transition: background-color 0.25s;
}

.project:hover a {
  color: rgb(var(--bg));
  transition: color 0.25s;
}

.project:hover .project-arrow {
  transform: translateX(-5vw);
  color: rgb(var(--bg));
  transition: transform 0.25s, color 0.25s;
}

@media screen and (max-width: 768px) {
  .project-arrow {
    right: 0;
  }
}
</style>
