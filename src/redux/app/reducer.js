import { SET_PRELOADER_STATUS } from "./types";

const initialState = {
  isPreloaderActive: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRELOADER_STATUS: {
      return { ...state, isPreloaderActive: action.payload };
    }
    default:
      return state;
  }
};
