<script setup>
import { useRouter } from 'vue-router' // 导入 useRouter
import '@/assets/font.css'
import { onMounted } from 'vue' // 导入 onMounted
const router = useRouter() // 创建路由实例
let nextLeft = '/fr/chapter3_2'
let nextR = '/fr/chapter5_2'
// 点击事件，跳转到前言页面

onMounted(() => {
  const texts = [
    { className: 'text1', animationClass: 'animation1' },
    { className: 'text2', animationClass: 'animation2' },
    { className: 'text3', animationClass: 'animation3' }
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
        <img src="@/assets/Chapter2/page4/imga1.png" alt="" class="logo1" />
        <div class="text1">Logement</div>
        <img src="@/assets/Chapter2/page4/imga2.png" alt="" class="logo2" />
        <div class="text2">
          Confucius accordait de l'importance à la propreté et à la tranquillité du cadre de vie,
          estimant qu'un bon cadre de vie contribuait à cultiver le caractère de chacun. Il a avancé
          l'idée « ne pas dormir sur le dos comme un cadavre et ne pas se soucier de votre apparence
          à la maison », mais il faut toujours maintenir un certain degré d'étiquette et d'ordre.
        </div>

        <div class="text3">Le caisson de la salle Dacheng</div>
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
.animation3 {
  animation: fadeInOut 7s ease-in-out 1; /* 淡入时间为3秒 */
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
  /* 4-1 */

  /* 图层 27 9 */

  position: absolute;
  width: 644px;
  height: 441px;
  left: 68px;
  top: 41px;
}
.logo2 {
  /* 4-2 */

  /* 图层 28 1 */

  position: absolute;
  width: 620px;
  height: 451.44px;
  left: calc(50% - 620px / 2);

  top: 769px;
}
.text1 {
  position: absolute;
  width: 200px;
  height: 160px;
  left: 345px;
  top: 41px;
  font-family: 'FangzhengKaiti', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 50px;
  line-height: 50px;
  /* identical to box height, or 100% */
  text-align: center;
  letter-spacing: 4px;

  color: #dfa887;
}
.text2 {
  /* 孔子注重居住环境的整洁与安静，认为良好的居住环境有助于修身养性。他提出“寝不尸，居不容”，即就寝时不应像尸体般僵硬，居家时也不必过于拘谨，但要保持一定的礼仪和秩序。 */

  position: absolute;
  width: 660px;
  height: 216px;
  left: calc(50% - 660px / 2);
  top: 510px;
  font-family: 'SourceHanSansCN', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 36px;
  /* or 180% */
  text-align: justify;
  letter-spacing: -0.6px;

  color: #010101;
}
.text3 {
  /* 《圣庙祀典图考·孔子学琴于师襄》 台北故宫博物馆藏 */
  /* 大成殿的藻井 */

  position: absolute;
  width: 360px;
  height: 40px;
  left: calc(50% - 144px / 2 - 239px);
  top: 1220px;
  font-family: 'SourceHanSansCN', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 30px;
  /* identical to box height, or 167% */

  color: #4b180a;
}
</style>
