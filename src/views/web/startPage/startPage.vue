<template>
  <div class="startPage">
    <div
      class="bgBox"
      ref="bgBox"
      id="bgBox"
      :class="{ inBlur: inSearchModel || inNavModel }"
    ></div>
    <div class="cover" @click="clickCover"></div>

    <timer />
    <div class="options" :class="{ isShow: inSearchModel || inNavModel }">
      <span class="pointer" @click="bgSelectVisible = true">
        <i class="iconfont iconpeizhi"></i>
      </span>
    </div>
    <div class="searchBox" :class="{ hide: inNavModel }">
      <searchPanel />
    </div>
    <div class="navBox" :class="{ hide: !inNavModel }">
      <div class="navList" ref="navPanel">
        <div
          class="navItem"
          v-for="(nav, index) in navList"
          :key="index"
          @click="router(nav.link)"
        >
          {{ nav.name }}
        </div>
      </div>
      <div class="navList addPanel" ref="addPanel">
        <div class="formItem">
          <input type="text" placeholder="name" v-model="addNavForm.name" />
        </div>
        <div class="formItem">
          <!-- eslint-disable-next-line prettier/prettier -->
          <input type="text" placeholder="link" v-model="addNavForm.link" @keyup.enter="submitAddNavForm" />
        </div>
        <div
          class="toolbar"
          :class="{ show: addNavForm.name.length && addNavForm.link.length }"
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
    <div class="footer align-center">
      <p class="pointer" @click="$router.push('/home')">zhoubao" HomePage</p>
    </div>

    <popup
      :visible="bgSelectVisible"
      title="背景图偏好"
      width="636px"
      @close="bgSelectVisible = false"
    >
      <template slot="content">
        <div class="bgSelectCnt">
          <div
            class="selectItem"
            v-for="(item, key) in bgSelectList"
            :key="key"
          >
            <p class="selectTit m-b-12 m-t-25">{{ item.type }}</p>
            <div class="gallery">
              <img
                v-for="(img, ikey) in item.list"
                :key="ikey"
                class="selectImg m-r-12 pointer"
                :src="img"
                alt=""
                @click="changeBg(img)"
              />
            </div>
          </div>
        </div>
      </template>
    </popup>
  </div>
</template>

<script>
import timer from "./components/timer.vue";
import searchPanel from "./components/searchPanel.vue";
import popup from "@/components/popup.vue";
import { mapGetters, mapMutations } from "vuex";
import { loadBanner } from "@/plugins/common.js";
import posts from "@/api";
export default {
  name: "startPage",
  components: {
    timer,
    searchPanel,
    popup
  },
  computed: {
    ...mapGetters(["inSearchModel", "inNavModel"])
  },
  data() {
    return {
      msg: "hello start page",
      inAddNavPanel: false,
      navList: [],
      addNavForm: {
        name: "",
        link: ""
      },
      bgSelectVisible: false,
      bgSelectList: []
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
      this.addNavForm.link = "";
    },
    async submitAddNavForm() {
      if (!this.addNavForm.name || !this.addNavForm.link) {
        console.log("选项不能为空");
        return;
      }
      const res = await posts.createCustomNav(this.addNavForm);
      if (res.status === "ok") {
        this.navList = await posts.fetchCustomNavList();
        this.clearAddNavForm();
        this.changeInAddNavPanel(false);
      }
    },
    changeBg(img) {
      if (!img) {
        alert("图片路径不能为空");
        return;
      }
      this.$nextTick(() => {
        loadBanner(this.$refs["bgBox"], img);
      });
    }
  },
  async created() {
    this.navList = await posts.fetchCustomNavList();
    const bannerResult = await posts.fetchBannerList();
    for (let i = 0; i < bannerResult.length; i++) {
      // eslint-disable-next-line prettier/prettier
      const sameItem = this.bgSelectList.find(v => v.type === bannerResult[i].name)
      if (sameItem) {
        sameItem.list.push(bannerResult[i].image);
      } else {
        this.bgSelectList.push({
          type: bannerResult[i].name,
          list: [bannerResult[i].image]
        });
      }
    }
    const recommend = await posts.bannerRecommend();
    // this.$nextTick(() => {
    loadBanner(this.$refs["bgBox"], recommend.image);
    // });
  }
};
</script>

<style scoped>
@import url("./startPage.css");
</style>
