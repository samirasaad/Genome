/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import clsx from "clsx";
import { Dropdown } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../../_helpers";
import {
  useLang,
  setLanguage,
  langauageToggler,
  toggleLanguage,
} from "../../../../i18n";
import { DropdownTopbarItemToggler } from "../../../../_partials/dropdowns";
import { I18N_CONFIG_KEY } from "../../../../../utilis/constants";
import { useIntl } from "react-intl";

const languages = [
  {
    lang: "en",
    name: "English",
    flag: toAbsoluteUrl("/media/svg/flags/226-united-states.svg"),
  },
  {
    lang: "ar",
    name: "arabic",
    flag: toAbsoluteUrl("/media/svg/flags/195-france.svg"),
  },
];

export function LanguageSelectorDropdown() {
  const intl = useIntl();
  const lang = useLang(); //user machine language
  return (
    <Dropdown drop="down" alignRight>
      <Dropdown.Toggle
        as={DropdownTopbarItemToggler}
        id="dropdown-toggle-my-cart"
      >
        <OverlayTrigger
          placement="bottom"
          overlay={
            <Tooltip id="language-panel-tooltip">
              {intl.formatMessage({ id: "HOME.CHANGELANGUGE" })}
            </Tooltip>
          }
        >
          <div className="btn btn-icon btn-clean btn-dropdown btn-lg mr-1">
            <div
              onClick={() =>
                toggleLanguage(
                  JSON.parse(localStorage.getItem(I18N_CONFIG_KEY)) && JSON.parse(localStorage.getItem(I18N_CONFIG_KEY))
                    .selectedLang === "en"
                    ? "ar"
                    : "en"
                )
              }
            >
              {JSON.parse(localStorage.getItem(I18N_CONFIG_KEY)) && JSON.parse(localStorage.getItem(I18N_CONFIG_KEY))
                .selectedLang === "en" ? (
                <span>ع</span>
              ) : (
                <span>En</span>
              )}
            </div>
            {/* <img
              className="h-25px w-25px rounded"
              src={currentLanguage.flag}
              alt={currentLanguage.name}
            /> */}
          </div>
        </OverlayTrigger>
      </Dropdown.Toggle>
      <Dropdown.Menu className="p-0 m-0 dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround">
        {/* <ul className="navi navi-hover py-4"> */}

        {/* {languages.map((language) => (
            <li
              key={language.lang}
              className={clsx("navi-item", {
                active: language.lang === currentLanguage.lang,
              })}
            >
              <a
                href="#"
                onClick={() => toggleLanguage(language.lang)}
                className="navi-link"
              >
                <span className="symbol symbol-20 mr-3">
                  <img src={language.flag} alt={language.name} />
                </span>
                <span className="navi-text">{language.name}</span>
              </a>
            </li>
          ))} */}
        {/* </ul> */}
      </Dropdown.Menu>
    </Dropdown>
  );
}
