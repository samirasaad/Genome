import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useFormik } from "formik";
import * as Yup from "yup";
import { resendVerficationCodeRequest } from "../../../../store/actions/auth";
import store from "../../../../store";
import Btn from "../../../components/shared/Btn/Btn";
import Spinner from "./../../../components/shared/Spinner/Spinner";
import InputField from "../../../components/shared/InputField/InputField";
import { darkLogo } from "./../../../../utilis/images";

const initialValues = {
  userName: "",
};

const ForgotPassword = (props) => {
  const [loading, setLoading] = useState(false);

  const LoginSchema = Yup.object().shape({
    userName: Yup.string().required(),
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
        store.dispatch(
          resendVerficationCodeRequest({
            username: values.userName,
            redirectToOtp: true,
            lastLoation: "resetting",
          })
        );
      }, 1000);
    },
  });

  return (
    <div className="h-100 d-flex align-items-center justify-content-center mx-auto forget-wrapper">
      <div className="login-form w-75 login-signin" id="kt_login_signin_form">
        <div className="text-center mb-10 ">
          <img src={darkLogo} alt="logo" className="logo" />
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="form fv-plugins-bootstrap fv-plugins-framework"
        >
          <p className="bold-font text-center mb-3">
            <FormattedMessage id="AUTH.FORGOT.TITLE" />
          </p>
          <p className="hint-text text-center semiBold-font">
            <FormattedMessage id="AUTH.FORGOT.HINT" />
          </p>
          <InputField
            parentClasses="mt-10"
            input={{
              isRequired: true,
              inputClasses: "form-control form-control-solid h-auto py-3 px-5",
              placeholderId: "AUTH.LOGIN.USERNAME.PLACEHOLDER",
              name: "userName",
              id: "userName",
              type: "userName",
            }}
            label={{
              labelText: <FormattedMessage id="AUTH.LOGIN.USERNAME" />,
              labelClasses: "mb-2",
            }}
            {...formik.getFieldProps("userName")}
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

export default ForgotPassword;
