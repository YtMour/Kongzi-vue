<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'

const { locale } = useI18n()
const router = useRouter()
const showDropdown = ref(false)

const languages = [
  { code: 'cn', name: '中文' },
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'ar', name: 'العربية' },
  { code: 'rf', name: 'Русский' },
  { code: 'es', name: 'Español' },
  { code: 'jp', name: '日本語' },
  { code: 'kr', name: '한국어' }
]

const currentLanguage = computed(() => {
  return languages.find((lang) => lang.code === locale.value)?.name || '中文'
})

const switchLanguage = (langCode) => {
  locale.value = langCode
  const currentPath = router.currentRoute.value.path
  const newPath = currentPath.replace(/^\/[^/]+/, `/${langCode}`)
  router.push(newPath)
  showDropdown.value = false
}
</script>

<template>
  <div class="language-switcher" @mouseleave="showDropdown = false">
    <div class="selected-language" @click="showDropdown = !showDropdown">
      {{ currentLanguage }}
      <span class="arrow" :class="{ 'arrow-up': showDropdown }">▼</span>
    </div>
    <div v-if="showDropdown" class="language-dropdown">
      <div
        v-for="lang in languages"
        :key="lang.code"
        class="language-option"
        :class="{ active: lang.code === locale }"
        @click="switchLanguage(lang.code)"
      >
        {{ lang.name }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.language-switcher {
  position: fixed;
  top: 35px;
  left: 35px;
  z-index: 1000;
  font-family: Arial, sans-serif;
}

.selected-language {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  padding: 21px 37px;
  border-radius: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 17px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  font-size: 25px;
  min-width: 165px;
  justify-content: center;
}

.selected-language:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.arrow {
  font-size: 19px;
  transition: transform 0.3s ease;
  color: #fff;
}

.arrow-up {
  transform: rotate(180deg);
}

.language-dropdown {
  position: absolute;
  top: calc(100% + 15px);
  left: 0;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  border-radius: 25px;
  overflow: hidden;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.language-option {
  padding: 19px 37px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #fff;
  font-size: 23px;
  text-align: center;
}

.language-option:hover {
  background: rgba(255, 255, 255, 0.25);
}

.language-option.active {
  background: rgba(255, 255, 255, 0.3);
  font-weight: bold;
}

@media (max-width: 768px) {
  .language-switcher {
    top: 25px;
    left: 25px;
  }

  .selected-language {
    padding: 17px 29px;
    font-size: 21px;
    min-width: 135px;
  }

  .language-option {
    padding: 15px 29px;
    font-size: 21px;
  }
}
</style>
