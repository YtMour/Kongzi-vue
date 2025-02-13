<script setup>
import { useRouter } from 'vue-router' // 导入 useRouter
import '@/assets/font.css'
import { onMounted } from 'vue'

const router = useRouter() // 创建路由实例
let nextLeft = '/ar/chapter1'
let nextR = '/ar/chapter3'
// 点击事件，跳转到前言页面

onMounted(() => {
  const texts = [
    { className: 'text1', animationClass: 'animation1' },
    { className: 'text2', animationClass: 'animation2' }
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
        <img src="@/assets/Chapter1/page2/imga1.png" alt="" class="logo1" />
        <div class="text1">كهف فوتسي عند سفح جبل نيشان، يُعتقد أنه مكان ولادة كونفوشيوس</div>
        <img src="@/assets/Chapter1/page2/imga2.png" alt="" class="logo2" />
        <div class="text2">تمثال كونفوشيوس بارتفاع ٧٢ متراً على جبل نيشان</div>
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
  /* 2-1 */

  position: absolute;
  width: 584px;
  height: 473px;
  left: calc(50% - 584px / 2);
  top: 22px;
}
.logo2 {
  position: absolute;
  width: 620px;
  height: 709.82px;
  left: calc(50% - 620px / 2);
  top: 535px;
}
.text1 {
  /* 位于尼山脚下的夫子洞，相传是孔子的出生地 */

  position: absolute;
  width: 550px;
  height: 40px;
  left: 52px;
  top: 489px;

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
.text2 {
  /* 72米高的尼山孔子像 */

  position: absolute;
  width: 650px;
  height: 40px;
  left: 70px;
  top: 1257px;

  font-family: 'Xiahuwenkai', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 20px;
  /* identical to box height, or 167% */

  color: #4b180a;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
  gap: 30px;
  direction: rtl; /* 设置文本方向为右到左 */
  unicode-bidi: bidi-override; /* 确保按预期显示 */
}
</style>
