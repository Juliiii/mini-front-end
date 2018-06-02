import axios from 'axios';
// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'https://www.ultrasoftware.cn';

// // http request 拦截器
// axios.interceptors.request.use(
//   config => {
//     if (store.state.token) {
//       config.headers.Authorization = `token ${store.state.token}`;
//     }
//     return config;
//   },
//   err => {
//     return Promise.reject(err);
//   });

// http response 拦截器
// axios.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     return response;
//   });

export default axios;