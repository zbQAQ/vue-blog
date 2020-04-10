<template>
  <div class="artcleDetailCnt wMainContent" v-loading="loading">
    <div class="bannerTit">
      {{ model.title }}
      <p class="subTit m-t-25">
        <i class="iconfont iconrili"></i>
        {{ formatUTC(model.createTime) }}
      </p>
      <p class="subTit m-t-12">
        <i class="iconfont iconyuedushu m-l-12"></i> 阅读数 {{ model.clicks }}
      </p>
    </div>
    <!-- <div class="container"  v-html="model.render"></div> -->
    <artContent class="container" :content="model.render" />
  </div>
</template>

<script>
import posts from "@/api";
import marked from "marked";
import artContent from "./components/artcleContent";
import { formatUTC } from "@/plugins/common";
export default {
  components: { artContent },
  data() {
    return {
      loading: false,
      model: {
        createTime: ""
      },
      formatUTC,
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
@import "./styles/artcle.css";
</style>
