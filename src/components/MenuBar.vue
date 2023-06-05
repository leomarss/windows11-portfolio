<script>
export default {
  data() {
    return {
      currentTime: "",
      currentDate: "",

      toggleLang: false,
    };
  },
  mounted() {
    if (localStorage.getItem("lang") !== null) {
      this.$i18n.locale = localStorage.getItem("lang");
    }

    this.updateDateTime();
    setInterval(this.updateDateTime, 1000);
  },
  methods: {
    updateDateTime() {
      const currentDate = new Date();
      const hours = String(currentDate.getHours()).padStart(2, "0");
      const minutes = String(currentDate.getMinutes()).padStart(2, "0");
      const day = String(currentDate.getDate()).padStart(2, "0");
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const year = String(currentDate.getFullYear());

      this.currentTime = `${hours}:${minutes}`;
      this.currentDate = `${day}/${month}/${year}`;
    },

    changeLanguage(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem("lang", lang);
      this.toggleLang = false;
    },
  },
};
</script>

<template>
  <div class="menu-bar-container fixed w-full">
    <div class="menu-bar h-full flex relative">
      <!-- Central icons -->
      <div class="central-icons h-full flex gap-0.5 mx-auto">
        <button class="selected-item">
          <img class="w-full h-full" src="/images/menu-bar/windows.png" />
        </button>
        <router-link :to="{ name: 'quick-access' }" class="selected-item">
          <img class="w-full h-full" src="/images/menu-bar/explorer.png" />
        </router-link>
        <a href="https://vscode.dev/github/LeonardoMartignoni/windows11-portfolio" target="_blank" class="selected-item">
          <img class="w-full h-full" src="/images/menu-bar/vscode.png" />
        </a>
        <router-link :to="{ name: 'terminal' }" class="selected-item">
          <img class="w-full h-full" src="/images/menu-bar/terminal.png" />
        </router-link>
      </div>

      <!-- Right menu -->
      <div class="right-menu-bar h-full flex gap-0.5 absolute top-0 right-0">
        <div class="relative h-full">
          <div class="h-full" @click="toggleLang = !toggleLang">
            <span class="lang h-full flex items-center justify-center">
              {{ this.$i18n.locale == "it" ? "ITA" : "ENG" }}
            </span>
          </div>
          <div v-show="toggleLang" class="change-lang absolute bottom-[50px] w-full h-full flex items-center justify-center">
            <button class="lang" @click="changeLanguage(this.$i18n.locale == 'it' ? 'en' : 'it')">
              {{ this.$i18n.locale == "it" ? "ENG" : "ITA" }}
            </button>
          </div>
        </div>
        <button class="wifi-volume selected-item h-full flex gap-1 items-center">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" width="1.2em" height="1.2em" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M723 620.5C666.8 571.6 593.4 542 513 542s-153.8 29.6-210.1 78.6a8.1 8.1 0 0 0-.8 11.2l36 42.9c2.9 3.4 8 3.8 11.4.9C393.1 637.2 450.3 614 513 614s119.9 23.2 163.5 61.5c3.4 2.9 8.5 2.5 11.4-.9l36-42.9c2.8-3.3 2.4-8.3-.9-11.2zm117.4-140.1C751.7 406.5 637.6 362 513 362s-238.7 44.5-327.5 118.4a8.05 8.05 0 0 0-1 11.3l36 42.9c2.8 3.4 7.9 3.8 11.2 1C308 472.2 406.1 434 513 434s205 38.2 281.2 101.6c3.4 2.8 8.4 2.4 11.2-1l36-42.9c2.8-3.4 2.4-8.5-1-11.3zm116.7-139C835.7 241.8 680.3 182 511 182c-168.2 0-322.6 59-443.7 157.4a8 8 0 0 0-1.1 11.4l36 42.9c2.8 3.3 7.8 3.8 11.1 1.1C222 306.7 360.3 254 511 254c151.8 0 291 53.5 400 142.7 3.4 2.8 8.4 2.3 11.2-1.1l36-42.9c2.9-3.4 2.4-8.5-1.1-11.3zM448 778a64 64 0 1 0 128 0 64 64 0 1 0-128 0z"
            ></path>
          </svg>
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        </button>
        <button class="date selected-item h-full flex flex-col justify-center text-right">
          <p class="w-full">{{ currentTime }}</p>
          <p class="w-full">{{ currentDate }}</p>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/partials/variables";

.menu-bar-container {
  height: $menu-bar-h;
  border-top: 1px solid #3f3f3f;
  background-color: #212121;
  padding: 5px;
  z-index: 100;

  .menu-bar {
    .central-icons {
      & > * {
        padding: 8px;
        aspect-ratio: 1;
      }
    }

    .right-menu-bar {
      .lang {
        cursor: pointer;
        min-width: 45px;
        font-size: 12px;
        padding: 8px;
        &:hover {
          background-color: #2e2e2e;
          border-radius: 5px;
        }
      }

      .wifi-volume {
        padding: 8px;
      }

      .date {
        font-size: 12px;
        padding: 0px 8px;
      }

      .change-lang {
        border-radius: 5px;
        background-color: #212121;
        border: 1px solid #3f3f3f;
      }
    }
  }
}

.selected-item {
  transition: 0.15s;
  &:hover {
    background-color: #2e2e2e;
    border-radius: 5px;
  }
}
</style>
