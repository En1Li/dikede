import router from "@/router";
import store from "@/store";
const whiteList = ["/login", "/404"];
router.beforeEach((to, from, next) => {
  // 登录了
  if (store.state.user.loginInfo.token) {
    store.dispatch('user/getuserInfo' , store.state.user.loginInfo.userId)
    if (to.path === "/login") {
      next("/");
    } else {
      next();
    }
  } else {
    // 没有登录
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next("/login");
    }
  }
});
