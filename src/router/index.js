// History 不帶#
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    // 分館介紹
    {
      path: "/branch_intro",
      name: "branch_intro",
      component: () => import("../views/branch_intro.vue"),
    },
    // // 分館-個別介紹
    {
      path: "/branch_detail",
      name: "branch_detail",
      component: () => import("../views/branch_detail.vue"),
    },
    // // 分館-房型介紹
    {
      path: "/branch_room",
      name: "branch_room",
      component: () => import("../views/branch_room.vue"),
    },
    // // 最新消息
    {
      path: "/news_update",
      name: "news_update",
      component: () => import("../views/news_update.vue"),
    },
    // // 最新消息_細節
    // {
    //   path: "/news_detail",
    //   name: "news_detail",
    //   component: () => import("../views/news_detail.vue"),
    // },
    // // 最新消息_細節
    {
      path: "/contact_us",
      name: "contact_us",
      component: () => import("../views/contact_us.vue"),
    },
    // 後台-登入
    {
      path: "/backend_login",
      name: "backend_login",
      component: () => import("../views/backend_login.vue"),
    },
    // 後台-banner管理
    {
      path: "/backend_banner_manage",
      name: "backend_banner_manage",
      component: () => import("../views/backend_banner_manage.vue"),
    },
    // 後台-分館資訊管理
    {
      path: "/backend_branch_manage",
      name: "backend_branch_manage",
      component: () => import("../views/backend_branch_manage.vue"),
    },
    // 後台-分館房型管理
    {
      path: "/backend_room_manage",
      name: "backend_room_manage",
      component: () => import("../views/backend_room_manage.vue"),
    },
    // 後台-最新消息管理
    {
      path: "/backend_news_manage",
      name: "backend_news_manage",
      component: () => import("../views/backend_news_manage.vue"),
    },
  ],
});

export default router;
