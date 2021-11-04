import * as types from "../types/auth";
const INITIAL_STATE = {
  token: "",
  userName: "",
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_LOGIN_TOKEN_RECEIVE:
      return { ...state, token: action.payload };
      case types.RESET_PASSWORD_RECEIVE:
      return { ...state, showSuccessMsg: action.payload };
    default:
      return state;
  }
};
