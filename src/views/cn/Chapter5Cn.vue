<script setup>
import { useRouter } from 'vue-router';  // 导入 useRouter
import '@/assets/font.css';
import { onMounted } from 'vue';  // 导入 onMounted
const router = useRouter();  // 创建路由实例

// 点击事件，跳转到前言页面
const goToNextPage = () => {
  router.push('/cn/chapter6');  // 跳转到前言页面
};
onMounted(() => {
  const texts = [
    { className: 'text1', animationClass: 'animation1' },
    { className: 'text2', animationClass: 'animation2' },
    { className: 'text3', animationClass: 'animation2' },

  ];

  texts.forEach(({ className, animationClass }) => {
    const element = document.querySelector(`.${className}`);
    if (element) {
      element.classList.add(animationClass);
      element.addEventListener('animationend', () => {
        element.style.animationPlayState = 'paused'; // 暂停动画，保持状态
      });
    }
  });
});
</script>

<template>
  <div id="app" data-v-app>
    <div class="wrapper" @click="goToNextPage">  <!-- 点击整个页面 -->
      <div class="background"></div>  <!-- 背景图容器 -->
      <div class="content">
        <div class="text1">从人生哲学到治国理政，孔子的智慧影响深远，孔子的思想博大精深。他以仁为核心，以礼乐为规范，以中庸为方法，引导人们建设一个美好的大同世界。孔子创立的儒家思想体系是中国历史与文化的结晶，是中国传统文化的主轴。</div>
        <img src="@/assets/第一章/第五页/图画1.png" alt="" class="logo1" />
        <div class="text2">大成殿，曲阜孔庙正殿，取孔子“集大成”之意。始建于
          唐代（618 - 907），清代雍正时（1722 - 1735）重建</div>
       <img src="@/assets/第一章/第五页/图画2.png" alt="" class="logo2" />
        <div class="text3">大成殿龙柱</div>


      </div>
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
  animation: fadeInOut 4s ease-in-out 1;
  animation-fill-mode: forwards; /* 保持动画结束后的状态 */
}

.animation2 {
  animation: fadeInOut 8s ease-in-out 1; /* 淡入时间为3秒 */
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
  background-image: url('@/assets/第一章/文章背景.png'); /* 背景图片路径 */
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
.logo1, .logo2, .logo3, .logo4, .logo5 {
  position: absolute;
 max-width: 100vw;
 margin-left: auto;
 margin-right: auto;

}

/* 定义每个logo的绝对位置 */
.logo1 {
/* 5-1 */

position: absolute;
width: 100%;
height: 518.58px;
top: 506px;
}
.logo2 {
/* 5-2 */

position: absolute;
width: 348px;
height: 477px;
left: 326px;
top: 1125px;
}


@font-face {
    font-family: 'MyFont'; /* 自定义字体名称 */
    src: url('@/assets/字体/SourceHanSansCN/SourceHanSansCN-Regular.otf') format('opentype'),
     url('@/assets/字体/方正楷体-简体.ttf') format('truetypekai'),
     url('@/assets/字体/霞鹜文楷.ttf') format('truetype');

    font-weight: normal; /* 字体权重 */
    font-style: normal; /* 字体样式 */
  }
.text1{
/* 从人生哲学到治国理政，孔子的智慧影响深远，孔子的思想博大精深。他以仁为核心，以礼乐为规范，以中庸为方法，引导人们建设一个美好的大同世界。孔子创立的儒家思想体系是中国历史与文化的结晶，是中国传统文化的主轴。 */

position: absolute;
width: 640px;
height: 270px;
left: calc(50% - 640px/2);
top: 196px;

font-family: 'MyFont', opentype;
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 54px;
/* or 180% */
text-align: justify;
letter-spacing: -0.6px;

color: #010101;


}
.text2{
/* 大成殿，曲阜孔庙正殿，取孔子“集大成”之意。始建于 唐代（618 - 907），清代雍正时（1722 - 1735）重建 */

position: absolute;
width: 588px;
height: 80px;
left: calc(50% - 588px/2);
top: 1035px;

font-family:'MyFont', truetype;
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 40px;
/* or 167% */

color: #4B180A;


}
.text3{
/* 大成殿龙柱 */

position: absolute;
width: 120px;
height: 40px;
left: calc(50% - 120px/2 - 155px);
top: 1562px;

font-family:'MyFont', truetype;
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 40px;
/* identical to box height, or 167% */

color: #4B180A;


}

</style>
