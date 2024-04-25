<script>
import { store } from "../scripts/store";
import { i18n } from "../main";
import Explorer from "../components/partials/Explorer.vue";

export default {
  data() {
    return {
      store,

      projects: [],
      explorerName: this.$t("desktop.projects.name"),
    };
  },

  components: {
    Explorer,
  },

  mounted() {
    this.updateProjects();
  },

  watch: {
    "$i18n.locale"(newLocale) {
      this.updateProjects();
      this.explorerName = this.$t("desktop.projects.name");
    },
  },

  methods: {
    updateProjects() {
      this.projects = i18n.global.tm("projects");
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
        <a v-for="project in projects" :href="project.link" target="_blank" class="content-row table-row">
          <div class="cell table-cell">
            <div class="file-name-col flex">
              <img class="file-type-icon" src="/images/folder/github.png" />
              <span>{{ project.name }}</span>
            </div>
          </div>
          <div class="cell table-cell">{{ project.dateModified }}</div>
          <div class="cell hidden xs:table-cell">{{ project.type }}</div>
          <div class="cell hidden xs:table-cell text-right">{{ project.size }}</div>
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
    filter: invert(100%);
  }
}
</style>
