import { createRouter, createWebHashHistory } from 'vue-router'

// 支持的语言列表
const SUPPORTED_LANGUAGES = ['cn', 'en', 'fr', 'ar', 'rf', 'es', 'jp', 'kr']

// 生成路由配置的函数
const generateRoutes = (lang) => {
  const capitalizedLang = lang.charAt(0).toUpperCase() + lang.slice(1)

  return [
    {
      path: `/${lang}/home`,
      name: `Home${capitalizedLang}`,
      component: () => import(`../views/${lang}/Home${capitalizedLang}.vue`)
    },
    {
      path: `/${lang}/foreword`,
      name: `Foreword${capitalizedLang}`,
      component: () => import(`../views/${lang}/Foreword${capitalizedLang}.vue`)
    },
    ...Array.from({ length: 7 }, (_, i) => ({
      path: `/${lang}/chapter${i + 1}`,
      name: `Chapter${i + 1}${capitalizedLang}`,
      component: () => import(`../views/${lang}/Chapter${i + 1}${capitalizedLang}.vue`)
    })),
    ...Array.from({ length: 7 }, (_, i) => ({
      path: `/${lang}/chapter${i + 1}_2`,
      name: `Chapter${i + 1}${capitalizedLang}_2`,
      component: () => import(`../views/${lang}/Chapter${i + 1}${capitalizedLang}_2.vue`)
    })),
    ...Array.from({ length: 7 }, (_, i) => ({
      path: `/${lang}/chapter${i + 1}_3`,
      name: `Chapter${i + 1}${capitalizedLang}_3`,
      component: () => import(`../views/${lang}/Chapter${i + 1}${capitalizedLang}_3.vue`)
    })),
    {
      path: `/${lang}/detail`,
      name: `DetailPage${capitalizedLang}`,
      component: () => import(`../views/${lang}/DetailPage${capitalizedLang}.vue`)
    },
    {
      path: `/${lang}/detail2`,
      name: `DetailPage${capitalizedLang}2`,
      component: () => import(`../views/${lang}/DetailPage${capitalizedLang}2.vue`)
    },
    {
      path: `/${lang}/detail3`,
      name: `DetailPage${capitalizedLang}3`,
      component: () => import(`../views/${lang}/DetailPage${capitalizedLang}3.vue`)
    }
  ]
}

// 生成所有语言的路由
const routes = [
  {
    path: '/',
    redirect: '/cn/home'
  },
  ...SUPPORTED_LANGUAGES.flatMap(generateRoutes)
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 检查路由是否有效
  if (to.matched.length === 0) {
    next('/cn/home')
    return
  }
  next()
})

export default router
