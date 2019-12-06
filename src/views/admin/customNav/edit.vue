<template>
  <div class="customNav">
    <h2 class="pageTitle">自定义导航{{ id ? "编辑" : "创建" }}</h2>

    <el-form
      ref="form"
      :model="model"
      class="form"
      label-width="80px"
      v-loading="loading"
      style="max-width: 800px"
    >
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="链接">
        <el-input v-model="model.link"></el-input>
      </el-form-item>
      <el-form-item label="点击数">
        <el-input-number v-model="model.clicks" :min="0"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">
          立即{{ id ? "修改" : "创建" }}
        </el-button>
        <el-button @click="$router.push('/admin/customNavList')">
          返回
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import posts from "@/api";
export default {
  name: "edit",
  props: ["id"],
  data() {
    return {
      loading: false,
      model: {}
    };
  },
  methods: {
    async onSubmit() {
      this.loading = true;
      let res;
      if (this.id) {
        res = await posts.updateCustomNavOne(this.id, this.model);
      } else {
        res = await posts.createCustomNav(this.model);
      }
      if (res) {
        this.$router.push("/admin/customNavList");
        this.$message({
          message: res.message,
          type: "success"
        });
      }
      this.loading = false;
    },
    async fetchDetail() {
      this.loading = true;
      this.model = await posts.fetchCustomNavDetail(this.id);
      this.loading = false;
    }
  },
  created() {
    this.id && this.fetchDetail();
  }
};
</script>

<style scoped>
.form {
  padding: 20px 0;
}
</style>
