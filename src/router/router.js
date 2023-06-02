import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Notepad from "../pages/Notepad.vue";
import Projects from "../pages/Projects.vue";
import Technologies from "../pages/Technologies.vue";

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
    {
      path: "/projects",
      name: "projects",
      component: Projects,
      meta: {
        title: "leondvro | Projects",
      },
    },
    {
      path: "/technologies",
      name: "technologies",
      component: Technologies,
      meta: {
        title: "leondvro | Technologies",
      },
    },
  ],
});

export { router };
