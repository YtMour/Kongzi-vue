import { createI18n } from 'vue-i18n'

// 导入语言包
import cn from './locales/cn'
import en from './locales/en'
import fr from './locales/fr'
import ar from './locales/ar'
import rf from './locales/rf'
import es from './locales/es'
import jp from './locales/jp'
import kr from './locales/kr'

const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: 'cn', // 默认语言
  fallbackLocale: 'en', // 备用语言
  messages: {
    cn,
    en,
    fr,
    ar,
    rf,
    es,
    jp,
    kr
  }
})

export default i18n
