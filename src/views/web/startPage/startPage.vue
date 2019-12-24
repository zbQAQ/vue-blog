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
.startPage {
  position: relative;
  width: 100vw;
  height: 100vh;

  background-color: #666;
  overflow: hidden;
}
.bgBox,
.cover {
  z-index: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.bgBox {
  /* background-image: url("https://api.rthe.cn/bing.jpg"); */
  background-image: url("https://a.maorx.cn/images/BG_A_Default_2.jpg");
  /* background-image: url("https://cdn.jsdelivr.net/gh/MobiusBeta/a.maorx.cn/images/BG_A_Default_3.jpg"); */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  transition: transform 0.25s, filter 0.5s;
}
.bgBox.inBlur {
  transform: scale(1.1);
  filter: blur(10px);
}

.cover {
  background: rgba(0, 0, 0, 0.3);
  transition: all 0.25s;
}
.searchBox {
  position: absolute;
  top: 200px;
  width: 100%;
  height: 46px;
  transition: opacity 0.25s;
  z-index: 1;
}
.searchBox.hide {
  z-index: -1;
  opacity: 0;
}

.navBox {
  position: relative;
  top: 200px;
  left: 50%;
  width: 650px;
  height: 200px;
  margin-left: -315px;
  overflow: hidden;
  z-index: 1;
  transition: opacity 0.25s;
}
.navBox.hide {
  z-index: -1;
  opacity: 0;
}
.navBox .navList {
  position: absolute;
  width: 100%;
  height: 150px;
  overflow: hidden;
  transition: all 0.25s;
}

.navBox .navList .navItem {
  float: left;
  width: 12%;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  font-size: 13px;
  background-color: transparent;
  padding: 6px 0px;
  margin: 4%;
  margin-top: 0px;
  margin-bottom: 5px;
  cursor: pointer;
  border-radius: 20px;
  transition: all 0.25s;
  overflow: hidden;
}
.navBox .navList .navItem:hover {
  color: rgb(112, 192, 0);
  background-color: rgba(255, 255, 255, 0.3);
}

.navBox .addPanel {
  box-sizing: border-box;
  padding: 0 120px;
  left: 100%;
}
.addPanel .formItem {
  width: 100%;
  margin: 15px 0;
}
.addPanel .formItem input {
  box-sizing: border-box;
  width: 100%;
  border: none;
  outline: none;
  color: #000;
  text-align: center;
  border-radius: 20px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
  transition: background-color 0.25s;
}
.addPanel .formItem input:focus {
  background-color: rgba(255, 255, 255, 0.9);
}
.addPanel .toolbar {
  text-align: center;
  color: #a4a6b3;

  transition: all 0.25s;
  opacity: 0;
  transform: translateX(20px);
}
.addPanel .toolbar.show {
  opacity: 1;
  transform: translateY(0);
}
.addPanel .toolbar .iconfont {
  font-size: 20px;
  margin: 0 4px;
  cursor: pointer;
}
.addPanel .toolbar .iconfont:hover {
  color: rgba(112, 192, 0, 0.9);
}

.addPanel .formItem input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #383838;
}
.addPanel .formItem input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #383838;
}
.addPanel .formItem input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #383838;
}
.addPanel .formItem input:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #383838;
}
.navBox .addBtn {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 28px;
  height: 28px;
  line-height: 28px;
  color: #fff;
  font-size: 12px;
  background-color: rgba(255, 255, 255, 0.1);
  text-align: center;
  margin-left: -14px;
  cursor: pointer;
  border-radius: 4px;
}
.navBox .addBtn i {
  font-size: 14px;
}
.navBox .addBtn:hover {
  color: rgb(112, 192, 0);
  background-color: rgba(255, 255, 255, 0.3);
}
</style>
