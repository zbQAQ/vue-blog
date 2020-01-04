<template>
  <div class="banner" :style="{ height: vheight }"></div>
</template>

<script>
export default {
  props: ["height"],
  computed: {
    vheight() {
      let height = this.height;
      if (typeof height === "string") {
        return height;
      }
      return height + "px";
    }
  }
};
</script>

<style>
.banner {
  background-image: url("/img/banner1.jpg");
  background-size: cover;
}
</style>
