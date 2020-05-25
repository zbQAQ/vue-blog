import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import adminLayout from "@/layout/admin";
import webLayout from "@/layout/web";
import login from "@/views/admin/login/login.vue";

const routes = [
  {
    path: "/",
    redirect: "/start"
  },
  {
    path: "/start",
    name: "startPage",
    component: () => import("../views/web/startPage/startPage.vue")
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
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
      },

      {
        path: "userList",
        name: "userList",
        component: () => import("../views/admin/users/list.vue")
      },
      {
        path: "userEdit/:id",
        name: "userEdit",
        props: true,
        component: () => import("../views/admin/users/edit.vue")
      },
      {
        path: "userCreate",
        name: "userCreate",
        component: () => import("../views/admin/users/edit.vue")
      },

      {
        path: "customNavList",
        name: "customNavList",
        component: () => import("../views/admin/customNav/list.vue")
      },
      {
        path: "customNavEdit/:id",
        name: "customNavEdit",
        props: true,
        component: () => import("../views/admin/customNav/edit.vue")
      },
      {
        path: "customNavCreate",
        name: "customNavCreate",
        component: () => import("../views/admin/customNav/edit.vue")
      },

      {
        path: "bannerList",
        name: "bannerList",
        component: () => import("../views/admin/bannerAdm/list.vue")
      },
      {
        path: "bannerEdit/:id",
        name: "bannerEdit",
        props: true,
        component: () => import("../views/admin/bannerAdm/edit.vue")
      },
      {
        path: "bannerCreate",
        name: "bannerCreate",
        component: () => import("../views/admin/bannerAdm/edit.vue")
      }
    ]
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/web/home/home.vue")
  },
  {
    path: "/w",
    redirect: "/w/artcle",
    component: webLayout,
    children: [
      {
        path: "bird",
        name: "bird",
        component: () => import("../views/web/flyBird/flyBird.vue")
      },
      {
        path: "mineSweeper",
        name: "mineSweeper",
        component: () => import("../views/web/mineSweeper/mineSweeper.vue")
      },
      {
        path: "artcle",
        name: "artcle",
        component: () => import("../views/web/artcle/artcle.vue")
      },
      {
        path: "artcle/:artcleId",
        name: "artcleDetail",
        component: () => import("../views/web/artcle/artcleDetail.vue")
      }
    ]
  },
  {
    path: "/ripple",
    name: "ripple",
    component: () => import("../views/web/test/rippleBtn.vue")
  }
];

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
