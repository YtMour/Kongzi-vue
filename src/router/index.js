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
import HomeEN from '@/views/en/HomeEn.vue';
import ForewordEN from '@/views/en/ForewordEn.vue';
import Chapter1EN from '@/views/en/Chapter1En.vue';
import Chapter2EN from '@/views/en/Chapter2En.vue';
import Chapter3EN from '@/views/en/Chapter3En.vue';
import Chapter4EN from '@/views/en/Chapter4En.vue';
import Chapter5EN from '@/views/en/Chapter5En.vue';
import Chapter6EN from '@/views/en/Chapter6En.vue';
import Chapter7EN from '@/views/en/Chapter7En.vue';
import DetailPageEN from '@/views/en/DetailPageEn.vue';

import Chapter1EN_2 from '@/views/en/Chapter1En_2.vue';
import Chapter2EN_2 from '@/views/en/Chapter2En_2.vue';
import Chapter3EN_2 from '@/views/en/Chapter3En_2.vue';
import Chapter4EN_2 from '@/views/en/Chapter4En_2.vue';
import Chapter5EN_2 from '@/views/en/Chapter5En_2.vue';
import Chapter6EN_2 from '@/views/en/Chapter6En_2.vue';
import Chapter7EN_2 from '@/views/en/Chapter7En_2.vue';
import DetailPageEN2 from '@/views/en/DetailPageEn2.vue';

import Chapter1EN_3 from '@/views/en/Chapter1En_3.vue';
import Chapter2EN_3 from '@/views/en/Chapter2En_3.vue';
import Chapter3EN_3 from '@/views/en/Chapter3En_3.vue';
import Chapter4EN_3 from '@/views/en/Chapter4En_3.vue';
import Chapter5EN_3 from '@/views/en/Chapter5En_3.vue';
import Chapter6EN_3 from '@/views/en/Chapter6En_3.vue';
import Chapter7EN_3 from '@/views/en/Chapter7En_3.vue';
import DetailPageEN3 from '@/views/en/DetailPageEn3.vue';



// 法文
import HomeFR from '@/views/fr/HomeFr.vue';
import ForewordFR from '@/views/fr/ForewordFr.vue';
import Chapter1FR from '@/views/fr/Chapter1Fr.vue';
import Chapter2FR from '@/views/fr/Chapter2Fr.vue';
import Chapter3FR from '@/views/fr/Chapter3Fr.vue';
import Chapter4FR from '@/views/fr/Chapter4Fr.vue';
import Chapter5FR from '@/views/fr/Chapter5Fr.vue';
import Chapter6FR from '@/views/fr/Chapter6Fr.vue';
import Chapter7FR from '@/views/fr/Chapter7Fr.vue';
import DetailPageFR from '@/views/fr/DetailPageFr.vue';

import Chapter1FR_2 from '@/views/fr/Chapter1Fr_2.vue';
import Chapter2FR_2 from '@/views/fr/Chapter2Fr_2.vue';
import Chapter3FR_2 from '@/views/fr/Chapter3Fr_2.vue';
import Chapter4FR_2 from '@/views/fr/Chapter4Fr_2.vue';
import Chapter5FR_2 from '@/views/fr/Chapter5Fr_2.vue';
import Chapter6FR_2 from '@/views/fr/Chapter6Fr_2.vue';
import Chapter7FR_2 from '@/views/fr/Chapter7Fr_2.vue';
import DetailPageFR2 from '@/views/fr/DetailPageFr2.vue';

import Chapter1FR_3 from '@/views/fr/Chapter1Fr_3.vue';
import Chapter2FR_3 from '@/views/fr/Chapter2Fr_3.vue';
import Chapter3FR_3 from '@/views/fr/Chapter3Fr_3.vue';
import Chapter4FR_3 from '@/views/fr/Chapter4Fr_3.vue';
import Chapter5FR_3 from '@/views/fr/Chapter5Fr_3.vue';
import Chapter6FR_3 from '@/views/fr/Chapter6Fr_3.vue';
import Chapter7FR_3 from '@/views/fr/Chapter7Fr_3.vue';
import DetailPageFR3 from '@/views/fr/DetailPageFr3.vue';


