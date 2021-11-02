import * as types from "../types/auth";

// LOGOUT
export const logoutRequest = () => ({
  type: types.LOGOUT_REQUEST,
});

// LOGIN OTP
export const loginRequest = (payload) => {
  return {
    type: types.GET_TOKEN_REQUEST,
    payload,
  };
};

export const loginReceive = (payload) => ({
  type: types.GET_TOKEN_RECEIVE,
  payload,
});

// RESEND VERIFICATION CODE
export const resendVerficationCodeRequest = (payload) => {
  return {
    type: types.RESEND_VERIFICATION_CODE_REQUEST,
    payload,
  };
};

export const resendVerficationCodeReceive = (payload) => ({
  type: types.RESEND_VERIFICATION_CODE_RECIEVE,
  payload,
});

// LOGIN TOKEN
export const loginTokenRequest = (payload) => {
  return {
    type: types.GET_LOGIN_TOKEN_REQUEST,
    payload,
  };
};

export const loginTokenReceive = (payload) => ({
  type: types.GET_LOGIN_TOKEN_RECEIVE,
  payload,
});
