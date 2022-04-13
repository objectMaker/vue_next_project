import Request from "./Request";
import { Interceptors } from "./config/intercepters";
// const request = axios.create({});
export const instance = new Request({
  baseURL: "http://192.168.117.96:8080",
  timeout: 10000,
  ...Interceptors,
}).instance;