//阿语ar
import HomeAR from '@/views/ar/HomeAr.vue';
import ForewordAR from '@/views/ar/ForewordAr.vue';
import Chapter1AR from '@/views/ar/Chapter1Ar.vue';
import Chapter2AR from '@/views/ar/Chapter2Ar.vue';
import Chapter3AR from '@/views/ar/Chapter3Ar.vue';
import Chapter4AR from '@/views/ar/Chapter4Ar.vue';
import Chapter5AR from '@/views/ar/Chapter5Ar.vue';
import Chapter6AR from '@/views/ar/Chapter6Ar.vue';
import Chapter7AR from '@/views/ar/Chapter7Ar.vue';
import DetailPageAR from '@/views/ar/DetailPageAr.vue';

import Chapter1AR_2 from '@/views/ar/Chapter1Ar_2.vue';
import Chapter2AR_2 from '@/views/ar/Chapter2Ar_2.vue';
import Chapter3AR_2 from '@/views/ar/Chapter3Ar_2.vue';
import Chapter4AR_2 from '@/views/ar/Chapter4Ar_2.vue';
import Chapter5AR_2 from '@/views/ar/Chapter5Ar_2.vue';
import Chapter6AR_2 from '@/views/ar/Chapter6Ar_2.vue';
import Chapter7AR_2 from '@/views/ar/Chapter7Ar_2.vue';
import DetailPageAR2 from '@/views/ar/DetailPageAr2.vue';

import Chapter1AR_3 from '@/views/ar/Chapter1Ar_3.vue';
import Chapter2AR_3 from '@/views/ar/Chapter2Ar_3.vue';
import Chapter3AR_3 from '@/views/ar/Chapter3Ar_3.vue';
import Chapter4AR_3 from '@/views/ar/Chapter4Ar_3.vue';
import Chapter5AR_3 from '@/views/ar/Chapter5Ar_3.vue';
import Chapter6AR_3 from '@/views/ar/Chapter6Ar_3.vue';
import Chapter7AR_3 from '@/views/ar/Chapter7Ar_3.vue';
import DetailPageAR3 from '@/views/ar/DetailPageAr3.vue';
//俄语rf
import HomeRF from '@/views/rf/HomeRf.vue';
import ForewordRF from '@/views/rf/ForewordRf.vue';
import Chapter1RF from '@/views/rf/Chapter1Rf.vue';
import Chapter2RF from '@/views/rf/Chapter2Rf.vue';
import Chapter3RF from '@/views/rf/Chapter3Rf.vue';
import Chapter4RF from '@/views/rf/Chapter4Rf.vue';
import Chapter5RF from '@/views/rf/Chapter5Rf.vue';
import Chapter6RF from '@/views/rf/Chapter6Rf.vue';
import Chapter7RF from '@/views/rf/Chapter7Rf.vue';
import DetailPageRF from '@/views/rf/DetailPageRf.vue';

import Chapter1RF_2 from '@/views/rf/Chapter1Rf_2.vue';
import Chapter2RF_2 from '@/views/rf/Chapter2Rf_2.vue';
import Chapter3RF_2 from '@/views/rf/Chapter3Rf_2.vue';
import Chapter4RF_2 from '@/views/rf/Chapter4Rf_2.vue';
import Chapter5RF_2 from '@/views/rf/Chapter5Rf_2.vue';
import Chapter6RF_2 from '@/views/rf/Chapter6Rf_2.vue';
import Chapter7RF_2 from '@/views/rf/Chapter7Rf_2.vue';
import DetailPageRF2 from '@/views/rf/DetailPageRf2.vue';

import Chapter1RF_3 from '@/views/rf/Chapter1Rf_3.vue';
import Chapter2RF_3 from '@/views/rf/Chapter2Rf_3.vue';
import Chapter3RF_3 from '@/views/rf/Chapter3Rf_3.vue';
import Chapter4RF_3 from '@/views/rf/Chapter4Rf_3.vue';
import Chapter5RF_3 from '@/views/rf/Chapter5Rf_3.vue';
import Chapter6RF_3 from '@/views/rf/Chapter6Rf_3.vue';
import Chapter7RF_3 from '@/views/rf/Chapter7Rf_3.vue';
import DetailPageRF3 from '@/views/rf/DetailPageRf3.vue';
//西语es
import HomeES from '@/views/es/HomeEs.vue';
import ForewordES from '@/views/es/ForewordEs.vue';
import Chapter1ES from '@/views/es/Chapter1Es.vue';
import Chapter2ES from '@/views/es/Chapter2Es.vue';
import Chapter3ES from '@/views/es/Chapter3Es.vue';
import Chapter4ES from '@/views/es/Chapter4Es.vue';
import Chapter5ES from '@/views/es/Chapter5Es.vue';
import Chapter6ES from '@/views/es/Chapter6Es.vue';
import Chapter7ES from '@/views/es/Chapter7Es.vue';
import DetailPageES from '@/views/es/DetailPageEs.vue';

