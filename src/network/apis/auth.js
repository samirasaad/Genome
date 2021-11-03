import { axiosInstance } from "./index";

const loginApi = async (data) => {
  return await axiosInstance.post(
    `https://smea-pc.ibtikar.sa/api/authentication/admin/login`,
    // { email: data.email, password: data.password }
    { email: "admin@monshaat.com", password: "root" }
  );
};

const resendVerficationCodeApi = async ({ username }) => {
  return await axiosInstance.post(
    `https://smea-pc.ibtikar.sa/api/authentication/admin/login`,
    {
      // username: username,
      email: "admin@monshaat.com",
      password: "root",
    }
  );
};

// LOGIN TOKEN
const loginTokenApi = async ({ username, email, password, otp_code }) => {
  return await axiosInstance.post(
    `https://smea-pc.ibtikar.sa/api/authentication/admin/login`,
    {
      email: "admin@monshaat.com",
      password: "root",
      // username,
      // password,
      // otp_code,
    }
  );
};

// FORGET PASSWORD
const forgetPasswordApi = async ({ username, otp_code }) => {
  return await axiosInstance.post(
    `https://smea-pc.ibtikar.sa/api/authentication/admin/login`,
    {
      email: "admin@monshaat.com",
      password: "root",
      // username,
      // otp_code,
    }
  );
};

// RESET PASSWORD
const resetPasswordApi = async ({ username, otp_code }) => {
  return await axiosInstance.post(
    `https://smea-pc.ibtikar.sa/api/authentication/admin/login`,
    {
      email: "admin@monshaat.com",
      password: "root",
      // username,
      // otp_code,
    }
  );
};

export {
  loginApi,
  resendVerficationCodeApi,
  loginTokenApi,
  forgetPasswordApi,
  resetPasswordApi,
};
