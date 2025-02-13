<script setup>
import { useRouter } from 'vue-router' // 导入 useRouter
import '@/assets/font.css'
import { onMounted } from 'vue' // 导入 onMounted
const router = useRouter() // 创建路由实例
let nextLeft = '/kr/chapter4_3'
let nextR = '/kr/chapter6_3'
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
        <div class="text1">
          국제유교포럼, 공자문화축제 등 일련의 이벤트를 통해 유교문화에 대한 각국의 이해와 긍정을
          도모하고 보호와 계승, 발전 과정에서 다양한 문화 간의 평등한 대화와 교류, 배움을 촉진해
          왔다.
        </div>
        <img src="@/assets/Chapter3/page5/imga1.png" alt="" class="logo1" />
        <div class="text2">공자묘 앞에서 성인식에 참석하는 젊은이들</div>
        <img src="@/assets/Chapter3/page5/imga2.png" alt="" class="logo2" />
        <img src="@/assets/Chapter3/page5/imga3.png" alt="" class="logo3" />

        <div class="text3">동성 저우춘에 머물며 새해 민속을 체험하는 해외 사진작가들</div>
        <div class="text4">취푸 공자묘의 높은 궁장</div>
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
  /* 232323 1 */

  position: absolute;
  width: 580px;
  height: 347px;
  left: calc(50% - 580px / 2);
  top: 250px;
}
.logo2 {
  /* 图层 16 1 */

  position: absolute;
  width: 580px;
  height: 320px;
  left: calc(50% - 580px / 2);
  top: 665px;
}
.logo3 {
  /* 图层 11 350 */

  position: absolute;
  width: 580px;
  height: 385.21px;
  left: calc(50% - 580px / 2);
  top: 952px;
}
.text1 {
  /* 通过举办国际儒学论坛、孔子文化节等一系列活动，增进了各国人民对孔子文化的了解和认同，在保护、传承与发展中，推动了不同文化之间的平等对话和交流互鉴。 */

  position: absolute;
  width: 580px;
  height: 216px;
  left: calc(50% - 580px / 2);
  top: 13px;
  font-family: 'SourceHanSansCN', sans-serif;

  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 44px;
  /* or 180% */
  text-align: justify;
  letter-spacing: -0.6px;

  color: #010101;
}
.text2 {
  /* 在孔庙前参加成人礼仪式的年轻人们 */

  position: absolute;
  width: 420px;
  height: 40px;
  left: 85px;
  top: 598px;
  font-family: 'Xiahuwenkai', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 40px;
  /* identical to box height, or 167% */

  color: #4b180a;
}
.text3 {
  /* 留在山东周村感受年俗的海外摄影家 */

  position: absolute;
  width: 384px;
  height: 40px;
  left: 85px;
  top: 986px;

  font-family: 'Xiahuwenkai', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 30px;
  /* identical to box height, or 167% */

  color: #4b180a;
}
.text4 {
  /* 曲阜孔庙 万仞宫墙 */

  position: absolute;
  width: 120px;
  height: 80px;
  left: 524px;
  top: 1111px;
  font-family: 'Xiahuwenkai', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 30px;
  /* or 167% */
  text-align: right;

  color: #4b180a;
}
</style>
