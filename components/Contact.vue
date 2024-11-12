<template>
  <div>
    <div class="contact-cont">
      <h1 class="subtitle">Contact.</h1>
      <h2>hello@williamwestwood.com</h2>
      <h1 class="subtitle">CV.</h1>
      <h2>Download.</h2>
    </div>
  </div>
</template>

<style scoped>
.contact-cont {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
}

.contact-cont h2 {
  font-size: 5rem;
  font-weight: 400;
  margin: 0;
  margin-bottom: 10rem;
  margin-top: 2rem;
  align-self: flex-start;
  max-width: 30vw;
  cursor: pointer;
}

.contact-cont h2:hover {
  text-decoration: underline;
}
</style>
