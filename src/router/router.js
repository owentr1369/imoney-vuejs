import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "../views/AboutPage.vue";
import HomePage from "../views/HomePage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    name: "about-route",
    component: AboutPage,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
