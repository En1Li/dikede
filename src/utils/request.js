import axios from "axios";
import { Message } from "element-ui";
import store from '@/store'
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});
// 请求拦截器
request.interceptors.request.use((config)=>{
  if (store.state.user.loginInfo.token) {
    config.headers.Authorization = store.state.user.loginInfo.token
  }
  return config
});

// 响应拦截器
request.interceptors.response.use(
  (res) => {
    if (res.config.url.startsWith("/api/user-service/user/imageCode/")) {
      return res;
    }
    if (res.config.url.startsWith("/api/user-service/user/")) {
      return res;
    }
    const { data} = res;
    if (data.success) {
      return data;
    }
    Message.error(data.msg);
    return Promise.reject(new Error(data.msg));
  },
  function (error) {
    // 对响应错误做点什么
    Message.error("系统异常");
    return Promise.reject(error);
  }
);
export default request;
