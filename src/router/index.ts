import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CountriesLayout from "../views/CountriesLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "CountriesLayout",
    component: CountriesLayout,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
