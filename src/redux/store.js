import { combineReducers, createStore } from "redux";

const initialState = {
  comments: [
    { id: 1, text: "1" },
    { id: 2, text: "2" },
    { id: 3, text: "3" },
    { id: 4, text: "4" },
    { id: 5, text: "5" },
  ],
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            id: Date.now(),
            text: action.text,
          },
        ],
      };

    case "REMOVE":
      return {
        ...state,
        comments: state.comments.filter((item) => item.id !== action.id),
      };
    case "CHANGE":
      const itemIndex = state.comments.indexOf(action.item);

      const textValue = state.comments.find(
        (item) => item.id === action.item.id
      ).text;

      return state;

    default:
      return state;
  }
};

const initialInput = {
  text: "",
};

const inputReducer = (state = initialInput, action) => {
  switch (action.type) {
    case "INPUT_TEXT":
      const text = action.text;

      return {
        ...state,
        text,
      };
    case "CLEAR":
      return {
        ...state,
        text: "",
      };

    default:
      return state;
  }
};

const reducer = combineReducers({
  comments: commentsReducer,
  input: inputReducer,
});

export const store = createStore(reducer);
