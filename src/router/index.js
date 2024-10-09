import { createRouter, createWebHashHistory } from 'vue-router';
import HomeCN from '@/views/cn/HomeCn.vue';
import ForewordCN from '@/views/cn/ForewordCn.vue';
import Chapter1CN from '@/views/cn/Chapter1Cn.vue';
import Chapter2CN from '@/views/cn/Chapter2Cn.vue';
import Chapter3CN from '@/views/cn/Chapter3Cn.vue';
import Chapter4CN from '@/views/cn/Chapter4Cn.vue';
import Chapter5CN from '@/views/cn/Chapter5Cn.vue';
import Chapter6CN from '@/views/cn/Chapter6Cn.vue';
import Chapter7CN from '@/views/cn/Chapter7Cn.vue';
import DetailPageCN from '@/views/cn/DetailPageCn.vue';

import Chapter1CN_2 from '@/views/cn/Chapter1Cn_2.vue';
import Chapter2CN_2 from '@/views/cn/Chapter2Cn_2.vue';
import Chapter3CN_2 from '@/views/cn/Chapter3Cn_2.vue';
import Chapter4CN_2 from '@/views/cn/Chapter4Cn_2.vue';
import Chapter5CN_2 from '@/views/cn/Chapter5Cn_2.vue';
import Chapter6CN_2 from '@/views/cn/Chapter6Cn_2.vue';
import Chapter7CN_2 from '@/views/cn/Chapter7Cn_2.vue';
import DetailPageCN2 from '@/views/cn/DetailPageCn2.vue';

import Chapter1CN_3 from '@/views/cn/Chapter1Cn_3.vue';
import Chapter2CN_3 from '@/views/cn/Chapter2Cn_3.vue';
import Chapter3CN_3 from '@/views/cn/Chapter3Cn_3.vue';
import Chapter4CN_3 from '@/views/cn/Chapter4Cn_3.vue';
import Chapter5CN_3 from '@/views/cn/Chapter5Cn_3.vue';
import Chapter6CN_3 from '@/views/cn/Chapter6Cn_3.vue';
import Chapter7CN_3 from '@/views/cn/Chapter7Cn_3.vue';
import DetailPageCN3 from '@/views/cn/DetailPageCn3.vue';



// 英文
import HomeEN from '@/views/cn/HomeCn.vue';
import ForewordEN from '@/views/en/ForewordCn.vue';
import Chapter1EN from '@/views/en/Chapter1Cn.vue';
import Chapter2EN from '@/views/en/Chapter2Cn.vue';
import Chapter3EN from '@/views/en/Chapter3Cn.vue';
import Chapter4EN from '@/views/en/Chapter4Cn.vue';
import Chapter5EN from '@/views/en/Chapter5Cn.vue';
import Chapter6EN from '@/views/en/Chapter6Cn.vue';
import Chapter7EN from '@/views/en/Chapter7Cn.vue';
import DetailPageEN from '@/views/en/DetailPageCn.vue';

import Chapter1EN_2 from '@/views/en/Chapter1Cn_2.vue';
import Chapter2EN_2 from '@/views/en/Chapter2Cn_2.vue';
import Chapter3EN_2 from '@/views/en/Chapter3Cn_2.vue';
import Chapter4EN_2 from '@/views/en/Chapter4Cn_2.vue';
import Chapter5EN_2 from '@/views/en/Chapter5Cn_2.vue';
import Chapter6EN_2 from '@/views/en/Chapter6Cn_2.vue';
import Chapter7EN_2 from '@/views/en/Chapter7Cn_2.vue';
import DetailPageEN2 from '@/views/en/DetailPageCn2.vue';

import Chapter1EN_3 from '@/views/en/Chapter1Cn_3.vue';
import Chapter2EN_3 from '@/views/en/Chapter2Cn_3.vue';
import Chapter3EN_3 from '@/views/en/Chapter3Cn_3.vue';
import Chapter4EN_3 from '@/views/en/Chapter4Cn_3.vue';
import Chapter5EN_3 from '@/views/en/Chapter5Cn_3.vue';
import Chapter6EN_3 from '@/views/en/Chapter6Cn_3.vue';
import Chapter7EN_3 from '@/views/en/Chapter7Cn_3.vue';
import DetailPageEN3 from '@/views/en/DetailPageCn3.vue';



