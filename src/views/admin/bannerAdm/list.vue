<template>
  <div class="bannerList">
    <h2 class="pageTitle">banner列表</h2>
    <el-table :data="list" border style="width: 100%" v-loading="loading">
      <el-table-column prop="_id" label="id" width="220"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="image" label="图片">
        <template slot-scope="scope">
          <p v-if="scope.row.image">
            <img class="tableImg" :src="scope.row.image" alt="" />
          </p>
          <p v-else>
            暂无
          </p>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/admin/bannerEdit/${scope.row._id}`)"
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
import { url } from "@/api/url.js";
export default {
  name: "bannerList",
  data() {
    return {
      url,
      list: [],
      loading: false
    };
  },
  methods: {
    async fetch() {
      this.loading = true;
      this.list = await posts.fetchBannerList();
      this.loading = false;
    },
    remove(row) {
      this.$confirm(`确定删除‘${row.name}’这个banner吗？`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        this.loading = true;
        let imageName = row.image.split("/").pop();
        const res = await posts.deleteBanner(row._id);
        await posts.deleteFile(imageName);
        if (res) {
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

<style>
.tableImg {
  max-width: 200px;
}
</style>
