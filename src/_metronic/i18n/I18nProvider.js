import React, { useEffect } from "react";
import { useLang } from "./Metronici18n";
import { IntlProvider } from "react-intl";
import "@formatjs/intl-relativetimeformat/polyfill";
import "@formatjs/intl-relativetimeformat/dist/locale-data/en";
import "@formatjs/intl-relativetimeformat/dist/locale-data/de";
import "@formatjs/intl-relativetimeformat/dist/locale-data/es";
import "@formatjs/intl-relativetimeformat/dist/locale-data/fr";
import "@formatjs/intl-relativetimeformat/dist/locale-data/ja";
import "@formatjs/intl-relativetimeformat/dist/locale-data/zh";
import "@formatjs/intl-relativetimeformat/dist/locale-data/ar";

import deMessages from "./messages/de";
import enMessages from "./messages/en";
import esMessages from "./messages/es";
import frMessages from "./messages/fr";
import jaMessages from "./messages/ja";
import zhMessages from "./messages/zh";
import arMessages from "./messages/ar";
import { useSelector } from "react-redux";

const allMessages = {
  de: deMessages,
  en: enMessages,
  es: esMessages,
  fr: frMessages,
  ja: jaMessages,
  zh: zhMessages,
  ar: arMessages,
};

export function I18nProvider({ children }) {
  const locale = useLang();
  const messages = allMessages[locale];
  if (!localStorage.getItem("i18nConfig")) {
    localStorage.setItem("i18nConfig", JSON.stringify({ selectedLang: "en" }));
  }

  // useEffect(() => {
  //   var lang = JSON.parse(localStorage.getItem("i18nConfig")).selectedLang;
  //   let htmlElem = document.querySelector("html");
  //   let langDirection = lang === "en" ? "ltr" : "rtl";
  //   htmlElem.setAttribute("lang", lang);
  //   htmlElem.setAttribute("dir", langDirection);
  //   htmlElem.style.direction = langDirection;
  // }, []);

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
}
