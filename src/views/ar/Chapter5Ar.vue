<script setup>
import { useRouter } from 'vue-router' // 导入 useRouter
import '@/assets/font.css'
import { onMounted } from 'vue' // 导入 onMounted
const router = useRouter() // 创建路由实例
let nextLeft = '/ar/chapter4'
let nextR = '/ar/chapter6'
// 点击事件，跳转到前言页面

onMounted(() => {
  const texts = [
    { className: 'text1', animationClass: 'animation1' },
    { className: 'text2', animationClass: 'animation2' },
    { className: 'text3', animationClass: 'animation2' }
  ]

  texts.forEach(({ className, animationClass }) => {
    const element = document.querySelector(`.${className}`)
    if (element) {
      element.classList.add(animationClass)
      element.addEventListener('animationend', () => {
        element.style.animationPlayState = 'paused' // 暂停动画，保持状态
      })
    }
  })
})
</script>

<template>
  <div id="app" data-v-app>
    <div class="wrapper" @click="goToNextPage">
      <!-- 点击整个页面 -->
      <div class="background"></div>
      <!-- 背景图容器 -->
      <div class="content">
        <div class="text1">
          من فلسفة الحياة إلى إدارة الدولة، كان تأثير حكمة كونفوشيوس عميقاً وبعيد المدى. أفكاره
          واسعة وعميقة، يتخذ من الإنسانية جوهرًا، ومن الآداب والموسيقى معايير، ومن الوسطية منهجًا،
          ويوجه الناس نحو بناء عالم متناغم مثالي. إن النظام الكونفوشيوسي الذي أسسه هو خلاصة التاريخ
          والثقافة الصينية، ومحور الثقافة الصينية التقليدية.
        </div>
        <img src="@/assets/Chapter1/page5/图画1.png" alt="" class="logo1" />
        <div class="text2">
          قاعة داتشنغ، القاعة الرئيسية لمعبد كونفوشيوس في تشييفو، مستوحاة من مفهوم كونفوشيوس "الجمع
          بين كل الإنجازات". بُنيت أصلاً في عهد أسرة تانغ الملكية (٦١٨-٩٠٧)، وأُعيد بناؤها في عهد
          إمبراطور يونغتشنغ من أسرة تشينغ الملكية (١٧٢٢-١٧٣٥)
        </div>
        <img src="@/assets/Chapter1/page5/图画2.png" alt="" class="logo2" />
        <div class="text3">أعمدة التنين في قاعة داتشنغ</div>
      </div>
      <ButtonBox
        :onLeftClick="() => router.push(nextLeft)"
        :onRightClick="() => router.push(nextR)"
      ></ButtonBox>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
.animation1 {
  animation: fadeInOut 3s ease-in-out 1;
  animation-fill-mode: forwards; /* 保持动画结束后的状态 */
}

.animation2 {
  animation: fadeInOut 5s ease-in-out 1; /* 淡入时间为3秒 */
  animation-fill-mode: forwards;
}

html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* 防止水平滚动条 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center; /* 垂直居中 */
  width: 100vw;
  height: 100vh; /* 充满视口高度 */
  position: relative; /* 相对定位以适应绝对定位的子元素 */
  margin: 0; /* 居中 */
  padding: 0;
}

.background {
  position: fixed; /* 背景图固定在视口 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/Chapter1/ArticleBG.png'); /* 背景图片路径 */
  background-size: cover; /* 背景图片铺满视口，保持纵横比 */
  background-repeat: no-repeat; /* 防止重复背景图 */
  background-position: center; /* 背景图居中显示 */
  z-index: -1; /* 使背景图位于内容下方 */
}

.content {
  max-width: 100vw; /* 最大宽度设置为100% */
  width: 100vw; /* 使用相对宽度 */
  max-height: 100%; /* 限制内容最大高度 */

  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中内容 */
  padding: 20px; /* 内边距，以防止内容溢出 */
  box-sizing: border-box; /* 确保内边距不影响总宽度 */
  margin: 0 auto;
}
.logo1,
.logo2,
.logo3,
.logo4,
.logo5 {
  position: absolute;
  max-width: 100vw;
  margin-left: auto;
  margin-right: auto;
}

/* 定义每个logo的绝对位置 */
.logo1 {
  /* 5-1 */

  position: absolute;
  width: 620px;
  height: 428.69px;
  left: calc(50% - 620px / 2);
  top: 312px;
}
.logo2 {
  /* 5-2 */

  position: absolute;
  width: 332px;
  height: 455px;
  left: 326px;
  top: 840px;
}
.text1 {
  /* 从人生哲学到治国理政，孔子的智慧影响深远，孔子的思想博大精深。他以仁为核心，以礼乐为规范，以中庸为方法，引导人们建设一个美好的大同世界。孔子创立的儒家思想体系是中国历史与文化的结晶，是中国传统文化的主轴。 */

  position: absolute;
  width: 670px;
  height: 270px;
  left: calc(50% - 670px / 2);
  top: 20px;

  font-family: 'SourceHanSansCN', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 34px;
  /* or 180% */
  text-align: justify;
  letter-spacing: -0.6px;

  color: #010101;
  direction: rtl; /* 设置文本方向为右到左 */
  unicode-bidi: bidi-override; /* 确保按预期显示 */
}
.text2 {
  /* 大成殿，曲阜孔庙正殿，取孔子“集大成”之意。始建于 唐代（618 - 907），清代雍正时（1722 - 1735）重建 */

  position: absolute;
  width: 650px;
  height: 80px;
  left: calc(50% - 650px / 2);
  top: 741px;

  font-family: 'Xiahuwenkai', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 20px;
  /* or 167% */

  color: #4b180a;
  direction: rtl; /* 设置文本方向为右到左 */
  unicode-bidi: bidi-override; /* 确保按预期显示 */
}
.text3 {
  /* 大成殿龙柱 */

  position: absolute;
  width: 200px;
  height: 40px;
  left: calc(50% - 250px / 2 - 155px);
  top: 1258px;
  font-family: 'Xiahuwenkai', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 20px;
  /* identical to box height, or 167% */

  color: #4b180a;

  direction: rtl; /* 设置文本方向为右到左 */
  unicode-bidi: bidi-override; /* 确保按预期显示 */
}
</style>
