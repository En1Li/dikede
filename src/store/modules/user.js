import { getYanZhang, getLogin, getuserInfo } from "@/api/user";
import router from "@/router";
import {setTokenTime} from '@/utils/auth'
export default {
  namespaced: true,
  state: {
    yanzheng: "",
    loginInfo: {},
    userInfo: {},
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
    // 获取用户信息接口
    setuserInfo(state, payload) {
      state.userInfo = payload;
    },
  },
  actions: {
    // 验证码接口
    async getCheck(context, payload) {
      const res = await getYanZhang(payload);
      let imgUrl =
        "data:image/png;base64," +
        btoa(
          new Uint8Array(res.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
      context.commit("getCheck", imgUrl);
    },
    // 登录接口
    async getloginInfo(context, payload) {
      const res = await getLogin(payload);
      context.commit("setloginInfo", res.data);
      router.push("/");
      setTokenTime()
      // return res;
    },
    // 获取用户信息接口
    async getuserInfo(context, payload) {
      const res = await getuserInfo(payload);
      context.commit("setuserInfo", res.data);
    },
    // 退出功能
    logout(context){
      context.commit('setloginInfo' , {})
      context.commit('setuserInfo' , {})
    }
  },
};
