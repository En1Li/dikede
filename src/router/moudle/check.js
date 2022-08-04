import Layout from "@/layout";
export default {
  path: "/check",
  component: Layout,
  children: [
    {
      path: "",
      component: () => import("@/views/check"),
      meta: { title: "对账统计", icon: "dashboard" },
    },
  ],
};
