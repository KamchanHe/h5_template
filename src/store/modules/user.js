const getDefaultState = () => {
  return {
    token: "", // token
  };
};
const state = getDefaultState();
const mutations = {
  // 重置数据
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState());
  },
  // 保存token
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
};

const actions = {
  // 退出登录
  logout({ commit }) {
    return new Promise((resolve) => {
      //   removeToken(); // must remove  token  first
      commit("RESET_STATE");
      resolve();
    });
  },
  // 移除token
  resetToken({ commit }) {
    return new Promise((resolve) => {
      //   removeToken(); // must remove  token  first
      commit("RESET_STATE");
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
