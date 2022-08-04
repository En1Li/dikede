import Layout from "@/layout";
export default {
  path: "/work",
  component: Layout,
  // redirect: "/work/yunying",
  meta: { title: "工单管理", icon: "dashboard" },
  children: [
    {
      path: "yunying",
      component: () => import("@/views/work/yunying"),
      meta: { title: "运营工单", icon: "dashboard" },
    },
    {
      path: "yunwei",
      component: () => import("@/views/work/yunwei"),
      meta: { title: "运维工单", icon: "dashboard" },
    },
  ],
};
