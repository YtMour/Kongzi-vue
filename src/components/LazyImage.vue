<template>
  <div class="lazy-image" v-lazy>
    <img
      :data-src="src"
      :alt="alt"
      class="image"
      :class="{ 'image-loaded': loaded }"
      :style="imageStyle"
    />
    <div class="image-placeholder" v-if="!loaded" :style="imageStyle"></div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number],
    default: '100%'
  },
  height: {
    type: [String, Number],
    default: '100%'
  },
  objectFit: {
    type: String,
    default: 'contain'
  }
})

const loaded = ref(false)

const imageStyle = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  height: typeof props.height === 'number' ? `${props.height}px` : props.height,
  objectFit: props.objectFit
}))
</script>

<style scoped>
.lazy-image {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
}

.image {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  display: block;
  width: 100%;
  height: 100%;
}

.image-loaded {
  opacity: 1;
}

.image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* 暗色模式支持 */
@media (prefers-color-scheme: dark) {
  .image-placeholder {
    background: linear-gradient(90deg, #2a2a2a 25%, #333333 50%, #2a2a2a 75%);
  }
}
</style>
