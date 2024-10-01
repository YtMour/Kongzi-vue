import { createRouter, createWebHistory } from 'vue-router';
import HomeCN from '@/views/cn/HomeCn.vue'; // 确保这里的文件名与实际文件名一致
import ForewordCN from '@/views/cn/ForewordCn.vue'; // 确保这里的文件名与实际文件名一致
import Chapter1CN from '@/views/cn/Chapter1Cn.vue';
import Chapter2CN from '@/views/cn/Chapter2Cn.vue';
import Chapter3CN from '@/views/cn/Chapter3Cn.vue';
import Chapter4CN from '@/views/cn/Chapter4Cn.vue';
import Chapter5CN from '@/views/cn/Chapter5Cn.vue';
import Chapter6CN from '@/views/cn/Chapter6Cn.vue';
import Chapter7CN from '@/views/cn/Chapter7Cn.vue';
import DetailPageCN from '@/views/cn/DetailPageCn.vue'; // 确保这里的文件名与实际文件名一致


import Chapter1CN_2 from '@/views/cn/Chapter1Cn_2.vue';
import Chapter2CN_2 from '@/views/cn/Chapter2Cn_2.vue';
import Chapter3CN_2 from '@/views/cn/Chapter3Cn_2.vue';
import Chapter4CN_2 from '@/views/cn/Chapter4Cn_2.vue';
import Chapter5CN_2 from '@/views/cn/Chapter5Cn_2.vue';
import Chapter6CN_2 from '@/views/cn/Chapter6Cn_2.vue';
import Chapter7CN_2 from '@/views/cn/Chapter7Cn_2.vue';
import DetailPageCN2 from '@/views/cn/DetailPageCn2.vue'; // 确保这里的文件名与实际文件名一致


import Chapter1CN_3 from '@/views/cn/Chapter1Cn_3.vue';
import Chapter2CN_3 from '@/views/cn/Chapter2Cn_3.vue';
import Chapter3CN_3 from '@/views/cn/Chapter3Cn_3.vue';
import Chapter4CN_3 from '@/views/cn/Chapter4Cn_3.vue';
import Chapter5CN_3 from '@/views/cn/Chapter5Cn_3.vue';
import Chapter6CN_3 from '@/views/cn/Chapter6Cn_3.vue';
import Chapter7CN_3 from '@/views/cn/Chapter7Cn_3.vue';
import DetailPageCN3 from '@/views/cn/DetailPageCn3.vue'; // 确保这里的文件名与实际文件名一致

const routes = [
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
    path: '/cn/detail',
    name: 'DetailPageCN',
    component: DetailPageCN,
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
    path: '/cn/detail2',
    name: 'DetailPageCN2',
    component: DetailPageCN2,
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
  {
    path: '/cn/detail3',
    name: 'DetailPageCN3',
    component: DetailPageCN3,
  },
  {
    path: '/cn', // 默认路由重定向
    redirect: '/cn/home',
  },
];


// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
