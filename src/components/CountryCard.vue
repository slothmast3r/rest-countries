<template>
  <div className="card-wrapper">
    <img :src="country.flags.svg" class="flag-svg" :alt="'Flag: ' + country.name">
    <div className="description__layout">
      <div className="title">
        {{ country.name }}
      </div>
      <div>
        Population {{ country.population }}
      </div>
      <div>
        Region {{ country.region }}
      </div>
      <div>
        Capital {{ country.capital }}
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
      required: true
    }
  }
}
</script>

<style scoped lang="scss">

.card-wrapper {
  display: flex;
  flex-direction: column;
  border-radius: 0.5em;
  background: $white;

  width: 19em;
  box-shadow: 0.4em 0.4em 0.4em rgba($darkgray-lightMode, 0.125);

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
  }
}
</style>