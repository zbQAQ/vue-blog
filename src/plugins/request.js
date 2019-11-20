import axios from "axios";
import { Message } from "element-ui";
import localStorage from "../plugins/localStorage";
import router from "../router/index";

// create an axios instance
const service = axios.create({
  timeout: 5000
});

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // like set token
    if (localStorage.get("token")) {
      config.headers.token = localStorage.get("token");
    }
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    console.log(response.config.url, response.data);
    return response;
  },
  err => {
    console.log("response err", err.response); // for debug
    Message({
      type: "error",
      message: err.response.data.message
    });
    if (err.response.status === 401) {
      router.push("/login");
    }
    return Promise.reject(err);
  }
);

export default service;
