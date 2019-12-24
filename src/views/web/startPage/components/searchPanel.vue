<template>
  <div class="searchPanel">
    <div class="searchOptBox" :class="{ hide: !inSearchModel }">
      <div
        class="searchOpt"
        v-for="item in searchEngines"
        :key="item.icon"
        :class="{ active: item.engine === searchEngine }"
        @click="changeSearchEngine(item.engine)"
      >
        <i class="iconfont" :class="item.icon"></i>
      </div>
      <!-- <div class="searchOpt">
        <i class="iconfont iconguge"></i>
      </div> -->
    </div>

    <input
      type="text"
      class="input"
      :class="{ inSearch: inSearchModel }"
      v-model="searchStr"
      @focus="searchFocus"
      @keyup.enter="doSearch"
    />
    <!--
      通过input的blur事件会造成浏览器在切换程序的时候失去焦点
      @blur="searchBlur" 
    -->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "searchPanel",
  computed: {
    ...mapGetters(["inSearchModel", "searchEngine"])
  },
  data() {
    return {
      msg: "hello searchPanel!",
      searchStr: "Search",
      searchEngines: [
        {
          engine: "google",
          icon: "iconguge",
          value: "https://www.google.com/search?q="
        },
        {
          engine: "baidu",
          icon: "iconbaiduGray",
          value: "https://www.baidu.com/s?word="
        }
      ]
    };
  },
  methods: {
    ...mapMutations(["changeInSearchModel", "changeSearchEngine"]),
    searchFocus() {
      this.changeInSearchModel(true);
    },
    searchBlur() {
      this.changeInSearchModel(false);
    },
    doSearch() {
      // eslint-disable-next-line prettier/prettier
      const url = this.searchEngines.find(v => v.engine === this.searchEngine).value;
      window.open(url + this.searchStr);
    }
  },
  watch: {
    inSearchModel(newVal) {
      if (!newVal) this.searchStr = "Search";
      if (newVal) this.searchStr = "";
    }
  }
};
</script>
<style scoped>
.searchPanel {
  position: relative;
  top: 0;
  width: 100%;
  text-align: center;
}
.input {
  box-sizing: border-box;
  outline: none;
  border: none;
  width: 230px;
  padding: 12px 14px;
  border-radius: 30px;
  font-size: small;
  font-weight: 400;
  color: #fff;
  background-color: #fff;
  text-align: center;

  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.25);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
  opacity: 1;
  transition: all 0.25s;
}
.input:hover {
  width: 530px;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
}
.input.inSearch {
  width: 530px;
  color: #000;
  background-color: rgba(255, 255, 255, 0.9);
}

.searchOptBox {
  position: absolute;
  top: 60px;
  width: 100%;
  overflow: hidden;
  color: #fff;
  opacity: 1;
  transition: opacity 0.25s, top 0.35s;
}
.searchOptBox.hide {
  opacity: 0;
  /* transform: translateY(-45px); */
  top: 0px;
}
.searchOptBox .searchOpt {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 5px 30px;
  margin: 0 5px;
  border-radius: 20px;
  transition: 0.25s ease;
  cursor: pointer;
}
.searchOptBox .searchOpt:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
.searchOptBox .searchOpt:active {
  background-color: rgb(112, 192, 0);
}

.searchOptBox .searchOpt.active {
  background-color: rgba(255, 255, 255, 0.3);
  cursor: default;
}
</style>
