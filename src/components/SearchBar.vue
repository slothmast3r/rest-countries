<template>
  <div class="search-wrapper" :class="$store.getters.darkModeState">
    <img class="inner-icon" src="@/assets/search-interface-symbol.png" />
    <input
      class="search-input"
      type="text"
      :value="value"
      @input="$emit('input', $event)"
      placeholder="Search for a country..."
    />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props:{
    value: {
      required: true,
      type: String,
    }
  },
  data(){
    return {
      input: this.value,
    }
  },
};
</script>

<style scoped lang="scss">

.search-wrapper {
  position: relative;
  font-size: 1em;
  padding: 1.2em;
  box-shadow: 0 0 0.5em rgba($veryDarkBlue-lightMode, 0.3125);
  border: 0.0625em solid white;
  box-sizing: border-box;
  width: 30em;
  height: fit-content;

  outline: none;
  border-radius: 0.25em;

  transition: all 150ms ease-in-out;
  display: flex;
  align-items: center;

  &.light {
    color: black;
    box-shadow: 0 0 0.5em rgba($veryDarkBlue-lightMode, 0.3125);
    background-color: $white;

    .search-input::placeholder {
      color: black;
    }
    &:focus-within {
      box-shadow: 0 0 0.5em rgba($veryDarkBlue-lightMode, 1);
    }
  }
  &.dark {
    color: white;
    border: 0.0625em solid $darkBlue-darkMode;
    box-shadow: 0 0 0.5em rgba(black, 0.3125);
    background-color: $darkBlue-darkMode;
    .search-input::placeholder {
      color: rgba(white, 0.7);
    }
    .search-input {
       color: white;
     }

    &:focus-within {
      box-shadow: 0 0 0.5em rgba(black, 1);
    }
  }
  .inner-icon {
    width: 1em;
    padding: 0 0.5em;
  }
  .search-input {
    margin-left: 1em;
    outline: none;
    border: none;
    background: inherit;
    width: 100%;
  }
}
</style>
