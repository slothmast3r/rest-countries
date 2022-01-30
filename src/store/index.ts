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
  getters: {
    darkModeState(state) {
      return state.darkMode ? "dark" : "light";
    },
  },
  actions: {},
  modules: {},
});
