import { reactive } from "vue";
const githubUsername = "LeonardoMartignoni";

export const store = reactive({
  projects: [
    {
      name: "deliveboo-frontoffice",
      link: `https://github.com/${githubUsername}/deliveboo-frontoffice`,
      dateModified: "29/05/2023 18:28",
      type: "Shortcut",
      size: "95,5 MB",
    },
    {
      name: "deliveboo-backoffice",
      link: `https://github.com/${githubUsername}/deliveboo-backoffice`,
      dateModified: "29/05/2023 16:59",
      type: "Shortcut",
      size: "171,1 MB",
    },
    {
      name: "ecommerce-product-page",
      link: `https://github.com/${githubUsername}/ecommerce-product-page`,
      dateModified: "15/05/2023 22:28",
      type: "Shortcut",
      size: "61,8 MB",
    },
    {
      name: "boolzapp",
      link: `https://github.com/${githubUsername}/vue-boolzapp`,
      dateModified: "17/02/2023 10:13",
      type: "Shortcut",
      size: "2,2 MB",
    },
    {
      name: "spotify-web",
      link: `https://github.com/${githubUsername}/html-css-spotifyweb`,
      dateModified: "11/01/2023 13:10",
      type: "Shortcut",
      size: "16,8 MB",
    },
    {
      name: "boolflix",
      link: `https://github.com/${githubUsername}/vite-boolflix`,
      dateModified: "07/03/2023 08:50",
      type: "Shortcut",
      size: "89,6 MB",
    },
    {
      name: "dropbox-replica",
      link: `https://github.com/${githubUsername}/htmlcss-dropbox`,
      dateModified: "15/12/2022 15:05",
      type: "Shortcut",
      size: "4,4 MB",
    },
    {
      name: "discord-replica",
      link: `https://github.com/${githubUsername}/htmlcss-discord`,
      dateModified: "06/12/2022 17:49",
      type: "Shortcut",
      size: "3,8 MB",
    },
  ],

  technologies: [
    {
      name: "HTML",
      icon: "/images/technologies/html.png",
    },
    {
      name: "CSS",
      icon: "/images/technologies/css.png",
    },
    {
      name: "Javascript",
      icon: "/images/technologies/js.png",
    },
    {
      name: "PHP",
      icon: "/images/technologies/php.png",
    },
    {
      name: "MySQL",
      icon: "/images/technologies/mysql.png",
    },
    {
      name: "Vue.js",
      icon: "/images/technologies/vue.png",
    },
    {
      name: "Laravel",
      icon: "/images/technologies/laravel.png",
    },
  ],

  links: [
    {
      name: "Linkedin",
      icon: "/images/links/linkedin.png",
      href: "https://www.linkedin.com/in/leonardo-martignoni/",
    },
    {
      name: "Github",
      icon: "/images/links/github.png",
      href: "https://github.com/LeonardoMartignoni",
    },
    {
      name: "Email",
      icon: "/images/links/email.png",
      href: "mailto:leonardo.martignonii@gmail.com",
    },
    {
      name: "Resume (Curriculum Vitae)",
      icon: "/images/links/cv.png",
      href: "https://drive.google.com/file/d/1n4pFsMisrQxFfmU4kdg8gU0_YA4ncJAA/view?usp=sharing",
    },
  ],

  isDragging: false,
});
