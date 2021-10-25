import { axiosInstance } from "./index";

export const loginApi = async (data) => {
  return await axiosInstance.post(
    `https://smea-pc.ibtikar.sa/api/authentication/admin/login`,
    { email: data.email, password: data.password, handlerEnabled: true }
  );
};
