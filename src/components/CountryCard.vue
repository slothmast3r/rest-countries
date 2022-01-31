<template>
  <div class="card-wrapper" :class="$store.getters.darkModeState">
    <img
      :src="country.flags.svg"
      class="flag-svg"
      :alt="'Flag: ' + country.name"
    />
    <div class="description__layout">
      <div class="title">
        {{ country.name }}
      </div>
      <div>
        <span class="country-label"> Population: </span>
        {{ country.population }}
      </div>
      <div>
        <span class="country-label"> Region: </span> {{ country.region }}
      </div>
      <div>
        <span class="country-label"> Capital: </span> {{ country.capital }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountryCard",
  props: {
    country: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.card-wrapper {
  display: flex;
  flex-direction: column;
  border-radius: 0.5em;

  width: 19em;
  position: relative;
  top: 0;
  cursor: pointer;
  transition: background-color 1s ease-in-out, color 1s ease-in-out,
    top 0.3s ease-in-out, box-shadow 1s ease-in-out;
  &:hover {
    top: -1.5em;
    transition: top 0.6s ease-in-out;
  }
  &.light {
    color: black;
    box-shadow: 0.4em 0.4em 0.4em rgba($darkgray-lightMode, 0.125);
    background-color: $white;
  }
  &.dark {
    color: white;
    box-shadow: 0.4em 0.4em 0.4em rgba(black, 0.125);
    background-color: $darkBlue-darkMode;
  }

  .flag-svg {
    height: 10em;
    border-radius: 0.5em 0.5em 0 0;
  }

  .description__layout {
    padding: 1em 2em;

    .title {
      font-size: 1.2em;
      font-weight: 800;
    }
    .country-label {
      font-weight: 600;
    }
  }
}
</style>
