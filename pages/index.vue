<template>
  <div class="full-page" style="padding-top: 0">
    <h1 class="title text-colour" style="overflow: hidden">
      William<br />Westwood
    </h1>
    <div
      class="top-links-cont"
      style="
        border: solid rgb(var(--text));
        border-width: var(--border-width) 0;
        transition: border-color 0.5s;
        width: 100%;
        margin-top: 2rem;
        padding: 0;
      "
    >
      <span>
        Web design, UI/UX, Full-stack Development, Front-end Development and 3D
        Design.
      </span>
      <div
        style="
          border: solid rgb(var(--text));
          border-width: var(--border-width) 0;
          transition: border-color 0.5s;
        "
      >
        <span class="label">Recent Clients</span>
      </div>
      <div class="client-links-cont">
        <div style="display: flex; flex-direction: row">
          <a href="https://www.somersethouse.org.uk/somerset-house-studios"
            >Somerset House Studios</a
          >
          <Icon
            name="material-symbols:arrow-outward"
            size="1rem"
            class="icon-outward"
          />
        </div>
        <span>---</span>
        <div style="display: flex; flex-direction: row">
          <a href="https://www.arts.ac.uk/creative-computing-institute"
            >Creative Computing Institute</a
          >
          <Icon
            name="material-symbols:arrow-outward"
            size="1rem"
            class="icon-outward"
          />
        </div>
        <span>---</span>
        <div style="display: flex; flex-direction: row">
          <a href="https://dontdrinkthewater.shop">Don't Drink The Water</a>
          <Icon
            name="material-symbols:arrow-outward"
            size="1rem"
            class="icon-outward"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="projects-cont full-page">
    <h1 class="title text-colour" style="overflow: hidden">Projects.</h1>
    <Projects />
  </div>
  <div class="contact-cont full-page">
    <h1 class="title text-colour" style="overflow: hidden">Contact.</h1>
    <Contact />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.full-page {
  padding: 1rem 0;
}

.top-links-cont {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.top-links-cont span,
.top-links-cont a {
  padding: 0.5rem 0;
  display: block;
  text-decoration: none;
  transition: color 0.5s;
  font-size: 1.5rem;
}

.top-links-cont a {
  color: rgb(var(--text));
}

.client-links-cont {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.three-col {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.label {
  color: rgba(var(--text), 0.5);
}

a:hover {
  text-decoration: underline;
}

.icon-outward {
  margin-top: 0.5rem;
}

@media screen and (max-width: 768px) {
  .top-links-cont span,
  .top-links-cont a {
    font-size: 1rem;
  }

  .client-links-cont {
    flex-direction: column;
  }
  .client-links-cont > span {
    display: none;
  }
  .client-links-cont a {
    padding: 0;
  }
  .icon-outward {
    margin-top: 0;
  }
}
</style>
