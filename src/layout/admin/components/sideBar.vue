<template>
  <div class="sideBar">
    <el-menu
      router
      :default-active="$route.path"
      :default-openeds="['1', '2', '3']"
    >
      <el-submenu index="1">
        <div slot="title">
          <span>分类管理</span>
        </div>
        <el-menu-item index="/admin/categoriesList">列表</el-menu-item>
        <el-menu-item index="/admin/categoriesCreate">创建</el-menu-item>
      </el-submenu>

      <el-submenu index="2">
        <div slot="title">
          <span>文章管理</span>
        </div>
        <el-menu-item index="/admin/articlesList">列表</el-menu-item>
        <el-menu-item index="/admin/articlesCreate">创建</el-menu-item>
      </el-submenu>

      <el-submenu index="3">
        <div slot="title">
          <span>收藏夹管理</span>
        </div>
        <el-menu-item index="/admin/favoritesList">列表</el-menu-item>
        <el-menu-item index="/admin/favoritesCreate">创建</el-menu-item>
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
