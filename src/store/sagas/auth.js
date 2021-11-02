import { call, put } from "redux-saga/effects";
import { loginApi } from "../../network/apis/auth";
// import { dispatchSnackbarError } from "../../utils/Shared";
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "../types/auth";
import History from "./../../utilis/history";
import { loginReceive } from "../actions/auth";

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

    // localStorage.setItem("token", response.data.data.access_token);
    // yield put(loginReceive({token,response.data.data.access_token}));
    // History.push("/dashboard");

    localStorage.setItem("otpCode", 1111);
    localStorage.setItem("expirationDate", 1111);
    yield put(loginReceive({ token: '', userName: '', otpCode: 1111 }));
    History.push("/auth/otp");
  } catch (err) {
    console.log(err);
  }
}

export function* authSaga() {
  yield takeLatest(TYPES.GET_TOKEN_REQUEST, loginSaga);
}
