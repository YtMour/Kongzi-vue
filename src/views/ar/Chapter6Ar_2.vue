<script setup>
import { useRouter } from 'vue-router' // 导入 useRouter
import '@/assets/font.css'
import { onMounted } from 'vue' // 导入 onMounted
const router = useRouter()
let nextLeft = '/ar/chapter5_2'
let nextR = '/ar/chapter7_2' // 创建路由实例
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
// 点击事件，跳转到前言页面
</script>

<template>
  <div id="app" data-v-app>
    <div class="wrapper" @click="goToNextPage">
      <!-- 点击整个页面 -->
      <div class="background"></div>
      <!-- 背景图容器 -->
      <div class="content">
        <img src="@/assets/Chapter2/page6/图画1.png" alt="" class="logo1" />
        <img src="@/assets/Chapter2/page6/图画2.png" alt="" class="logo2" />
        <div class="text1">المرح</div>

        <div class="text2">
          الموسيقى: كان كونفوشيوس شغوفاً بالموسيقى، معتقداً أنها قادرة على صقل الطباع وتطهير القلب.
          دعا إلى "الموسيقى الراقية"، مؤكداً أنه ينبغي للموسيقى أن تحمل قيمة تعليمية وأهمية
          اجتماعية.
        </div>
        <img src="@/assets/Chapter2/page6/图画3.png" alt="" class="logo3" />
        <div class="text3">
          周 夔龙纹编钟<br />
          收藏于中国国家博物馆
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
  position: absolute;
  width: 364px;
  height: 183px;
  left: 40px;
  top: 24px;
}
.logo2 {
  /* 6-2 */
  /* 图层 25 1 */

  position: absolute;
  width: 583px;
  height: 541px;
  left: 167px;
  top: 162px;
}

.logo3 {
  /* 图层 12 1 */

  position: absolute;
  width: 620px;
  height: 386.21px;
  left: calc(50% - 620px / 2);
  top: 883.79px;
}

.text1 {
  /* 孔子三十岁时，首创私学，将教育推向大众。孔子对学生采取“因人施教”的教育方针，学生遍布诸侯，据传有弟子三千，贤者七十二。作为珍贵的教育遗产，孔子的思想不仅为中国古代教育奠定了理论基础，还跨越时山海远播海外，影响至今。 */

  /* 乐 */

  position: absolute;
  width: 200px;
  height: 160px;
  left: 8px;
  top: 426px;

  font-family: 'FangzhengKaiti', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 45px;
  line-height: 60px;
  /* identical to box height, or 100% */
  text-align: center;
  letter-spacing: 4px;

  color: #a43c21;
}
.text2 {
  /* 孔子酷爱音乐，认为音乐能够陶冶性情，净化心灵。他提倡“雅乐”，认为音乐应该具有教育意义和社会价值。 */

  position: absolute;
  width: 660px;
  height: 162px;
  left: calc(50% - 660px / 2);
  top: 725px;
  font-family: 'SourceHanSansCN', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  /* or 180% */
  text-align: justify;
  letter-spacing: -0.6px;

  color: #010101;
}
.text3 {
  /* 周 夔龙纹编钟 收藏于中国国家博物馆 */

  position: absolute;
  width: 240px;
  height: 80px;
  left: calc(50% - 240px / 2 + 160px);
  top: 934px;

  font-family: 'FangzhengKaiti', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  /* or 167% */

  color: #ffffff;
}
</style>
