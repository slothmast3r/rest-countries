import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import CountriesLayout from "../views/CountriesLayout.vue";
import CountryDetails from "../views/CountryDetails.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "CountriesLayout",
    component: CountriesLayout,
  },
  {
    path: "/:countryCode",
    name: "CountryDetails",
    component: CountryDetails,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
