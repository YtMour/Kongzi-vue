<script setup>
import { useRouter } from 'vue-router';  // 导入 useRouter
import '@/assets/font.css';
import { onMounted } from 'vue';  

const router = useRouter();  // 创建路由实例

// 点击事件，跳转到前言页面
const goToNextPage = () => {
  router.push('/cn/chapter1');  // 跳转到前言页面
};
onMounted(() => {
  const texts = [
    { className: 'textbox1', animationClass: 'animation1' },
    { className: 'textbox2', animationClass: 'animation2' },
    { className: 'textbox3', animationClass: 'animation3' },
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
        <img src="@/assets/第一章/小太阳.png" alt="" class="logo1" />
        <img src="@/assets/第一章/永远.png" alt="" class="logo2" />
        <img src="@/assets/第一章/大圆.png" alt="" class="logo3" />
        <div class="textbox1">
          <div class="text">第一章</div>
          <div class="xian1"></div>
        </div>
        <div class="textbox2">
          <div class="text2">孔子生平</div>
          <div class="text3">与</div>
          <div class="text4">孔子思想</div>
        </div>

        <div class="textbox3">
          <div class="text5">天不生仲尼，万古如长夜</div>
          <div class="text6">——朱熹《朱子语类》</div>
        </div>


        <img src="@/assets/第一章/礼乐.png" alt="" class="logo4" />
        <img src="@/assets/第一章/对拜.png" alt="" class="logo5" />
        <img src="@/assets/第一章/竹子.png" alt="" class="logo6" />

      </div>
    </div>
  </div>
</template>

<style scoped>
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

.animation3 {
  animation: fadeInOut 12s ease-in-out 1; /* 淡入时间为4秒 */
  animation-fill-mode: forwards;
}

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
  max-width: 100%; /* 最大宽度设置为100% */
  width: 100%; /* 使用相对宽度 */
  max-height: 100%; /* 限制内容最大高度 */

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
/* Group 43 */

position: absolute;
width: 241px;
height: 217px;
left: 29px;
top: 176px;



}
.logo2 {
/* 资源 7@3x */

position: absolute;
width: 166px;
height: 191px;
left: 544px;
top: 196px;
}
.logo3 {
/* Ellipse 12 */

position: absolute;
width: 619px;
height: 619px;
left: calc(50% - 619px/2 + 0.5px);
top: 389px;


}
.logo4 {
/* 隔离模式 */

position: absolute;
width: 338px;
height: 304px;
left: 40px;
bottom: 40px;


}
.logo5 {
/* Frame */

position: absolute;
width: 347px;
height: 368px;
right: 0px;
bottom: -34px;
}
.logo6 {
/* Frame */

position: absolute;
width: 167px;
height: 147px;
left: 579px;
top: 1031px;


}
@font-face {
    font-family: 'MyFont'; /* 自定义字体名称 */
    src: url('@/assets/字体/SourceHanSansCN/SourceHanSansCN-Regular.otf') format('opentype'),
     url('@/assets/字体/方正楷体-简体.ttf') format('truetypekai'),
     url('@/assets/字体/霞鹜文楷.ttf') format('truetype');

    font-weight: normal; /* 字体权重 */
    font-style: normal; /* 字体样式 */
  }
.text{
position: absolute;
width: 180px;
height: 100px;
left: calc(50% - 158px/2 + 1px);
top: 477px;

font-family: 'MyFont', opentype;
font-style: normal;
font-weight: 300;
font-size: 50px;
line-height: 100px;
text-align: center;
letter-spacing: 4px;

color: #00538F;





}
.xian1{/* Vector 1 */

position: absolute;
width: 200px;
height: 0px;
left: calc(50% - 200px/2 + 8px);
top: 569.5px;
border: 0.5px solid #00538F;
}

.text2{/* 孔子生平 与 孔子思想 */

position: absolute;
width: 350px;
height: 300px;
left: calc(50% - 332px/2 + 1px);
top: 604px;

font-family: 'MyFont', opentype;
font-style: normal;
font-weight: 300;
font-size: 80px;
line-height: 100px;
/* or 125% */
text-align: center;
letter-spacing: 4px;

color: #00538F;

}
.text3{/* 孔子生平 与 孔子思想 */

position: absolute;
width: 332px;
height: 300px;
left: calc(50% - 332px/2 + 1px);
top: 714px;

font-family: 'MyFont', opentype;
font-style: normal;
font-weight: 300;
font-size: 80px;
line-height: 100px;
/* or 125% */
text-align: center;
letter-spacing: 4px;

color: #00538F;

}
.text4{/* 孔子生平 与 孔子思想 */

position: absolute;
width: 350px;
height: 300px;
left: calc(50% - 332px/2 + 1px);
top: 824px;

font-family: 'MyFont', opentype;
font-style: normal;
font-weight: 300;
font-size: 80px;
line-height: 100px;
/* or 125% */
text-align: center;
letter-spacing: 4px;

color: #00538F;

}
.text5{
width: 330px;
height: 40px;

font-family: 'MyFont', truetype;
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 40px;
/* identical to box height, or 143% */

color: #4B180A;


position: absolute;

left: calc(50% - 330px/2);
top: 1084px;


}
.text6{/* ——朱熹《朱子语类》 */

width: 200px;
height: 40px;

font-family: 'MyFont', truetype;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 40px;
/* identical to box height, or 200% */
text-align: right;

color: #4B180A;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 516 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-end;
padding: 0px;
gap: 30px;

position: absolute;
width: 330px;
height: 110px;
left: calc(50% - 330px/2);
top: 1154px;



}
</style>
