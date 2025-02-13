<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n()

const handleRightClick = () => {
  router.push('/cn/foreword')
  window.scrollTo(0, 0)
}
</script>

<template>
  <div class="home">
    <div class="wrapper">
      <div class="background"></div>
      <div class="content">
        <img src="../../assets/shouye/cn.png" alt="Logo 1" class="logo logo1" />
        <img src="../../assets/shouye/yykz.png" alt="Logo 2" class="logo logo2" />
        <img src="../../assets/shouye/liyue.png" alt="Logo 3" class="logo logo3" />
        <img src="../../assets/shouye/international.png" alt="Logo 4" class="logo logo4" />
        <img src="../../assets/shouye/wenlv.png" alt="Logo 5" class="logo logo5" />
        <div class="btnbox">
          <img
            @click="handleRightClick"
            src="../../assets/ButtonRight.png"
            :alt="t('buttons.next')"
            class="btnright"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}

.wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url('../../assets/shouye/kongzi.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
}

.content {
  position: relative;
  width: 100%;
  height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  position: absolute;
  max-width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.logo1 {
  width: 450px;
  top: 6px;
  left: 250px;
}

.logo2 {
  width: 183px;
  top: 183px;
  left: 533px;
}

.logo3 {
  width: 159px;
  top: 826px;
  left: 48px;
}

.logo4 {
  width: 503px;
  top: 1091px;
  left: 50px;
}

.logo5 {
  width: 655px;
  top: 1214px;
  left: 50%;
  transform: translateX(-50%);
}

.btnbox {
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  z-index: 10;
  width: 256px;
  height: 88px;
}

.btnright {
  /* Group 17 */
  width: 88px;
  height: 88px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
  transition: transform 0.2s ease;
  object-fit: contain;
}

.btnright:hover {
  transform: scale(1.1);
}
</style>
