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
        logo
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
        <div className="form-group fv-plugins-icon-container">
          <label className='label-text mb-2'>اسم المستخدم</label>
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
        </div>
        <div className="form-group fv-plugins-icon-container mb-2">
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
        </div>
           <Link
            to="/auth/forgot-password"
            className="forgot-password text-hover-primary my-3 mr-2"
            id="kt_login_forgot"
          >
            <FormattedMessage id="AUTH.GENERAL.FORGOT_BUTTON" />
          </Link>
        <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
         
          <button
            id="kt_login_signin_submit"
            type="submit"
            disabled={formik.isSubmitting}
            className={`btn btn-primary font-weight-bold px-9 py-4 my-3`}
          >
            <span>Sign In</span>
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
