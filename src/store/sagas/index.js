import { all } from "redux-saga/effects";
import { authSaga } from "./auth";

export function* watchSagas() {
  yield all([authSaga()]);
}
