import moment from "moment";
import "moment/locale/ar-sa";
import "moment/locale/en-gb";
import { I18N_CONFIG_KEY } from "./constants";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const updateDocumentLanguage = (lang) => {
  let htmlElem = document.querySelector("html");
  let langDirection = lang === "en" ? "ltr" : "rtl";
  htmlElem.setAttribute("lang", lang);
  htmlElem.setAttribute("dir", langDirection);
  htmlElem.style.direction = langDirection;
};

const formatDateTime = (date, format, lang) => {
  console.log(lang === "ar");
  return moment(date)
    .locale(lang === "ar" ? "ar-sa" : "en-gb")
    .format(format);
};

const getToday = () => {
  let dayName = formatDateTime(
    moment(),
    "dddd",
    JSON.parse(localStorage.getItem(I18N_CONFIG_KEY)).selectedLang
  );

  let dayNumber = formatDateTime(moment(), "DD", "en");

  let year = formatDateTime(moment(), "YYYY", "en");

  let monthName = formatDateTime(
    moment(),
    "MMMM",
    JSON.parse(localStorage.getItem(I18N_CONFIG_KEY)).selectedLang
  );

  return `${dayName} ${dayNumber} ${monthName} ${year}`;
};
export { getCurrentYear, updateDocumentLanguage, getToday, formatDateTime };
