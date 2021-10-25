import { call, put } from "redux-saga/effects";
import {
  loginApi,
} from "../../network/apis/auth";
// import { dispatchSnackbarError } from "../../utils/Shared";
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "../types/auth";

export function* loginSaga(action) {
  try {
    const response = yield call(loginApi, action.payload);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

export function* authSaga() {
  yield takeLatest(TYPES.GET_TOKEN_REQUEST, loginSaga);
}
