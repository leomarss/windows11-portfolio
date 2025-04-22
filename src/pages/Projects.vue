<script>
import { store } from "../scripts/store";
import axios from "axios";
import moment from "moment";
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
      this.explorerName = this.$t("desktop.projects.name");
    },
  },

  methods: {
    async updateProjects() {
      try {
        const response = await axios.get("https://api.github.com/users/leomarss/repos", {
          params: {
            sort: "updated",
            per_page: 10,
          },
        });

        const exclude = ["leomarss"];
        this.projects = response.data
          .filter((repo) => !exclude.includes(repo.name))
          .map((repo) => ({
            name: repo.name,
            link: repo.html_url,
            dateModified: moment(repo.updated_at).format("DD/MM/YYYY HH:mm"),
            type: "Shortcut",
            size: this.convertSize(repo.size),
          }));
      } catch (error) {
        console.error("error in getting github projects:", error);
      }
    },

    convertSize(kb) {
      if (kb === 0) return "0 KB";
      const mb = kb / 1024;
      return mb >= 1 ? `${mb.toFixed(1).replace(".", ",")} MB` : `${kb.toFixed(1).replace(".", ",")} KB`;
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
          <div class="cell hidden xs:table-cell">{{ this.$i18n.locale == "it" ? "Scorciatoia" : "Shortcut" }}</div>
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
