/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link, Switch, Redirect } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { ContentRoute } from "../../../../_metronic/layout";
import Login from "./Login";
import Registration from "./Registration";
import ForgotPassword from "./ForgotPassword";
import "../../../../_metronic/_assets/sass/pages/login/classic/login-1.scss";
import "./AuthPage.scss";
import Otp from "./Otp";
import { useSelector } from "react-redux";
// import test from '../../../../_metronic/_assets/sass/layout/_rtl.scss'

export function AuthPage() {
  useEffect(() => {
    var lang = JSON.parse(localStorage.getItem("i18nConfig")).selectedLang;
    let htmlElem = document.querySelector("html");
    let langDirection = lang === "en" ? "ltr" : "rtl";
    htmlElem.setAttribute("lang", lang);
    htmlElem.setAttribute("dir", langDirection);
    htmlElem.style.direction = langDirection;
    require(lang === "ar"
      ? "./../../../../sass/style.react.rtl.css"
      : "./../../../../sass/style.react.css");
    require(lang === "ar"
      ? "../../../../_metronic/_assets/sass/layout/_rtl.scss"
      : "./../../../../sass/style.react.css");
  }, []);
  const isAuthorized = useSelector(({ auth }) => auth.token);
  const hasOtpCode = useSelector(({ auth }) => auth.otpCode);

  return (
    <>
      <section className="auth-wrapper primary-gredient d-flex flex-column flex-root">
        <div className="d-flex h-100 justify-content-center align-items-center">
          <div className=" auth-content row" id="kt_login">
            <div className=" col-lg-6 auth-form flex-row-fluid d-flex flex-column position-relative py-7 px-0 overflow-hidden">
              <div className="h-100 d-flex align-items-center justify-content-center">
                <Switch>
                  <ContentRoute path="/auth/login" component={Login} />
                  <ContentRoute path="/auth/otp" component={Otp} />
                  <ContentRoute
                    path="/auth/registration"
                    component={Registration}
                  />
                  <ContentRoute
                    path="/auth/forgot-password"
                    component={ForgotPassword}
                  />

                  {/* <Redirect from="/auth" exact={true} to="/auth/login" /> */}
                  {console.log(
                    "login",
                    !hasOtpCode || !localStorage.getItem("otpCode")
                  )}
                  {console.log(
                    "otp",
                    hasOtpCode || localStorage.getItem("otpCode")
                  )}

                  {hasOtpCode || localStorage.getItem("otpCode") ? (
                    <Redirect to="/auth/otp" />
                  ) : (
                    (!hasOtpCode || !localStorage.getItem("otpCode")) && (
                      <Redirect to="/auth/login" />
                    )
                  )}
                </Switch>
              </div>
            </div>
            <div className="col-lg-6 auth-aside login-aside d-lg-flex d-none flex-row-auto bgi-size-cover bgi-no-repeat p-10 p-lg-10"></div>
          </div>
        </div>
      </section>
    </>
  );
}
