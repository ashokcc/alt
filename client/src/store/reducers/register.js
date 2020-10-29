import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "../actions/register";

export const InitialState = {
  email: "",
  name: "",
  meta: {},
};
export const RegisterReducer = (state = InitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        meta: {},
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        email: payload?.data.email,
        name: payload?.data.name,
        meta: {
          status: payload?.status || "",
          error: payload?.message || "",
        },
      };
    case REGISTER_ERROR:
      return {
        ...state,
        email: "",
        meta: {
          status: payload?.status || "",
          error: payload?.message || "",
        },
      };

    default:
      return state;
  }
};
