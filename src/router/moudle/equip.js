import Layout from "@/layout";
export default {
  path: "/equip",
  component: Layout,
  meta: { title: "设备管理", icon: "dashboard" },
  children: [
    {
      path: "shebei",
      component: () => import("@/views/equip/shebei"),
      meta: { title: "设备管理", icon: "dashboard" },
    },
    {
      path: "zhuangtai",
      component: () => import("@/views/equip/zhuangtai"),
      meta: { title: "设备状态", icon: "dashboard" },
    },
    {
      path: "leixing",
      component: () => import("@/views/equip/leixing"),
      meta: { title: "设备类型管理", icon: "dashboard" },
    },
  ],
};
