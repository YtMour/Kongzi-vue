<script setup>
import { useRouter } from 'vue-router' // 导入 useRouter
import '@/assets/font.css'
import { onMounted } from 'vue' // 导入 onMounted
const router = useRouter()
const handleLeftClick = () => {
  router.push('/rf/chapter6_3')
}
// 创建路由实例
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
// 点击事件，跳转到前言页面
// const goToNextPage = () => {
//   router.push('/cn/home');  // 跳转到前言页面
//   window.scrollTo(0, 0);
// };
</script>

<template>
  <div id="app" data-v-app>
    <div class="wrapper" @click="goToNextPage">
      <!-- 点击整个页面 -->
      <div class="background"></div>
      <!-- 背景图容器 -->
      <div class="content">
        <div class="text1">
          Вдохновляясь идеями Конфуция, давайте объединим усилия, чтобы строить более гармоничный,
          инклюзивный и устойчивый мир. Пусть мудрость, преодолевшая тысячелетия, засияет светом
          гармонии в волнах новой эпохи и ведет человечество к более совершенному будущему.
        </div>
        <div class="logo1">
          <img src="@/assets/Chapter3/page7/图画1.png" alt="" class="logo2" />
        </div>
        <div class="text2">Древние кипарисы в храме Конфуция</div>
      </div>
      <div class="btnbox">
        <!-- <img src="@/assets/Buttonleft.png" class="btnleft"> -->
        <img @click="handleLeftClick" src="@/assets/ButtonLeft.png" class="btnleft" />
      </div>
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
.btnbox {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  padding: 0px;
  gap: 80px;

  position: absolute;
  width: 100%; /* 让容器充满父容器的宽度 */
  bottom: 40px; /* 固定在底部 */
}

.btnleft {
  /* Group 17 */

  width: 88px;
  height: 88px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
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
  /* 组 25 1 */
  /* 组 25 1 */

  position: absolute;
  width: 620px;
  height: 1095.64px;
  left: calc(50% - 620px / 2);
  top: 205px;
}
.logo2 {
  /* 组 25 1 */
  width: 620px;
  height: 1095.64px;
}

.text1 {
  /* 让我们携手并进，在孔子思想的启迪下，共同构建一个更加和谐、包容、可持续的世界。让这份跨越千年的智慧，在新时代的浪潮中绽放和合之光，引领人类迈向更加美好的未来。 */

  position: absolute;
  width: 660px;
  height: 216px;
  left: calc(50% - 660px / 2);
  top: 34px;
  font-family: 'SourceHanSansCN', sans-serif;

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 44px;
  /* or 180% */
  text-align: justify;
  letter-spacing: -0.6px;

  color: #010101;

  z-index: 1;
}
.text2 {
  /* 孔庙里的古柏树 */

  position: absolute;
  width: 250px;
  height: 40px;
  left: 85px;
  top: 460px;
  font-family: 'Xiahuwenkai', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 30px;
  /* identical to box height, or 167% */

  color: #4b180a;
  z-index: 2;
}
</style>
