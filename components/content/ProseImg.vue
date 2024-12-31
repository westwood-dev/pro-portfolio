<template>
  <div class="img-holder">
    <div class="img-cont">
      <component
        :is="ImageComponent"
        :src="refinedSrc"
        :alt="props.alt"
        :width="props.width"
        :height="props.height"
      />
      <span v-if="props.alt.length > 0" class="img-caption">{{
        props.alt
      }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withTrailingSlash, withLeadingSlash, joinURL } from 'ufo';
import { useRuntimeConfig, computed } from '#imports';

import ImageComponent from '#build/mdc-image-component.mjs';

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
});

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
    const _base = withLeadingSlash(
      withTrailingSlash(useRuntimeConfig().app.baseURL)
    );
    if (_base !== '/' && !props.src.startsWith(_base)) {
      return joinURL(_base, props.src);
    }
  }
  return props.src;
});
</script>

<style scoped>
.img-holder {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.img-cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: fit-content;
}

img {
  max-width: 100%;
  max-height: 90vh;
}

.img-caption {
  font-size: 0.8rem;
  margin-top: 0.25rem;
  text-align: left;
  width: fit-content;
  opacity: 0.75;
}
</style>
