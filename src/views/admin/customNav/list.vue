<template>
  <div class="customNavList">
    <h2 class="pageTitle">自定义导航列表</h2>
    <el-table :data="list" border style="width: 100%" v-loading="loading">
      <el-table-column prop="_id" label="id" width="220"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="clicks" label="点击数"></el-table-column>
      <el-table-column prop="link" label="链接">
        <template slot-scope="scope">
          <el-button type="text" @click="jumpLink(scope.row.link)">
            {{ scope.row.link }}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/admin/customNavEdit/${scope.row._id}`)"
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
  name: "customNavList",
  data() {
    return {
      list: [],
      loading: false
    };
  },
  methods: {
    async fetch() {
      this.loading = true;
      this.list = await posts.fetchCustomNavList();
      this.loading = false;
    },
    remove(row) {
      this.$confirm(`确定删除‘${row.name}’这个导航吗？`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        this.loading = true;
        const res = await posts.deleteCustomNav(row._id);
        if (res) {
          this.$message({
            message: res.message,
            type: "success"
          });
          this.fetch();
        }
        this.loading = false;
      });
    },
    jumpLink(link) {
      window.open("http://" + link);
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style></style>
