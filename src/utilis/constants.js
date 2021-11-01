const I18N_CONFIG_KEY = process.env.REACT_APP_I18N_CONFIG_KEY || "i18nConfig";

const EMPLOYEE_ID_PATTERN = /^.*(?=.{4,10})(?=.*\d)(?=.*[a-zA-Z]).*$/;

const PASSWORD_PATTERN = /[^A-Za-z0-9]+/;
// /^[-@.\/#&+\w\s]*$/
export { I18N_CONFIG_KEY, EMPLOYEE_ID_PATTERN, PASSWORD_PATTERN };
