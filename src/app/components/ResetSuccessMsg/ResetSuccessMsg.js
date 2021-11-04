import React from "react";
import { FormattedMessage } from "react-intl";
import { darkLogo } from "../../../utilis/images";
import Btn from "../shared/Btn/Btn";

const ResetSuccessMsg = () => {
  return (
    <section className="reset-success-msg d-flex flex-column justify-content-center align-items-center">
      <img src={darkLogo} alt="logo" />
      <h4 className="bold-font">
        <FormattedMessage id="AUTH.RESET.SUCCESS" />
      </h4>
      <Btn
        content={<FormattedMessage id="AUTH.LOGIN.BUTTON" />}
        type="button"
        className={`primary-button  py-2 px-5 mt-7`}
      />
    </section>
  );
};

export default ResetSuccessMsg;
