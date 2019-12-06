<template>
  <div class="header">
    <div class="logo">vue-blog</div>
    <div class="headerNav">
      <p @click="loginOut">退出登录</p>
    </div>
  </div>
</template>

<script>
import localStorage from "@/plugins/localStorage";
export default {
  name: "Header",
  methods: {
    loginOut() {
      this.$confirm("确定退出登录吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$message({
          type: "success",
          message: "你已退出!"
        });
        localStorage.reload();
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 60px;
  line-height: 60px;
  padding: 0 15px;
  background: #b3c0d1;
  color: #fff;
}
.logo {
  font-weight: bold;
}
.loginOut {
  cursor: pointer;
}
</style>
