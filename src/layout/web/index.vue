<template>
  <div class="web-Layout">
    <myHeader />
    <myBanner :height="450" />

    <router-view></router-view>
    <myFooter />
  </div>
</template>

<script>
import myHeader from "./components/myHeader.vue";
import myFooter from "./components/myFooter.vue";
import myBanner from "./components/myBanner.vue";
export default {
  components: {
    myHeader,
    myFooter,
    myBanner
  }
};
</script>

<style scoped>
.web-Layout {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
