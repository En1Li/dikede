import Layout from "@/layout";
export default {
  path: "/point",
  component: Layout,
  meta: { title: "点位管理", icon: "dashboard" },
  children: [
    {
      path: "quyu",
      component: () => import("@/views/point/quyu"),
      meta: { title: "区域管理", icon: "dashboard" },
    },
    {
      path: "dianwei",
      component: () => import("@/views/point/dianwei"),
      meta: { title: "点位管理", icon: "dashboard" },
    },
    {
      path: "hezuoshang",
      component: () => import("@/views/point/hezuoshang"),
      meta: { title: "合作商管理", icon: "dashboard" },
    },
  ],
};
