<template>
  <div>
    <div class="filters-wrapper">
      <search-bar
        class="search-bar"
        @input="inputSearch"
        :value="searchCountry"
      />
    </div>
    <transition-group
      tag="div"
      class="countries-wrapper"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      name="list"
    >
      <country-card
        v-for="(country, index) in countriesFiltered"
        :key="country.numericCode"
        :country="country"
        v-bind:data-index="index"
      />
    </transition-group>
  </div>
</template>

<script>
// import {onMounted, ref, watch} from "vue";
// import { setup } from 'vue-class-component'
import { fetchAllCountriesRepository } from "../../scripts/repositories";
import CountryCard from "@/components/CountryCard";
import SearchBar from "@/components/SearchBar";
import Velocity from "velocity-animate";

export default {
  name: "CountriesLayout",
  components: {
    CountryCard,
    SearchBar,
  },
  data() {
    return {
      countryRepositories: [],
      searchCountry: "",
    };
  },
  computed: {
    countriesFiltered() {
      return this.countryRepositories.filter(
        (x) =>
          x.name.toLowerCase().includes(this.searchCountry.toLowerCase()) ||
          x.alpha2Code.toLowerCase() === this.searchCountry.toLowerCase() ||
          x.alpha3Code.toLowerCase() === this.searchCountry.toLowerCase()
      );
    },
  },
  async created() {
    await this.getCountryRepositories();
  },
  methods: {
    async getCountryRepositories() {
      this.countryRepositories = await fetchAllCountriesRepository();
    },
    inputSearch(event) {
      this.searchCountry = event.target.value;
    },
    beforeEnter: function (el) {
      el.style.opacity = 0;
    },
    enter: function (el, done) {
      let delay = 150;
      setTimeout(function () {
        Velocity(el, { opacity: 1 }, { complete: done });
      }, delay);
    },
    leave: function (el, done) {
      let delay = 150;
      setTimeout(function () {
        Velocity(el, { opacity: 0 }, { complete: done });
      }, delay);
    },
  },
  // #TODO LEARN HOW TO SETUP
  // async setup() {
  //
  //   const countryRepositories = ref([])
  //   const getCountryRepositories = async () => {
  //     countryRepositories.value = await fetchAllCountriesRepository()
  //   }
  //   await getCountryRepositories()
  //   watch(countryRepositories, (newValue)=>{
  //     countryRepositories.value = newValue
  //   })
  //   console.log('cycki')
  //   return { countryRepositories, getCountryRepositories }
  // }
};
</script>

<style scoped lang="scss">
.filters-wrapper {
  margin-bottom: 3em;
}

.countries-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4em;
  position: relative;
  transition: all 100ms ease-in-out;
}
</style>
