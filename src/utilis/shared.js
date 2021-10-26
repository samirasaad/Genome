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

export { getCurrentYear, updateDocumentLanguage };
