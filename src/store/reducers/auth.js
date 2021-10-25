import * as types from "../types/auth";
const INITIAL_STATE = {
    token:"",
    userName:""
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_TOKEN_RECEIVE:
      return {...state,token:action.payload.access_token,  userName:action.payload.user.full_name};
    default:
      return state;
  }
};
