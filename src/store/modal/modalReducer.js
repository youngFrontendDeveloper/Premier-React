import { MODAL } from "./modalActions";

const initialModal = {
  isModalOpen: false,
};

export const modalReducer = (state = initialModal, { type, payload }) => {
  switch( type ) {
    case MODAL:
      return {
        ...state,
        isModalOpen: payload
      };

    default:
      return state;
  }
};