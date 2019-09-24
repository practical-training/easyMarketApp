import axios from "axios";
// import { getToken } from "./index";
const instance = axios.create({
  baseURL:"http://127.0.0.1:8888",
  // timeout: 1000,
  // headers: { authorization: getToken() }
});
instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => {
    if (response.status==200) {
    //  alert(response.statusText);
    }
    return response.data;
  },
  error => {
    if (error.response.status && error.response.status !== 200) {
      alert(error.response.statusText);
    }
    return Promise.resolve(error);
  }
);
export default instance;
