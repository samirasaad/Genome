import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useFormik } from "formik";
import * as Yup from "yup";
import { setLocale } from "yup";

import { resetPasswordRequest } from "../../../../store/actions/auth";
import store from "../../../../store";
import Btn from "../../../components/shared/Btn/Btn";
import Spinner from "./../../../components/shared/Spinner/Spinner";
import InputField from "../../../components/shared/InputField/InputField";
import { darkLogo } from "./../../../../utilis/images";
import {
  I18N_CONFIG_KEY,
  PASSWORD_PATTERN,
} from "../../../../utilis/constants";
import { useParams } from "react-router";
import i18n from "i18next";
import ResetSuccessMsg from "../../../components/ResetSuccessMsg/ResetSuccessMsg";
import { useSelector } from "react-redux";

const ResetPassword = (props) => {
  const { resetToken } = useParams();
  const [loading, setLoading] = useState(false);
  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const showSuccessMsg = useSelector(({ auth }) => auth.showSuccessMsg);

  const resetPasswordSchema = Yup.object().shape({
    password: Yup.string()
      .matches(
        PASSWORD_PATTERN,
        `${JSON.parse(localStorage.getItem(I18N_CONFIG_KEY)).selectedLang}` ===
          "ar"
          ? "برجاء إدخال 8 عناصر على الأقل تتضمن حروف وأرقام ورموز"
          : "Please enter at least 8 characters includes letters, numbers, and special characters"
      )
      .min(
        8,
        `${JSON.parse(localStorage.getItem(I18N_CONFIG_KEY)).selectedLang}` ===
          "ar"
          ? "برجاء إدخال 8 عناصر على الأقل تتضمن حروف وأرقام ورموز"
          : "Please enter at least 8 characters includes letters, numbers, and special characters"
      )
      .required(),
    confirmPassword: Yup.string().when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        `${JSON.parse(localStorage.getItem(I18N_CONFIG_KEY)).selectedLang}` ===
          "ar"
          ? "كلمة المرور غير متطابقة"
          : "Unmatched password"
      ),
    }),
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
          resetPasswordRequest({
            token: resetToken,
            password: values.password,
          })
        );
      }, 1000);
    },
  });

  const renderResetForm = () => {
    return (
      <div className="login-form w-75 login-signin" id="kt_login_signin_form">
        <div className="text-center mb-10 ">
          <img src={darkLogo} alt="logo" className="logo" />
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="form fv-plugins-bootstrap fv-plugins-framework"
        >
          <InputField
            parentClasses="mt-10"
            error={formik.errors.password}
            input={{
              isRequired: true,
              inputClasses: "form-control form-control-solid h-auto py-3 px-5",
              placeholderId: "AUTH.RESET.PASSWORD.PLACEHOLDER",
              name: "password",
              id: "password",
              type: "password",
            }}
            label={{
              labelText: <FormattedMessage id="AUTH.RESET.PASSWORD" />,
              labelClasses: "mb-2",
            }}
            {...formik.getFieldProps("password")}
          />
          <InputField
            parentClasses="mb-0"
            error={formik.errors.confirmPassword}
            input={{
              isRequired: true,
              inputClasses: "form-control form-control-solid h-auto py-3 px-5",
              placeholderId: "AUTH.RESET.PASSWORD.PLACEHOLDER",
              name: "confirmPassword",
              id: "confirmPassword",
              type: "password",
            }}
            label={{
              labelText: <FormattedMessage id="AUTH.RESET.CONFIRM" />,
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
                  <FormattedMessage id="AUTH.RESET.BUTTON" />
                )}
              </>
            }
            type="submit"
            className={`primary-button w-100 py-3 mt-7 ${loading && "py-7"}`}
          />
        </form>
      </div>
    );
  };

  return (
    <div className="h-100 d-flex align-items-center justify-content-center mx-auto reset-wrapper">
      {showSuccessMsg ? <ResetSuccessMsg /> : renderResetForm()}
    </div>
  );
};

export default ResetPassword;
