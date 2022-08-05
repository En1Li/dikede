import request from "@/utils/request";

// 获取工单搜索
export const getworkList = (data) => {
  return request({
    url: "/task-service/task/search",
    params: data,
  });
};

// 获取工单状态
export const getworkState = () => {
  return request({
    url: "/task-service/task/allTaskStatus",
  });
};
