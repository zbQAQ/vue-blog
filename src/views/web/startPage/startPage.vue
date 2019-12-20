<template>
  <div class="startPage">
    <div class="cover"></div>

    <timer />
    <div
      class="searchBox"
      @mouseenter="inSearchModel = true"
      @mouseleave="inSearchModel = false"
    >
      <searchPanel :inSearchModel="inSearchModel" />
    </div>
  </div>
</template>

<script>
import timer from "./components/timer.vue";
import searchPanel from "./components/searchPanel.vue";
export default {
  name: "startPage",
  components: {
    timer,
    searchPanel
  },
  data() {
    return {
      msg: "hello start page",
      inSearchModel: false
    };
  },
  methods: {}
};
</script>

<style scoped>
.startPage {
  position: relative;
  width: 100vw;
  height: 100vh;

  background-color: #666;
  /* background-image: url("https://api.rthe.cn/bing.jpg"); */
  background-image: url("https://a.maorx.cn/images/BG_A_Default_2.jpg");
  /* background-image: url("https://cdn.jsdelivr.net/gh/MobiusBeta/a.maorx.cn/images/BG_A_Default_3.jpg"); */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;
}
.cover {
  z-index: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  transition: all 0.25s;
}
.searchBox {
  position: absolute;
  top: 200px;
  width: 100%;
  height: 46px;
}
</style>
