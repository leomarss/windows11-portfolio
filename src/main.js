import { createApp } from "vue";
import { router } from "./router/router";
import { createI18n } from "vue-i18n";
import itTranslations from "./locales/it.json";
import enTranslations from "./locales/en.json";

// Title change
router.beforeEach((to, from, next) => {
  const pageTitle = to.meta.title;
  document.title = pageTitle;
  next();
});

import "./style.scss";
import App from "./App.vue";

const i18n = createI18n({
  locale: "it",
  fallbackLocale: "en",
  messages: {
    it: itTranslations,
    en: enTranslations,
  },
});

createApp(App).use(router).use(i18n).mount("#app");
