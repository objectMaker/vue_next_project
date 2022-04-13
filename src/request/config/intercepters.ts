import type { interceptors } from "./intercepterType";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
//使用interceptors定义四个拦截器

export const Interceptors: interceptors = {
  requestSuccessInterceptor: function (
    config: AxiosRequestConfig<any>
  ): AxiosRequestConfig<any> {
    config.baseURL = "http://192.168.117.96:8080";
    config.timeout = 5000;
    return config;
  },
  requestErrorInterceptor: function (err: any) {
    console.log(err, "可能是网络错误");
  },
  responseSuccessInterceptor: function (res: AxiosResponse<string>) {
    return res.data;
  },
  responseErrorInterceptor: function (err: any) {
    console.log("errr");
  },
};
