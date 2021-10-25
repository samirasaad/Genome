import React, { createContext } from "react";
import { useMemo } from "react";
import { useContext } from "react";
import { I18N_CONFIG_KEY } from "../../utilis/constants";

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

// Side effect
export function toggleLanguage(lang) {
  localStorage.setItem(I18N_CONFIG_KEY, JSON.stringify({ selectedLang: lang }));
  updateDocumentLanguage(lang);
  window.location.reload();
}

export const updateDocumentLanguage = (lang) => {
  let htmlElem = document.querySelector("html");
  let langDirection = lang === "en" ? "ltr" : "rtl";
  htmlElem.setAttribute(
    "lang",
    JSON.parse(localStorage.getItem(I18N_CONFIG_KEY)).selectedLang
  );
  htmlElem.setAttribute("lang", lang);
  htmlElem.setAttribute("dir", langDirection);
  htmlElem.style.direction = langDirection;
};

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
