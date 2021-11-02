import React, { useState } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormattedMessage } from "react-intl";
import store from "../../../../store";
import { getTokkenRequest, loginRequest } from "../../../../store/actions/auth";
import { LanguageSelectorDropdown } from "../../../../_metronic/layout/components/extras/dropdowns/LanguageSelectorDropdown";
import Btn from "../../../components/shared/Btn/Btn";
import CountdownTimer from "../../../components/shared/CountdownTimer/countdownTimer";
import Spinner from "./../../../components/shared/Spinner/Spinner";
import InputField from "../../../components/shared/InputField/InputField";
import { darkLogo, mobileLock } from "./../../../../utilis/images";

const Otp = (props) => {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    otpCode: "",
  };
  const LoginOtpSchema = Yup.object().shape({
    otpCode: Yup.string()
      .required()
      .min(4),
  });

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  const getInputClasses = (fieldname) => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "is-invalid";
    }

    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }

    return "";
  };

  const formik = useFormik({
    initialValues,
    validationSchema: LoginOtpSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      enableLoading();
      setTimeout(() => {
        store.dispatch(loginRequest(values));
      }, 1000);
    },
  });

  return (
    <div className="w-100 m-auto h-100 d-flex align-items-center justify-content-center">
      <div className="login-form w-75 login-signin" id="kt_login_signin_form">
        <div className="text-center ">
          <img src={darkLogo} alt="logo" className="logo" />
          <LanguageSelectorDropdown />
        </div>
        <div className="d-flex justify-content-center my-6">
          <img src={mobileLock} alt="lock" />
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="form fv-plugins-bootstrap fv-plugins-framework"
        >
          <p className="bold-font text-center ">
            <FormattedMessage id="AUTH.OTP.TITLE" />
          </p>
          <p className="text-center small semiBold-font">
            <FormattedMessage id="AUTH.OTP.HINT" />
          </p>
          {/* timer */}
          <CountdownTimer end_date="1635860280" />
          <InputField
            parentClasses="mb-5"
            input={{
              inputClasses: "form-control form-control-solid h-auto py-3 px-5",
              placeholderId: "AUTH.OTP.PLACEHOLDER",
              name: "otpCode",
              id: "otpCode",
              type: "otpCode",
            }}
            label={{
              labelText: "",
            }}
            {...formik.getFieldProps("otpCode")}
          />
          <Btn
            disabled={loading}
            content={
              <>
                {loading ? (
                  <Spinner className="spinner-white" />
                ) : (
                  <FormattedMessage id="AUTH.GENERAL.SUBMIT_SEND" />
                )}
              </>
            }
            type="text"
            className={`primary-button w-100 py-3 mt-0 ${loading && "py-7"}`}
          />
        </form>
      </div>
    </div>
  );
};

export default Otp;
