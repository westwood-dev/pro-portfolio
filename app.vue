<template>
  <div class="bg-colour text-colour site-cont">
    <NuxtPage />
    <div class="footer-cont">
      <ThemeChanger
        :current-theme="currentTheme"
        :show-selector="true"
        @change-theme="handleThemeChange"
        @select-theme="handleThemeSelect"
      />
      <span class="text-colour">William Westwood | 2025</span>
      <div>
        <a href="https://design.williamwestwood.com" class="text-colour"
          >design work</a
        >
        <Icon
          class="text-colour"
          name="material-symbols:arrow-outward"
          size="1rem"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { theme, currentTheme, setTheme } = useTheme();

const handleThemeChange = () => {
  if (!theme.value) return;
  const newTheme = currentTheme.value === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
};

const handleThemeSelect = (newTheme: string) => {
  if (!theme.value) return;
  setTheme(newTheme);
};
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

* {
  box-sizing: border-box;
}

:root {
  --text: 0, 0, 0;
  --bg: 242, 67, 58;
  --border-width: 0.25rem;
  --link: 2255, 255, 255;
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

.site-cont {
  padding: 2rem;
  min-height: 100svh;
}

.title {
  font-size: calc(calc(100vw - 4rem) / 6.15);
  font-weight: 900;
  margin: 0;
  text-transform: uppercase;
  align-self: flex-start;
  letter-spacing: -0.4vw;
  line-height: calc(100vw / 7.5);
}

.footer-cont {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.footer-cont a {
  text-decoration: none;
}

.footer-cont a:hover {
  text-decoration: underline;
}

@media screen and (max-width: 768px) {
  :root {
    --border-width: 0.15rem;
  }

  .site-cont {
    padding: 1rem;
  }

  .footer-cont {
    flex-direction: column;
    gap: 0.25rem;
  }
}
</style>
