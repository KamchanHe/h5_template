import router from "./router";
import Vue from "vue";
import store from "./store";

router.beforeEach(async (to, from, next) => {
  // 页面需要缓存 保存到store里
  if (to.meta.keepAlive) {
    store.dispatch("page/addKeepAlivePage", to.name);
  }
  next();
});

router.afterEach((to, from) => {
  // 统一对App根root监听，则不用在各个页面都写监听方法，此方法不能在各路由页面下使用overflow-y:scroll和限制高度.
  // 获取对应路由meta标签里保存的滚动距离
  const scrollTop = to.meta.scrollTop;
  const keepAlive = to.meta.keepAlive;
  // 如果对应路由需要缓存
  if (keepAlive) {
    // 下次更新时滚动到上次浏览的位置
    Vue.prototype.$nextTick(() => {
      document.querySelector("#app").scrollTop = scrollTop;
    });
  } else {
    // 不需要缓存 回到顶部
    document.querySelector("#app").scrollTop = 0;
  }
  // 如果不是需要一直缓存的页面 并且去的页面返回来后不需要用缓存 则删掉该页面的缓存
  const {
    meta: { keepComponentPages, alwaysKeep },
  } = from;
  if (
    !alwaysKeep &&
    (!keepComponentPages || !keepComponentPages.includes(to.name))
  ) {
    store.dispatch("page/removeKeepAlive", from.name);
  }
});
