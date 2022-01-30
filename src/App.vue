<template>
  <div class="countries-wrapper" :class="$store.getters.darkModeState">
    <div class="header" :class="$store.getters.darkModeState">
      <div class="header-title">Where in the world?</div>

      <div
        @click="$store.commit('changeDarkModeState')"
        class="dark-mode-button"
      >
        <img
          v-if="!$store.state.darkMode"
          class="moon-image"
          alt="moon"
          src="@/assets/moon-6679.svg"
        />
        <img
          v-else
          class="moon-image"
          alt="moon"
          src="@/assets/dark-mode-6682.svg"
        />
        Dark Mode
      </div>
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  transition: background-color 1s ease-in-out;
}
#app {
  font-family: "Nunito Sans", sans-serif;
}

.countries-wrapper {
  transition: background-color 1s ease-in-out, color 1s ease-in-out;
  &.light {
    background-color: $veryLightGray-lightMode;
    color: black;
  }
  &.dark {
    background-color: $veryDarkBlue-darkMode;
    color: $white;
  }
  .header {
    z-index: 2;
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 1.5em 4.5em;
    transition: background-color 1s ease-in-out, color 1s ease-in-out,
      box-shadow 1s ease-in-out;

    &.light {
      background-color: $white;
      box-shadow: 0.4em 0.4em 0.4em rgba($darkgray-lightMode, 0.125);
      color: black;
    }
    &.dark {
      box-shadow: 0.4em 0.4em 0.4em rgba(black, 0.125);
      background-color: $darkBlue-darkMode;
      color: $white;
    }

    .header-title {
      font-size: 1.5em;
      font-weight: 800;
    }

    .dark-mode-button {
      cursor: pointer;
      user-select: none;
      display: flex;
      align-items: center;
      gap: 0.5em;

      .moon-image {
        width: 1em;
      }
    }
  }

  .body {
    padding: 3em 5em;
  }
}
</style>
