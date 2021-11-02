import React, { useState } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import * as auth from "../_redux/authRedux";
import { login } from "../_redux/authCrud";
import { getTokkenRequest, loginRequest } from "../../../../store/actions/auth";
import store from "../../../../store";
import { LanguageSelectorDropdown } from "../../../../_metronic/layout/components/extras/dropdowns/LanguageSelectorDropdown";
import Btn from "../../../components/shared/Btn/Btn";
import Spinner from "./../../../components/shared/Spinner/Spinner";
import InputField from "../../../components/shared/InputField/InputField";
import { darkLogo } from "./../../../../utilis/images";
import {
  EMPLOYEE_ID_PATTERN,
  PASSWORD_PATTERN,
} from "../../../../utilis/constants";

const initialValues = {
  email: "",
  password: "",
};

const Login = (props) => {
  const [loading, setLoading] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      // .matches(
      //   EMPLOYEE_ID_PATTERN,
      //   "should contains english letters and numbers only"
      // )
      // .max(50, "max 50 char")
      .required(),
    password: Yup.string()
      // .min(8, "Minimum 8 char")
      // .matches(
      //   PASSWORD_PATTERN,
      //   "should contain numbers, letters and special chars "
      // )
      .required(),
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
    validationSchema: LoginSchema,
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
          <p className="bold-font text-center mb-9">
            <FormattedMessage id="AUTH.LOGIN.TITLE" />
          </p>
          <InputField
            // error={formik.errors.userName}
            // error={formik.touched.userName && formik.errors.userName}
            input={{
              isRequired: true,
              inputClasses: "form-control form-control-solid h-auto py-3 px-5",
              placeholderId: "AUTH.LOGIN.USERNAME.PLACEHOLDER",
              name: "email",
              id: "email",
              type: "email",
            }}
            label={{
              labelText: <FormattedMessage id="AUTH.LOGIN.USERNAME" />,
              labelClasses: "mb-2",
            }}
            {...formik.getFieldProps("email")}
          />

          <InputField
            // error={formik.errors.password}
            // error={formik.touched.password && formik.errors.password}
            parentClasses="mb-2"
            eyeId="login-password-eye"
            input={{
              isRequired: true,
              inputClasses: "form-control form-control-solid h-auto py-3 px-5",
              name: "password",
              id: "password",
              type: "password",
            }}
            label={{
              labelText: <FormattedMessage id="AUTH.LOGIN.PASSWORD" />,
              labelClasses: "mb-2",
            }}
            {...formik.getFieldProps("password")}
          />

          <Link
            to="/auth/forgot-password"
            className="forgot-password text-hover-primary my-3 mr-2"
            id="kt_login_forgot"
          >
            <FormattedMessage id="AUTH.GENERAL.FORGOT_BUTTON" />
          </Link>
          <Btn
            disabled={loading}
            content={
              <>
                {loading ? (
                  <Spinner className="spinner-white" />
                ) : (
                  <FormattedMessage id="AUTH.LOGIN.BUTTON" />
                )}
              </>
            }
            type="text"
            className={`primary-button w-100 py-3 mt-9 ${loading && "py-7"}`}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
