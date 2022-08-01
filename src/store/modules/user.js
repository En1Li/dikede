import { getYanZhang, getLogin } from "@/api/user";
import router from "@/router";
import { Message } from "element-ui";
export default {
  namespaced: true,
  state: {
    yanzheng: "",
    loginInfo: {},
  },
  mutations: {
    // 验证码接口
    getCheck(state, payload) {
      state.yanzheng = payload;
    },
    // 登录接口
    setloginInfo(state, payload) {
      state.loginInfo = payload;
    },
  },
  actions: {
    // 验证码接口
    async getCheck(context, payload) {
      const res = await getYanZhang(payload);
      if (res.status === 200) {
        let imgUrl =
          "data:image/png;base64," +
          btoa(
            new Uint8Array(res.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
        context.commit("getCheck", imgUrl);
      }
    },
    // 登录接口
    async getloginInfo(context, payload) {
      const res = await getLogin(payload);
      if (res.data.msg === "登录成功") {
        context.commit("setloginInfo", res.data);
        router.push("/");
        Message({
          showClose: true,
          message: res.data.msg,
          type: "success",
        });
      } else {
        Message({
          showClose: true,
          message: res.data.msg,
          type: "error",
        });
      }
      return res
    },
  },
};
