import React, { useEffect, useState } from "react";
import moment from "moment";
import momentTimeZone from "moment-timezone";
import "./countdownTimer.scss";
import { FormattedMessage } from "react-intl";

const CountdownTimer = ({ seconds }) => {
  // useEffect(
  //   (end_date) => {
  //     if (end_date) {
  //       console.log(end_date);
  //       let now = momentTimeZone
  //         .unix(new Date().getTime() / 1000)
  //         .tz("Asia/Riyadh");

  //       let dueDate = moment(end_date * 1000);
  //       console.log(moment(dueDate.diff(now)).format("ss"));
  //     }
  //   },
  //   [end_date]
  // );

  // setInterval(() => {
  //   if (end_date) {
  //     let now = moment();
  //     let dueDate = moment(1635861720 * 1000);
  //     // console.log("dueDate,", moment(dueDate).format("YYYY:MM:dd HH:mm:ss"));
  //     // console.log("now,", moment(now).format("YYYY:MM:dd HH:mm:ss"));
  //     // console.log("diff", dueDate.diff(now, "seconds"));
  //     setSeconds(
  //       dueDate.diff(now, "seconds") < 0 ? 0 : dueDate.diff(now, "seconds")
  //     );
  //   }
  // }, 1000);

  return (
    <div className="mx-2 d-flex flex-column justify-content-center align-items-center">
      <p className="small date-part-value medium-font mb-0">
        {seconds}
        <small className="mx-2">
          {<FormattedMessage id="PAGES.COMMEON.SECONDS" />}
        </small>
      </p>
    </div>
  );
};
export default CountdownTimer;
