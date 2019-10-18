<template>
  <div class="sideBar">
    <el-menu router :default-active="$route.path">
      <el-submenu index="1">
        <div slot="title">
          <span>收藏夹管理</span>
        </div>
        <el-menu-item index="/admin/favoritesList">列表</el-menu-item>
        <el-menu-item index="/admin/favoritesEdit">编辑</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "sideBar",
  data() {
    return {};
  }
};
</script>

<style>
.sideBar {
  height: 100%;
  background: #fff;
}
</style>
