import type { AxiosInstance, AxiosRequestConfig } from "axios";
import type { interceptors } from "../config/intercepterType";
import axios from "axios";
export default class Request {
  instance: AxiosInstance;
  constructor(config: AxiosRequestConfig & interceptors) {
    this.instance = axios.create(config); //根据配置生成aixos实例。
  }
}
