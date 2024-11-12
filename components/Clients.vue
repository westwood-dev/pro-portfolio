<template>
  <div>
    <h1 class="subtitle">Recent clients.</h1>
    <div class="clients-holder">
      <div class="client">
        <div class="logo"><img src="" alt="ual logo" /></div>
        <p class="client-text">University of the Arts, London</p>
      </div>
      <div class="client">
        <div class="logo"><img src="" alt="somerset house studios logo" /></div>
        <p class="client-text">Somerset House Studios</p>
      </div>
      <div class="client">
        <div class="logo"><img src="" alt="ddtw logo" /></div>
        <p class="client-text">Don't Drink The Water</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.clients-holder {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.client {
  width: 25vw;
  height: 100%;
  margin-top: 5rem;
  background-color: blueviolet;
}

.client .logo {
  max-width: 100%;
  aspect-ratio: 1;
  background-color: violet;
}

.client .logo img {
  max-width: 100%;
  max-height: 100%;
}

.client .client-text {
  font-size: 1.25rem;
  margin: 0;
  margin-top: 0.5rem;
  font-weight: 500;
}
</style>
