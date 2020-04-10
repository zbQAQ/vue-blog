<template>
  <div class="ripple">
    <div class="row1 m-b-25">
      <h3>css 实现</h3>
      <button class="mbutton rippleBtnCss">
        css涟漪按钮
      </button>
      <el-button> 移除焦点 </el-button>
    </div>

    <div class="row2">
      <h3>js 实现</h3>
      <button class="mbutton rippleBtn" @click="click">
        js涟漪按钮1
      </button>
    </div>
  </div>
</template>

<script>
import "@/plugins/rippleBtn.js";
export default {
  methods: {
    click() {
      console.log("click");
    }
  }
};
</script>

<style scoped>
.ripple {
  padding: 80px;
}
.mbutton {
  position: relative;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #2196f3;
  transition: 0.25s;
  color: #fff;
  padding: 12px 20px;
  text-align: center;
  box-sizing: border-box;
  border: none;
  outline: 0;
  margin: 8px;
  font-size: 14px;
  border-radius: 4px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.mbutton:active {
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
}

/* .rippleBtn  */
.rippleBtnCss {
  position: relative;
  overflow: hidden;
}

/* .rippleBtn::before  */
.rippleBtnCss::before {
  content: "";
  position: absolute;
  left: 0;
  top: -100%;
  width: 100%;
  height: 300%;
  border-radius: 50%;
  opacity: 0;
  background-color: #eee;
  transform: scale(0, 0);
  transition: opacity 2s ease, transform 0.45s ease;
  user-select: none;
}

.rippleBtnCss:focus::before {
  /* transform: translate(-50%, -50%) scale(2, 2); */
  -webkit-animation: rippleCss 0.4s linear;
  animation: rippleCss 0.4s linear;
}

@keyframes rippleCss {
  from {
    opacity: 0.6;
    transform: scale(0, 0);
  }
  to {
    opacity: 0;
    transform: scale(3, 3);
  }
}
</style>
