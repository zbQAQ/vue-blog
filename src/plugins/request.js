import axios from "axios";
import { Message } from "element-ui";

// create an axios instance
const service = axios.create({
  timeout: 5000
});

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // like set token
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
    const res = response.data;
    if (res.code !== 1) {
      Message({
        message: res.message || "Error",
        type: "error",
        duration: 5 * 1000
      });
    }
    return response;
  },
  error => {
    console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
