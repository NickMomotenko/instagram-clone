export const initialState = {
  isAuth: false,
};

export const LOGIN = "AUTH/LOGIN";
export const LOGUT = "AUTH/LOGUT";
export const SIGNUP = "AUTH/SIGNUP";

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      const [login, password] = action.data;

      console.log(login, password);

      return { ...state, isAuth: true };
    }

    case LOGUT: {
      return { ...state, isAuth: false };
    }

    default:
      return state;
  }
};
