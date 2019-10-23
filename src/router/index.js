import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import adminLayout from "@/layout/admin";

const routes = [
  {
    path: "/admin",
    redirect: "/admin/categoriesList",
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
      },

      {
        path: "articlesList",
        name: "articlesList",
        component: () => import("../views/admin/articles/list.vue")
      },
      {
        path: "articlesEdit/:id",
        name: "articlesEdit",
        props: true,
        component: () => import("../views/admin/articles/edit.vue")
      },
      {
        path: "articlesCreate",
        name: "articlesCreate",
        component: () => import("../views/admin/articles/edit.vue")
      },

      {
        path: "categoriesList",
        name: "categoriesList",
        component: () => import("../views/admin/categories/list.vue")
      },
      {
        path: "categoriesEdit/:id",
        name: "categoriesEdit",
        props: true,
        component: () => import("../views/admin/categories/edit.vue")
      },
      {
        path: "categoriesCreate",
        name: "categoriesCreate",
        component: () => import("../views/admin/categories/edit.vue")
      }
    ]
  }
];

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
