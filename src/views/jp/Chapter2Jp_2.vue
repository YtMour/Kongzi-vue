<script setup>
import { useRouter } from 'vue-router' // 导入 useRouter
import '@/assets/font.css'
import { onMounted } from 'vue'

const router = useRouter() // 创建路由实例
let nextLeft = '/jp/chapter1_2'
let nextR = '/jp/chapter3_2'
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
        <div class="text1">
          孔子は身だしなみにこだわりました。「君子は衣服を正し、容姿を尊ぶ」と考え、これは他人を尊重するとともに、自己修養の体現でもあります。礼儀を重んじて、場面によって異なる礼冠を着用し、儒家の礼儀の美を体現しました。
        </div>
        <img src="@/assets/Chapter2/page2/图画1.png" alt="" class="logo1" />
        <div class="text2">孔子の子孫が蒐集した中国明代の伝統衣装</div>
        <div class="text3">《鲁の司寇となった孔子の像》明·作者不詳</div>
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
  /* 组 7886 1 */

  position: absolute;
  width: 620px;
  height: 1022.14px;
  left: 65px;

  top: 283px;
}
.text1 {
  /* 孔子讲究衣冠整齐。认为“君子正其衣冠，尊其瞻视”，这不仅是对他人的尊重，也是自我修养的体现。他依礼而冠，不同场合佩戴不同的礼冠，展现了儒家的礼仪之美。 */

  position: absolute;
  width: 600px;
  height: 216px;
  left: calc(50% - 600px / 2);
  top: 32px;
  font-family: 'SourceHanSansJP', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 44px;
  /* or 180% */
  text-align: justify;
  letter-spacing: -0.6px;

  color: #010101;
}
.text2 {
  /* 孔子后代收藏的中国明代 传统服饰 */

  position: absolute;
  width: 272px;
  height: 80px;
  left: calc(50% - 272px / 2 + 220px);
  top: 703px;

  font-family: 'Xiahuwenkai', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  /* or 167% */

  color: #4b180a;
}
.text3 {
  /* 《孔子為魯司寇像》 明·佚名 绘 */

  position: absolute;
  width: 220px;
  height: 80px;
  left: calc(50% - 272px / 2 + 220px);
  top: 1230px;
  font-family: 'Xiahuwenkai', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 30px;
  /* or 167% */

  color: #4b180a;
}
</style>
