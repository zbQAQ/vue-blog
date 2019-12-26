<template>
  <div class="startPage">
    <div class="bgBox" :class="{ inBlur: inSearchModel || inNavModel }"></div>
    <div class="cover" @click="clickCover"></div>

    <timer />
    <div class="searchBox" :class="{ hide: inNavModel }">
      <searchPanel />
    </div>
    <div class="navBox" :class="{ hide: !inNavModel }">
      <div class="navList" ref="navPanel">
        <div
          class="navItem"
          v-for="(nav, index) in navList"
          :key="index"
          @click="router(nav.url)"
        >
          {{ nav.label }}
        </div>
      </div>
      <div class="navList addPanel" ref="addPanel">
        <div class="formItem">
          <input type="text" placeholder="name" v-model="addNavForm.name" />
        </div>
        <div class="formItem">
          <!-- eslint-disable-next-line prettier/prettier -->
          <input type="text" placeholder="url" v-model="addNavForm.url" @keyup.enter="submitAddNavForm" />
        </div>
        <div
          class="toolbar"
          :class="{ show: addNavForm.name.length && addNavForm.url.length }"
        >
          <i class="iconfont iconqingkong" @click="clearAddNavForm"></i>
          <i class="iconfont iconsolidnail" @click="submitAddNavForm"></i>
        </div>
      </div>
      <div class="addBtn" @click="changeInAddNavPanel(!inAddNavPanel)">
        <i v-show="!inAddNavPanel" class="iconfont iconadd1"></i>
        <i v-show="inAddNavPanel" class="iconfont iconback-copy"></i>
      </div>
    </div>
  </div>
</template>

<script>
import timer from "./components/timer.vue";
import searchPanel from "./components/searchPanel.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "startPage",
  components: {
    timer,
    searchPanel
  },
  computed: {
    ...mapGetters(["inSearchModel", "inNavModel"])
  },
  data() {
    return {
      msg: "hello start page",
      inAddNavPanel: false,
      navList: [
        { label: "百度", url: "https://www.baidu.com/" },
        { label: "Google", url: "https://www.baidu.com/" },
        { label: "BiliBili", url: "https://www.baidu.com/" },
        { label: "百度", url: "https://www.baidu.com/" },
        { label: "百度", url: "https://www.baidu.com/" },
        { label: "百度", url: "https://www.baidu.com/" },
        { label: "百度", url: "https://www.baidu.com/" },
        { label: "百度", url: "https://www.baidu.com/" },
        { label: "百度", url: "https://www.baidu.com/" },
        { label: "百度", url: "https://www.baidu.com/" }
      ],
      addNavForm: {
        name: "",
        url: ""
      }
    };
  },
  methods: {
    ...mapMutations(["changeInSearchModel", "changeInNavModel"]),
    clickCover() {
      this.changeInSearchModel(false);
      this.changeInNavModel(false);
    },
    router(path) {
      if (path) window.open(path);
    },
    changeInAddNavPanel(flag) {
      this.inAddNavPanel = flag;
      this.$nextTick(() => {
        let navPanel = this.$refs["navPanel"];
        let addPanel = this.$refs["addPanel"];
        if (flag) {
          navPanel.style.transform = "scale(0.9)";
          addPanel.style.transform = "scale(0.9)";
          setTimeout(() => {
            navPanel.style.left = "-100%";
            addPanel.style.left = "0";
          }, 250);
          setTimeout(() => {
            navPanel.style.transform = "scale(1)";
            addPanel.style.transform = "scale(1)";
          }, 500);
        } else {
          navPanel.style.transform = "scale(0.9)";
          addPanel.style.transform = "scale(0.9)";
          setTimeout(() => {
            navPanel.style.left = "0";
            addPanel.style.left = "100%";
          }, 250);
          setTimeout(() => {
            navPanel.style.transform = "scale(1)";
            addPanel.style.transform = "scale(1)";
          }, 500);
        }
      });
    },
    clearAddNavForm() {
      this.addNavForm.name = "";
      this.addNavForm.url = "";
    },
    submitAddNavForm() {
      console.log("submit!");
    }
  }
};
</script>

<style scoped>
@import url("./startPage.css");
</style>
