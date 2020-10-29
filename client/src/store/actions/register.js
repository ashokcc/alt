export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";
export const registerUserRequest = (data) => ({
  type: REGISTER_REQUEST,
  data,
});

export const registerUserSuccess = ({ data }) => ({
  type: REGISTER_SUCCESS,
  payload: data,
});

export const registerUserfailure = (data) => ({
  type: REGISTER_ERROR,
  payload: data,
});
