/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React, { useEffect } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../_metronic/layout";
import BasePage from "./BasePage";
import { Logout, AuthPage } from "./modules/Auth";
import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";
import { loginTokenReceive } from "../store/actions/auth";

export function Routes() {
  const dispatch = useDispatch();
  const isAuthorized = useSelector(({ auth }) => auth.token);

  useEffect(() => {
    dispatch(loginTokenReceive(localStorage.getItem("token") || null));
  }, [dispatch]);

  return (
    <Switch>
      {!isAuthorized ? (
        /*Render auth page when user at `/auth` and not authorized.*/
        <Route>
          <AuthPage authPageName={window.location.pathname.split("/")[2]} />
        </Route>
      ) : (
        /*Otherwise redirect to root page (`/`)*/
        <Redirect from="/auth" to="/dashboard" />
      )}

      <Route path="/error" component={ErrorsPage} />
      <Route path="/logout" component={Logout} />

      {!isAuthorized ? (
        /*Redirect to `/auth` when user is not authorized*/
        <Redirect to="/auth/login" />
      ) : (
        <Layout>
          <BasePage />
        </Layout>
      )}
    </Switch>
  );
}
