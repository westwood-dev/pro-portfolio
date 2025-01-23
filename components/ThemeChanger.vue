<template>
  <div class="theme-controls">
    <div v-if="selector == 'slider'">
      <input
        class="theme-selector-slider"
        type="range"
        min="0"
        :max="themesArray.length - 1"
        step="0.01"
        @input="
          $emit(
            'select-theme',
            themesArray[Math.round(($event.target as HTMLInputElement).value)]
          )
        "
      />
    </div>
    <div v-else-if="selector == 'switch'" class="theme-change-button">
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
      v-else
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

const currentThemeIdx = ref(0);
const themesArray = Object.keys(themes);

defineProps<{
  currentTheme: string;
  selector?: string;
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

input[type='range'] {
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  appearance: none;
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
}

input[type='range']:focus {
  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
}

input[type='range']::-ms-track {
  width: 100%;
  cursor: pointer;

  /* Hides the slider so custom styles can be added */
  background: transparent;
  border-color: transparent;
  color: transparent;
}

/* Special styling for WebKit/Blink */
input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: none;
  height: 14px;
  width: 14px;
  border-radius: 14px;
  background: rgb(var(--text));
  cursor: pointer;
  margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
}

/* All the same stuff for Firefox */
input[type='range']::-moz-range-thumb {
  border: none;
  height: 14px;
  width: 14px;
  border-radius: 14px;
  background: rgb(var(--text));
  cursor: pointer;
}

/* All the same stuff for IE */
input[type='range']::-ms-thumb {
  height: 14px;
  width: 14px;
  border-radius: 14px;
  background: rgb(var(--text));
  cursor: pointer;
}

input[type='range']::-webkit-slider-runnable-track {
  width: 100%;
  height: 4px;
  cursor: pointer;
  background: rgb(var(--text));
  border-radius: 1.3px;
}

input[type='range']:focus::-webkit-slider-runnable-track {
  background: rgb(var(--text));
}

input[type='range']::-moz-range-track {
  width: 100%;
  height: 4px;
  cursor: pointer;
  background: rgb(var(--text));
  border-radius: 1.3px;
}

input[type='range']::-ms-track {
  width: 100%;
  height: 4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type='range']::-ms-fill-lower {
  background: rgb(var(--text));
}
input[type='range']:focus::-ms-fill-lower {
  background: rgb(var(--text));
}
input[type='range']::-ms-fill-upper {
  background: rgb(var(--text));
}
input[type='range']:focus::-ms-fill-upper {
  background: rgb(var(--text));
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
