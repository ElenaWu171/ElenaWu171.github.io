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
    {
      path: "/news_detail",
      name: "news_detail",
      component: () => import("../views/news_detail.vue"),
    },
    // // 最新消息_細節
    {
      path: "/contact_us",
      name: "contact_us",
      component: () => import("../views/contact_us.vue"),
    },
  ],
});

export default router;
