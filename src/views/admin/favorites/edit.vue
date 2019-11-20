<template>
  <div class="favoritesEdit">
    <h2 class="pageTitle">收藏夹{{ id ? "编辑" : "创建" }}</h2>

    <el-form
      ref="form"
      :model="model"
      class="form"
      label-width="80px"
      v-loading="loading"
      style="max-width: 800px"
    >
      <el-form-item label="收藏类别">
        <el-select v-model="model.category" placeholder="请选择">
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="收藏名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="链接地址">
        <el-input v-model="model.link"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">
          立即{{ id ? "修改" : "创建" }}
        </el-button>
        <el-button @click="$router.push('/admin/favoritesList')">
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
      model: {},
      categories: []
    };
  },
  methods: {
    async onSubmit() {
      this.loading = true;
      let res;
      if (this.id) {
        res = await posts.updateFavoritesOne(this.id, this.model);
      } else {
        res = await posts.createFavorites(this.model);
      }
      if (res) {
        this.$router.push("/admin/favoritesList");
        this.$message({
          message: res.message,
          type: "success"
        });
      }
      this.loading = false;
    },
    async fetchDetail() {
      this.loading = true;
      this.model = await posts.fetchFavoritesDetail(this.id);
      this.loading = false;
    },
    async fetchCategories() {
      this.loading = true;

      this.categories = await posts.fetchCategoriesList();

      this.loading = false;
    }
  },
  created() {
    this.id && this.fetchDetail();
    this.fetchCategories();
  }
};
</script>

<style scoped>
.form {
  padding: 20px 0;
}
</style>
