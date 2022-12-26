import { LOGIN, LOGUT , SIGNUP } from "./types";

const initialState = {
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      const [login, password] = action.data;

      return { ...state, isAuth: true };
    }

    case LOGUT: {
      return { ...state, isAuth: false };
      // return state;
    }

    case SIGNUP:{
      return state;
    }

    default:
      return state;
  }
};
