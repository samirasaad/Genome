import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  resendVerficationCodeReceive,
  resendVerficationCodeRequest,
} from "../../../../store/actions/auth";
import store from "../../../../store";
import { LanguageSelectorDropdown } from "../../../../_metronic/layout/components/extras/dropdowns/LanguageSelectorDropdown";
import Btn from "../../../components/shared/Btn/Btn";
import Spinner from "./../../../components/shared/Spinner/Spinner";
import InputField from "../../../components/shared/InputField/InputField";
import { darkLogo } from "./../../../../utilis/images";
import { PASSWORD_PATTERN } from "../../../../utilis/constants";

const initialValues = {
  password: "",
  confirmPassword: "",
};

const ResetPassword = (props) => {
  const [loading, setLoading] = useState(false);

  const resetPasswordSchema = Yup.object().shape({
    password: Yup.string()
      .required()
      .matches(PASSWORD_PATTERN)
      .min(8),
    confirmPassword: Yup.string()
      .required()
      .matches(PASSWORD_PATTERN)
      .min(8),
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
    validationSchema: resetPasswordSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      enableLoading();
      setTimeout(() => {
        store.dispatch(
          resendVerficationCodeRequest({
            username: values.userName,
            redirectToReset: true,
          })
        );
      }, 1000);
    },
  });

  return (
    <div className="h-100 d-flex align-items-center justify-content-center">
      <div className="login-form w-75 login-signin" id="kt_login_signin_form">
        <div className="text-center mb-10 ">
          <img src={darkLogo} alt="logo" className="logo" />
          <LanguageSelectorDropdown />
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="form fv-plugins-bootstrap fv-plugins-framework"
        >
          <p className="bold-font text-center mb-3">
            <FormattedMessage id="AUTH.FORGOT.TITLE" />
          </p>
          <p className="small text-center semiBold-font">
            <FormattedMessage id="AUTH.FORGOT.HINT" />
          </p>
          <InputField
            parentClasses="mt-10"
            input={{
              isRequired: true,
              inputClasses: "form-control form-control-solid h-auto py-3 px-5",
              placeholderId: "AUTH.LOGIN.USERNAME.PLACEHOLDER",
              name: "password",
              id: "password",
              type: "password",
            }}
            label={{
              labelText: <FormattedMessage id="AUTH.LOGIN.USERNAME" />,
              labelClasses: "mb-2",
            }}
            {...formik.getFieldProps("password")}
          />

          <InputField
            parentClasses="mt-10"
            input={{
              isRequired: true,
              inputClasses: "form-control form-control-solid h-auto py-3 px-5",
              placeholderId: "AUTH.LOGIN.USERNAME.PLACEHOLDER",
              name: "confirmPassword",
              id: "confirmPassword",
              type: "confirmPassword",
            }}
            label={{
              labelText: <FormattedMessage id="AUTH.LOGIN.USERNAME" />,
              labelClasses: "mb-2",
            }}
            {...formik.getFieldProps("confirmPassword")}
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
            className={`primary-button w-100 py-3 mt-7 ${loading && "py-7"}`}
          />
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
