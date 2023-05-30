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
  <div class="menu-bar flex">
    <!-- Icons -->
    <div class="central-icons h-full flex">
      <button class="selected-item">
        <img class="max-w-full max-h-full" src="/images/menu-bar/windows.png" />
      </button>
      <button class="selected-item">
        <img class="max-w-full max-h-full" src="/images/menu-bar/explorer.png" />
      </button>
      <button class="selected-item">
        <img class="max-w-full max-h-full" src="/images/menu-bar/vscode.png" />
      </button>
      <button class="selected-item">
        <img class="max-w-full max-h-full" src="/images/menu-bar/terminal.png" />
      </button>
    </div>

    <div class="left-menu-bar">
      <button class="selected-item lang">
        <span>ENG</span>
      </button>
    </div>
  </div>
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
  padding: 5px;

  .central-icons {
    & > button {
      padding: 8px;
      border-radius: 5px;
    }
  }
}

.selected-item:hover {
  background-color: #2e2e2e;
}
</style>
