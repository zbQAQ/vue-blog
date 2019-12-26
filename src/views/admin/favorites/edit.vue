<template>
  <div class="favoritesEdit">
    <h2 class="pageTitle">作品{{ id ? "编辑" : "创建" }}</h2>

    <el-form
      ref="form"
      :model="model"
      class="form"
      label-width="80px"
      v-loading="loading"
      style="max-width: 800px"
    >
      <el-form-item label="收藏名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="收藏描述">
        <el-input v-model="model.desc"></el-input>
      </el-form-item>
      <el-form-item label="链接地址">
        <el-input v-model="model.link"></el-input>
      </el-form-item>
      <el-form-item label="缩略图">
        <el-upload
          list-type="picture-card"
          :action="uploadUrl"
          :auto-upload="false"
          :limit="1"
          :on-exceed="uploadExceed"
          :on-change="uploadChange"
          :on-remove="uploadRemove"
        >
          <img v-if="model.thumb" :src="url + model.thumb" class="avatar" />
          <i v-else class="el-icon-plus"></i>
          <div class="el-upload__tip" slot="tip">小提示</div>
        </el-upload>
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
import { url } from "@/api/url.js";
export default {
  name: "edit",
  props: ["id"],
  data() {
    return {
      loading: false,
      model: {
        thumb: ""
      },
      photoList: [],
      files: {},
      url
    };
  },
  computed: {
    uploadUrl() {
      return url + "upload";
    }
  },
  methods: {
    async onSubmit() {
      this.loading = true;
      let res;
      let formData = new FormData();
      let thumb = "";
      if ("raw" in this.files) {
        formData.append("file", this.files.raw);
        thumb = await posts.uploadFile(formData);
      }
      if (this.id) {
        res = await posts.updateFavoritesOne(
          this.id,
          Object.assign({}, this.model, { thumb: thumb.url || "" })
        );
      } else {
        res = await posts.createFavorites(
          Object.assign({}, this.model, { thumb: thumb.url || "" })
        );
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
      this.model = await posts.fetchFavoritesDetail(this.id);
    },
    uploadExceed() {
      this.$message("最多只能上传一个图片");
    },
    async uploadChange(file, fileList) {
      if (this.model.thumb) {
        await posts.deleteFile(this.model.thumb.split("/").pop());
      }
      if (fileList.length) {
        this.files = file;
        this.model.thumb = file.url;
      }
    },
    uploadRemove() {
      this.files = {};
      this.model.thumb = "";
    }
  },
  created() {
    this.loading = true;
    this.id && this.fetchDetail();
    this.loading = false;
  }
};
</script>

<style scoped>
.form {
  padding: 20px 0;
}
.avatarPlaceholder {
  width: 8rem;
  height: 8rem;
  line-height: 8rem;
  border: 1px dashed #b3b3b3;
  border-radius: 4px;
}
.avatar {
  max-height: 148px;
  border: 1px dashed #b3b3b3;
  border-radius: 4px;
}
</style>
