import { createStore } from "vuex";
import app from "./modules/app";
import getters from "./getters";

const store = createStore({
  modules: { app },
  state: {
    belong: "",
    polygonobj: "",
  },
  mutations: {
    belong(state, e) {
      state.belong = e;
    },
    polygon(state, e) {
      state.polygonobj = e;
    },
  },
});

export default store;
