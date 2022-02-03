<template>
  <div class="details-wrapper">
    <div class="label">{{ labelName }}:</div>
    <div class="details--text">
      {{ text }}
    </div>
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
      if (this.valueArray.length) {
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
  display: flex;
}
.label {
  font-weight: 800;
  margin-right: 0.5ch;
}
</style>
