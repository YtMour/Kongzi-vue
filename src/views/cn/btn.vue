<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { defineProps } from 'vue'

defineProps({
  onLeftClick: {
    type: Function,
    required: true
  },
  onRightClick: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <div class="btnbox">
    <img @click="onLeftClick" src="@/assets/Buttonleft.png" class="btnleft" />
    <img @click="onRightClick" src="@/assets/ButtonRight.png" class="btnleft" />
  </div>
</template>

<style>
@supports (-webkit-touch-callout: none) {
  .btnbox {
    /* Safari 专属的调整 */
    bottom: 40px; /* 调整定位 */
  }
}

.btnbox {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 80px;

  position: fixed;
  width: 256px;
  height: 88px;
  bottom: 40px; /* 固定在底部 */
}

.btnleft {
  width: 88px;
  height: 88px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
</style>
