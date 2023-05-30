<script>
import MenuBar from "./components/MenuBar.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  components: {
    MenuBar,
  },
};
</script>

<template>
  <div class="desktop"></div>
  <MenuBar />
</template>

<style lang="scss">
@import "./assets/partials/variables";

.desktop {
  height: calc(100vh - $menu-bar-h);
}
</style>
