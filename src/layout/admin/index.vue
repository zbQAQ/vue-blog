<template>
  <div class="admin-layout">
    <sideBar class="sidebar-container"></sideBar>
    <div class="main-container">
      <!-- <el-header>Header</el-header> -->
      <Header />
      <AppMain />
    </div>
  </div>
</template>

<script>
import AppMain from "./components/AppMain.vue";
import sideBar from "./components/sideBar.vue";
import Header from "./components/header.vue";
export default {
  name: "adminLayout",
  components: { AppMain, sideBar, Header }
};
</script>

<style>
.admin-layout {
  position: relative;
  height: 100%;
  width: 100%;
}
.sidebar-container {
  position: fixed;
  height: 100%;
  width: 200px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
}
.main-container {
  min-height: 100%;
  margin-left: 200px;
  position: relative;
}

.pageTitle {
  margin-bottom: 12px;
  line-height: 26px;
}
</style>
