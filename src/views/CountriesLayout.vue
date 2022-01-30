<template>
  <div>
    <div class="filters-wrapper">
      <search-bar class="search-bar" v-model="searchCountry" />
    </div>
    <div class="countries-wrapper">
      <country-card
        v-for="country in countriesFiltered"
        :country="country"
        :key="country.numericCode"
      >
      </country-card>
    </div>
  </div>
</template>

<script>
// import {onMounted, ref, watch} from "vue";
// import { setup } from 'vue-class-component'
import { fetchAllCountriesRepository } from "../../scripts/repositories";
import CountryCard from "@/components/CountryCard";
import SearchBar from "@/components/SearchBar";

export default {
  name: "CountriesLayout",
  components: { CountryCard, SearchBar },
  data() {
    return {
      countryRepositories: [],
      searchCountry: "",
    };
  },
  computed: {
    countriesFiltered() {
      return this.countryRepositories.filter((x) =>
        x.name.includes(this.searchCountry)
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
}
</style>
