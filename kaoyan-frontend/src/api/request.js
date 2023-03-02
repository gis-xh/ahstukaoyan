import axios from "axios";
import store from "@/store/index";
const Axios = axios.create({
  baseURL: "/api",
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

Axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = sessionStorage.getItem("token");
    return config;
  },
  (err) => {
    console.log("request拦截器出错", err);
  }
);

Axios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    const err = error.toString();
    switch (true) {
      case err.indexOf("Network") !== -1:
        console.log("后端服务器无响应或者URL错误", err);
        break;
      case err.indexOf("timeout") !== -1:
        console.log("请求后端服务器超时！", err);
        break;
    }
    return Promise.reject(error);
  }
);

export default Axios;
