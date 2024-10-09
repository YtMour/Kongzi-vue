<script setup>
import { useRouter } from 'vue-router';  // 导入 useRouter
import '@/assets/font.css';
import{ onMounted } from 'vue';  // 导入 onMounted
const router = useRouter(); 
let nextLeft = '/jp/chapter5';
let nextR = '/jp/chapter7'; // 创建路由实例
onMounted(() => {
  const texts = [
    { className: 'text1', animationClass: 'animation1' },
    { className: 'text2', animationClass: 'animation2' },
    { className: 'text3', animationClass: 'animation3' },

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
// 点击事件，跳转到前言页面

</script>

<template>
  <div id="app" data-v-app>
    <div class="wrapper" @click="goToNextPage">  <!-- 点击整个页面 -->
      <div class="background"></div>  <!-- 背景图容器 -->
      <div class="content">
        <div class="text1">孔子は30歳の時に初めて私学の学問所を設立し、大衆の教育を促しました。孔子は学生に対して「人に応じて教える」という教育方針をとり、学生は諸侯に広がり、3千名の弟子、72名の賢者がいたと伝えられています。貴重な教育遺産である孔子の思想は、古代中国の教育理論の基礎を打ち立てただけでなく、さらに山や海を越えて海外へ伝わり、今でも影響を与えています。
        </div>
        <img src="@/assets/Chapter1/page6/图画1.png" alt="" class="logo1" />
        <div class="text2">杏壇：孔子の学問所
        </div>
       <img src="@/assets/Chapter1/page6/图画2.png" alt="" class="logo2" />
        <div class="text3">宋《東家雑記》孔子杏壇講学図
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
.logo1, .logo2, .logo3, .logo4, .logo5 {
  position: absolute;
 max-width: 100vw;
 margin-left: auto;
 margin-right: auto;

}

/* 定义每个logo的绝对位置 */
.logo1 {
/* hellorf_hi2242279625 1 */

position: absolute;
width: 616px;
height: 431px;
left: 67px;
top: 351px;
mix-blend-mode: darken;




}
.logo2 {
/* 6-2 */

position: absolute;
width: 342px;
height: 511px;
right: 87px;
top: 775px;

}


.text1{
/* 孔子三十岁时，首创私学，将教育推向大众。孔子对学生采取“因人施教”的教育方针，学生遍布诸侯，据传有弟子三千，贤者七十二。作为珍贵的教育遗产，孔子的思想不仅为中国古代教育奠定了理论基础，还跨越时山海远播海外，影响至今。 */

position: absolute;
width: 650px;
height: 270px;
left: calc(50% - 650px/2);
top: 22px;
font-family: 'SourceHanSansCN', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 25px;
line-height: 44px;
/* or 180% */
text-align: justify;
letter-spacing: -0.6px;

color: #010101;


}
.text2{
/* 杏坛：孔子讲学处 */

position: absolute;
width: 588px;
height: 40px;
left: calc(50% - 588px/2 - 31px);
top: 346px;
font-family: 'Xiahuwenkai', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 40px;
/* identical to box height, or 167% */

color: #4B180A;
}
.text3{
position: absolute;
width: 181px;
height: 80px;
left: calc(50% - 181px/2 - 234.5px);
top: 941px;
font-family: 'Xiahuwenkai', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 40px;
/* or 167% */

color: #4B180A;
}

</style>
