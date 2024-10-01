import { createRouter, createWebHistory } from 'vue-router';
import HomeCN from '@/views/cn/HomeCn.vue'; // 确保这里的文件名与实际文件名一致
import ForewordCN from '@/views/cn/ForewordCn.vue'; // 确保这里的文件名与实际文件名一致
import Chapter1CN from '@/views/cn/Chapter1Cn.vue'; // 确保这里的文件名与实际文件名一致
import DetailPageCN from '@/views/cn/DetailPageCn.vue'; // 确保这里的文件名与实际文件名一致

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
    path: '/cn/detail',
    name: 'DetailPageCN',
    component: DetailPageCN,
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
