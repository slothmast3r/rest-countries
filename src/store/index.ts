import { createStore } from "vuex";

export default createStore({
  state: {
    darkMode: false,
  },
  mutations: {
    changeDarkModeState(state) {
      state.darkMode = !state.darkMode;
    },
  },
  actions: {},
  modules: {},
});
