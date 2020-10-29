export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const getLoginRequest = (data) => ({
  type: LOGIN_REQUEST,
  data,
});

export const getLoginSuccess = ({ data }) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const getLoginfailure = (data) => ({
  type: LOGIN_ERROR,
  payload: data,
});
