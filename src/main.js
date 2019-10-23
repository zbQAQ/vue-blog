import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";

import "@/styles/global.css"; // global css

// import { mavonEditor } from "mavon-editor";
// import "mavon-editor/dist/css/index.css";
// Vue.use(mavonEditor);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
