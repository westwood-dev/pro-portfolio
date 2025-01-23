<script setup lang="ts">
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <div>
    <h2>{{ error?.statusCode }}</h2>
    <p>Hmm, something isn't right here</p>
    <button @click="handleError">Head home?</button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(var(--bg));
}

h2 {
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  font-size: 250px;
  text-align: center;
  margin: 0;
  margin-bottom: -30px;
  padding: 0;
}

p {
  margin: 0.5rem;
  font-weight: 500;
}

button {
  border: none;
  color: rgb(var(--link));
  background: none;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
}

button:hover {
  text-decoration: underline;
}
</style>
