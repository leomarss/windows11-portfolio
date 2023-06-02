<script>
import { store } from "../store/store";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="desktop flex flex-col relative">
    <div class="item-list flex items-start gap-2 h-full">
      <router-link :to="{ name: 'about-me' }" class="item relative flex flex-col items-center">
        <img src="/images/desktop/notes.png" />
        <p>About me</p>
      </router-link>
      <router-link :to="{ name: 'projects' }" class="item flex flex-col items-center">
        <img src="/images/desktop/folder.png" />
        <p>Projects</p>
      </router-link>
      <router-link :to="{ name: 'technologies' }" class="item flex flex-col items-center">
        <img src="/images/desktop/folder.png" />
        <p>Technologies</p>
      </router-link>
      <router-link :to="{ name: 'links' }" class="item flex flex-col items-center">
        <img src="/images/desktop/links.png" />
        <p>Links</p>
      </router-link>
    </div>
    <div class="item-list">
      <!-- Recycle bin -->
      <div class="item flex flex-col items-center">
        <img src="/images/desktop/trash.png" />
        <p>Recycle Bin</p>
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
  max-height: -webkit-fill-available;
  padding: 8px;

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
