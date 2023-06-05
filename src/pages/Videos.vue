<script>
import { store } from "../store/store";
import Explorer from "../components/partials/Explorer.vue";

export default {
  data() {
    return {
      store,
      explorerName: "Videos",
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
    </div>
    <span class="cell block text-center">This folder is empty.</span>
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
