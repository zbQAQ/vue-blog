<template>
  <div class="categoriesList">
    <h2 class="pageTitle">文章分类列表</h2>
    <el-table :data="list" border style="max-width:1200px;" v-loading="loading">
      <el-table-column prop="_id" label="id"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/admin/categoriesEdit/${scope.row._id}`)"
          >
            编辑
          </el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">
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
  name: "categoriesList",
  data() {
    return {
      list: [],
      loading: false
    };
  },
  methods: {
    async fetch() {
      this.loading = true;
      this.list = await posts.fetchCategoriesList();
      this.loading = false;
    },
    remove(row) {
      this.$confirm(`确定删除 ${row.name} 分类吗？`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        this.loading = true;
        const res = await posts.deleteCategories(row._id);
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
