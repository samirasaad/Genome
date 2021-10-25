import axios from "axios";
// import { X_API_KEY } from "../../utils/Constants";
import { requestHandler, successHandler, errorHandler } from "../interceptors";

//add your BASE_URL to Constants file
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
    // "X-Api-Key":X_API_KEY
  },
});

// Handle request process
axiosInstance.interceptors.request.use(
  // return requestHandler(request);
  (config) => {
    console.log(config);
    return config;
  }
);

// Handle response process
axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);
