<template>
  <div class="artcleCnt wMainContent">
    <div class="container">
      <div class="artcleItem p-b-20" v-for="artcle in list" :key="artcle._id">
        <h4
          class="artcleTitle m-b-12 pointer"
          @click="routerDetail(artcle._id)"
        >
          {{ artcle.title }}
        </h4>
        <div class="desc m-b-12 pointer" @click="routerDetail(artcle._id)">
          <p>{{ artcle.description }}</p>
        </div>
        <div class="indexBtm p-t-10">
          <i class="iconfont iconrili"></i>
          {{ artcle.createTime.split("T")[0] }}
          <i class="iconfont iconfenlei m-l-12"></i> {{ artcle.category.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import posts from "@/api";
export default {
  data() {
    return {
      list: [],
      loading: false
    };
  },
  methods: {
    async fetch() {
      this.loading = true;
      this.list = await posts.fetchArticlesList();
      this.loading = false;
    },
    routerDetail(id) {
      this.$router.push("/w/artcle/" + id);
    }
  },
  created() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.fetch();
  }
};
</script>

<style scoped>
@import "./artcle.css";
</style>
