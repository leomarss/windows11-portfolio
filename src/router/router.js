import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Notepad from "../pages/Notepad.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about-me",
      name: "about-me",
      component: Notepad,
    },
  ],
});

export { router };
