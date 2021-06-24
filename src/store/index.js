import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters"; // getter
import user from "./modules/user"; // 用户相关
import permission from "./modules/permission"; // 权限相关
import page from "./modules/page"; // 页面相关

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    permission,
    page,
  },
  getters,
});
