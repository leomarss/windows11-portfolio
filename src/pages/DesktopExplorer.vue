<script>
import { store } from "../store/store";
import Explorer from "../components/partials/Explorer.vue";

export default {
  data() {
    return {
      store,
      explorerName: "Desktop",
    };
  },

  components: {
    Explorer,
  },
};
</script>

<template>
  <Explorer :windowName="explorerName">
    <div class="table w-full text-left">
      <div class="table-header-group">
        <div class="table-row">
          <div class="cell table-cell w-[40%]">Name</div>
          <div class="cell table-cell w-[25%]">Date modified</div>
          <div class="cell hidden xs:table-cell w-[20%]">Type</div>
          <div class="cell hidden xs:table-cell w-[15%]">Size</div>
        </div>
      </div>
      <div class="table-row-group">
        <router-link v-for="item in store.desktop" :to="{ name: item.route }" class="content-row table-row">
          <div class="cell table-cell">
            <div class="file-name-col flex">
              <img class="file-type-icon" :src="item.icon" />
              <span>{{ item.name }}</span>
            </div>
          </div>
          <div class="cell table-cell">{{ item.dateModified }}</div>
          <div class="cell hidden xs:table-cell">{{ item.type }}</div>
          <div class="cell hidden xs:table-cell text-right">{{ item.size }}</div>
        </router-link>
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
