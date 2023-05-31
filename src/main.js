import { createApp } from "vue";
import { router } from "./router/router";

// Title change
router.beforeEach((to, from, next) => {
  const pageTitle = to.meta.title;
  document.title = pageTitle;
  next();
});

import "./style.scss";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
