import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Activities from "../views/Activities.vue";
import Settings from "../views/Settings.vue";

// import Activities from "../views/Activities";
import AppLayout from "../components/layout/AppLayout.vue";

const routes = [
  {
    path: "/",
    component: AppLayout,
    children: [
      {
        path: "",
        name: "dashboard",
        component: Dashboard,
      },
      {
        path: "/activities",
        name: "activities",
        component: Activities,
      },
      {
        path: "/settings",
        name: "settings",
        component: Settings,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
