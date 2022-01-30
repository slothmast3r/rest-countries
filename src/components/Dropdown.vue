<template>
  <div class="dropdown-wrapper" >
    <div class="header-dropdown" :class="$store.getters.darkModeState" @click="showDropdown = !showDropdown">
      <div>
      {{ headerText }}
      </div>
      <darkarrow class="arrow"  :class="showDropdown ? 'down' : 'up'" />
    </div>
    <div class="elements-wrapper" :class="$store.getters.darkModeState" v-if="showDropdown">
      <div v-for="el in list" @click="el.checked = !el.checked" :key="el.key" class="element">
        {{el.name }} {{ el.checked ? '+': ''}}
      </div>
    </div>
  </div>
</template>

<script>
import Darkarrow from "@/assets/darkarrow";
export default {
  name: "Dropdown",
  components: { Darkarrow },
  props:{
    list: {
      type: Array,
      required: true,
    }
  },
  computed:{
    headerText(){
      let text = ""
      for (let i = 0; i < this.list.length; i++) {
        if(this.list[i].checked)
          text = text + this.list[i].name + ', '
      }
      if(text)
        return text.slice(0, -2)
      else
        return 'Filter by region'
    },
  },
  data() {
    return {
      showDropdown: false,
    };
  },
};
</script>

<style scoped lang="scss">
.dropdown-wrapper{
  position: relative;
  user-select: none;
  cursor: pointer;
  .header-dropdown{
    display: flex;
    border-radius: 0.25em;
    padding: 1.2em;
    justify-content: space-between;
    transition: all 1s ease-in-out;
    width: 15em;
    &.light{
      color: black;
      box-shadow: -0.4em -0.4em 1em rgba($darkgray-lightMode, 0.125);
      background-color: $white;
    }
    &.dark{
      color: white;
      box-shadow: -0.4em -0.4em 1em rgba(black, 0.125);
      background-color: $darkBlue-darkMode;
    }
    .arrow{
      transition: transform 150ms ease-in-out;
      &.up{

      }
      &.down{
        transform: rotate(180deg);
      }
    }
  }
  .elements-wrapper{
    margin-top: 0.250em;
    position: absolute;
    border-radius: 0.25em;
    padding: 1.2em;
    transition: all 1s ease-in-out;
    width: 15em;
    z-index: 1;
    &.light{
      color: black;
      background-color: $white;
    }
    &.dark{
      color: white;
      background-color: $darkBlue-darkMode;
    }
    .element{
      margin-top: 0.25em;
    }
  }
}

</style>
