import { combineReducers } from "redux";

import { ModalReducer } from "../reducers/modal";
import { LoginReducer } from "../reducers/login";
import { RegisterReducer } from "../reducers/register";

const reducers = combineReducers({
  modal: ModalReducer,
  login: LoginReducer,
  register: RegisterReducer,
});

export default reducers;
