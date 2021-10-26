/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, Switch, Redirect } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { ContentRoute } from "../../../../_metronic/layout";
import Login from "./Login";
import Registration from "./Registration";
import ForgotPassword from "./ForgotPassword";
import "../../../../_metronic/_assets/sass/pages/login/classic/login-1.scss";
import "./AuthPage.scss";

export function AuthPage() {
  return (
    <>
      <section className="auth-wrapper primary-gredient d-flex flex-column flex-root">
        <div className="d-flex h-100 justify-content-center align-items-center">
          <div
            className="d-flex h-75 justify-content-center align-items-center auth-content row"
            id="kt_login"
          >
            <div className="col-lg-6 auth-aside login-aside d-flex flex-row-auto bgi-size-cover bgi-no-repeat p-10 p-lg-10"></div>
            <div className=" col-lg-6 auth-form flex-row-fluid d-flex flex-column position-relative p-7 overflow-hidden">
              <div className="d-flex flex-column-fluid flex-center mt-30 mt-lg-0">
                <Switch>
                  <ContentRoute path="/auth/login" component={Login} />
                  <ContentRoute
                    path="/auth/registration"
                    component={Registration}
                  />
                  <ContentRoute
                    path="/auth/forgot-password"
                    component={ForgotPassword}
                  />
                  <Redirect from="/auth" exact={true} to="/auth/login" />
                  <Redirect to="/auth/login" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
