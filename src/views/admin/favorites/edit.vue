<template>
  <div class="favoritesEdit">
    <h2 class="pageTitle">收藏夹{{ id ? "编辑" : "创建" }}</h2>

    <el-form
      ref="form"
      :model="model"
      class="form"
      label-width="80px"
      v-loading="loading"
    >
      <el-form-item label="收藏名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="链接地址">
        <el-input v-model="model.link"></el-input>
      </el-form-item>
      <el-form-item label="收藏类别">
        <el-input v-model="model.cate"></el-input>
      </el-form-item>
      <el-form-item label="时间">
        <el-date-picker
          type="date"
          format="yyyy 年 MM 月 dd 日"
          value-format="yyyy-MM-dd"
          placeholder="选择日期"
          v-model="model.createTime"
          style="width: 100%;"
        ></el-date-picker>
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
      model: {}
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
      if (res.code) {
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
