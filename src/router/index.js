import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

/**
 * @param {boolean} hidden 不显示在导航栏里
 * @param {string} title 标题
 * @param {number} scrollTop 滚动距离
 * @param {boolean} needToken 需要登录才可以进入
 * @param {boolean} keepAlive 是否需要缓存
 * @param {array} keepComponentPages // 当前页面去哪些页面 需要缓存当前页面
 */

// 基础路由
export const constantRoutes = [
  {
    // 默认重定向到首页
    path: "/",
    redirect: "/home",
    hidden: true,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    // component: () => import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/404",
    name: "Page404",
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue"),
  },
  { path: "*", redirect: "/404", hidden: true },
];

// 权限路由
export const asyncRoutes = [
  // 404 页必须放在最后 !!!
  { path: "*", redirect: "/404", hidden: true },
];

/**
 * 解决 Error: Redirected when going from "/userCenter" to "/editInfo" via a navigation guard. 的问题
 * @param {void}
 * @return {void}
 */
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};

const createRouter = () =>
  new VueRouter({
    mode: "history",
    routes: constantRoutes,
  });

const router = createRouter();

// 动态添加路由
router.$addRoutes = (params) => {
  router.matcher = createRouter().matcher; // 重置路由 防止重复添加
  router.addRoutes(params); // 添加路由
};
export default router;
