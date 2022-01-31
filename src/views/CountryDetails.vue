<template>
  <div>
    <div>
      <div class="back-button">
        <left-arrow/>
        Back
      </div>
    </div>
    {{ $route.params.countryCode }}
  </div>
</template>

<script>
import LeftArrow from "@/assets/left-arrow";
export default {
  name: "CardDetails",
  components: { LeftArrow }
};
</script>

<style scoped>

</style>