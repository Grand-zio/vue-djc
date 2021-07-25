import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "login",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/channel",
    name: "channel",
    component: () => import("../views/Channel.vue"),
  },
  {
    path: "/account",
    name: "account",
    component: () => import("../views/Account.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
