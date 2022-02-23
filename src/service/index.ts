import Hrequest from './request';
import { BASE_URL, TIME_OUT } from './request/config';

const hRequest = new Hrequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = '';

      if (token) {
        if (config.headers) {
          config.headers.Authorization = `Bearer${token}`;
        }
      }

      return config;
    },
    requestInterceptorCatch: (err) => {
      return err;
    },
    responseInterceptor: (res) => {
      return res;
    },
    responseInterceptorCatch: (err) => {
      return err;
    }
  }
});

export default hRequest;
