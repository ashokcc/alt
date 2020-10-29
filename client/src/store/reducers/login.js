import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from "../actions/login";

export const InitialState = {
  email: "",
  isLoggedIn: false,
  meta: {},
};
export const LoginReducer = (state = InitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        meta: {},
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        email: payload?.data.email,
        isLoggedIn: payload?.data.email !== "" ? true : false,
        meta: {
          status: payload?.status || "",
          error: payload?.message || "",
        },
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        meta: {
          status: payload?.status || "",
          error: payload?.message || "",
        },
      };

    default:
      return state;
  }
};
