import router from "@/router";

export default {
  namespaced: true,
  state: () => ({ token: localStorage.getItem("token") || "" }),
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
  },
};
