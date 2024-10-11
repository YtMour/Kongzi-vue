<script setup>
import { useRouter } from 'vue-router' // 导入 useRouter

const router = useRouter() // 创建路由实例

// 点击事件，跳转到前言页面
// const goToNextPage = () => {
//   router.push('/cn/foreword');  // 跳转到前言页面
//   window.scrollTo(0, 0);
// };
const handleRightClick = () => {
  router.push('/jp/foreword') // 跳转到前言页面
  window.scrollTo(0, 0)
}
</script>

<template>
  <div id="app" data-v-app>
    <div class="wrapper" @click="goToNextPage">
      <!-- 点击整个页面 -->
      <div class="background"></div>
      <!-- 背景图容器 -->
      <div class="content">
        <img src="@/assets/首页/jp.png" alt="" class="logo1" />
        <img src="@/assets/首页/永远的孔子.png" alt="" class="logo2" />
        <img src="@/assets/首页/天下礼乐.png" alt="" class="logo3" />
        <img src="@/assets/首页/jp2.png" alt="" class="logo4" />
        <img src="@/assets/首页/文旅.png" alt="" class="logo5" />
        <div class="btnbox">
          <!-- <img src="@/assets/Buttonleft.png" class="btnleft"> -->
          <img @click="handleRightClick" src="@/assets/ButtonRight.png" class="btnleft" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  width: 100vh;
  height: 100vw;
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
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/首页/kongzi.png'); /* 背景图片路径 */
  background-size: cover; /* 背景图片铺满视口，保持纵横比 */
  background-repeat: no-repeat; /* 防止重复背景图 */
  background-position: center; /* 背景图居中显示 */
  z-index: -1; /* 使背景图位于内容下方 */
}

.content {
  max-width: 100vw; /* 最大宽度设置为100% */
  width: 100vw; /* 使用相对宽度 */
  max-height: 100vh; /* 限制内容最大高度 */

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
  /* Group 54 */

  position: absolute;
  width: 334px;
  height: 102px;
  left: 366px;
  top: 27px;
}
.logo2 {
  width: 183px;
  height: 496px;
  left: 533px;
  top: 183px;
}
.logo3 {
  width: 159px;
  height: 236px;
  left: 48px;
  top: 826px;
}
.logo4 {
  /* 孔子文化国際交流プログラム@3x 2 */

  position: absolute;
  width: 335px;
  height: 25px;
  left: 48px;

  top: 1091px;
}
.logo5 {
  width: 655px;
  height: 68px;
  left: calc(50% - 655px / 2 + 0.5px);
  top: 1214px;
}
.btnbox {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  padding: 0px;
  gap: 80px;

  position: absolute;
  width: 100%; /* 让容器充满父容器的宽度 */
  bottom: 40px; /* 固定在底部 */
}

.btnleft {
  /* Group 17 */

  width: 88px;
  height: 88px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
</style>
