<template>
  <div class="main-cont">
    <div class="hero-cont full-page">
      <h1 class="title">William<br />Westwood</h1>
      <p>
        Web design, UI/UX, Full-stack Development, Front-end Development and 3D
        Design.
      </p>
    </div>
    <div class="full-page"><Clients /></div>
    <div class="full-page"><Projects /></div>
    <div class="full-page" style="display: none">Project View</div>
    <div class="full-page"><Contact /></div>
  </div>
</template>

<script setup lang="ts">
import Contact from './components/Contact.vue';
import Projects from './components/Projects.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  background-color: rgb(var(--text));
  transition: background-color 0.5s;
}

body {
  overflow-y: hidden;
}

.main-cont {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y proximity;
}

* {
  box-sizing: border-box;
}

:root {
  --text: 255, 255, 255;
  --bg: 0, 0, 0;
}

.text-colour {
  color: rgb(var(--text));
  transition: color 0.5s;
}

.bg-colour {
  background-color: rgb(var(--bg));
  transition: background-color 0.5s;
}

.text-colour-invert {
  color: rgb(var(--bg));
  transition: color 0.5s;
}

.bg-colour-invert {
  background-color: rgb(var(--text));
  transition: background-color 0.5s;
}

.full-page {
  scroll-snap-align: start;
  height: 100vh;
  width: 100vw;
  padding: 5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.hero-cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero-cont p {
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;
  align-self: flex-start;
  max-width: 30vw;
}

.title {
  font-size: 10rem;
  font-weight: 500;
  margin: 0;
  text-transform: uppercase;
  align-self: flex-start;
}

.subtitle {
  font-size: 6rem;
  font-weight: 500;
  margin: 0;
  align-self: flex-start;
  max-width: 80vw;
  text-transform: uppercase;
}
</style>
