<template>
  <div class="myHeader" :class="{ scroll: scrollTop > 480 }">
    <div class="topLogo">
      <img src="/img/logo.jpg" alt="" />
    </div>
    <div class="menu">
      <div
        class="menuItem"
        :class="{ hover: scrollTop < 482 }"
        @click="scrollMove(0)"
      >
        首页
      </div>
      <div
        class="menuItem"
        :class="{ hover: scrollTop >= 482 && scrollTop < 1044 }"
        @click="scrollMove(482)"
      >
        关于
      </div>
      <div
        class="menuItem"
        :class="{ hover: scrollTop >= 1044 }"
        @click="scrollMove(1044)"
      >
        作品
      </div>
      <!-- <div class="navItem" @click="scrollMove()">日志</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "myHeader",
  props: ["scrollTop", "scrollMove"]
};
</script>

<style scoped>
.myHeader {
  position: absolute;
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
  z-index: 2;
}
.myHeader.scroll {
  position: fixed;
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
