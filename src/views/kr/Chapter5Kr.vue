<script setup>
import { useRouter } from 'vue-router' // 导入 useRouter
import '@/assets/font.css'
import { onMounted } from 'vue' // 导入 onMounted
const router = useRouter() // 创建路由实例
let nextLeft = '/kr/chapter4'
let nextR = '/kr/chapter6'
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
        <div class="text1">인생철학에서 치국정치에 이르기까지 공자의 지혜는 깊은 영향을 미쳤고, 사상은 넓고 심오하다. 그는 인을 핵심으로, 예악을 규범으로, 중용사상을 방법으로 삼아 사람들에게 아름다운 대동세계를 건설하도록 이끌어 보았다. 공자가 창시한 유가사상체계는 중국 역사와 문화의 정화이며, 중국 전통문화의 당간지주이다.
        </div>
        <img src="@/assets/Chapter1/page5/图画1.png" alt="" class="logo1" />
        <div class="text2">
          대성전(大成殿)은, 취푸 공묘의 대전으로 공자의 '집대성(集大成)'이란 뜻을 담고 있다.
          당나라(618-907) 때 처음창건, 청나라 옹정시기(1722-1735)에 중건됨
        </div>
        <img src="@/assets/Chapter1/page5/图画2.png" alt="" class="logo2" />
        <div class="text3">대성전 용주</div>
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
  width: 660px;
  height: 270px;
  left: calc(50% - 660px / 2);
  top: 22px;

  font-family: 'SourceHanSansCN', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 44px;
  /* or 180% */
  text-align: justify;
  letter-spacing: -0.6px;

  color: #010101;
}
.text2 {
  /* 大成殿，曲阜孔庙正殿，取孔子“集大成”之意。始建于 唐代（618 - 907），清代雍正时（1722 - 1735）重建 */

  position: absolute;
  width: 600px;
  height: 80px;
  left: calc(50% - 600px / 2);
  top: 741px;

  font-family: 'Xiahuwenkai', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 30px;
  /* or 167% */

  color: #4b180a;
}
.text3 {
  /* 大成殿龙柱 */

  position: absolute;
  width: 150px;
  height: 40px;
  left: calc(50% - 120px / 2 - 155px);
  top: 1258px;
  font-family: 'Xiahuwenkai', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  /* identical to box height, or 167% */

  color: #4b180a;
}
</style>
