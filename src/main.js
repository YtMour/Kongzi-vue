import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue' // 注意这里应该是 App，而不是 app
import router from './router'
import i18n from './i18n'
import lazyLoad from './directives/lazyLoad'

import ButtonBox from '@/views/cn/btn.vue'

const vueApp = createApp(App) // 创建 Vue 应用实例

// 在 vueApp 上注册全局组件
vueApp.component('ButtonBox', ButtonBox)

// 注册全局指令
vueApp.directive('lazy', lazyLoad)

vueApp.use(createPinia())
vueApp.use(router)
vueApp.use(i18n)

vueApp.mount('#app') // 挂载到 HTML 中的 id 为 app 的元素
