import { instance } from "./requestInstance";
// import type { AxiosRequestConfig, AxiosInterceptorManager } from "axios";
instance.interceptors.request.use((config)=>{
    // config.baseURL = 
   return config
})
