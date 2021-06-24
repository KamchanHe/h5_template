const getters = {
  token: (state) => state.user.token, // token
  keepAlivePage: (state) => state.page.keepAlivePage, // 需缓存页面的Name
};

export default getters;
