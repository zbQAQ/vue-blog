<template>
  <div class="loginCantainer">
    <div class="box">
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
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      model: {
        account: "",
        password: ""
      }
    };
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
