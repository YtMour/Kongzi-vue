<script setup>
import { useRouter } from 'vue-router' // 导入 useRouter
import '@/assets/font.css'
import { onMounted } from 'vue' // 导入 onMounted
// import ButtonBox from '@/views/cn/btn.vue';
//导入btn 组件

// import btn from "./btn.vue"
const router = useRouter() // 创建路由实例
let nextLeft = '/jp/home'
let nextR = '/jp/detail'

// 点击事件，跳转到qianyan页面
// const goToNextPage = () => {
//   router.push('/cn/detail');  // 跳转到qianyan页面
//   window.scrollTo(0, 0);
// };
onMounted(() => {
  const texts = [
    { className: 'text', animationClass: 'animation1' },
    { className: 'text2', animationClass: 'animation2' }
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
        <img src="@/assets/qianyan/cn2.png" alt="" class="logo1" />
        <img src="@/assets/qianyan/jp.png" alt="" class="logo2" />
        <p class="text">
          &nbsp;&nbsp;&nbsp;&nbsp;数千年を経た知恵の絵巻の中で、孔子は「仁」を中心とし、「礼儀・音楽」を規範として、「和して同ぜず」を唱え、「教えありて類なし」を掲げました。その思想は深く広範囲にわたり、華夏文明の背骨を形作っただけでなく、海や山を越え、全人類が共有する精神的財産となりました。
        </p>
        <p class="text2">
          &nbsp;&nbsp;&nbsp;&nbsp;今回の展覧会は画像を用いて物語を紐解き、3つの章により古今を乗り越え皆様を導いて、共に孔子の思想の永遠の魅力を感じ取り、心のコミュニケーションの架け橋を作り、知恵の光を互いに学び、未来への道を模索しましょう。
        </p>
        <img src="@/assets/qianyan/tianxia.png" alt="" class="logo3" />
        <!-- <btn></btn> -->
        <ButtonBox
          :onLeftClick="() => router.push(nextLeft)"
          :onRightClick="() => router.push(nextR)"
        ></ButtonBox>
      </div>
    </div>
  </div>
</template>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden; /* 防止水平滚动条 */
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
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/qianyan/shu.png'); /* 背景图片路径 */
  background-size: cover; /* 背景图片铺满视口，保持纵横比 */
  background-repeat: no-repeat; /* 防止重复背景图 */
  background-position: center; /* 背景图居中显示 */
  z-index: -1; /* 使背景图位于内容下方 */
}

.content {
  max-width: 750px; /* 最大宽度设置为100% */
  width: 100vw; /* 使用相对宽度 */
  max-height: 100vh; /* 限制内容最大高度 */

  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中内容 */
  padding: 20px; /* 内边距，以防止内容溢出 */
  box-sizing: border-box; /* 确保内边距不影响总宽度 */
}

.text {
  position: absolute;
  width: 480px;
  height: 696px;
  left: calc(50% - 480px / 2 - 17px);
  top: 254px;

  font-family: 'SourceHanSansJP', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 50px;
  /* or 193% */
  text-align: justify;
  letter-spacing: -0.6px;

  color: #000000;
}
.text2 {
  position: absolute;
  width: 480px;
  height: 696px;
  left: calc(50% - 480px / 2 - 17px);
  top: calc(254px + 400px); /* 使 .text2 在 .text 下方，30px 为间距，可以根据需要调整 */

  font-family: 'SourceHanSansJP', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 50px;
  text-align: justify;
  letter-spacing: -0.6px;
  color: #000000;
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
  position: absolute;
  width: 225px;
  height: 151px;
  left: 500px;
  top: 5px;
}
.logo2 {
  /* Group 61 */

  position: absolute;
  width: 196px;
  height: 89px;
  top: 133px;
}
.logo3 {
  /* 资源 8@3x */

  position: absolute;
  width: 101px;
  height: 155px;
  left: calc(50% - 101px / 2 + 0.5px);

  top: 1129px;
}
</style>
