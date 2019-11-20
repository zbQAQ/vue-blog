<template>
  <div class="loginCantainer">
    <div class="box" v-loading="loading">
      <div class="titleBox">
        登录
      </div>
      <div class="content">
        <el-form label-position="top" label-width="80px" :model="model">
          <el-form-item label="账号">
            <el-input
              v-model="model.account"
              placeholder="请输入账号"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              v-model="model.password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">
              登 录
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import posts from "@/api";
import localStorage from "@/plugins/localStorage";
export default {
  name: "login",
  data() {
    return {
      model: {
        account: "root",
        password: "root"
      },
      loading: false
    };
  },
  methods: {
    async login() {
      this.loading = true;
      const res = await posts.signIn(this.model);
      this.loading = false;
      if (res) {
        localStorage.set("token", res.token);
        this.$router.push("/admin");
      }
    }
  }
};
</script>

<style scoped>
.loginCantainer {
  position: relative;
  width: 100%;
  height: 100vh;
}
.box {
  position: absolute;
  top: 15%;
  left: 50%;
  width: 360px;
  background-color: #fff;
  border-radius: 4px;
  margin-left: -180px;
  box-shadow: 1px 1px 15px 5px #dedede;
}
.box .titleBox {
  line-height: 50px;
  font-size: 14px;
  border-bottom: 1px solid #eee;
  padding: 0 12px;
}
.box .content {
  padding: 30px;
}
</style>
