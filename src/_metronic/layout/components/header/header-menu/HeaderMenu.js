/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";
import DropDown from "./../../../../../app/components/DropDown/DropDown";

export function HeaderMenu({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url) => {
    return checkIsActive(location, url) ? "menu-item-active" : "";
  };

  return (
    <div
      id="kt_header_menu"
      className={`mt-5 header-menu header-menu-mobile container ${layoutProps.ktMenuClasses}`}
      {...layoutProps.headerMenuAttributes}
    >
      <div className={`menu-nav w-100 ${layoutProps.ulClasses}`}>
        <li
          className={`menu-item menu-item-rel d-flex w-100  align-items-center justify-content-lg-between justify-content-center ${getMenuItemActive(
            "/dashboard"
          )}`}
        >
          <span className="menu-text">مرحبًا! موظفة الاستقبال</span>
          <div className=" d-md-flex d-block align-items-center">
            <div className="menu-text d-flex">
              <img src={"ytt"} />
              <p className="mb-0">الاثنين 20 سبتمبر 2021</p>
            </div>
            <span className="menu-text">search </span>
            <span className="menu-text">notifications </span>
            <div>
              <DropDown />
            </div>
          </div>
          {/* {layoutProps.rootArrowEnabled && <i className="menu-arrow" />} */}
        </li>
      </div>
    </div>
  );
}
