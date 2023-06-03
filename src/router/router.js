import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Notepad from "../pages/Notepad.vue";
import Projects from "../pages/Projects.vue";
import Technologies from "../pages/Technologies.vue";
import Links from "../pages/Links.vue";
import Terminal from "../pages/Terminal.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "leonvrdo",
      },
    },
    {
      path: "/about-me",
      name: "about-me",
      component: Notepad,
      meta: {
        title: "leonvrdo | About me",
      },
    },
    {
      path: "/explorer/projects",
      name: "projects",
      component: Projects,
      meta: {
        title: "leonvrdo | Projects",
      },
    },
    {
      path: "/explorer/technologies",
      name: "technologies",
      component: Technologies,
      meta: {
        title: "leonvrdo | Technologies",
      },
    },
    {
      path: "/explorer/links",
      name: "links",
      component: Links,
      meta: {
        title: "leonvrdo | Links",
      },
    },
    {
      path: "/terminal",
      name: "terminal",
      component: Terminal,
      meta: {
        title: "leonvrdo | Terminal",
      },
    },
  ],
});

export { router };
