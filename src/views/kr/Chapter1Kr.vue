<script setup>
import { useRouter } from 'vue-router' // 导入 useRouter
import '@/assets/font.css'
import { onMounted } from 'vue'

const router = useRouter() // 创建路由实例
let nextLeft = '/kr/detail'
let nextR = '/kr/chapter2'
// 点击事件，跳转到前言页面
// const goToNextPage = () => {
//   router.push('/cn/chapter2') // 跳转到前言页面
//   window.scrollTo(0, 0)
// }

onMounted(() => {
  const texts = [
    { className: 'text1', animationClass: 'animation1' },
    { className: 'text2', animationClass: 'animation1' },
    { className: 'text3', animationClass: 'animation2' },
    { className: 'text4', animationClass: 'animation3' }
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
        <img src="@/assets/Chapter1/page1/竹子.png" alt="" class="logo2" />

        <img src="@/assets/Chapter1/page1/孔子.png" alt="" class="logo3" />
        <img src="@/assets/Chapter1/page1/永远.png" alt="" class="logo1" />

        <div class="text1">&lt;공자 연거상(燕居像)&gt;</div>
        <div class="text2">명·작자 미상</div>
        <div class="text3">
          공자(BC 551~ BC 479)는 중국의 위대한 사상가, 교육가, 철학자로 후세에 지성선사(至聖先師)나
          성인(聖人)으로 존칭하다.
        </div>
        <img src="@/assets/Chapter1/page1/博物馆.png" alt="" class="logo4" />
        <div class="text4">공자의 고향인 산둥성 취푸시에 위치해 있는 공자 박물관</div>
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
  animation: fadeInOut 7s ease-in-out 1; /* 淡入时间为4秒 */
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
  min-height: 100vh; /* 充满视口高度 */
  position: relative; /* 相对定位以适应绝对定位的子元素 */
  margin: 0; /* 居中 */
  padding: 0;
  overflow: hidden; /* 隐藏多余的内容溢出 */
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
  min-height: 100%; /* 限制内容最大高度 */

  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中内容 */
  padding: 0px; /* 内边距，以防止内容溢出 */
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
  position: absolute;
  width: 351.9px;
  height: 145.91px;
  left: calc(50% - 351.9px / 2 - 0.05px);
  top: 19.44px;
}
.logo2 {
  /* Group 45 */

  position: absolute;
  width: 167px;
  height: 147px;
  right: 30.45px;
  top: 19.44px;
}
.logo3 {
  /* 1-1 */

  position: absolute;
  width: 489px;
  height: 589px;
  right: 0.5px;
  top: 49px;
}
.logo4 {
  position: absolute;
  width: 620px;
  height: 423.73px;
  left: calc(50% - 620px / 2);
  top: 826px;
}
.text1 {
  /* 《孔子燕居像》 */

  width: 300px;
  height: 40px;

  font-family: 'Xiahuwenkai', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 40px;
  /* identical to box height, or 143% */
  color: #4b180a;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
  position: absolute;
  left: 20px;
  top: 325px;
}
.text2 {
  /* 明·佚名 绘 */
  width: 168px;
  height: 40px;
  font-family: 'Xiahuwenkai', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 40px;
  /* identical to box height, or 200% */
  text-align: right;
  color: #4b180a;
  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
  position: absolute;
  left: 125px;
  top: 375px;
}
.text3 {
  position: absolute;
  width: 600px;
  height: 150px;
  left: calc(50% - 600px / 2);
  top: 635px;

  font-family: 'SourceHanSansCN', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 50px;
  /* or 167% */
  text-align: justify;
  letter-spacing: -0.6px;
  color: #010101;
}
.text4 {
  /* 位于“孔子故里”山东曲阜的孔子博物馆 */

  position: absolute;
  width: 650px;
  height: 40px;
  right: 15px;
  top: 1250px;
  font-family: 'Xiahuwenkai', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  /* identical to box height, or 167% */
  color: #4b180a;
}
</style>
