<script setup>
import { useRouter } from 'vue-router' // 导入 useRouter
import '@/assets/font.css'
import { onMounted } from 'vue' // 导入 onMounted
const router = useRouter() // 创建路由实例
let nextLeft = '/jp/chapter3'
let nextR = '/jp/chapter5'
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
          孔子少年は勉学の志を立て、六芸に精通し、青年時代は周辺を旅して斉国で過ごし、老子に礼儀を学びました。壮年には役人となり政治を論じ、世界中を旅して、晩年は魯へ帰り学を興し、六経を編纂しました。
        </div>
        <img src="@/assets/Chapter1/page4/imga1.png" alt="" class="logo1" />
        <div class="text2">山東省の東平漢墓の壁画<br>孔子と老子の出会い</div>
        <img src="@/assets/Chapter1/page4/imga2.png" alt="" class="logo2" />
        <div class="text3">《聖廟祀典図考 孔子が琴を師襄から学ぶ》 清·顧沅 編
        </div>
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
  /* 4-1 */

  position: absolute;
  width: 620px;
  height: 315.69px;
  left: calc(50% - 620px / 2);
  top: 204px;
}
.logo2 {
  /* 4-2 */

  position: absolute;
  width: 440px;
  height: 664.37px;
  left: calc(50% - 440px / 2);
  top: 602px;
}
.text1 {
  /* 孔子少年立志向学，精通六艺，青年游周适齐，问礼于老子，壮年出仕谋政，周游列国，晚年归鲁兴学，纂订六经。 */

  position: absolute;
  width: 600px;
  height: 162px;
  left: calc(50% - 600px / 2);
  top: 22px;

  font-family: 'SourceHanSansJP', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 35px;
  /* or 180% */
  text-align: justify;
  letter-spacing: -0.6px;

  color: #010101;
}
.text2 {
  /* 山东东平汉墓壁画 孔子见老子 */
  position: absolute;
  width: 400px;
  height: 40px;
  left: 82px;
  top: 536px;

  font-family: 'Xiahuwenkai', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  /* identical to box height, or 167% */

  color: #4b180a;
}
.text3 {
  /* 《圣庙祀典图考·孔子学琴于师襄》 台北故宫博物馆藏 */
  position: absolute;
  width: 570px;
  height: 40px;
  left: calc(50% - 507px / 2 + 0.5px);
  top: 1258px;
  font-family: 'Xiahuwenkai', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 30px;
  /* identical to box height, or 167% */
  color: #4b180a;
}
</style>
