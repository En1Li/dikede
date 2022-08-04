import Layout from "@/layout";
export default {
  path: "/commodit",
  component: Layout,
  meta: { title: "商品管理", icon: "dashboard" },
  children: [
    {
      path: "type",
      component: () => import("@/views/commodit/type"),
      meta: { title: "商品类型", icon: "dashboard" },
    },
    {
      path: "guanli",
      component: () => import("@/views/commodit/guanli"),
      meta: { title: "商品管理", icon: "dashboard" },
    },
  ],
};
