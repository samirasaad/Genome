import React, { useMemo } from "react";
import objectPath from "object-path";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_helpers";
import { useHtmlClassService } from "../../../_core/MetronicLayout";
import { HeaderMenu } from "./HeaderMenu";
import "./HeaderMenuWrapper.scss";

export function HeaderMenuWrapper() {
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      config: uiService.config,
      ktMenuClasses: uiService.getClasses("header_menu", true),
      rootArrowEnabled: objectPath.get(
        uiService.config,
        "header.menu.self.root-arrow"
      ),
      menuDesktopToggle: objectPath.get(
        uiService.config,
        "header.menu.desktop.toggle"
      ),
      headerMenuAttributes: uiService.getAttributes("header_menu"),
      headerSelfTheme: objectPath.get(uiService.config, "header.self.theme"),
      ulClasses: uiService.getClasses("header_menu_nav", true),
      disabledAsideSelfDisplay:
        objectPath.get(uiService.config, "aside.self.display") === false,
    };
  }, [uiService]);
  const getHeaderLogo = () => {
    let result = "logo-light.png";
    if (layoutProps.headerSelfTheme && layoutProps.headerSelfTheme !== "dark") {
      result = "logo-dark.png";
    }
    return toAbsoluteUrl(`/media/logos/${result}`);
  };

  return (
    <>
      <div
        className="header-menu-wrapper px-0 header-menu-wrapper-left mt-5"
        id="kt_header_menu_wrapper"
      >
        <HeaderMenu layoutProps={layoutProps} />
      </div>
    </>
  );
}
