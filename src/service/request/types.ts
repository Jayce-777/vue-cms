import type { AxiosRequestConfig, AxiosResponse } from 'axios';

interface IRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (err: any) => any;
  responseInterceptor?: (res: any) => any;
  responseInterceptorCatch?: (err: any) => any;
}

interface IHrequestConfig extends AxiosRequestConfig {
  interceptors?: IRequestInterceptors;
  showLoading?: boolean;
}

export { IRequestInterceptors, IHrequestConfig };
