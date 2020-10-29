export const MODAL_OPEN = "MODAL_OPEN";
export const MODAL_CLOSE = "MODAL_CLOSE";

export const openModal = (data) => ({
  type: MODAL_OPEN,
  payload: data,
});
export const closeModal = (data) => ({
  type: MODAL_CLOSE,
  payload: data,
});
