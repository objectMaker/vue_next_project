import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface interceptors {
  requestSuccessInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestErrorInterceptor: (err: any) => any;
  responseSuccessInterceptor: (res: AxiosResponse) => any;
  responseErrorInterceptor: (err: any) => any;
}
// export type RequestConfig = interceptors & AxiosRequestConfig; //使用联合类型 也可以使用 extends 继承接口 。
