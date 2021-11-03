/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { Dropdown } from "react-bootstrap";
import { toggleLanguage } from "../../../../i18n";
import { DropdownTopbarItemToggler } from "../../../../_partials/dropdowns";
import Toggler from "../../../../../app/components/shared/Toggler/Toggler";
import { I18N_CONFIG_KEY } from "../../../../../utilis/constants";

export const LanguageToggler = () => {
  const [isAr, setIsAr] = React.useState(
    JSON.parse(localStorage.getItem(I18N_CONFIG_KEY)).selectedLang === "ar"
  );

  return (
    <Dropdown className="w-75 pt-4  px-3 toggler-wrapper">
      <Dropdown.Toggle
        as={DropdownTopbarItemToggler}
        id="dropdown-toggle-my-cart"
        onClick={() =>
          toggleLanguage(
            JSON.parse(localStorage.getItem(I18N_CONFIG_KEY)) &&
              JSON.parse(localStorage.getItem(I18N_CONFIG_KEY)).selectedLang ===
                "en"
              ? "ar"
              : "en"
          )
        }
      >
        <div className="btn btn-icon  btn-lg mr-1">
          <Toggler isChecked={isAr} />
        </div>
      </Dropdown.Toggle>
    </Dropdown>
  );
};

export default LanguageToggler;
