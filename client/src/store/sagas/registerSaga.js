import { registerUser } from "../../services/user";
import { call, put, takeLatest } from "redux-saga/effects";
import { closeModal } from "../actions/modal";
import { REGISTER_MODAL } from "../../constants/modals";
import tokenSvc from "../../services/storage";
import {
  REGISTER_REQUEST,
  registerUserSuccess,
  registerUserfailure,
} from "../actions/register";

function* registerUserRequest(action) {
  try {
    const data = yield call(registerUser, action.data);
    tokenSvc.setItem("token", data.data.token);
    yield put(closeModal({ id: REGISTER_MODAL }));
    if (data.data.status === "error") {
      yield put(registerUserfailure(data));
    } else {
      yield put(registerUserSuccess(data));
    }
  } catch {
    yield put(registerUserfailure(new Error("SOME ERROR")));
  }
}

export default function* UserSaga() {
  yield takeLatest(REGISTER_REQUEST, registerUserRequest);
}
