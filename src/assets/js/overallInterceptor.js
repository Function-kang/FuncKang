// 请求拦截器 -- 全局
import axios from "axios";
import store from "@/store/index";
import router from "@/router";

let instance = axios.create({
  baseURL: "", // 请求的域名，基本地址
  timeout: 1000, // 请求超时时长
  url: "", // 请求的路径
  method: "", // 请求方法
  headers: {
    // 请求头
  },
  params: {}, // 请求参数会拼接在url上
  data: {}, // 请求参数放在请求体中
});
// http request 拦截器
instance.interceptors.request.use(
  (config) => {
    // console.log(config);
    // const token = sessionStorage.getItem("token");
    // if (token) {
    //   // 判断是否存在token，如果存在的话，则每个http header都加上token
    //   config.headers.authorization = token; //请求头加上token
    // }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
// http response 拦截器
instance.interceptors.response.use(
  (response) => {
    // console.log(response);
    //拦截响应，做统一处理
    // if (response.data.code) {
    //   switch (response.data.code) {
    //     case 1002:
    //       store.state.isLogin = false;
    //       router.replace({
    //         path: "login",
    //         query: {
    //           redirect: router.currentRoute.fullPath,
    //         },
    //       });
    //   }
    // }
    return response;
  },
  //接口错误状态处理，也就是说无响应时的处理
  (error) => {
    return Promise.reject(error.response.status); // 返回接口返回的错误信息
  }
);
export default instance;
