<script setup>
import { useRouter } from 'vue-router';  // 导入 useRouter

const router = useRouter();  // 创建路由实例

// 点击事件，跳转到前言页面
const goToNextPage = () => {
  router.push('/cn/foreword');  // 跳转到前言页面
};
</script>

<template>
  <div id="app" data-v-app>
    <div class="wrapper" @click="goToNextPage">  <!-- 点击整个页面 -->
      <div class="background"></div>  <!-- 背景图容器 -->
      <div class="content">
        <img src="@/assets/首页/confucius.png" alt="" class="logo1" />
        <img src="@/assets/首页/永远的孔子.png" alt="" class="logo2" />
        <img src="@/assets/首页/天下礼乐.png" alt="" class="logo3" />
        <img src="@/assets/首页/international.png" alt="" class="logo4" />
        <img src="@/assets/首页/文旅.png" alt="" class="logo5" />
      </div>
    </div>
  </div>
</template>

<style>
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
  width: 100%;
  height: 100vh; /* 充满视口高度 */
  position: relative; /* 相对定位以适应绝对定位的子元素 */
}

.background {
  position: fixed; /* 背景图固定在视口 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../src/assets/首页/kongzi.png'); /* 背景图片路径 */
  background-size: cover; /* 背景图片铺满视口，保持纵横比 */
  background-repeat: no-repeat; /* 防止重复背景图 */
  background-position: center; /* 背景图居中显示 */
  z-index: -1; /* 使背景图位于内容下方 */
}

.content {
  max-width: 100%; /* 最大宽度设置为100% */
  width: 100%; /* 使用相对宽度 */
  max-height: 100%; /* 限制内容最大高度 */
  overflow-y: auto; /* 如果内容超出高度则出现滚动条 */
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中内容 */
  padding: 20px; /* 内边距，以防止内容溢出 */
  box-sizing: border-box; /* 确保内边距不影响总宽度 */
}

.logo1, .logo2, .logo3, .logo4, .logo5 {
  position: absolute;
  max-width: 90%; /* 设置最大宽度为90% */

}

/* 定义每个logo的绝对位置 */
.logo1 {
  width: 230px;
  height: 143px;
  left: 486px;
  top: 102px;
}
.logo2 {
  width: 183px;
  height: 496px;
  left: 533px;
  top: 271px;
}
.logo3 {
  width: 159px;
  height: 236px;
  left: 48px;
  top: 980px;
}
.logo4 {
  width: 503px;
  height: 75px;
  left: 50px;
  top: 1245px;
}
.logo5 {
  width: 655px;
  height: 68px;
  left: calc(50% - 655px/2 + 0.5px);
  top: 1406px;
}
</style>
