<script>
import { store } from "../scripts/store";
import Explorer from "../components/partials/Explorer.vue";
import FoldersExplorer from "../components/partials/FoldersExplorer.vue";

export default {
  data() {
    return {
      store,

      explorerName: this.$t("explorer.this-pc"),
    };
  },

  components: {
    Explorer,
    FoldersExplorer,
  },

  watch: {
    "$i18n.locale"(newLocale) {
      this.explorerName = this.$t("explorer.this-pc");
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
      <h3 class="text-base font-light whitespace-nowrap ml-1 mr-4">{{ $t("this-pc.devices") }} (2)</h3>
      <hr class="w-full" />
    </div>

    <div class="second window-dropdown-content grid grid-cols-2">
      <div class="folder">
        <div class="folder-content flex">
          <img src="/images/folder/primary-disk.png" />
          <div class="folder-details flex flex-col">
            <span>256GB SSD (C:)</span>
            <div class="space-bar relative">
              <div class="fill-space-bar absolute top-0 left-0 h-full"></div>
            </div>
            <span>62 GB {{ $t("disk-free-space") }} 256 GB</span>
          </div>
        </div>
      </div>
      <div class="folder">
        <div class="folder-content flex">
          <img src="/images/folder/secondary-disk.png" />
          <div class="folder-details flex flex-col">
            <span>4TB HDD (D:)</span>
            <div class="space-bar relative">
              <div class="hdd fill-space-bar absolute top-0 left-0 h-full"></div>
            </div>
            <span>3677 GB {{ $t("disk-free-space") }} 4000 GB</span>
          </div>
        </div>
      </div>
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

        .space-bar {
          height: 15px;
          background-color: #fff;
          width: 10rem;

          .fill-space-bar {
            width: 71%;
            background-color: #26a0da;
          }

          .hdd.fill-space-bar {
            width: 8%;
          }
        }
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
