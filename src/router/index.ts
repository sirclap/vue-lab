import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/homeView.vue";
import MemberList from "../views/memberListView.vue";
import MemberDetail from "../views/memberDetailView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/members",
    name: "Members",
    component: MemberList,
  },
  {
    path: "/member/:id",
    name: "Member",
    component: MemberDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
