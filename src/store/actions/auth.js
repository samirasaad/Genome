import * as types from "../types/auth";

export const logoutRequest = () => ({
  type: types.LOGOUT_REQUEST,
});

export const loginRequest = (payload) => {
  console.log(payload)
  return({
  type: types.GET_TOKEN_REQUEST,
  payload,
})};

export const loginReceive = (payload) => ({
  type: types.GET_TOKEN_RECEIVE,
  payload,
});

//GET FIREBASE TOKEN
export const getfirebaseRequest = (payload) => ({
  type: types.GET_FIREBASE_TOKEN_REQUEST,
  payload,
});
