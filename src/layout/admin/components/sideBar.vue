<template>
  <div class="sideBar">
    <el-menu router :default-active="$route.path" unique-opened>
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

      <el-submenu index="4">
        <div slot="title">
          <span>用户管理</span>
        </div>
        <el-menu-item index="/admin/userList">列表</el-menu-item>
        <el-menu-item index="/admin/userCreate">创建</el-menu-item>
      </el-submenu>

      <el-submenu index="5">
        <div slot="title">
          <span>自定义导航</span>
        </div>
        <el-menu-item index="/admin/customNavList">列表</el-menu-item>
        <el-menu-item index="/admin/customNavCreate">创建</el-menu-item>
      </el-submenu>

      <el-submenu index="6">
        <div slot="title">
          <span>banner管理</span>
        </div>
        <el-menu-item index="/admin/bannerList">列表</el-menu-item>
        <el-menu-item index="/admin/bannerCreate">创建</el-menu-item>
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
