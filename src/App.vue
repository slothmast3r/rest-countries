<template>
  <div class="countries-wrapper">
    <div class="header">
      <div class="header-title">Where in the world?</div>
    </div>
    <div class="body" :class="false ? 'dark' : 'light'">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Nunito Sans", sans-serif;
}
.header {
  box-shadow: 0.4em 0.4em 0.4em rgba($darkgray-lightMode, 0.125);
  z-index: 2;
  position: relative;
  .header-title {
    padding: 1em 3em;
    font-weight: 800;
    font-size: 1.5rem;
  }
}
.body {
  padding: 3em 5em;
  background: $veryLightGray-lightMode;
}
</style>