import Chapter1ES_2 from '@/views/es/Chapter1Es_2.vue';
import Chapter2ES_2 from '@/views/es/Chapter2Es_2.vue';
import Chapter3ES_2 from '@/views/es/Chapter3Es_2.vue';
import Chapter4ES_2 from '@/views/es/Chapter4Es_2.vue';
import Chapter5ES_2 from '@/views/es/Chapter5Es_2.vue';
import Chapter6ES_2 from '@/views/es/Chapter6Es_2.vue';
import Chapter7ES_2 from '@/views/es/Chapter7Es_2.vue';
import DetailPageES2 from '@/views/es/DetailPageEs2.vue';

import Chapter1ES_3 from '@/views/es/Chapter1Es_3.vue';
import Chapter2ES_3 from '@/views/es/Chapter2Es_3.vue';
import Chapter3ES_3 from '@/views/es/Chapter3Es_3.vue';
import Chapter4ES_3 from '@/views/es/Chapter4Es_3.vue';
import Chapter5ES_3 from '@/views/es/Chapter5Es_3.vue';
import Chapter6ES_3 from '@/views/es/Chapter6Es_3.vue';
import Chapter7ES_3 from '@/views/es/Chapter7Es_3.vue';
import DetailPageES3 from '@/views/es/DetailPageEs3.vue';
//日语jp
import HomeJP from '@/views/jp/HomeJp.vue';
import ForewordJP from '@/views/jp/ForewordJp.vue';
import Chapter1JP from '@/views/jp/Chapter1Jp.vue';
import Chapter2JP from '@/views/jp/Chapter2Jp.vue';
import Chapter3JP from '@/views/jp/Chapter3Jp.vue';
import Chapter4JP from '@/views/jp/Chapter4Jp.vue';
import Chapter5JP from '@/views/jp/Chapter5Jp.vue';
import Chapter6JP from '@/views/jp/Chapter6Jp.vue';
import Chapter7JP from '@/views/jp/Chapter7Jp.vue';
import DetailPageJP from '@/views/jp/DetailPageJp.vue';

import Chapter1JP_2 from '@/views/jp/Chapter1Jp_2.vue';
import Chapter2JP_2 from '@/views/jp/Chapter2Jp_2.vue';
import Chapter3JP_2 from '@/views/jp/Chapter3Jp_2.vue';
import Chapter4JP_2 from '@/views/jp/Chapter4Jp_2.vue';
import Chapter5JP_2 from '@/views/jp/Chapter5Jp_2.vue';
import Chapter6JP_2 from '@/views/jp/Chapter6Jp_2.vue';
import Chapter7JP_2 from '@/views/jp/Chapter7Jp_2.vue';
import DetailPageJP2 from '@/views/jp/DetailPageJp2.vue';

import Chapter1JP_3 from '@/views/jp/Chapter1Jp_3.vue';
import Chapter2JP_3 from '@/views/jp/Chapter2Jp_3.vue';
import Chapter3JP_3 from '@/views/jp/Chapter3Jp_3.vue';
import Chapter4JP_3 from '@/views/jp/Chapter4Jp_3.vue';
import Chapter5JP_3 from '@/views/jp/Chapter5Jp_3.vue';
import Chapter6JP_3 from '@/views/jp/Chapter6Jp_3.vue';
import Chapter7JP_3 from '@/views/jp/Chapter7Jp_3.vue';
import DetailPageJP3 from '@/views/jp/DetailPageJp3.vue';
//韩语kr
import HomeKR from '@/views/kr/HomeKr.vue';
import ForewordKR from '@/views/kr/ForewordKr.vue';
import Chapter1KR from '@/views/kr/Chapter1Kr.vue';
import Chapter2KR from '@/views/kr/Chapter2Kr.vue';
import Chapter3KR from '@/views/kr/Chapter3Kr.vue';
import Chapter4KR from '@/views/kr/Chapter4Kr.vue';
import Chapter5KR from '@/views/kr/Chapter5Kr.vue';
import Chapter6KR from '@/views/kr/Chapter6Kr.vue';
import Chapter7KR from '@/views/kr/Chapter7Kr.vue';
import DetailPageKR from '@/views/kr/DetailPageKr.vue';

