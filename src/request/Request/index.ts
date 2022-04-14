import type { AxiosInstance, AxiosRequestConfig } from "axios";
import type { interceptors } from "../config/intercepterType";
import axios from "axios";
export default class Request {
  instance: AxiosInstance;
  constructor(config: AxiosRequestConfig & interceptors) {
    console.log(config.baseURL);

    this.instance = axios.create({
      ...config,
    }); //根据配置生成aixos实例。
    this.instance.interceptors.request.use(
      config.requestSuccessInterceptor,
      config.requestErrorInterceptor
    );
    this.instance.interceptors.response.use(
      config.responseSuccessInterceptor,
      config.responseErrorInterceptor
    );
  }
}
