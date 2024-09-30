<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="app" data-v-app>
    <div class="wrapper">
      <!-- 确保这里是 wrapper -->
      <div class="content">
        <div class="list">
          <div class="div"></div>
          <div class="div"></div>
          <div class="div"></div>
          <div class="div"></div>
          <div class="div"></div>
        </div>
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
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  height: 100vh;
  background-color: #ff0000; /* 红色背景 */
}

.content {
  max-width: 750px; /* 最大宽度 */
  width: 100%; /* 使用相对宽度 */
  margin: 0 auto; /* 居中内容 */
}

.list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%; /* 确保填满父容器 */
  margin: 0 -5px; /* 减少整体边距 */
}

.div {
  background-color: blue;
  width: 100px;
  height: 100px;
  margin: 5px; /* 添加间距以避免挤压 */
  box-sizing: border-box; /* 确保边框和内边距不会影响宽度 */
}
</style>
