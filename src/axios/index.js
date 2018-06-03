import axios from 'axios';
import { Message } from 'iview';
// import store from '../store';
// axios 配置
axios.defaults.timeout = 5000;
// axios.defaults.baseURL = 'https://www.ultrasoftware.cn';
axios.defaults.baseURL = 'http://admin.ultrasoftware.cn';


// http request 拦截器
// axios.interceptors.request.use(
//   config => {
//     if (store.state.uid) {
//       config.headers.openid = store.state.uid;
//     }
//     return config;
//   },
//   err => {
//     return Promise.reject(err);
//   });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        if (typeof response.data === 'string') {
            if (response.data == "{'state':'nologin'}") {
                window.location.href = '/login';
                Message.error({
                    content: '请先登录'
                });
            }
        }
        return response;
    },
    error => {
        return error;
    });

export default axios;