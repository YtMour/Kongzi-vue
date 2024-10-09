<script setup>
import { useRouter } from 'vue-router';  // 导入 useRouter
import '@/assets/font.css';
import { onMounted } from 'vue';  // 导入 onMounted
const router = useRouter();  // 创建路由实例
let nextLeft = '/ar/chapter4_2';
let nextR = '/ar/chapter6_2';
// 点击事件，跳转到前言页面

onMounted(() => {
  const texts = [
    { className: 'text1', animationClass: 'animation1' },
    { className: 'text2', animationClass: 'animation2' },
    { className: 'text3', animationClass: 'animation2' },
    { className: 'text4', animationClass: 'animation3' },


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
        
        <img src="@/assets/Chapter2/page5/图画1.png" alt="" class="logo1" />
        <div class="text1">السفر</div>
        <div class="text2">صورة "كونفوشيوس يركب عربة" من كتاب "سجلات واسعة للمعبد الأصلي" من عهد أسرة سونغ الملكية
        </div>

        <div class="text3">التنقل: طاف كونفوشيوس في شتى الأقاليم طوال حياته لنشر أفكاره. لم تكن رحلاته لطلب العلم والمعرفة فحسب، بل أيضاً لتحقيق رؤيته السياسية. خلال سفره، التزم دائماً بأخلاق النبلاء، متحليًا باحترام الآخرين والتواضع والأدب الجم.
        </div>
          <img src="@/assets/Chapter2/page5/图画2.png" alt="" class="logo2" />
       <img src="@/assets/Chapter2/page5/图画3.png" alt="" class="logo3" />
        <div class="text4">جبل تايشان في شاندونغ، مليء بالآثار المقدسة

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
/* 组 7887 1 */

position: absolute;
width: 532px;
height: 349px;
left: calc(50% - 532px/2);
top: 7px;

mix-blend-mode: darken;

}
.logo2 {/* 组 7881 1 */
/* 组 7881 1 */

position: absolute;
width: 580px;
height: 295.51px;
left: 85px;
top: 647px;
}
.logo3{
/* 组 7882 1 */

position: absolute;
width: 580px;
height: 304.68px;
left: 85px;
top: 956px;



}
.text1{
/* 行 */

position: absolute;
width: 200px;
height: 160px;
left: 83px;
top: 27px;
font-family: 'FangzhengKaiti', sans-serif;
font-style: normal;
font-weight: 300;
font-size: 50px;
line-height: 60px;
/* identical to box height, or 100% */
text-align: center;
letter-spacing: 4px;

color: #DFA887;




}
.text2{
/* 宋《祖庭广记》孔子乘辂图 */

position: absolute;
width: 450px;
height: 40px;
left: calc(50% - 550px/2 + 155.5px);
top: 356px;
font-family: 'Xiahuwenkai', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 21px;
line-height: 28px;
/* identical to box height, or 167% */

color: #4B180A;




}
.text3{
/* 孔子一生周游列国，传播自己的思想。他的出行不仅是为了求学问道，更是为了实践自己的政治理想。在行路中，他始终保持着君子的风度，尊重他人，谦逊有礼。 */

position: absolute;
width: 660px;
height: 216px;
left: calc(50% - 660px/2);
top: 449px;
font-family: 'SourceHanSansCN', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 23px;
line-height: 34px;
/* or 180% */
text-align: justify;
letter-spacing: -0.6px;

color: #010101;




}
.text4{/* 圣迹遍布的山东泰山 */

position: absolute;
width: 450px;
height: 40px;
left: calc(50% - 550px/2 + 182px);
top: 1265px;

font-family: 'LXGW WenKai';
font-style: normal;
font-weight: 400;
font-size: 21px;
line-height: 30px;
/* identical to box height, or 167% */

color: #4B180A;

}

</style>
