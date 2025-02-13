import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  // 状态
  const currentChapter = ref(1)
  const currentSection = ref(1)
  const isLoading = ref(false)
  const darkMode = ref(false)
  const cachedViews = ref([])

  // 计算属性
  const currentRoute = computed(() => {
    return `/chapter${currentChapter.value}_${currentSection.value}`
  })

  // 动作
  function setChapter(chapter) {
    currentChapter.value = chapter
  }

  function setSection(section) {
    currentSection.value = section
  }

  function toggleDarkMode() {
    darkMode.value = !darkMode.value
    document.documentElement.classList.toggle('dark', darkMode.value)
  }

  function setLoading(status) {
    isLoading.value = status
  }

  function addCachedView(view) {
    if (!cachedViews.value.includes(view)) {
      cachedViews.value.push(view)
    }
  }

  function removeCachedView(view) {
    const index = cachedViews.value.indexOf(view)
    if (index > -1) {
      cachedViews.value.splice(index, 1)
    }
  }

  return {
    // 状态
    currentChapter,
    currentSection,
    isLoading,
    darkMode,
    cachedViews,
    // 计算属性
    currentRoute,
    // 动作
    setChapter,
    setSection,
    toggleDarkMode,
    setLoading,
    addCachedView,
    removeCachedView
  }
})
