import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import adminLayout from "@/layout/admin";

const routes = [
  {
    path: "/admin",
    redirect: "/admin/favoritesList",
    component: adminLayout,
    children: [
      {
        path: "favoritesList",
        name: "favoritesList",
        component: () => import("../views/admin/favorites/list.vue")
      },
      {
        path: "favoritesEdit/:id",
        name: "favoritesEdit",
        props: true,
        component: () => import("../views/admin/favorites/edit.vue")
      },
      {
        path: "favoritesCreate",
        name: "favoritesCreate",
        component: () => import("../views/admin/favorites/edit.vue")
      }
    ]
  }
];

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
