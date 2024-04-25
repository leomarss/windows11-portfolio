<script>
import { store } from "../scripts/store";
import { i18n } from "../main";
import Explorer from "../components/partials/Explorer.vue";
import Datetime from "../components/partials/Datetime.vue";

export default {
  data() {
    return {
      store,

      currentDatetime: store.currentDatetime,
      links: [],
      explorerName: this.$t("desktop.links.name"),
    };
  },

  components: {
    Explorer,
    Datetime,
  },

  mounted() {
    this.updateLinks();
  },

  watch: {
    "$i18n.locale"(newLocale) {
      this.updateLinks();
      this.explorerName = this.$t("desktop.links.name");
    },
  },

  methods: {
    updateLinks() {
      this.links = i18n.global.tm("links");
    },
  },
};
</script>

<template>
  <Explorer :windowName="explorerName">
    <div class="table w-full text-left">
      <div class="table-header-group">
        <div class="table-row">
          <div class="cell table-cell w-[40%]">{{ $t("table-heading.name") }}</div>
          <div class="cell table-cell w-[25%]">{{ $t("table-heading.date-modified") }}</div>
          <div class="cell hidden xs:table-cell w-[20%]">{{ $t("table-heading.type") }}</div>
          <div class="cell hidden xs:table-cell w-[15%]">{{ $t("table-heading.size") }}</div>
        </div>
      </div>
      <div class="table-row-group">
        <a v-for="link in links" :href="link.href" target="_blank" class="content-row table-row">
          <div class="cell table-cell">
            <div class="file-name-col flex">
              <img class="file-type-icon" :src="link.icon" />
              <span>{{ link.name }}</span>
            </div>
          </div>
          <div class="cell table-cell"><Datetime /></div>
          <div class="cell hidden xs:table-cell">{{ link.type }}</div>
          <div class="cell hidden xs:table-cell text-right">0 KB</div>
        </a>
      </div>
    </div>
  </Explorer>
</template>

<style lang="scss" scoped>
@import "../assets/partials/variables";

.table-header-group .cell {
  padding: 5px;
  border-right: 1px solid #32323285;
  &:hover {
    background-color: #2e2e2e;
  }
}

.content-row:hover {
  background-color: #2e2e2e;
}

.cell {
  padding: 5px;
  vertical-align: middle;
}

.cell .file-name-col {
  gap: 5px;
  .file-type-icon {
    width: 1rem;
  }
}
</style>
