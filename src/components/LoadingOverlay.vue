<script setup>
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'

const store = useAppStore()
const { isLoading } = storeToRefs(store)
</script>

<template>
  <Transition name="fade">
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
    </div>
  </Transition>
</template>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 暗色模式支持 */
@media (prefers-color-scheme: dark) {
  .loading-overlay {
    background: rgba(0, 0, 0, 0.8);
  }

  .loading-spinner {
    border-color: #2c2c2c;
    border-top-color: #3498db;
  }
}
</style>
