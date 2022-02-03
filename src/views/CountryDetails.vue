<template>
  <div>
    <div class="top">
      <div
        class="button"
        @click="$router.push('/')"
        :class="$store.getters.darkModeState"
      >
        <left-arrow class="arrow" />
        Back
      </div>
    </div>
    <div class="body-details">
      <img
        :src="country.flags.svg"
        class="flag-svg"
        :alt="'Flag: ' + country.name"
      />
      <div class="details_text--layout">
        <div class="details_text--header">
          {{ country.name }}
        </div>
        <div class="details_text--text">
          <details-line label-name="Native name" :value="country.nativeName" />
          <details-line label-name="Population" :value="country.population" />
          <details-line label-name="Region" :value="country.region" />
          <details-line label-name="Sub region" :value="country.subregion" />
          <details-line label-name="Native name" :value="country.nativeName" />
          <details-line label-name="Capital" :value="country.nativeName" />
          <details-line
            label-name="Top Level domain"
            :value-array="country.topLevelDomain"
          />
          <details-line
            label-name="Currencies"
            is-array-of-object
            :value-array="country.currencies"
          />
          <details-line
            label-name="Languages"
            is-array-of-object
            :value-array="country.languages"
          />
          <div>
            <div class="buttons-wrapper" v-if="country.borders">
              <span class="label"> Borders: </span>
              <div
                :class="$store.getters.darkModeState"
                class="button"
                v-for="(countryBorder, index) in country.borders"
                :key="index + 'border'"
                @click="$router.push('/' + countryBorder)"
              >
                {{
                  this.$store.getters.getCountryByAlfaCode(countryBorder).name
                }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftArrow from "@/assets/left-arrow";
import { fetchCountryByCode } from "../../scripts/repositories";
import DetailsLine from "@/components/DetailsLine";
export default {
  name: "CardDetails",
  components: { DetailsLine, LeftArrow },
  data() {
    return {
      country: undefined,
      countryCode: this.$route.params.countryCode,
    };
  },
  watch: {
    '$route': async function (to, from) {
      this.countryCode = to.params.countryCode;
      await this.getCountry();
    },
  },
  async created() {
    await this.getCountry();
    if (this.$store.state.countryRepositories.length === 0) {
      await this.$store.dispatch("fetchCountriesApi");
    }
  },

  methods: {
    getCountry: async function () {
      let country = this.$store.getters.getCountryByAlfaCode(this.countryCode);
      if (!country) {
        country = await fetchCountryByCode(this.countryCode);
      }
      this.country = country;
    },
  },
};
</script>

<style scoped lang="scss">
.top {
  margin-top: 0.75em;
}
.button {
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.5em 2em;
  width: fit-content;
  border-radius: 0.325em;
  height: fit-content;
  &.light {
    color: black;
    box-shadow: 0 0 0.75em rgba($darkgray-lightMode, 0.5);
    background-color: $white;
  }
  &.dark {
    color: white;
    box-shadow: 0 0 0.75em rgba(black, 0.5);
    background-color: $darkBlue-darkMode;
  }
  .arrow {
    margin-right: 0.3em;
  }
}
.body-details {
  margin-top: 4.125em;
  display: flex;
  .flag-svg {
    height: fit-content;
    width: 35em;
  }
  .buttons-wrapper {
    display: flex;
    gap: 0.5em;
    flex-wrap: wrap;
  }
  .label {
    font-weight: 800;
  }
}
</style>