import Chapter1KR_2 from '@/views/kr/Chapter1Kr_2.vue';
import Chapter2KR_2 from '@/views/kr/Chapter2Kr_2.vue';
import Chapter3KR_2 from '@/views/kr/Chapter3Kr_2.vue';
import Chapter4KR_2 from '@/views/kr/Chapter4Kr_2.vue';
import Chapter5KR_2 from '@/views/kr/Chapter5Kr_2.vue';
import Chapter6KR_2 from '@/views/kr/Chapter6Kr_2.vue';
import Chapter7KR_2 from '@/views/kr/Chapter7Kr_2.vue';
import DetailPageKR2 from '@/views/kr/DetailPageKr2.vue';

import Chapter1KR_3 from '@/views/kr/Chapter1Kr_3.vue';
import Chapter2KR_3 from '@/views/kr/Chapter2Kr_3.vue';
import Chapter3KR_3 from '@/views/kr/Chapter3Kr_3.vue';
import Chapter4KR_3 from '@/views/kr/Chapter4Kr_3.vue';
import Chapter5KR_3 from '@/views/kr/Chapter5Kr_3.vue';
import Chapter6KR_3 from '@/views/kr/Chapter6Kr_3.vue';
import Chapter7KR_3 from '@/views/kr/Chapter7Kr_3.vue';
import DetailPageKR3 from '@/views/kr/DetailPageKr3.vue';


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
    component: HomeFR,
  },
  {
    path: '/fr/foreword',
    name: 'ForewordFR',
    component: ForewordFR,
  },
  {
    path: '/fr/detail',
    name: 'DetailPageFR',
    component: DetailPageFR,
  },
  {
    path: '/fr/detail2',
    name: 'DetailPageFR2',
    component: DetailPageFR2,
  },
  {
    path: '/fr/detail3',
    name: 'DetailPageFR3',
    component: DetailPageFR3,
  },
  {
    path: '/fr/chapter1',
    name: 'Chapter1FR',
    component: Chapter1FR,
  },
  {
    path: '/fr/chapter2',
    name: 'Chapter2FR',
    component: Chapter2FR,
  },
  {
    path: '/fr/chapter3',
    name: 'Chapter3FR',
    component: Chapter3FR,
  },
  {
    path: '/fr/chapter4',
    name: 'Chapter4FR',
    component: Chapter4FR,
  },
  {
    path: '/fr/chapter5',
    name: 'Chapter5FR',
    component: Chapter5FR,
  },
  {
    path: '/fr/chapter6',
    name: 'Chapter6FR',
    component: Chapter6FR,
  },
  {
    path: '/fr/chapter7',
    name: 'Chapter7FR',
    component: Chapter7FR,
  },
  {
    path: '/fr/chapter1_2',
    name: 'Chapter1FR_2',
    component: Chapter1FR_2,
  },
  {
    path: '/fr/chapter2_2',
    name: 'Chapter2FR_2',
    component: Chapter2FR_2,
  },
  {
    path: '/fr/chapter3_2',
    name: 'Chapter3FR_2',
    component: Chapter3FR_2,
  },
  {
    path: '/fr/chapter4_2',
    name: 'Chapter4FR_2',
    component: Chapter4FR_2,
  },
  {
    path: '/fr/chapter5_2',
    name: 'Chapter5FR_2',
    component: Chapter5FR_2,
  },
  {
    path: '/fr/chapter6_2',
    name: 'Chapter6FR_2',
    component: Chapter6FR_2,
  },
  {
    path: '/fr/chapter7_2',
    name: 'Chapter7FR_2',
    component: Chapter7FR_2,
  },

  {
    path: '/fr/chapter1_3',
    name: 'Chapter1FR_3',
    component: Chapter1FR_3,
  },
  {
    path: '/fr/chapter2_3',
    name: 'Chapter2FR_3',
    component: Chapter2FR_3,
  },
  {
    path: '/fr/chapter3_3',
    name: 'Chapter3FR_3',
    component: Chapter3FR_3,
  },
  {
    path: '/fr/chapter4_3',
    name: 'Chapter4FR_3',
    component: Chapter4FR_3,
  },
  {
    path: '/fr/chapter5_3',
    name: 'Chapter5FR_3',
    component: Chapter5FR_3,
  },
  {
    path: '/fr/chapter6_3',
    name: 'Chapter6FR_3',
    component: Chapter6FR_3,
  },
  {
    path: '/fr/chapter7_3',
    name: 'Chapter7FR_3',
    component: Chapter7FR_3,
  },


  // 日语
  {
    path: '/jp/home',
    name: 'HomeJP',
    component: HomeJP,
  },
  {
    path: '/jp/foreword',
    name: 'ForewordJP',
    component: ForewordJP,
  },
  {
    path: '/jp/detail',
    name: 'DetailPageJP',
    component: DetailPageJP,
  },
  {
    path: '/jp/detail2',
    name: 'DetailPageJP2',
    component: DetailPageJP2,
  },
  {
    path: '/jp/detail3',
    name: 'DetailPageJP3',
    component: DetailPageJP3,
  },
  {
    path: '/jp/chapter1',
    name: 'Chapter1JP',
    component: Chapter1JP,
  },
  {
    path: '/jp/chapter2',
    name: 'Chapter2JP',
    component: Chapter2JP,
  },
  {
    path: '/jp/chapter3',
    name: 'Chapter3JP',
    component: Chapter3JP,
  },
  {
    path: '/jp/chapter4',
    name: 'Chapter4JP',
    component: Chapter4JP,
  },
  {
    path: '/jp/chapter5',
    name: 'Chapter5JP',
    component: Chapter5JP,
  },
  {
    path: '/jp/chapter6',
    name: 'Chapter6JP',
    component: Chapter6JP,
  },
  {
    path: '/jp/chapter7',
    name: 'Chapter7JP',
    component: Chapter7JP,
  },
  {
    path: '/jp/chapter1_2',
    name: 'Chapter1JP_2',
    component: Chapter1JP_2,
  },
  {
    path: '/jp/chapter2_2',
    name: 'Chapter2JP_2',
    component: Chapter2JP_2,
  },
  {
    path: '/jp/chapter3_2',
    name: 'Chapter3JP_2',
    component: Chapter3JP_2,
  },
  {
    path: '/jp/chapter4_2',
    name: 'Chapter4JP_2',
    component: Chapter4JP_2,
  },
  {
    path: '/jp/chapter5_2',
    name: 'Chapter5JP_2',
    component: Chapter5JP_2,
  },
  {
    path: '/jp/chapter6_2',
    name: 'Chapter6JP_2',
    component: Chapter6JP_2,
  },
  {
    path: '/jp/chapter7_2',
    name: 'Chapter7JP_2',
    component: Chapter7JP_2,
  },

  {
    path: '/jp/chapter1_3',
    name: 'Chapter1JP_3',
    component: Chapter1JP_3,
  },
  {
    path: '/jp/chapter2_3',
    name: 'Chapter2JP_3',
    component: Chapter2JP_3,
  },
  {
    path: '/jp/chapter3_3',
    name: 'Chapter3JP_3',
    component: Chapter3JP_3,
  },
  {
    path: '/jp/chapter4_3',
    name: 'Chapter4JP_3',
    component: Chapter4JP_3,
  },
  {
    path: '/jp/chapter5_3',
    name: 'Chapter5JP_3',
    component: Chapter5JP_3,
  },
  {
    path: '/jp/chapter6_3',
    name: 'Chapter6JP_3',
    component: Chapter6JP_3,
  },
  {
    path: '/jp/chapter7_3',
    name: 'Chapter7JP_3',
    component: Chapter7JP_3,
  },
  //韩文
  {
    path: '/kr/home',
    name: 'HomeKR',
    component: HomeKR,
  },
  {
    path: '/kr/foreword',
    name: 'ForewordKR',
    component: ForewordKR,
  },
  {
    path: '/kr/detail',
    name: 'DetailPageKR',
    component: DetailPageKR,
  },
  {
    path: '/kr/detail2',
    name: 'DetailPageKR2',
    component: DetailPageKR2,
  },
  {
    path: '/kr/detail3',
    name: 'DetailPageKR3',
    component: DetailPageKR3,
  },
  {
    path: '/kr/chapter1',
    name: 'Chapter1KR',
    component: Chapter1KR,
  },
  {
    path: '/kr/chapter2',
    name: 'Chapter2KR',
    component: Chapter2KR,
  },
  {
    path: '/kr/chapter3',
    name: 'Chapter3KR',
    component: Chapter3KR,
  },
  {
    path: '/kr/chapter4',
    name: 'Chapter4KR',
    component: Chapter4KR,
  },
  {
    path: '/kr/chapter5',
    name: 'Chapter5KR',
    component: Chapter5KR,
  },
  {
    path: '/kr/chapter6',
    name: 'Chapter6KR',
    component: Chapter6KR,
  },
  {
    path: '/kr/chapter7',
    name: 'Chapter7KR',
    component: Chapter7KR,
  },
  {
    path: '/kr/chapter1_2',
    name: 'Chapter1KR_2',
    component: Chapter1KR_2,
  },
  {
    path: '/kr/chapter2_2',
    name: 'Chapter2KR_2',
    component: Chapter2KR_2,
  },
  {
    path: '/kr/chapter3_2',
    name: 'Chapter3KR_2',
    component: Chapter3KR_2,
  },
  {
    path: '/kr/chapter4_2',
    name: 'Chapter4KR_2',
    component: Chapter4KR_2,
  },
  {
    path: '/kr/chapter5_2',
    name: 'Chapter5KR_2',
    component: Chapter5KR_2,
  },
  {
    path: '/kr/chapter6_2',
    name: 'Chapter6KR_2',
    component: Chapter6KR_2,
  },
  {
    path: '/kr/chapter7_2',
    name: 'Chapter7KR_2',
    component: Chapter7KR_2,
  },

  {
    path: '/kr/chapter1_3',
    name: 'Chapter1KR_3',
    component: Chapter1KR_3,
  },
  {
    path: '/kr/chapter2_3',
    name: 'Chapter2KR_3',
    component: Chapter2KR_3,
  },
  {
    path: '/kr/chapter3_3',
    name: 'Chapter3KR_3',
    component: Chapter3KR_3,
  },
  {
    path: '/kr/chapter4_3',
    name: 'Chapter4KR_3',
    component: Chapter4KR_3,
  },
  {
    path: '/kr/chapter5_3',
    name: 'Chapter5KR_3',
    component: Chapter5KR_3,
  },
  {
    path: '/kr/chapter6_3',
    name: 'Chapter6KR_3',
    component: Chapter6KR_3,
  },
  {
    path: '/kr/chapter7_3',
    name: 'Chapter7KR_3',
    component: Chapter7KR_3,
  },
  //阿语
  {
    path: '/ar/home',
    name: 'HomeAR',
    component: HomeAR,
  },
  {
    path: '/ar/foreword',
    name: 'ForewordAR',
    component: ForewordAR,
  },
  {
    path: '/ar/detail',
    name: 'DetailPageAR',
    component: DetailPageAR,
  },
  {
    path: '/ar/detail2',
    name: 'DetailPageAR2',
    component: DetailPageAR2,
  },
  {
    path: '/ar/detail3',
    name: 'DetailPageAR3',
    component: DetailPageAR3,
  },
  {
    path: '/ar/chapter1',
    name: 'Chapter1AR',
    component: Chapter1AR,
  },
  {
    path: '/ar/chapter2',
    name: 'Chapter2AR',
    component: Chapter2AR,
  },
  {
    path: '/ar/chapter3',
    name: 'Chapter3AR',
    component: Chapter3AR,
  },
  {
    path: '/ar/chapter4',
    name: 'Chapter4AR',
    component: Chapter4AR,
  },
  {
    path: '/ar/chapter5',
    name: 'Chapter5AR',
    component: Chapter5AR,
  },
  {
    path: '/ar/chapter6',
    name: 'Chapter6AR',
    component: Chapter6AR,
  },
  {
    path: '/ar/chapter7',
    name: 'Chapter7AR',
    component: Chapter7AR,
  },
  {
    path: '/ar/chapter1_2',
    name: 'Chapter1AR_2',
    component: Chapter1AR_2,
  },
  {
    path: '/ar/chapter2_2',
    name: 'Chapter2AR_2',
    component: Chapter2AR_2,
  },
  {
    path: '/ar/chapter3_2',
    name: 'Chapter3AR_2',
    component: Chapter3AR_2,
  },
  {
    path: '/ar/chapter4_2',
    name: 'Chapter4AR_2',
    component: Chapter4AR_2,
  },
  {
    path: '/ar/chapter5_2',
    name: 'Chapter5AR_2',
    component: Chapter5AR_2,
  },
  {
    path: '/ar/chapter6_2',
    name: 'Chapter6AR_2',
    component: Chapter6AR_2,
  },
  {
    path: '/ar/chapter7_2',
    name: 'Chapter7AR_2',
    component: Chapter7AR_2,
  },

  {
    path: '/ar/chapter1_3',
    name: 'Chapter1AR_3',
    component: Chapter1AR_3,
  },
  {
    path: '/ar/chapter2_3',
    name: 'Chapter2AR_3',
    component: Chapter2AR_3,
  },
  {
    path: '/ar/chapter3_3',
    name: 'Chapter3AR_3',
    component: Chapter3AR_3,
  },
  {
    path: '/ar/chapter4_3',
    name: 'Chapter4AR_3',
    component: Chapter4AR_3,
  },
  {
    path: '/ar/chapter5_3',
    name: 'Chapter5AR_3',
    component: Chapter5AR_3,
  },
  {
    path: '/ar/chapter6_3',
    name: 'Chapter6AR_3',
    component: Chapter6AR_3,
  },
  {
    path: '/ar/chapter7_3',
    name: 'Chapter7AR_3',
    component: Chapter7AR_3,
  },
  //西语
  {
    path: '/es/home',
    name: 'HomeES',
    component: HomeES,
  },
  {
    path: '/es/foreword',
    name: 'ForewordES',
    component: ForewordES,
  },
  {
    path: '/es/detail',
    name: 'DetailPageES',
    component: DetailPageES,
  },
  {
    path: '/es/detail2',
    name: 'DetailPageES2',
    component: DetailPageES2,
  },
  {
    path: '/es/detail3',
    name: 'DetailPageES3',
    component: DetailPageES3,
  },
  {
    path: '/es/chapter1',
    name: 'Chapter1ES',
    component: Chapter1ES,
  },
  {
    path: '/es/chapter2',
    name: 'Chapter2ES',
    component: Chapter2ES,
  },
  {
    path: '/es/chapter3',
    name: 'Chapter3ES',
    component: Chapter3ES,
  },
  {
    path: '/es/chapter4',
    name: 'Chapter4ES',
    component: Chapter4ES,
  },
  {
    path: '/es/chapter5',
    name: 'Chapter5ES',
    component: Chapter5ES,
  },
  {
    path: '/es/chapter6',
    name: 'Chapter6ES',
    component: Chapter6ES,
  },
  {
    path: '/es/chapter7',
    name: 'Chapter7ES',
    component: Chapter7ES,
  },
  {
    path: '/es/chapter1_2',
    name: 'Chapter1ES_2',
    component: Chapter1ES_2,
  },
  {
    path: '/es/chapter2_2',
    name: 'Chapter2ES_2',
    component: Chapter2ES_2,
  },
  {
    path: '/es/chapter3_2',
    name: 'Chapter3ES_2',
    component: Chapter3ES_2,
  },
  {
    path: '/es/chapter4_2',
    name: 'Chapter4ES_2',
    component: Chapter4ES_2,
  },
  {
    path: '/es/chapter5_2',
    name: 'Chapter5ES_2',
    component: Chapter5ES_2,
  },
  {
    path: '/es/chapter6_2',
    name: 'Chapter6ES_2',
    component: Chapter6ES_2,
  },
  {
    path: '/es/chapter7_2',
    name: 'Chapter7ES_2',
    component: Chapter7ES_2,
  },

  {
    path: '/es/chapter1_3',
    name: 'Chapter1ES_3',
    component: Chapter1ES_3,
  },
  {
    path: '/es/chapter2_3',
    name: 'Chapter2ES_3',
    component: Chapter2ES_3,
  },
  {
    path: '/es/chapter3_3',
    name: 'Chapter3ES_3',
    component: Chapter3ES_3,
  },
  {
    path: '/es/chapter4_3',
    name: 'Chapter4ES_3',
    component: Chapter4ES_3,
  },
  {
    path: '/es/chapter5_3',
    name: 'Chapter5ES_3',
    component: Chapter5ES_3,
  },
  {
    path: '/es/chapter6_3',
    name: 'Chapter6ES_3',
    component: Chapter6ES_3,
  },
  {
    path: '/es/chapter7_3',
    name: 'Chapter7ES_3',
    component: Chapter7ES_3,
  },
  //俄语
  {
    path: '/rf/home',
    name: 'HomeRF',
    component: HomeRF,
  },
  {
    path: '/rf/foreword',
    name: 'ForewordRF',
    component: ForewordRF,
  },
  {
    path: '/rf/detail',
    name: 'DetailPageRF',
    component: DetailPageRF,
  },
  {
    path: '/rf/detail2',
    name: 'DetailPageRF2',
    component: DetailPageRF2,
  },
  {
    path: '/rf/detail3',
    name: 'DetailPageRF3',
    component: DetailPageRF3,
  },
  {
    path: '/rf/chapter1',
    name: 'Chapter1RF',
    component: Chapter1RF,
  },
  {
    path: '/rf/chapter2',
    name: 'Chapter2RF',
    component: Chapter2RF,
  },
  {
    path: '/rf/chapter3',
    name: 'Chapter3RF',
    component: Chapter3RF,
  },
  {
    path: '/rf/chapter4',
    name: 'Chapter4RF',
    component: Chapter4RF,
  },
  {
    path: '/rf/chapter5',
    name: 'Chapter5RF',
    component: Chapter5RF,
  },
  {
    path: '/rf/chapter6',
    name: 'Chapter6RF',
    component: Chapter6RF,
  },
  {
    path: '/rf/chapter7',
    name: 'Chapter7RF',
    component: Chapter7RF,
  },
  {
    path: '/rf/chapter1_2',
    name: 'Chapter1RF_2',
    component: Chapter1RF_2,
  },
  {
    path: '/rf/chapter2_2',
    name: 'Chapter2RF_2',
    component: Chapter2RF_2,
  },
  {
    path: '/rf/chapter3_2',
    name: 'Chapter3RF_2',
    component: Chapter3RF_2,
  },
  {
    path: '/rf/chapter4_2',
    name: 'Chapter4RF_2',
    component: Chapter4RF_2,
  },
  {
    path: '/rf/chapter5_2',
    name: 'Chapter5RF_2',
    component: Chapter5RF_2,
  },
  {
    path: '/rf/chapter6_2',
    name: 'Chapter6RF_2',
    component: Chapter6RF_2,
  },
  {
    path: '/rf/chapter7_2',
    name: 'Chapter7RF_2',
    component: Chapter7RF_2,
  },

  {
    path: '/rf/chapter1_3',
    name: 'Chapter1RF_3',
    component: Chapter1RF_3,
  },
  {
    path: '/rf/chapter2_3',
    name: 'Chapter2RF_3',
    component: Chapter2RF_3,
  },
  {
    path: '/rf/chapter3_3',
    name: 'Chapter3RF_3',
    component: Chapter3RF_3,
  },
  {
    path: '/rf/chapter4_3',
    name: 'Chapter4RF_3',
    component: Chapter4RF_3,
  },
  {
    path: '/rf/chapter5_3',
    name: 'Chapter5RF_3',
    component: Chapter5RF_3,
  },
  {
    path: '/rf/chapter6_3',
    name: 'Chapter6RF_3',
    component: Chapter6RF_3,
  },
  {
    path: '/rf/chapter7_3',
    name: 'Chapter7RF_3',
    component: Chapter7RF_3,
  },

];

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
