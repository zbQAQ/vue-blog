<template>
  <div class="categoriesEdit">
    <h2 class="pageTitle">文章分类{{ id ? "编辑" : "创建" }}</h2>

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
      <el-form-item>
        <el-button type="primary" @click="onSubmit">
          立即{{ id ? "修改" : "创建" }}
        </el-button>
        <el-button @click="$router.push('/admin/categoriesList')">
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
        res = await posts.updateCategoriesOne(this.id, this.model);
      } else {
        res = await posts.createCategories(this.model);
      }
      if (res.code) {
        this.$router.push("/admin/categoriesList");
        this.$message({
          message: res.message,
          type: "success"
        });
      }
      this.loading = false;
    },
    async fetchDetail() {
      this.loading = true;
      this.model = await posts.fetchCategoriesDetail(this.id);
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
