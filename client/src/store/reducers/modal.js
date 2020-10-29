import { MODAL_OPEN, MODAL_CLOSE } from "../actions/modal";

export const InitialState = {
  modals: { global: true },
};
export const ModalReducer = (state = InitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case MODAL_OPEN:
      return {
        ...state,
        modals: {
          ...state.modals,
          [payload.id]: true,
        },
      };
    case MODAL_CLOSE:
      return {
        ...state,
        modals: {
          ...state.modals,
          [payload.id]: false,
        },
      };
    default:
      return state;
  }
};
