<template>
  <section class="app-main">
    <!-- <transition name="fade-transform" mode="out-in"> -->
    <router-view :key="$route.path" />
    <!-- </transition> -->
  </section>
</template>
<script>
export default {
  name: "AppMain",
  computed: {
    key() {
      return this.$route.path;
    }
  }
};
</script>
<style scoped>
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}
.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
