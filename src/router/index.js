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
];

// 权限路由
export const asyncRoutes = [
  // 404 页必须放在最后 !!!
  { path: "*", redirect: "/404", hidden: true },
];

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    // component: () => import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
