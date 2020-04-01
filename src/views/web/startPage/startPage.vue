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
        url: ""
      },
      bgSelectVisible: false,
      bgSelectList: [
        {
          type: "风景",
          list: [
            "http://img.netbian.com/file/2019/0306/dec593c324c28ac9a2a7e90384daea72.jpg",
            "http://pic1.win4000.com/wallpaper/b/54f3f3fb543fa.jpg"
          ]
        },
        {
          type: "by wlop",
          list: [
            "http://pic1.win4000.com/wallpaper/2017-11-20/5a129876ef82b.jpg",
            "http://imgsrc.baidu.com/forum/pic/item/b141ad4bd11373f0edf8494ba90f4bfbfaed0424.jpg",
            "http://img.netbian.com/file/2018/0604/a0c2eada07e46a6e7082afd2306db81c.jpg"
          ]
        },
        {
          type: "游戏",
          list: ["http://www.4kbizhi.com/d/file/2020/01/12/00383295ltt.jpg"]
        }
      ]
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
    async submitAddNavForm() {
      if (!this.addNavForm.name || !this.addNavForm.url) {
        console.log("选项不能为空");
        return;
      }
      const res = await posts.createCustomNav(this.addNavForm);
      if (res.status === "ok") {
        this.navList = await posts.fetchCustomNavList();
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
  }
};
</script>

<style scoped>
@import url("./startPage.css");
</style>
