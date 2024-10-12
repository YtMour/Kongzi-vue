<script setup>
import { useRouter } from 'vue-router' // 导入 useRouter
import '@/assets/font.css'
import { onMounted } from 'vue'

const router = useRouter() // 创建路由实例
let nextLeft = '/es/chapter7'
let nextR = '/es/chapter1_2' // 创建路由实例  // 创建路由实例
// 点击事件，跳转到前言页面
// const goToNextPage = () => {
//   router.push('/cn/chapter1_2') // 跳转到前言页面
//   window.scrollTo(0, 0)
// }
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
    <div class="wrapper" @click="goToNextPage">
      <!-- 点击整个页面 -->
      <div class="background"></div>
      <!-- 背景图容器 -->
      <div class="content">
        <img src="@/assets/Chapter2/编钟.png" alt="" class="logo1" />
        <img src="@/assets/前言/es2.png" alt="" class="logo2" />
        <img src="@/assets/Chapter2/大圆.png" alt="" class="logo3" />
        <img src="@/assets/Chapter2/小圆.png" alt="" class="logo4" />
        <div class="textbox1">
          <div class="text">Capíutlo 2</div>
          <div class="xian1"></div>
        </div>
        <div class="textbox2">
          <div class="text2">La Cultura de</div>
          <div class="text3">Confucio y</div>
          <div class="text4">la Vida Cotidiana</div>
        </div>

        <img src="@/assets/Chapter2/礼乐.png" alt="" class="logo5" />
        <img src="@/assets/Chapter2/圆装饰.png" alt="" class="logo6" />
        <img src="@/assets/Chapter2/舞蹈.png" alt="" class="logo7" />
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
  /* Frame */

  position: absolute;
  width: 284px;
  height: 169px;
  left: 14px;
  top: 97px;
}
.logo2 {
  /* 资源 7@3x */

  position: absolute;
  width: 225px;
  height: 189px;
  left: 484px;
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
  width: 149px;
  height: 149px;
  left: calc(50% - 149px / 2 + 274.5px);
  top: 326px;
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
  width: 132px;
  height: 135px;

  top: 1054px;
}
.logo7 {
  /* Frame */

  position: absolute;
  width: 279px;
  height: 291px;
  left: 471px;
  top: 1029px;
}

.text {
  position: absolute;
  width: 240px;
  height: 100px;
  left: calc(50% - 158px / 2 - 20px);
  top: 333px;

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
  border: none; /* 不使用实际边框 */
  box-shadow: 0 0 0 0.5px #00538f; /* 模拟细线 */
  position: absolute;
  width: 200px;
  height: 0px;
  left: calc(50% - 200px / 2 + 8px);
  top: 395.5px;
}

.text2 {
  position: absolute;
  width: 400px;
  height: 300px;
  left: calc(50% - 400px / 2 + 1px);
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
  /* 孔子生平 与 孔子思想 */

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
  /* 人类要在21世纪生存下去，就必须回到25个世纪以前，去涉取孔子的智慧。 */

  position: absolute;
  width: 650px;
  height: 80px;
  left: calc(50% - 650px / 2);
  top: 872px;

  font-family: 'Xiahuwenkai', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  /* or 143% */

  color: #4b180a;
}
.text6 {
  /* --诺贝尔物理学奖获得者，汉内斯·阿尔文（瑞典） */

  position: absolute;
  width: 500px;
  height: 40px;
  left: 184px;
  top: 978px;

  font-family: 'Xiahuwenkai', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 40px;
  /* identical to box height, or 200% */
  text-align: right;

  color: #4b180a;
}
</style>
