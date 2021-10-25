import { axiosInstance } from "./index";

export const loginApi = async (data) => {
  console.log(data)
  return await axiosInstance.post(`api/auth/login`, {data,
    handlerEnabled: true,
  });
};
// export const logoutApi = async () => {
//   return await axiosInstance.post(`/authentication/logout`,{
//     handlerEnabled: true,
//   });
// };

// //GET FIREBASE TOKEN
// export const firebaseApi = async () => {
//   return await axiosInstance.get(`/firebase/auth`,{
//     handlerEnabled: true,
//   });
// };