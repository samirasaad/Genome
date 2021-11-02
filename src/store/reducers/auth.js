import * as types from "../types/auth";
const INITIAL_STATE = {
  token: "",
  userName: "",
  otpCode:null
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_TOKEN_RECEIVE:
      return {
        ...state,
        token: action.payload && action.payload.token,
        userName: action.payload && action.payload.userName,
        otpCode: action.payload && action.payload.otpCode,
      };
    default:
      return state;
  }
};
