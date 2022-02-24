import axios from 'axios';
import { ElLoading } from 'element-plus';

import type { AxiosInstance } from 'axios';
import type { IHrequestConfig, IRequestInterceptors } from './types';
import type { ILoadingInstance } from 'element-plus/lib/components/loading/src/loading.type';

const DEFAULT_LOADING = true;

class Hrequest {
  instance: AxiosInstance;
  interceptors?: IRequestInterceptors;
  showLoading?: boolean;
  loading?: ILoadingInstance;

  constructor(config: IHrequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    this.showLoading = config.showLoading ?? DEFAULT_LOADING;

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    //add interceptors to every instance
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据',
            background: 'rgba(0, 0, 0, .25)'
          });
        }

        return config;
      },
      (err) => {
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close();

        const data = res.data;

        if (data.returnCode === -1001) {
          console.log(404);
        } else {
          return data;
        }
      },
      (err) => {
        this.loading?.close();

        if (err.response.status === 404) {
          console.log(404);
        }

        return err;
      }
    );
  }

  request<T>(config: IHrequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.showLoading === false) {
        this.showLoading = config.showLoading;
      }

      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }

          this.showLoading = DEFAULT_LOADING;
          resolve(res);
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING;
          reject(err);
        });
    });
  }

  get<T>(config: IHrequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'GET' });
  }

  post<T>(config: IHrequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'POST' });
  }

  delete<T>(config: IHrequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'DELETE' });
  }

  patch<T>(config: IHrequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PATCH' });
  }
}

export default Hrequest;
