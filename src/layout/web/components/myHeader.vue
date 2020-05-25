<template>
  <div class="myHeader" :class="{ scroll: scrollTop > 300 }">
    <div class="topLogo">
      <img src="/img/logo.jpg" alt="" />
    </div>
    <div class="menu">
      <div
        class="menuItem"
        v-for="item in navList"
        :key="item.label"
        @click="router(item.to)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["bannerH"],
  name: "myHeader",
  data() {
    return {
      scrollTop: document.body.scrollTop + document.documentElement.scrollTop,
      navList: [
        {
          label: "首页",
          to: "/home"
        },
        {
          label: "Github",
          to: "https://github.com/zbQAQ"
        },
        {
          label: "简历",
          to: "/home"
        }
      ]
    };
  },
  methods: {
    router(to) {
      if (/https|http|ttp/.test(to)) {
        window.open(to);
      } else {
        this.$router.push(to);
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", () => {
      // eslint-disable-next-line prettier/prettier
      this.scrollTop = document.body.scrollTop + document.documentElement.scrollTop
    });
  }
};
</script>

<style scoped>
.myHeader {
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0 15%;

  background-color: transparent;
  color: #fff;
  transition: all 0.25s;
  z-index: 99;
}
.myHeader.scroll {
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  color: #666;
}
@media (min-width: 1400px) {
  .myHeader {
    padding: 0 20%;
  }
}
.topLogo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #fff;
  overflow: hidden;
}
.topLogo img {
  width: 100%;
  height: 100%;
  transition: transform 0.55s ease;
}
.topLogo:hover img {
  transform: rotate(360deg);
}
.menu {
}
.menu .menuItem {
  position: relative;
  display: inline-block;
  margin: 0 22px;
  font-size: 15px;
  cursor: pointer;
}
.menu .menuItem::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 2px;
  border-radius: 4px;
  background-color: #70c000;
  transition: transform 0.25s ease;
  transform: scale(0);
}
.menu .menuItem.hover::after,
.menu .menuItem:hover::after {
  transform: scale(1);
}
</style>
