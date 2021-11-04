import React from "react";
import {CircularProgress} from "@material-ui/core";
import {darkLogo} from './../../../utilis/images';

export function SplashScreen() {
  return (
    <>
      <div className="splash-screen">
      <img alt="logo" src={darkLogo} />
        <CircularProgress className="splash-screen-spinner" />
      </div>
    </>
  );
}
