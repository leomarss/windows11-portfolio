<script>
import { store } from "../scripts/store";
import { i18n } from "../main";

export default {
  data() {
    return {
      store,

      desktop: [],
    };
  },

  mounted() {
    this.updateDesktop();
  },

  watch: {
    "$i18n.locale"(newLocale) {
      this.updateDesktop();
    },
  },

  methods: {
    updateDesktop() {
      this.desktop = i18n.global.tm("desktop");
    },
  },
};
</script>

<template>
  <div class="desktop flex flex-col relative">
    <div class="item-list flex items-start gap-2 h-full">
      <router-link v-for="item in desktop" :to="{ name: item.route }" class="item flex flex-col items-center">
        <img :src="item.icon" />
        <p>{{ item.name }}</p>
      </router-link>
    </div>
    <div class="item-list">
      <!-- Recycle bin -->
      <div class="item flex flex-col items-center">
        <img src="/images/desktop/trash.png" />
        <p>{{ $t("recycle-bin") }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/partials/variables";

.desktop {
  background-image: url("/images/wallpaper-waves.jpg");
  background-size: cover;
  background-position: center;

  height: calc(100vh - $menu-bar-h);
  height: calc(100svh - $menu-bar-h);
  max-height: -webkit-fill-available;
  padding: 8px;
  overflow: hidden;

  .item {
    z-index: 1;
    cursor: pointer;
    width: 80px;
    padding: 0 5px;
    transition: 0.1s;

    &:hover {
      background-color: #2e2e2e;
      border-radius: 5px;
    }
    &.item-selected {
      background-color: #2e2e2e;
      border-radius: 5px;
    }

    img {
      width: 40px;
    }
    p {
      font-size: 0.7rem;
    }
  }
}
</style>
