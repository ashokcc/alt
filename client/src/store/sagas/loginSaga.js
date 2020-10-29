import { call, put, takeLatest } from "redux-saga/effects";
import { loginUser } from "../../services/user";
import { closeModal } from "../actions/modal";
import { LOGIN_MODAL } from "../../constants/modals";
import tokenSvc from "../../services/storage";

import {
  getLoginSuccess,
  getLoginfailure,
  LOGIN_REQUEST,
} from "../actions/login";

function* getLogin(action) {
  try {
    const data = yield call(loginUser, action.data);
    tokenSvc.setItem("token", data.data.token);
    yield put(closeModal({ id: LOGIN_MODAL }));
    if (data.data.status === "error") {
      yield put(getLoginfailure(data));
    } else {
      yield put(getLoginSuccess(data));
    }
  } catch {
    yield put(getLoginfailure(new Error("SOME ERROR")));
  }
}

export default function* UserSaga() {
  yield takeLatest(LOGIN_REQUEST, getLogin);
}
