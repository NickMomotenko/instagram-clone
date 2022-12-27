import { LOGIN, LOGUT, SIGNUP } from "./types";

const initialState = {
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      const {
        data: [login, password],
        isPreview,
      } = action.payload;

      if (!isPreview) {
        alert(`Твои данные:
      Логин: ${login} , password: ${password}
      Welcome ;)
      `);
      }

      return { ...state, isAuth: true };
    }

    case LOGUT: {
      return { ...state, isAuth: false };
    }

    case SIGNUP: {
      return state;
    }

    default:
      return state;
  }
};
