import React, { createContext } from "react";
import { useMemo } from "react";
import { useContext } from "react";
import { I18N_CONFIG_KEY } from "../../utilis/constants";
import store from "./../../store";
// import "./../../sass/style.react.css";

// dynamic import for style sheet rtl/ltr for the first launch
if (store.getState().lang === "ar") {
  import("./../../sass/style.react.rtl.css").then((res) => {});
} else {
  import("./../../sass/style.react.css").then((res) => {});
}

const initialState = {
  selectedLang: "en",
};

function getConfig() {
  const ls = localStorage.getItem(I18N_CONFIG_KEY);
  if (ls) {
    try {
      return JSON.parse(ls);
    } catch (er) {
      console.error(er);
    }
  }
  return initialState;
}

export function toggleLanguage(lang) {
  localStorage.setItem(I18N_CONFIG_KEY, JSON.stringify({ selectedLang: lang }));
  // updateDocumentLanguage(lang);
  // store.dispatch(setCurrentLang(lang));
  window.location.reload();
}

const I18nContext = createContext();

export function useLang() {
  return useContext(I18nContext).selectedLang;
}

export function withI18n(Component) {
  class WithI18n extends React.Component {
    static displayName = `WithI18n(${Component.displayName || Component.name})`;

    static contextType = I18nContext;

    render() {
      return <Component {...this.props} menu={this.context} />;
    }
  }

  return WithI18n;
}

export const I18nConsumer = I18nContext.Consumer;

export function MetronicI18nProvider({ children }) {
  const lang = useMemo(getConfig, []);

  return <I18nContext.Provider value={lang}>{children}</I18nContext.Provider>;
}
