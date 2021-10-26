import * as types from "../types/lang";

const INITIAL_STATE = JSON.parse(localStorage.getItem("i18nConfig"))
  ? JSON.parse(localStorage.getItem("i18nConfig")).selectedLang
  : "en";

export default function language(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_LANG:
      return action.payload;
    case types.GET_LANG:
      return action.payload;
    default:
      return state;
  }
}
