import { MODAL_CLOSE, MODAL_OPEN } from "../constants/actions";

export const openModal = (id, dispatch) => {
  dispatch({
    type: MODAL_OPEN,
    payload: { id },
  });
};
export const closeModal = (id, dispatch) => {
  dispatch({
    type: MODAL_CLOSE,
    payload: { id },
  });
};
