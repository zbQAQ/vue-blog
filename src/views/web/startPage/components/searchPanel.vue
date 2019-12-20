<template>
  <div class="searchPanel">
    <!-- :style="{ 'margin-left': '-' + inputW / 2 + 'px' }" -->
    <input
      type="text"
      class="input"
      :style="{ width: inputW + 'px' }"
      v-model="searchStr"
      @focus="searchFocus"
    />
  </div>
</template>

<script>
export default {
  name: "searchPanel",
  props: {
    inSearchModel: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      msg: "hello searchPanel!",
      searchStr: "Search"
    };
  },
  computed: {
    inputW() {
      if (this.inSearchModel) {
        return "530";
      } else {
        return "230";
      }
    }
  },
  methods: {
    searchFocus() {
      console.log("searchFocus");
    }
  }
};
</script>
<style scoped>
.searchPanel {
  position: absolute;
  top: 0;
  width: 100%;
  text-align: center;
}
.input {
  box-sizing: border-box;
  outline: none;
  border: none;
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
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
}
</style>
