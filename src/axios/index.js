import axios from 'axios';
import store from '../store';
// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = '';

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.uid) {
      config.headers.openid = store.state.uid;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// http response 拦截器
// axios.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     return response;
//   });

export default axios;
