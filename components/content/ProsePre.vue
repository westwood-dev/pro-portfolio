<template>
  <div class="code-cont">
    <p class="code-lang">{{ $props.language }}</p>
    <pre :class="$props.class"><slot /></pre>
  </div>
</template>

<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
});
</script>

<style>
.code-lang {
  margin-bottom: -0.8rem;
  color: rgba(var(--text), 0.5);
  transition: color 0.5s;
}

pre {
  background-color: rgba(var(--text), 0.1);
  transition: background-color 0.5s;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: scroll;
}

pre code {
  color: rgb(var(--text));
  transition: color 0.5s;
}

pre code .line {
  display: block;
}
</style>
