<template>
  <div class="contact-holder">
    <a
      href="mailto:hello@williamwestwood.com"
      target="_blank"
      class="contact text-colour"
    >
      <span class="contact-label">Email</span>
      <span class="contact-text">hello@williamwestwood.com</span>
      <div class="contact-arrow">
        <Icon name="material-symbols:arrow-outward" />
      </div>
    </a>
    <a
      href="https://github.com/westwood-dev"
      target="_blank"
      class="contact text-colour"
    >
      <span class="contact-label">GitHub</span>
      <span class="contact-text">@westwood-dev</span>
      <div class="contact-arrow">
        <Icon name="material-symbols:arrow-outward" />
      </div>
    </a>
    <a
      href="https://www.linkedin.com/in/will-westwood/"
      target="_blank"
      class="contact text-colour"
    >
      <span class="contact-label">Linkedin</span>
      <span class="contact-text">William Westwood</span>
      <div class="contact-arrow">
        <Icon name="material-symbols:arrow-outward" />
      </div>
    </a>
    <a
      href="/William-Westwood-CV.pdf"
      target="_blank"
      class="contact text-colour"
    >
      <span class="contact-label">CV</span>
      <span class="contact-text">Download</span>
      <div class="contact-arrow">
        <Icon name="material-symbols:arrow-outward" />
      </div>
    </a>
  </div>
</template>

<script lang="ts" setup></script>

<style>
.contact-holder {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  border: solid rgb(var(--text));
  border-width: var(--border-width) 0 0 0;
  transition: border-color 0.5s;
}

.contact {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: solid rgb(var(--text));
  border-width: 0 0 var(--border-width) 0;
  transition: border-color 0.5s;
  position: relative;
  text-decoration: none;
  overflow-x: hidden;
}

.contact-label {
  font-weight: 500;
  margin: 0;
  font-size: 4.75vw;
  text-decoration: none;
  color: rgba(var(--text), 0.5);
  transition: color 0.5s;
}

.contact-text {
  font-weight: 300;
  font-size: 4.75vw;
  transition: transform 0.25s;
  transition: color 0.5s;
}

.contact-arrow {
  font-weight: 400;
  font-size: 4.75vw;
  margin: 0;
  text-decoration: none;
  position: absolute;
  right: -5vw;
  transition: transform 0.25s, color 0.5s, background-color 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.contact:hover {
  background-color: rgb(var(--text));
  color: rgb(var(--bg));
  transition: background-color 0.25s, color 0.25s;
}

.contact:hover .contact-arrow {
  transform: translateX(-5vw);
  transition: transform 0.5s;
}

.contact:hover .contact-text {
  transform: translateX(-5vw);
}

.contact:hover .contact-label {
  color: rgb(var(--bg));
  transition: color 0.25s;
}

@media screen and (max-width: 768px) {
  .contact-arrow {
    right: 0;
  }
  .contact-text {
    font-size: 1rem;
    transform: translateX(-5vw);
  }
}
</style>
