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
.btnbox {
  /* Frame 499 */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 80px;

  position: absolute;
  width: 256px;
  height: 88px;
  /* left: calc(50% - 256px/2); */
  top: 1200px;
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
