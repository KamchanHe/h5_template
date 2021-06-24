const state = {
  keepAlivePage: [], // 需缓存页面的Name
};

const mutations = {
  // 添加缓存页面Name
  ADD_KEEP_ALIVE: (state, name) => {
    if (!state.keepAlivePage.includes(name)) {
      state.keepAlivePage = state.keepAlivePage.concat(name);
    }
  },
  // 删除缓存页面name
  REMOVE_KEEP_ALIVE: (state, name) => {
    const keepAlivePage = state.keepAlivePage;
    const index = keepAlivePage.indexOf(name);
    if (index > -1) {
      keepAlivePage.splice(index, 1);
    }
  },
};

const actions = {
  // 添加需缓存的页面
  addKeepAlivePage({ commit }, name) {
    commit("ADD_KEEP_ALIVE", name);
  },
  // 移除不需缓存的页面
  removeKeepAlive({ commit }, name) {
    commit("REMOVE_KEEP_ALIVE", name);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
