<template>
  <div class="popupCnt" :class="{ isClose: !visible }">
    <div class="cover" @click="$emit('close')"></div>
    <div class="popContainer" :style="{ width: width }">
      <div class="popTitle m-b-25">
        <span class="text">{{ title }}</span>
        <i class="iconfont iconsearchclose pointer" @click="$emit('close')"></i>
      </div>

      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    width: {
      default: "60%"
    },
    title: {
      type: String
    }
  }
};
</script>

<style>
.popupCnt {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  overflow: auto;
  z-index: 2020;
  opacity: 1;
}
.popupCnt.isClose,
.popupCnt.isClose .cover,
.popupCnt.isClose .popContainer {
  transition: opacity 0.45s ease;
  opacity: 0;
  pointer-events: none;
}
.popupCnt .cover {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 100;
  opacity: 1;
}
.popContainer {
  position: relative;
  min-height: 300px;
  margin: 0 auto;
  margin-top: 12vh;
  background-color: #fff;
  border-radius: 20px;
  z-index: 101;
  padding: 20px;
  overflow: auto;
  opacity: 1;
}
.popTitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 36px;
}
.popContainer .popTitle .text {
  font-size: 22px;
  font-weight: 600;
}
.popContainer .iconsearchclose:hover {
  transition: color 0.25s;
  color: rgb(112, 192, 0);
}
</style>
