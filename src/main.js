import { createApp } from 'vue'
import { createPinia } from 'pinia'

import app from './app.vue'
import router from './router'

const vueApp = createApp(app)  // 将常量重命名为 vueApp

vueApp.use(createPinia())
vueApp.use(router)

vueApp.mount('#app')
