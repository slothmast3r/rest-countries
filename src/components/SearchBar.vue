<template>
  <div class="search-wrapper">
    <img class="inner-icon" src="@/assets/search-interface-symbol.png" />
    <input
      class="search-input"
      type="text"
      @input="$emit('input')"
      v-model="search"
      placeholder="Search for a country..."
    />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/variables";

.search-wrapper {
  position: relative;
  font-size: 1em;
  padding: 1.2em;
  box-shadow: 0 0 0.5em rgba($veryDarkBlue-lightMode, 0.3125);
  border: 0.0625em solid white;
  box-sizing: border-box;
  width: 30em;

  outline: none;
  border-radius: 0.25em;

  transition: all 150ms ease-in-out;
  display: flex;
  align-items: center;
  background: white;
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
  &:focus-within {
    box-shadow: 0 0 0.5em rgba($veryDarkBlue-lightMode, 1);
  }
}
</style>
