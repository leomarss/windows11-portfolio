<script>
import { store } from "../store/store";
import Explorer from "../components/partials/Explorer.vue";

export default {
  data() {
    return {
      store,

      currentDatetime: "",
      explorerName: "Links",
    };
  },

  components: {
    Explorer,
  },

  mounted() {
    this.formattedDateTime();
    setInterval(this.formattedDateTime, 1000);
  },

  methods: {
    formattedDateTime() {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();

      // Aggiungi zeri iniziali se necessario
      const formattedDay = day < 10 ? `0${day}` : day;
      const formattedMonth = month < 10 ? `0${month}` : month;
      const formattedHours = hours < 10 ? `0${hours}` : hours;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

      this.currentDatetime = `${formattedDay}/${formattedMonth}/${year} ${formattedHours}:${formattedMinutes}`;
    },
  },
};
</script>

<template>
  <Explorer :windowName="explorerName">
    <a v-for="link in store.links" :href="link.href" target="_blank" class="table-row">
      <div class="cell table-cell">
        <div class="file-name-col flex">
          <img class="file-type-icon" :src="link.icon" />
          <span>{{ link.name }}</span>
        </div>
      </div>
      <div class="cell table-cell">{{ currentDatetime }}</div>
      <div class="cell hidden xs:table-cell">Shortcut</div>
      <div class="cell hidden xs:table-cell text-right">0 KB</div>
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
  }
}
</style>
