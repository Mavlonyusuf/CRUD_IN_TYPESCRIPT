<template>
  <div class="bg-darkBars max-w-screen min-h-screen">
    <div>
      <Navbar />
    </div>
    <div
      class="w-11/12 bg-darkContents mt-10 mx-auto border-darkContents rounded-lg border-transparent h-auto"
    >
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts">
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>
<style>
@import url(https://fonts.googleapis.com/css2?family=Ubuntu:wght@100;200;300;400;500;600;700&display=swap);

body {
  font-family: "Ubuntu", sans-serif !important;
}
</style>
