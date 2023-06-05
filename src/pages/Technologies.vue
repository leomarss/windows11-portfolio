<script>
import { store } from "../store/store";
import { i18n } from "../main";
import Explorer from "../components/partials/Explorer.vue";

export default {
  data() {
    return {
      store,

      currentDatetime: "",
      technologies: [],
      explorerName: this.$t("desktop[2].name"),
    };
  },

  components: {
    Explorer,
  },

  mounted() {
    this.updateTechnologies();
    this.formattedDateTime();
    setInterval(this.formattedDateTime, 1000);
  },

  watch: {
    "$i18n.locale"(newLocale) {
      this.updateTechnologies();
      this.explorerName = this.$t("desktop[2].name");
    },
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
    updateTechnologies() {
      this.technologies = i18n.global.tm("technologies");
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
        <div v-for="technology in technologies" class="content-row table-row cursor-pointer">
          <div class="cell table-cell">
            <div class="file-name-col flex">
              <img class="file-type-icon" :src="technology.icon" />
              <span>{{ technology.name }}</span>
            </div>
          </div>
          <div class="cell table-cell">{{ currentDatetime }}</div>
          <div class="cell hidden xs:table-cell">{{ technology.type }}</div>
          <div class="cell hidden xs:table-cell text-right">0 KB</div>
        </div>
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
