<script setup>
import { useRouter } from 'vue-router';  // 导入 useRouter
import '@/assets/font.css';
import { onMounted } from 'vue';  // 导入 onMounted
const router = useRouter();  // 创建路由实例

// 点击事件，跳转到前言页面
const goToNextPage = () => {
  router.push('/cn/chapter5_3');  // 跳转到前言页面
  window.scrollTo(0, 0);
};
onMounted(() => {
  const texts = [
    { className: 'text1', animationClass: 'animation1' },
    { className: 'text2', animationClass: 'animation2' },
    { className: 'text3', animationClass: 'animation2' },
    { className: 'text4', animationClass: 'animation2' },

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
        <div class="text1">孔子故里的孔乐表演，吸引了众多海外游客。</div>
       
        <div class="content1">
          <div class="content2">
            <img src="@/assets/Chapter3/page4/图画1.png" alt="" class="logo1" />
            <div class="text2">曲阜国际孔子文化节，正在表演的祭孔乐舞</div>
          </div>

          <div class="content3">
            <img src="@/assets/Chapter3/page4/图画2.png" alt="" class="logo2" />
            <div class="text3">济宁 尼山，跨越千年的金声玉振再次被奏响</div>
            
          </div>

          <div class="content4">
            <img src="@/assets/Chapter3/page4/图画3.png" alt="" class="logo3" />
          <div class="text4">泰安 中华泰山，封禅大典的现场</div>
          
          </div>
      </div>
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
.animation4 {
  animation: fadeInOut 9s ease-in-out 1; /* 淡入时间为3秒 */
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

.content1{
  /* Frame 522 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 30px;

position: absolute;
width: 620px;
height: 1313.59px;
left: 65px;
top: 120px;


}
.content2{
  /* Frame 520 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 4px;

width: 620px;
height: 438.12px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

}
.content3{
  /* Group 49 */

width: 620px;
height: 379.13px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

}
.content4{
  /* Group 50 */

width: 620px;
height: 436.35px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;

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
  display: flex;
  flex-direction: column; /* 垂直排列 */
  align-items: center; /* 水平居中内容 */
  padding: 20px; /* 内边距 */
  box-sizing: border-box; /* 确保内边距不影响总宽度 */
  margin: 0 auto; /* 居中内容 */
}

.logo1, .logo2, .logo3, .logo4, .logo5 {
  position: absolute;
 max-width: 100vw;
 margin-left: auto;
 margin-right: auto;

}

/* 定义每个logo的绝对位置 */
.logo1 {/* 3曲阜国际孔子文化节祭孔乐舞 1 */

width: 620px;
height: 394.12px;

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

}
.logo2 {/* 济宁-尼山金声玉振演出 1 */

position: absolute;
width: 620px;
height: 335.13px;
left: 0px;
top: 468.12px;

}
.logo3{/* 泰安-中华泰山封禅大典 1 */

width: 620px;
height: 392.35px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
}
.text1{

/* 孔子故里的孔乐表演，吸引了众多海外游客。 */

position: absolute;
width: 620px;
height: 54px;
left: calc(50% - 620px/2 + 3px);
top: 33px;
font-family: 'SourceHanSansCN', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 54px;
/* identical to box height, or 180% */
text-align: justify;
letter-spacing: -0.6px;

color: #010101;



}
.text2 {
  position: absolute;
  width: 620px; /* 文字的宽度 */
  height: auto; /* 适应内容高度，去掉固定高度 */
  font-family: 'Xiahuwenkai', sans-serif;
  font-style: normal;
  font-weight: 400; /* 字体权重 */
  font-size: 24px; /* 字体大小 */
  line-height: 40px; /* 行高 */
  color: #4B180A; /* 字体颜色 */
  top: 400px;

  
}

.text3{/* 济宁 尼山，跨越千年的金声玉振再次被奏响 */

position: absolute;
width: 465px;
height: 40px;
left: calc(50% - 465px/2 - 72.5px);
top: 807.24px;
font-family: 'Xiahuwenkai', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 40px;
/* identical to box height, or 167% */

color: #4B180A;

}
.text4{/* 泰安 中华泰山，封禅大典的现场 */

  position: absolute;
width: 465px;
height: 40px;
left: calc(50% - 465px/2 - 72.5px);
top: 1280.24px;
font-family: 'Xiahuwenkai', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 40px;
/* identical to box height, or 167% */

color: #4B180A;
}

</style>
