<script setup>
import { useRouter } from 'vue-router' // 导入 useRouter
import '@/assets/font.css'
import { onMounted } from 'vue' // 导入 onMounted
const router = useRouter() // 创建路由实例
let nextLeft = '/jp/chapter2_2'
let nextR = '/jp/chapter4_2'
// 点击事件，跳转到前言页面

onMounted(() => {
  const texts = [
    { className: 'text1', animationClass: 'animation1' },
    { className: 'text2', animationClass: 'animation2' },
    { className: 'text3', animationClass: 'animation3' },
    { className: 'text4', animationClass: 'animation4' }
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
        <img src="@/assets/Chapter2/page3/图画1.png" alt="" class="logo1" />
        <div class="text1">食</div>
        <div class="text2">
          孔子は飲食の面で節度を守り、食材の新鮮さと丁寧な調理にこだわりました。「食は精をいとわず、膾は細をいとわず」を提唱し、さらに飲食における礼儀と、食べ物への感謝を強調しました。
        </div>
        <img src="@/assets/Chapter2/page3/图画2.png" alt="" class="logo2" />
        <div class="text3">戦国 犠尊 齊文化博物館所蔵</div>
        <img src="@/assets/Chapter2/page3/图画3.png" alt="" class="logo3" />
        <div class="text4">商周十供<br />孔子博物館所蔵</div>
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
.animation4 {
  animation: fadeInOut 9s ease-in-out 1; /* 淡入时间为3秒 */
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
  /* 组 9 1 */

  position: absolute;
  width: 428px;
  height: 289px;
  left: calc(50% - 428px / 2 - 87px);
  top: 27px;

  background-blend-mode: darken;
}
.logo2 {
  /* 牺尊  战国 齐文化博物院藏 国家一级文物 1 */

  position: absolute;
  width: 600px;
  height: 406px;
  left: calc(50% - 600px / 2);
  top: 468px;
}
.logo3 {
  /* 图层 15 1 */

  position: absolute;
  width: 328px;
  height: 362px;
  left: 334px;
  top: 944px;
}
.text1 {
  /* 食 */

  /* 食 */

  position: absolute;
  width: 160px;
  height: 160px;
  left: 526px;
  top: 37px;
  font-family: 'FangzhengKaiti', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 160px;
  line-height: 160px;
  /* identical to box height, or 100% */
  text-align: center;
  letter-spacing: 4px;

  color: #dfa887;
}
.text2 {
  /* 孔子饮食有节，讲究食材的新鲜与烹饪的精细。他提倡“食不厌精，脍不厌细”，同时强调饮食中的礼仪，以及对于食物的珍惜。 */

  position: absolute;
  width: 600px;
  height: 162px;
  left: calc(50% - 600px / 2);
  top: 299px;
  font-family: 'SourceHanSansJP', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 40px;
  /* or 180% */
  text-align: justify;
  letter-spacing: -0.6px;

  color: #010101;
}
.text3 {
  /* 战国 牺尊 收藏于齐文化博物院 */

  position: absolute;
  width: 329px;
  height: 40px;
  left: calc(50% - 329px / 2 - 146.5px);
  top: 880px;
  font-family: 'Xiahuwenkai', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  /* identical to box height, or 167% */

  color: #4b180a;
}
.text4 {
  /* 商周十供,收藏于孔子博物馆 */
  /* 商周十供 收藏于孔子博物馆 */

  position: absolute;
  width: 192px;
  height: 80px;
  left: calc(50% - 192px / 2 - 205px);
  top: 1158px;

  font-family: 'Xiahuwenkai', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  /* or 167% */

  color: #4b180a;
}
</style>
