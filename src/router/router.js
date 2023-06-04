import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Notepad from "../pages/Notepad.vue";
import Projects from "../pages/Projects.vue";
import Technologies from "../pages/Technologies.vue";
import Links from "../pages/Links.vue";
import QuickAccess from "../pages/QuickAccess.vue";
import DesktopExplorer from "../pages/DesktopExplorer.vue";
import Terminal from "../pages/Terminal.vue";

const username = "leonvrdo";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    // HOME
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: username,
      },
    },

    // ABOUT ME NOTEPAD
    {
      path: "/about-me",
      name: "about-me",
      component: Notepad,
      meta: {
        title: username + " | About me",
      },
    },

    // EXPLORER
    {
      path: "/explorer/projects",
      name: "projects",
      component: Projects,
      meta: {
        title: username + " | Projects",
      },
    },
    {
      path: "/explorer/technologies",
      name: "technologies",
      component: Technologies,
      meta: {
        title: username + " | Technologies",
      },
    },
    {
      path: "/explorer/links",
      name: "links",
      component: Links,
      meta: {
        title: username + " | Links",
      },
    },
    {
      path: "/explorer/quick-access",
      name: "quick-access",
      component: QuickAccess,
      meta: {
        title: username + " | Quick Access",
      },
    },
    {
      path: "/explorer/desktop",
      name: "desktop-explorer",
      component: DesktopExplorer,
      meta: {
        title: username + " | Desktop",
      },
    },

    // TERMINAL
    {
      path: "/terminal",
      name: "terminal",
      component: Terminal,
      meta: {
        title: username + " | Terminal",
      },
    },
  ],
});

export { router };
