import Request from "./Request";
import { Interceptors } from "./config/intercepters";
// const request = axios.create({});
export const instance = new Request({
  baseURL: "http://bin.org/",
  timeout: 10000,
  ...Interceptors,
}).instance;
