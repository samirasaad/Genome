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

const initialValues = {
  email: "admin@demo.com",
  password: "demo",
};

const Login = (props) => {
  const { intl } = props;
  const [loading, setLoading] = useState(false);
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Wrong email format")
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols"),
    // .required(
    //   intl.formatMessage({
    //     id: "AUTH.VALIDATION.REQUIRED_FIELD",
    //   })
    // ),,
    password: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols"),
    // .required(
    //   intl.formatMessage({
    //     id: "AUTH.VALIDATION.REQUIRED_FIELD",
    //   })
    // ),
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
    onSubmit: (values, { setStatus, setSubmitting }) => {
      enableLoading();
      setTimeout(() => {
        store.dispatch(loginRequest(values));
      }, 1000);
    },
  });

  return (
    <div className="login-form w-75 login-signin" id="kt_login_signin_form">
      <div className="text-center mb-10 ">
        <img src={darkLogo} alt="logo" />
        <LanguageSelectorDropdown />
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="form fv-plugins-bootstrap fv-plugins-framework"
      >
        {/* {formik.status ? (
          <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
            <div className="alert-text font-weight-bold">{formik.status}</div>
          </div>
        ) : (
          <div className="mb-10 alert alert-custom alert-light-info alert-dismissible">
            <div className="alert-text ">
              Use account <strong>admin@demo.com</strong> and password{" "}
              <strong>demo</strong> to continue.
            </div>
          </div>
        )} */}
        <p className="bold-font text-center mb-9">
          <FormattedMessage id="AUTH.LOGIN.TITLE" />
        </p>
        {/* <div className="form-group fv-plugins-icon-container">
          <label className="label-text mb-2">اسم المستخدم</label>
          <input
            placeholder="Email"
            type="email"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              "email"
            )}`}
            name="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.email}</div>
            </div>
          ) : null}
        </div> */}
        <InputField
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
        />

        <InputField
          parentClasses="mb-0"
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
        />
        {/* <div className="form-group fv-plugins-icon-container mb-2">
          <input
            placeholder="Password"
            type="password"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              "password"
            )}`}
            name="password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.password}</div>
            </div>
          ) : null}
        </div> */}
        <Link
          to="/auth/forgot-password"
          className="forgot-password text-hover-primary my-3 mr-2"
          id="kt_login_forgot"
        >
          <FormattedMessage id="AUTH.GENERAL.FORGOT_BUTTON" />
        </Link>
        {/* <div className="form-group d-flex flex-wrap justify-content-between align-items-center"> */}
        <Btn
          disabled={loading}
          content={
            <>
              {loading ? (
                <Spinner className="ml-3 spinner-white" />
              ) : (
                <FormattedMessage id="AUTH.LOGIN.BUTTON" />
              )}
            </>
          }
          type="text"
          className={`primary-button w-100 py-4 mt-9`}
        />
        {/* </div> */}
      </form>
    </div>
  );
};

export default Login;
