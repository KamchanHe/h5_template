import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/css/reset.scss"; // 重置样式
import "@/permission"; // 路由拦截
import "@/utils/vant.js"; // 按需引用VantUI

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
