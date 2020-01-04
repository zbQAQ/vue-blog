<template>
  <div
    class="banner"
    :style="{ height: vheight, position: isFixed ? 'fixed' : 'relative' }"
  >
    <slot name="scrollDown"></slot>
  </div>
</template>

<script>
export default {
  props: {
    isFixed: {
      type: Boolean,
      default: false
    },
    height: {
      default: 450
    }
  },
  computed: {
    vheight() {
      let value = this.height;
      if (typeof value === "string") {
        return value;
      }
      return value + "px";
    }
  }
};
</script>

<style scoped>
.banner {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("/img/banner1.jpg");
  background-size: cover;
  /* background-position: center; */
}
</style>
