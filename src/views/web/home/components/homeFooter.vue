<template>
  <div class="myFooter" :style="{ top: top }">
    <!-- eslint-disable-next-line prettier/prettier -->
    <span class="footerLink pointer" @click="router('https://github.com/zbQAQ')">
      Github
    </span>
    <span class="footerLink">邮箱：1290368140@qq.com </span>
  </div>
</template>

<script>
export default {
  props: ["top"],
  methods: {
    router(path) {
      window.open(path);
    }
  }
};
</script>

<style scoped>
.myFooter {
  position: relative;
  top: 100%;
  height: 70px;
  line-height: 70px;
  background: transparent;
  text-align: center;
}
.footerLink {
  color: #fff;
  font-size: 12px;
  margin-right: 18px;
  transition: 0.25s ease;
}
.footerLink.pointer:hover {
  color: #70c000;
  text-decoration: underline;
}
</style>
