import request from "@/utils/request";

// 获取验证码
export const getYanZhang = (randernum) => {
  return request({
    url: `/user-service/user/imageCode/${randernum}`,
    responseType: "arraybuffer",
  });
};

// 获取登录信息
export const getLogin = (data) => {
  return request({
    method: "POST",
    url: "/user-service/user/login",
    data,
  });
};