// 法文
import HomeFR from '@/views/cn/HomeCn.vue';
import ForewordFR from '@/views/fr/ForewordCn.vue';
import Chapter1FR from '@/views/fr/Chapter1Cn.vue';
import Chapter2FR from '@/views/fr/Chapter2Cn.vue';
import Chapter3FR from '@/views/fr/Chapter3Cn.vue';
import Chapter4FR from '@/views/fr/Chapter4Cn.vue';
import Chapter5FR from '@/views/fr/Chapter5Cn.vue';
import Chapter6FR from '@/views/fr/Chapter6Cn.vue';
import Chapter7FR from '@/views/fr/Chapter7Cn.vue';
import DetailPageFR from '@/views/fr/DetailPageCn.vue';

import Chapter1FR_2 from '@/views/fr/Chapter1Cn_2.vue';
import Chapter2FR_2 from '@/views/fr/Chapter2Cn_2.vue';
import Chapter3FR_2 from '@/views/fr/Chapter3Cn_2.vue';
import Chapter4FR_2 from '@/views/fr/Chapter4Cn_2.vue';
import Chapter5FR_2 from '@/views/fr/Chapter5Cn_2.vue';
import Chapter6FR_2 from '@/views/fr/Chapter6Cn_2.vue';
import Chapter7FR_2 from '@/views/fr/Chapter7Cn_2.vue';
import DetailPageFR2 from '@/views/fr/DetailPageCn2.vue';

import Chapter1FR_3 from '@/views/fr/Chapter1Cn_3.vue';
import Chapter2FR_3 from '@/views/fr/Chapter2Cn_3.vue';
import Chapter3FR_3 from '@/views/fr/Chapter3Cn_3.vue';
import Chapter4FR_3 from '@/views/fr/Chapter4Cn_3.vue';
import Chapter5FR_3 from '@/views/fr/Chapter5Cn_3.vue';
import Chapter6FR_3 from '@/views/fr/Chapter6Cn_3.vue';
import Chapter7FR_3 from '@/views/fr/Chapter7Cn_3.vue';
import DetailPageFR3 from '@/views/fr/DetailPageCn3.vue';

