<template>
  <div class="theme-controls">
    <div v-if="!showSelector" class="theme-change-button">
      <Icon
        id="themeIcon"
        class="textColour"
        :name="
          currentTheme === 'dark'
            ? 'material-symbols:light-mode'
            : 'material-symbols:dark-mode'
        "
        @click="$emit('change-theme')"
      />
    </div>
    <select
      v-if="showSelector"
      class="theme-selector"
      :value="currentTheme"
      @change="
        $emit('select-theme', ($event.target as HTMLSelectElement).value)
      "
    >
      <option v-for="(_, name) in themes" :key="name" :value="name">
        {{ String(name).charAt(0).toUpperCase() + String(name).slice(1) }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { themes } from '../utils/theme';

defineProps<{
  currentTheme: string;
  showSelector?: boolean;
}>();

defineEmits<{
  'change-theme': [];
  'select-theme': [theme: string];
}>();
</script>

<style scoped>
.theme-controls {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.theme-selector {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background: rgb(var(--bg));
  color: rgb(var(--text));
  transition: color 0.5s, background 0.5s;
  border: 1px solid rgb(var(--text));
  border: none;
  cursor: pointer;
  text-transform: capitalize;
}

.theme-change-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  #theme-symbol {
    font-size: 1.5rem;
  }
}
</style>
