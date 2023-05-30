<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="desktop"></div>
  <div class="menu-bar">content</div>
</template>

<style lang="scss">
$menu-bar-h: 50px;

.desktop {
  height: calc(100vh - $menu-bar-h);
}

.menu-bar {
  height: $menu-bar-h;
  border-top: 1px solid #3f3f3f;
  background-color: #212121;
}
</style>
