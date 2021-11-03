import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect, useParams, withRouter } from "react-router-dom";
import moment from "moment";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormattedMessage } from "react-intl";
import {
  forgetPasswordRequest,
  loginTokenRequest,
  resendVerficationCodeRequest,
} from "../../../../store/actions/auth";
import Btn from "../../../components/shared/Btn/Btn";
import CountdownTimer from "../../../components/shared/CountdownTimer/countdownTimer";
import Spinner from "./../../../components/shared/Spinner/Spinner";
import InputField from "../../../components/shared/InputField/InputField";
import { darkLogo, mobileLock } from "./../../../../utilis/images";

const Otp = (props) => {
  const dispatch = useDispatch();
  const { lastLocation, userName } = useParams();
  const [loading, setLoading] = useState(false);
  let [seconds, setSeconds] = useState(0);
  const initialValues = {
    otpCode: "",
  };
  const LoginOtpSchema = Yup.object().shape({
    otpCode: Yup.string()
      .required()
      .min(4),
  });
  const end_date = localStorage.getItem("end_date"); // || from store;

  setInterval(() => {
    if (end_date) {
      let now = moment();
      let dueDate = moment(end_date * 1000);
      // console.log("diff", dueDate.diff(now, "seconds"));
      setSeconds(
        dueDate.diff(now, "seconds") < 0 ? 0 : dueDate.diff(now, "seconds")
      );
    }
  }, 1000);

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

  const handleResend = () => {
    dispatch(
      resendVerficationCodeRequest({ username: "test", redirectToOtp: false })
    );
  };

  const formik = useFormik({
    initialValues,
    validationSchema: LoginOtpSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      enableLoading();
      setTimeout(() => {
        if (lastLocation === "login") {
          dispatch(
            loginTokenRequest({ username: userName, otp_code: values.otpCode })
          );
        } else if (lastLocation === "resetting") {
          dispatch(
            forgetPasswordRequest({
              username: userName,
              otp_code: values.otpCode,
            })
          );
        }
      }, 1000);
    },
  });

  return (
    <div className="m-auto h-100 d-flex align-items-center justify-content-center mx-auto otp-wrapper">
      <div className="login-form w-75 login-signin" id="kt_login_signin_form">
        <div className="text-center ">
          <img src={darkLogo} alt="logo" className="logo" />
        </div>
        <div className="d-flex justify-content-center my-6">
          <img src={mobileLock} alt="lock" className='lock-mobile-icon'/>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="form fv-plugins-bootstrap fv-plugins-framework"
        >
          <p className="bold-font text-center ">
            <FormattedMessage id="AUTH.OTP.TITLE" />
          </p>
          <p className="hint-text text-center semiBold-font">
            <FormattedMessage id="AUTH.OTP.HINT" />
          </p>
          {/* timer */}
          <div className="count-down-timer d-flex justify-content-center align-items-baseline mb-0">
            <CountdownTimer seconds={seconds} />
            <p
              className={`small ${
                seconds === 0
                  ? "text-info cursor-pointer"
                  : "text-muted  no-pointer-events"
              }`}
              onClick={handleResend}
            >
              <FormattedMessage id="AUTH.GENERAL.SUBMIT_RESEND" />
            </p>
          </div>
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
