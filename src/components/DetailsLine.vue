<template>
  <div class="details-wrapper">
    <span class="label">{{ labelName }}:</span>
    <span class="details--text">
      {{ text }}
    </span>
  </div>
</template>

<script>
export default {
  name: "DetailsLine",
  props: {
    labelName: {
      type: String,
      default: "",
    },
    value: {
    },
    valueArray: {
      type: Array,
      default: undefined,
    },
    isArrayOfObject: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    text () {
      if (this.value) {
        return this.value;
      }
      if (this.valueArray) {
        let res = "";
        if(this.isArrayOfObject) {
          for (let i = 0; i < this.valueArray.length; i++) {
            res = res + ", " + this.valueArray[i].name;
          }
        }
        else{
          for (let i = 0; i < this.valueArray.length; i++) {
            res = res + ", " + this.valueArray[i];
          }
        }
        return res.substr(2);
      }
      return ''
    },
  },
};
</script>

<style scoped lang="scss">
.details-wrapper {
  margin: 0.6em 0;
  width: 15em;
}
.label {
  font-weight: 800;
  margin-right: 0.5ch;
}
</style>