const routes = [
  {
    path: '/', // 默认路由重定向
    redirect: '/cn/home',
  },
  {
    path: '/cn/home',
    name: 'HomeCN',
    component: HomeCN,
  },
  {
    path: '/cn/foreword',
    name: 'ForewordCN',
    component: ForewordCN,
  },
  {
    path: '/cn/detail',
    name: 'DetailPageCN',
    component: DetailPageCN,
  },
  {
    path: '/cn/detail2',
    name: 'DetailPageCN2',
    component: DetailPageCN2,
  },
  {
    path: '/cn/detail3',
    name: 'DetailPageCN3',
    component: DetailPageCN3,
  },
  {
    path: '/cn/chapter1',
    name: 'Chapter1CN',
    component: Chapter1CN,
  },
  {
    path: '/cn/chapter2',
    name: 'Chapter2CN',
    component: Chapter2CN,
  },
  {
    path: '/cn/chapter3',
    name: 'Chapter3CN',
    component: Chapter3CN,
  },
  {
    path: '/cn/chapter4',
    name: 'Chapter4CN',
    component: Chapter4CN,
  },
  {
    path: '/cn/chapter5',
    name: 'Chapter5CN',
    component: Chapter5CN,
  },
  {
    path: '/cn/chapter6',
    name: 'Chapter6CN',
    component: Chapter6CN,
  },
  {
    path: '/cn/chapter7',
    name: 'Chapter7CN',
    component: Chapter7CN,
  },
  {
    path: '/cn/chapter1_2',
    name: 'Chapter1CN_2',
    component: Chapter1CN_2,
  },
  {
    path: '/cn/chapter2_2',
    name: 'Chapter2CN_2',
    component: Chapter2CN_2,
  },
  {
    path: '/cn/chapter3_2',
    name: 'Chapter3CN_2',
    component: Chapter3CN_2,
  },
  {
    path: '/cn/chapter4_2',
    name: 'Chapter4CN_2',
    component: Chapter4CN_2,
  },
  {
    path: '/cn/chapter5_2',
    name: 'Chapter5CN_2',
    component: Chapter5CN_2,
  },
  {
    path: '/cn/chapter6_2',
    name: 'Chapter6CN_2',
    component: Chapter6CN_2,
  },
  {
    path: '/cn/chapter7_2',
    name: 'Chapter7CN_2',
    component: Chapter7CN_2,
  },

  {
    path: '/cn/chapter1_3',
    name: 'Chapter1CN_3',
    component: Chapter1CN_3,
  },
  {
    path: '/cn/chapter2_3',
    name: 'Chapter2CN_3',
    component: Chapter2CN_3,
  },
  {
    path: '/cn/chapter3_3',
    name: 'Chapter3CN_3',
    component: Chapter3CN_3,
  },
  {
    path: '/cn/chapter4_3',
    name: 'Chapter4CN_3',
    component: Chapter4CN_3,
  },
  {
    path: '/cn/chapter5_3',
    name: 'Chapter5CN_3',
    component: Chapter5CN_3,
  },
  {
    path: '/cn/chapter6_3',
    name: 'Chapter6CN_3',
    component: Chapter6CN_3,
  },
  {
    path: '/cn/chapter7_3',
    name: 'Chapter7CN_3',
    component: Chapter7CN_3,
  },



  // 英文
  {
    path: '/en/home',
    name: 'HomeEN',
    component: HomeEN,
  },
  {
    path: '/en/foreword',
    name: 'ForewordEN',
    component: ForewordEN,
  },
  {
    path: '/en/detail',
    name: 'DetailPageEN',
    component: DetailPageEN,
  },
  {
    path: '/en/detail2',
    name: 'DetailPageEN2',
    component: DetailPageEN2,
  },
  {
    path: '/en/detail3',
    name: 'DetailPageEN3',
    component: DetailPageEN3,
  },
  {
    path: '/en/chapter1',
    name: 'Chapter1EN',
    component: Chapter1EN,
  },
  {
    path: '/en/chapter2',
    name: 'Chapter2EN',
    component: Chapter2EN,
  },
  {
    path: '/en/chapter3',
    name: 'Chapter3EN',
    component: Chapter3EN,
  },
  {
    path: '/en/chapter4',
    name: 'Chapter4EN',
    component: Chapter4EN,
  },
  {
    path: '/en/chapter5',
    name: 'Chapter5EN',
    component: Chapter5EN,
  },
  {
    path: '/en/chapter6',
    name: 'Chapter6EN',
    component: Chapter6EN,
  },
  {
    path: '/en/chapter7',
    name: 'Chapter7EN',
    component: Chapter7EN,
  },
  {
    path: '/en/chapter1_2',
    name: 'Chapter1EN_2',
    component: Chapter1EN_2,
  },
  {
    path: '/en/chapter2_2',
    name: 'Chapter2EN_2',
    component: Chapter2EN_2,
  },
  {
    path: '/en/chapter3_2',
    name: 'Chapter3EN_2',
    component: Chapter3EN_2,
  },
  {
    path: '/en/chapter4_2',
    name: 'Chapter4EN_2',
    component: Chapter4EN_2,
  },
  {
    path: '/en/chapter5_2',
    name: 'Chapter5EN_2',
    component: Chapter5EN_2,
  },
  {
    path: '/en/chapter6_2',
    name: 'Chapter6EN_2',
    component: Chapter6EN_2,
  },
  {
    path: '/en/chapter7_2',
    name: 'Chapter7EN_2',
    component: Chapter7EN_2,
  },

  {
    path: '/en/chapter1_3',
    name: 'Chapter1EN_3',
    component: Chapter1EN_3,
  },
  {
    path: '/en/chapter2_3',
    name: 'Chapter2EN_3',
    component: Chapter2EN_3,
  },
  {
    path: '/en/chapter3_3',
    name: 'Chapter3EN_3',
    component: Chapter3EN_3,
  },
  {
    path: '/en/chapter4_3',
    name: 'Chapter4EN_3',
    component: Chapter4EN_3,
  },
  {
    path: '/en/chapter5_3',
    name: 'Chapter5EN_3',
    component: Chapter5EN_3,
  },
  {
    path: '/en/chapter6_3',
    name: 'Chapter6EN_3',
    component: Chapter6EN_3,
  },
  {
    path: '/en/chapter7_3',
    name: 'Chapter7EN_3',
    component: Chapter7EN_3,
  },



  // 法文
  {
    path: '/fr/home',
    name: 'HomeFR',
    componfrt: HomeFR,
  },
  {
    path: '/fr/foreword',
    name: 'ForewordFR',
    componfrt: ForewordFR,
  },
  {
    path: '/fr/detail',
    name: 'DetailPageFR',
    componfrt: DetailPageFR,
  },
  {
    path: '/fr/detail2',
    name: 'DetailPageFR2',
    componfrt: DetailPageFR2,
  },
  {
    path: '/fr/detail3',
    name: 'DetailPageFR3',
    componfrt: DetailPageFR3,
  },
  {
    path: '/fr/chapter1',
    name: 'Chapter1FR',
    componfrt: Chapter1FR,
  },
  {
    path: '/fr/chapter2',
    name: 'Chapter2FR',
    componfrt: Chapter2FR,
  },
  {
    path: '/fr/chapter3',
    name: 'Chapter3FR',
    componfrt: Chapter3FR,
  },
  {
    path: '/fr/chapter4',
    name: 'Chapter4FR',
    componfrt: Chapter4FR,
  },
  {
    path: '/fr/chapter5',
    name: 'Chapter5FR',
    componfrt: Chapter5FR,
  },
  {
    path: '/fr/chapter6',
    name: 'Chapter6FR',
    componfrt: Chapter6FR,
  },
  {
    path: '/fr/chapter7',
    name: 'Chapter7FR',
    componfrt: Chapter7FR,
  },
  {
    path: '/fr/chapter1_2',
    name: 'Chapter1FR_2',
    componfrt: Chapter1FR_2,
  },
  {
    path: '/fr/chapter2_2',
    name: 'Chapter2FR_2',
    componfrt: Chapter2FR_2,
  },
  {
    path: '/fr/chapter3_2',
    name: 'Chapter3FR_2',
    componfrt: Chapter3FR_2,
  },
  {
    path: '/fr/chapter4_2',
    name: 'Chapter4FR_2',
    componfrt: Chapter4FR_2,
  },
  {
    path: '/fr/chapter5_2',
    name: 'Chapter5FR_2',
    componfrt: Chapter5FR_2,
  },
  {
    path: '/fr/chapter6_2',
    name: 'Chapter6FR_2',
    componfrt: Chapter6FR_2,
  },
  {
    path: '/fr/chapter7_2',
    name: 'Chapter7FR_2',
    componfrt: Chapter7FR_2,
  },

  {
    path: '/fr/chapter1_3',
    name: 'Chapter1FR_3',
    componfrt: Chapter1FR_3,
  },
  {
    path: '/fr/chapter2_3',
    name: 'Chapter2FR_3',
    componfrt: Chapter2FR_3,
  },
  {
    path: '/fr/chapter3_3',
    name: 'Chapter3FR_3',
    componfrt: Chapter3FR_3,
  },
  {
    path: '/fr/chapter4_3',
    name: 'Chapter4FR_3',
    componfrt: Chapter4FR_3,
  },
  {
    path: '/fr/chapter5_3',
    name: 'Chapter5FR_3',
    componfrt: Chapter5FR_3,
  },
  {
    path: '/fr/chapter6_3',
    name: 'Chapter6FR_3',
    componfrt: Chapter6FR_3,
  },
  {
    path: '/fr/chapter7_3',
    name: 'Chapter7FR_3',
    componfrt: Chapter7FR_3,
  },

];

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
