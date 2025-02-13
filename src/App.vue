<template>
  <div id="app">
    <LanguageSwitcher v-if="isHomePage" />
    <LoadingOverlay />
    <router-view v-slot="{ Component }">
      <keep-alive :include="cachedViews">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </keep-alive>
    </router-view>
    <!-- 默认直接渲染首页 -->
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAppStore } from '@/stores/app'
import { useRoute } from 'vue-router'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import LoadingOverlay from '@/components/LoadingOverlay.vue'

const store = useAppStore()
const route = useRoute()
const cachedViews = computed(() => store.cachedViews)

const isHomePage = computed(() => {
  return route.path.endsWith('/home')
})
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  min-height: 100vh;
}

/* 全局重置样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

/* 添加平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 页面过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 移动端适配 */
@media (max-width: 768px) {
  html {
    font-size: 14px;
  }
}

/* 暗色模式支持 */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #121212;
    color: #ffffff;
  }
}

/* RTL 支持 */
[dir='rtl'] {
  direction: rtl;
  text-align: right;
}

/* 添加全局加载动画 */
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
</style>
