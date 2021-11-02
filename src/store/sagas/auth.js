import { call, put } from "redux-saga/effects";
import {
  loginApi,
  loginTokenApi,
  resendVerficationCodeApi,
} from "../../network/apis/auth";
// import { dispatchSnackbarError } from "../../utils/Shared";
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "../types/auth";
import History from "./../../utilis/history";
import {
  loginReceive,
  resendVerficationCodeReceive,
  loginTokenReceive,
} from "../actions/auth";

// LOGIN OTP
export function* loginSaga(action) {
  try {
    const response = yield call(loginApi, action.payload);
    // localStorage.setItem(
    //   "persist:v713-demo1-auth",
    //   JSON.stringify({
    //     _persist: { version: -1, rehydrated: true },
    //     authToken: "access-token-8f3ae836da744329a6f93bf20594b5cc",
    //     user: "true",
    //   })
    // );

    // yield put(loginReceive(response.data.data.access_token)); //otp code &&  end_date
    // localStorage.setItem("token", response.data.data.access_token); //otp code &&  end_date
    History.push(`/auth/otp/${action.payload.email}`);
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
}

// RESEND VERIFICATION CODE
export function* resendVerficationCodeSaga(action) {
  try {
    const response = yield call(resendVerficationCodeApi, action.payload);
    localStorage.setItem("otpCode", JSON.stringify(response));
    yield put(resendVerficationCodeReceive(response.data)); //otpCode && end_date
    // History.push("/dashboard");
  } catch (err) {
    console.log(err);
  }
}

// LOGIN TOKEN
export function* loginTokenSaga(action) {
  try {
    const response = yield call(loginTokenApi, action.payload);
    localStorage.setItem("token", response.data.data.access_token); //token
    yield put(loginTokenReceive(response.data.data.access_token)); //token
    History.push("/dashboard");
  } catch (err) {
    console.log(err);
  }
}

export function* authSaga() {
  yield takeLatest(TYPES.GET_TOKEN_REQUEST, loginSaga);
  yield takeLatest(
    TYPES.RESEND_VERIFICATION_CODE_REQUEST,
    resendVerficationCodeSaga
  );
  yield takeLatest(TYPES.GET_LOGIN_TOKEN_REQUEST, loginTokenSaga);
}
