import Layout from "@/layout";
export default {
  path: "/people",
  component: Layout,
  meta: { title: "人员管理", icon: "dashboard" },
  children: [
    {
      path: "list",
      component: () => import("@/views/people/list"),
      meta: { title: "人员列表", icon: "dashboard" },
    },
    {
      path: "tongji",
      component: () => import("@/views/people/tongji"),
      meta: { title: "人效统计", icon: "dashboard" },
    },
    {
      path: "gongzuolaing",
      component: () => import("@/views/people/gongzuolaing"),
      meta: { title: "工作量统计", icon: "dashboard" },
    },
  ],
};
