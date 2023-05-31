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
      meta: {
        title: "leondvro",
      },
    },
    {
      path: "/about-me",
      name: "about-me",
      component: Notepad,
      meta: {
        title: "leondvro | About me",
      },
    },
  ],
});

export { router };
