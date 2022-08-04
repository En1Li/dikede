import Layout from "@/layout";
export default {
  path: "/tactics",
  component: Layout,
  children: [
    {
      path: "",
      component: () => import("@/views/tactics"),
      meta: { title: "策略管理", icon: "dashboard" },
    },
  ],
};