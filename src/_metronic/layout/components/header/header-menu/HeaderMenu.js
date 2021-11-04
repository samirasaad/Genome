/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { checkIsActive } from "../../../../_helpers";
import DropDown from "./../../../../../app/components/DropDown/DropDown";
import { FormattedMessage, useIntl } from "react-intl";
import { notification, calendar } from "../../../../../utilis/images";
import { getToday } from "../../../../../utilis/shared";
import LanguageToggler from "../../extras/dropdowns/LanguageToggler";

export function HeaderMenu({ layoutProps, role = "موظفة استقبال" }) {
  const intl = useIntl();
  const location = useLocation();
  const getMenuItemActive = (url) => {
    return checkIsActive(location, url) ? "menu-item-active" : "";
  };

  return (
    <div
      id="kt_header_menu"
      className={`mt-5 mx-auto header-menu header-menu-mobile container ${layoutProps.ktMenuClasses}`}
      {...layoutProps.headerMenuAttributes}
    >
      <div className={`menu-nav w-100 ${layoutProps.ulClasses}`}>
        <li
          className={`menu-item menu-item-rel d-flex w-100  align-items-center justify-content-lg-between justify-content-center ${getMenuItemActive(
            "/dashboard"
          )}`}
        >
          <h4 className="menu-text semiBold-font mb-md-0 mb-6">
            {/* {intl.formatMessage({ id: "HOME.HELLO" }, { role })} */}
            {intl.formatMessage({ id: "HOME.HELLO" })}
          </h4>
          <div className=" d-md-flex d-block align-items-center">
            <div className="menu-text d-md-flex d-block mx-2">
              <LanguageToggler className="px-10" />
              <div className="d-flex justify-content-center align-items-center my-5 my-md-0">
                <img
                  src={calendar}
                  alt="calendar"
                  className="calendar-icon mx-2"
                />
                <p className="mb-0 d-flex justify-content-end">
                  <span className="today semiBold-font">{getToday()}</span>
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <span className="notification-wrapper mx-9 position-relative">
                <img
                  src={notification}
                  alt="notificatioon"
                  className="notification-icon"
                />
                <div  className='notification-indicator'></div>
              </span>
              <DropDown />
            </div>
          </div>
          {/* {layoutProps.rootArrowEnabled && <i className="menu-arrow" />} */}
        </li>
      </div>
    </div>
  );
}
