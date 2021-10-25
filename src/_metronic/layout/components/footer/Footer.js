import React, { useMemo } from "react";
import { getCurrentYear } from "../../../../utilis/shared";
import { useHtmlClassService } from "../../_core/MetronicLayout";

export function Footer() {
  const today = new Date().getFullYear();
  const uiService = useHtmlClassService();

  const layoutProps = useMemo(() => {
    return {
      footerClasses: uiService.getClasses("footer", true),
      footerContainerClasses: uiService.getClasses("footer_container", true),
    };
  }, [uiService]);

  return (
    <div
      className={`footer py-4 d-flex flex-lg-column  mb-5 ${layoutProps.footerClasses}`}
      id="kt_footer"
    >
      <div
        className={`${layoutProps.footerContainerClasses} semiBold-font justify-content-around d-flex flex-column flex-md-row align-items-center justify-content-between`}
      >
        <small className="d-flex align-items-center">
          جميع الحقوق محفوظة - جينوم @ {getCurrentYear()}{" "}
          <span className="mt-1 mx-1">©</span>
        </small>
      </div>
    </div>
  );
}
