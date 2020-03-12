<template>
  <div class="artcleDetailCnt wMainContent" v-loading="loading">
    <div class="bannerTit">
      {{ model.title }}
      <p class="subTit m-t-25">
        <i class="iconfont iconrili"></i> {{ model.createTime.split("T")[0] }}
        {{
          model.createTime.split("T")[1] &&
            model.createTime.split("T")[1].split(".")[0]
        }}
      </p>
      <p class="subTit m-t-12">
        <i class="iconfont iconyuedushu m-l-12"></i> 阅读数 {{ model.clicks }}
      </p>
    </div>
    <!-- <div class="container"  v-html="model.render"></div> -->
    <artContent class="container" :content="marked(model.content || '')" />
  </div>
</template>

<script>
import posts from "@/api";
import marked from "marked";
import artContent from "./components/artcleContent";
export default {
  components: { artContent },
  data() {
    return {
      loading: false,
      model: {
        createTime: ""
      },

      marked
    };
  },
  methods: {
    async fetchDetail() {
      this.loading = true;
      this.model = await posts.fetchArticlesDetail(this.$route.params.artcleId);
      this.loading = false;
    }
  },
  created() {
    this.fetchDetail();
  }
};
</script>

<style scoped>
@import "./artcle.css";
</style>
