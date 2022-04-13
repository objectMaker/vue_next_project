import type { interceptors } from "./intercepterType";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
//使用interceptors定义四个拦截器

export const Interceptors: interceptors = {
  requestSuccessInterceptor: function (
    config: AxiosRequestConfig<any>
  ): AxiosRequestConfig<any> {
    console.log("请求拦截器");
    return config;
  },
  requestErrorInterceptor: function (err: any) {
    console.log(err, "可能是网络错误");
  },
  responseSuccessInterceptor: function (res: AxiosResponse<string>) {
    console.log("响应拦截器");

    return res.data;
  },
  responseErrorInterceptor: function (err: any) {
    console.log("errr");
  },
};
