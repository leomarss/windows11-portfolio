<script>
import { store } from "../store/store";
import Explorer from "../components/partials/Explorer.vue";
import FoldersExplorer from "../components/partials/FoldersExplorer.vue";

export default {
  data() {
    return {
      store,

      explorerName: this.$t("explorer.quick-access"),
    };
  },

  components: {
    Explorer,
    FoldersExplorer,
  },

  watch: {
    "$i18n.locale"(newLocale) {
      this.explorerName = this.$t("explorer.quick-access");
    },
  },
};
</script>

<template>
  <Explorer :windowName="explorerName">
    <FoldersExplorer />

    <div class="window-dropdown flex items-center">
      <svg stroke="currentColor" fill="#2e2e2e" stroke-width="0" viewBox="0 0 24 24" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path>
        </g>
      </svg>
      <h3 class="text-base font-light whitespace-nowrap ml-1 mr-4">{{ $t("this-pc.devices") }} (1)</h3>
      <hr class="w-full" />
    </div>

    <div class="second window-dropdown-content flex flex-col">
      <router-link :to="{ name: 'about-me' }" class="recent-file-link flex">
        <div class="file-name-col flex w-1/3">
          <img class="file-type-icon" src="/images/desktop/notes.png" />
          <span>{{ $t("desktop.about-me.name") }}</span>
        </div>
        <div class="recent-file-path">
          <span>{{ $t("explorer.this-pc") }}/Desktop/{{ $t("desktop.about-me.name") }}.txt</span>
        </div>
      </router-link>
    </div>
  </Explorer>
</template>

<style lang="scss" scoped>
@import "../assets/partials/variables";

.window-dropdown {
  margin-top: 20px;
  margin-bottom: 8px;
  hr {
    border-color: #2e2e2e;
  }
}

.window-dropdown-content {
  row-gap: 12px;
  column-gap: 20px;
  margin: 0 20px;

  .folder {
    .folder-content {
      padding: 5px 5px;
      &:hover {
        border-radius: 5px;
        background-color: #2e2e2e;
      }

      & > img {
        width: 50px;
      }

      .folder-details {
        margin-left: 5px;
      }
    }
  }
}

.second.window-dropdown-content {
  margin: 0 18px;
  .recent-file-link {
    border-radius: 2px;
    padding: 5px;

    &:hover {
      background-color: #2e2e2e;
    }

    .file-name-col {
      gap: 5px;
      .file-type-icon {
        width: 1rem;
      }
    }
  }
}
</style>
