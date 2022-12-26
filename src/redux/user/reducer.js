import { authUser } from "../mockData";
import { UPDATE_USER } from "./types";

export const initialState = {
  authUser: authUser,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      const { updatedUserData } = action;

      return { ...state, authUser: { ...updatedUserData } };

    default:
      return state;
  }
};
