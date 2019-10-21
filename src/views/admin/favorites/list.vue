<template>
  <div class="favoritesList">
    <h2 class="pageTitle">收藏夹列表</h2>
    <el-table :data="list" border style="width: 100%" v-loading="loading">
      <el-table-column prop="_id" label="id" width="220"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="cate" label="类别"></el-table-column>
      <el-table-column prop="createTime" label="时间"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/admin/favoritesEdit/${scope.row._id}`)"
          >
            编辑
          </el-button>
          <el-button type="text" size="small" @click="remove(scope.row._id)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import posts from "@/api";
export default {
  name: "favoritesList",
  data() {
    return {
      list: [],
      loading: false
    };
  },
  methods: {
    async fetch() {
      this.loading = true;
      this.list = await posts.fetchFavoritesList();
      this.loading = false;
    },
    remove(id) {
      this.$confirm("确定删除该条收藏？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        this.loading = true;
        const res = await posts.deleteFavorites(id);
        if (res.code) {
          this.$message({
            message: res.message,
            type: "success"
          });
          this.fetch();
        }
        this.loading = false;
      });
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style></style>
