import { axiosInstance } from "./index";

const loginApi = async (data) => {
  return await axiosInstance.post(
    `https://smea-pc.ibtikar.sa/api/authentication/admin/login`,
    { email: data.email, password: data.password, handlerEnabled: true }
  );
};

const resendVerficationCodeApi = async ({ username }) => {
  return await axiosInstance.post(`/v1/system/otp-code`, {
    username: username,
  });
};

// LOGIN TOKEN
const loginTokenApi = async ({ username, email, password, otp_code }) => {
  return await axiosInstance.post(
    `https://smea-pc.ibtikar.sa/api/authentication/admin/login`,
    {
      email,
      password,
      // username,
      // password,
      // otp_code,
    }
  );
};

export { loginApi, resendVerficationCodeApi, loginTokenApi };
