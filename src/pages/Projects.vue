<script>
import { store } from "../store/store";
import Explorer from "../components/partials/Explorer.vue";

export default {
  data() {
    return {
      store,
      explorerName: "Projects",
    };
  },

  components: {
    Explorer,
  },
};
</script>

<template>
  <Explorer :windowName="explorerName">
    <a v-for="project in store.projects" :href="project.link" target="_blank" class="table-row">
      <div class="cell table-cell">
        <div class="file-name-col flex">
          <img class="file-type-icon" src="/images/folder/github.png" />
          <span>{{ project.name }}</span>
        </div>
      </div>
      <div class="cell table-cell">{{ project.dateModified }}</div>
      <div class="cell hidden xs:table-cell">Shortcut</div>
      <div class="cell hidden xs:table-cell text-right">{{ project.size }}</div>
    </a>
  </Explorer>
</template>

<style lang="scss" scoped>
@import "../assets/partials/variables";

.table-row:hover {
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
