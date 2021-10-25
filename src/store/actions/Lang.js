import * as types from "../types/lang";

export const setCurrentLang = (payload) => {
  return { type: types.SET_LANG, payload };
};

export const getCurrentLang = () => ({
  type: types.GET_LANG,
});
