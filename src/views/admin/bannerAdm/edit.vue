<template>
  <div class="bannerEdit">
    <h2 class="pageTitle">banner{{ id ? "编辑" : "创建" }}</h2>

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
      <el-form-item :label="'上传图片'">
        <el-upload
          list-type="picture-card"
          :action="uploadUrl"
          :auto-upload="false"
          :limit="1"
          :on-exceed="uploadExceed"
          :on-change="uploadChange"
          :on-remove="uploadRemove"
        >
          <img v-if="model.image" :src="model.image" class="avatar" />
          <i v-else class="el-icon-plus"></i>
          <div class="el-upload__tip" slot="tip">小提示</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">
          立即{{ id ? "修改" : "创建" }}
        </el-button>
        <el-button @click="$router.push('/admin/bannerList')">
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
      files: {},
      model: {},
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
        res = await posts.updateBannerOne(
          this.id,
          Object.assign({}, this.model, { image: thumb.url || "" })
        );
      } else {
        res = await posts.createBanner(
          Object.assign({}, this.model, { image: thumb.url || "" })
        );
      }
      if (res) {
        this.$router.push("/admin/bannerList");
        this.$message({
          message: res.message,
          type: "success"
        });
      }
      this.loading = false;
    },
    async fetchDetail() {
      this.loading = true;
      this.model = await posts.fetchBannerDetail(this.id);
      this.loading = false;
    },
    uploadExceed() {
      this.$message("最多只能上传一个图片");
    },
    async uploadChange(file, fileList) {
      if (this.model.image) {
        await posts.deleteFile(this.model.image.split("/").pop());
      }
      if (fileList.length) {
        this.files = file;
        this.model.image = file.url;
      }
    },
    uploadRemove() {
      this.files = {};
      this.model.image = "";
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
.avatar {
  max-height: 148px;
  border: 1px dashed #b3b3b3;
  border-radius: 4px;
}
</style>
