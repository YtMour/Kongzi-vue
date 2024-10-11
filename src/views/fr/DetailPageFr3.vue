<script setup>
import { useRouter } from 'vue-router' // 导入 useRouter
import '@/assets/font.css'
import { onMounted } from 'vue'

const router = useRouter() // 创建路由实例
let nextLeft = '/fr/chapter7_2'
let nextR = '/fr/chapter1_3'
onMounted(() => {
  const texts = [
    { className: 'textbox1', animationClass: 'animation1' },
    { className: 'textbox2', animationClass: 'animation2' },
    { className: 'textbox3', animationClass: 'animation3' }
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
    <div class="wrapper">
      <!-- 点击整个页面 -->
      <div class="background"></div>
      <!-- 背景图容器 -->
      <div class="content">
        <img src="@/assets/Chapter3/鸽子.png" alt="" class="logo1" />
        <img src="@/assets/Chapter3/永远.png" alt="" class="logo2" />
        <img src="@/assets/Chapter3/大圆.png" alt="" class="logo3" />
        <img src="@/assets/Chapter3/小圆.png" alt="" class="logo4" />
        <div class="textbox1">
          <div class="text">Le chapitre iii</div>
          <div class="xian1"></div>
        </div>
        <div class="textbox2">
          <div class="text2">L’impact mondial</div>
          <div class="text3">de la culture</div>
          <div class="text4">de Confucius</div>
        </div>

        <img src="@/assets/Chapter3/礼乐.png" alt="" class="logo5" />
        <img src="@/assets/Chapter3/读书.png" alt="" class="logo6" />
      </div>

      <ButtonBox
        :onLeftClick="() => router.push(nextLeft)"
        :onRightClick="() => router.push(nextR)"
      ></ButtonBox>
    </div>
  </div>
</template>

<style scoped>
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
  width: 100%;
  height: 100%;
  overflow-x: hidden; /* 防止水平滚动条 */
}

.btnbox {
  /* Frame 499 */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 80px;

  position: absolute;
  width: 256px;
  height: 88px;
  /* left: calc(50% - 256px/2); */
  bottom: 40px;
}
.btnleft {
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
  max-width: 100%; /* 最大宽度设置为100% */
  width: 100%; /* 使用相对宽度 */
  max-height: 100%; /* 限制内容最大高度 */

  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中内容 */
  padding: 20px; /* 内边距，以防止内容溢出 */
  box-sizing: border-box; /* 确保内边距不影响总宽度 */
}
.logo1,
.logo2,
.logo3,
.logo4,
.logo5 {
  position: absolute;
  max-width: 90%; /* 设置最大宽度为90% */
}

/* 定义每个logo的绝对位置 */
.logo1 {
  /* 隔离模式 */

  position: absolute;
  width: 165px;
  height: 153px;
  left: 6.93%;
  right: 72.27%;
  top: 22px;
}
.logo2 {
  /* 资源 7@3x */

  position: absolute;
  width: 239px;
  height: 275px;
  left: 471px;
  top: 22px;
}
.logo3 {
  /* Ellipse 12 */

  position: absolute;
  width: 619px;
  height: 619px;
  left: calc(50% - 619px / 2 + 0.5px);
  top: 215px;
}
.logo4 {
  /* Ellipse 12 */

  position: absolute;
  width: 192px;
  height: 192px;
  left: calc(50% - 192px / 2 - 257px);
  top: 642px;
  opacity: 0.7;
}
.logo5 {
  /* 隔离模式 */

  position: absolute;
  width: 338px;
  height: 304px;
  left: 40px;
  top: 986px;
}
.logo6 {
  /* Frame */

  position: absolute;
  width: 372px;
  height: 329px;
  right: 0px;
  top: 970px;
}

.text {
  position: absolute;
  width: 250px;
  height: 100px;
  left: calc(50% - 158px / 2 - 30px);
  top: 313px;

  font-family: 'FangzhengKaiti', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 50px;
  text-align: center;
  letter-spacing: 4px;

  color: #00538f;
}
.xian1 {
  /* Vector 1 */

  position: absolute;
  width: 200px;
  height: 0px;
  left: calc(50% - 200px / 2 + 8px);
  top: 395.5px;
  border: none; /* 不使用实际边框 */
  box-shadow: 0 0 0 0.5px #00538f; /* 模拟细线 */
}

.text2 {
  position: absolute;
  width: 500px;
  height: 300px;
  left: calc(50% - 500px / 2 + 1px);
  top: 430px;

  font-family: 'FangzhengKaiti', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 46px;
  line-height: 30px;
  /* or 125% */
  text-align: center;
  letter-spacing: 4px;

  color: #00538f;
}
.text3 {
  position: absolute;
  width: 400px;
  height: 300px;
  left: calc(50% - 400px / 2 + 1px);
  top: 540px;

  font-family: 'FangzhengKaiti', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 46px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 4px;

  color: #00538f;
}
.text4 {
  position: absolute;
  width: 500px;
  height: 300px;
  left: calc(50% - 500px / 2 + 1px);
  top: 650px;
  font-family: 'FangzhengKaiti', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 46px;
  line-height: 30px;

  text-align: center;
  letter-spacing: 4px;

  color: #00538f;
}
.text5 {
  /* 孔子思想具有极其博大的内涵，是s中国文化，也是东方文化的象征，孔子不仅属于中国，而且属于全世界 */

  width: 640px;
  height: 120px;
  position: absolute;
  left: calc(50% - 630px / 2);
  top: 872px;
  font-family: 'Xiahuwenkai', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;
  /* or 143% */

  color: #4b180a;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}
.text6 {
  /* -- 学者，毛来夫（德国） */

  width: 600px;
  height: 40px;
  position: absolute;
  left: calc(50% - 600px / 2);
  top: 999px;
  font-family: 'Xiahuwenkai', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height, or 200% */
  text-align: right;

  color: #4b180a;

  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
</style>
