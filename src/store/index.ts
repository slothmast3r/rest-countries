import { createStore } from "vuex";
import { fetchAllCountriesRepository } from "../../scripts/repositories";

export default createStore({
  state: {
    darkMode: false,
    countryRepositories: [],
  },
  mutations: {
    changeDarkModeState(state) {
      state.darkMode = !state.darkMode;
    },
    setCountryRepository(state, payload) {
      state.countryRepositories = payload;
    },
  },
  getters: {
    darkModeState(state) {
      return state.darkMode ? "dark" : "light";
    },
    getCountryByAlfaCode: (state) => (code: string) => {
      return state.countryRepositories.find((todo: any) => todo.alpha3Code === code);
    },
  },
  actions: {
    async fetchCountriesApi(context) {
      const payload = await fetchAllCountriesRepository()
        .then((res) => {
          return res;
        })
        .catch((e) => {
          console.error(e);
          return undefined;
        });
      context.commit("setCountryRepository", payload);
    },
  },
  modules: {},
});
