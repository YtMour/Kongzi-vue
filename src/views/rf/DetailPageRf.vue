<script setup>
import { useRouter } from 'vue-router' // 导入 useRouter
import '@/assets/font.css'
import { onMounted } from 'vue'

const router = useRouter() // 创建路由实例
let nextLeft = '/rf/foreword'
let nextR = '/rf/chapter1'

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
        <img src="@/assets/Chapter1/sun.png" alt="" class="logo1" />
        <img src="@/assets/qianyan/cn2.png" alt="" class="logo2" />
        <img src="@/assets/Chapter1/circle.png" alt="" class="logo3" />
        <div class="textbox1">
          <div class="text">Глава 1</div>
          <div class="xian1"></div>
        </div>
        <div class="textbox2">
          <div class="text2">Жизнь</div>
          <div class="text3">и идеи</div>
          <div class="text4">Конфуция</div>
        </div>

        <img src="@/assets/Chapter1/tianxia.png" alt="" class="logo4" />
        <img src="@/assets/Chapter1/salute.png" alt="" class="logo5" />
        <img src="@/assets/Chapter1/zhuzhi.png" alt="" class="logo6" />
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
  animation-fill-mode: forwards;
}

.animation2 {
  animation: fadeInOut 5s ease-in-out 1;
  animation-fill-mode: forwards;
}

.animation3 {
  animation: fadeInOut 7s ease-in-out 1;
  animation-fill-mode: forwards;
}
html,
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.wrapper {
  width: 100vw;
  height: 100vh;
  height: auto;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/Chapter1/ArticleBG.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
}

.content {
  width: 750px;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.logo1,
.logo2,
.logo3,
.logo4,
.logo5 {
  position: absolute;
  max-width: 90%;
}

.logo1 {
  /* Group 43 */

  position: absolute;
  width: 241px;
  height: 217px;
  left: 29px;
  top: 2px;
}
.logo2 {
  /* 资源 7@3x */
  /* Group 66 */

  /* Group 66 */

  position: absolute;
  width: 225px;
  height: 151px;
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
  position: absolute;
  width: 338px;
  height: 304px;
  left: 40px;
  top: 986px;
}
.logo5 {
  /* Frame */

  position: absolute;
  width: 347px;
  height: 368px;
  right: -17px;
  top: 1014px;
}
.logo6 {
  /* Frame */

  position: absolute;
  width: 167px;
  height: 147px;
  left: 579px;
  top: 857px;
}

.text {
  position: absolute;
  width: 200px;
  height: 100px;
  left: calc(50% - 158px / 2 - 6px);
  top: 313px;

  font-family: 'FangzhengKaiti', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 30px;
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
  font-family: 'FangzhengKaiti', sans-serif;
  top: 395.5px;
  border: none;
  box-shadow: 0 0 0 0.5px #00538f;
}

.text2 {
  /* 孔子生平 与 孔子思想 */

  position: absolute;
  width: 350px;
  height: 300px;
  left: calc(50% - 332px / 2 + 1px);
  top: 430px;

  font-family: 'FangzhengKaiti', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 30px;
  /* or 125% */
  text-align: center;
  letter-spacing: 4px;

  color: #00538f;
}
.text3 {
  /* 孔子生平 与 孔子思想 */

  position: absolute;
  width: 332px;
  height: 300px;
  left: calc(50% - 332px / 2 + 1px);
  top: 540px;

  font-family: 'FangzhengKaiti', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 4px;

  color: #00538f;
}
.text4 {
  /* 孔子生平 与 孔子思想 */

  position: absolute;
  width: 380px;
  height: 300px;
  left: calc(50% - 332px / 2 + 1px);
  top: 650px;
  font-family: 'FangzhengKaiti', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 30px;

  text-align: center;
  letter-spacing: 4px;

  color: #00538f;
}
.text5 {
  width: 660px;
  height: 40px;

  font-family: 'Xiahuwenkai', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;

  color: #4b180a;

  position: absolute;

  left: calc(50% - 600px / 2);
  top: 910px;
}
.text6 {
  width: 660px;
  height: 50px;

  font-family: 'Xiahuwenkai', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 50px;
  text-align: right;

  color: #4b180a;

  flex: none;
  order: 1;
  flex-grow: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
  gap: 30px;

  position: absolute;
  width: 330px;
  height: 110px;
  left: calc(50% - 200px / 2);
  top: 990px;
}
</style>
