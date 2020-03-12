<template>
  <div class="articlesEdit" v-loading="loading">
    <h2 class="pageTitle">文章{{ id ? "编辑" : "创建" }}</h2>

    <el-form
      ref="form"
      :model="model"
      class="form"
      label-width="80px"
      v-loading="loading"
      style="max-width: 800px"
    >
      <el-form-item label="文章标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="阅读量">
        <el-input-number v-model="model.clicks" :min="0"></el-input-number>
      </el-form-item>
      <el-form-item label="文章类别">
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
      <el-form-item label="描述">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="model.description"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="文章详情">
        <mavonEditor
          v-model="model.content"
          ref="articleEditor"
          @imgAdd="handleImageAdded"
          @imgDel="handleImageDelete"
          @change="changeContent"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">
          立即{{ id ? "修改" : "创建" }}
        </el-button>
        <el-button @click="$router.push('/admin/articlesList')">
          返回
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import posts from "@/api";

import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import { url } from "@/api/url.js";
export default {
  name: "edit",
  props: ["id"],
  components: {
    mavonEditor
  },
  data() {
    return {
      loading: false,
      model: {
        clicks: 0
      },
      categories: []
    };
  },
  methods: {
    async onSubmit() {
      this.loading = true;
      let res;
      if (this.id) {
        res = await posts.updateArticlesOne(this.id, this.model);
      } else {
        res = await posts.createArticles(this.model);
      }
      if (res) {
        this.$router.push("/admin/articlesList");
        this.$message({
          message: res.message,
          type: "success"
        });
      }
      this.loading = false;
    },
    async fetchDetail() {
      this.model = await posts.fetchArticlesDetail(this.id);
    },
    async fetchCategories() {
      this.categories = await posts.fetchCategoriesList();
    },
    async handleImageAdded(pos, $file) {
      let formData = new FormData();
      formData.append("file", $file);

      const result = await posts.uploadFile(formData);
      this.$refs.articleEditor.$img2Url(pos, url + result.url);
    },
    async handleImageDelete(file) {
      const fileName = file[0].split("/").pop();
      const res = await posts.deleteFile(fileName);
      this.$message.success(res.message);
    },
    changeContent(val, render) {
      this.model.render = render;
    }
  },
  created() {
    this.loading = true;
    this.id && this.fetchDetail();
    this.fetchCategories();
    this.loading = false;
  }
};
</script>

<style scoped>
.form {
  padding: 20px 0;
}

.editorContainer {
  margin-left: 80px;
  margin-bottom: 22px;
}
.uploadTips {
  font-size: 12px;
  color: #606266;
}

.uploadedContainer .uploadedItem {
  position: relative;
  display: inline-block;
  max-width: 200px;
  max-height: 200px;
  border-radius: 4px;
  vertical-align: middle;
  margin-bottom: 15px;
  margin-right: 15px;
  overflow: hidden;
}
.uploadedContainer .uploadedItem:hover::before {
  opacity: 1;
}
.uploadedContainer .uploadedItem::before {
  content: "点击复制图片地址";
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  transition: 0.3s ease-in-out;
  color: #fff;
  text-align: center;
  font-size: 12px;
  opacity: 0;
  cursor: pointer;
}
.uploadedContainer .uploadedItem img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
</style>
