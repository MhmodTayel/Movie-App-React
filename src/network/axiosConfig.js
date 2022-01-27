import axios from "axios";

export const axiosInstace = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key:'8006703c3b13fe2888b2b4c0bfcce205'
  }
});

// // Add a request interceptor
// axiosInstace.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     console.log("Interceptor", config);
//     // config.headers = {
//     //   ...config.headers,
//     //   Authorization: localStorage.getItem("token"),
//     // };
//     if (localStorage.getItem("token")) {
//       config.headers["Authorization"] = localStorage.getItem("token");
//     }
//     config.params = {
//       ...config.params,
//       "Api-key": "daskjdalsd5da6sd",
//     };
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// axiosInstace.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );
