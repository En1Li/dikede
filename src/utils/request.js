import axios from "axios";
import { Message } from "element-ui";
import store from "@/store";
import { getTokenTime } from "@/utils/auth";
import router from "@/router";

// token过期
const TokenTimeOut = () => {
  const currentTime = Date.now();
  const tokenTime = getTokenTime();
  const timeOut = 2 * 60 * 60 * 1000;
  return currentTime - tokenTime > timeOut;
};

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});
// 请求拦截器
request.interceptors.request.use(async (config) => {
  if (store.state.user.loginInfo.token) {
    if (TokenTimeOut()) {
      await store.dispatch("user/logout");
      router.push("/login");
      return Promise.reject(new Error("登录过期"));
    } else {
      config.headers.Authorization = store.state.user.loginInfo.token;
    }
  }
  return config;
});

// 响应拦截器
request.interceptors.response.use(
  (res) => {
    if (res.config.url.startsWith("/api/user-service/user/imageCode/")) {
      return res;
    }
    if (res.config.url.startsWith("/api/user-service/user/1")) {
      return res;
    }
    const { data } = res;
    if (data.success) {
      return data;
    }
    Message.error(data.msg);
    return Promise.reject(new Error(data.msg));
  },
  async function (error) {
    // 对响应错误做点什么
    console.dir(error);
    if(error?.response?.status === 401){
      Message.error('登录过期')
      await store.dispatch('user/logout')
      router.push('/login')
    }else{
      Message.error(error.message);
    }
    return Promise.reject(error);
  }
);
export default request;
