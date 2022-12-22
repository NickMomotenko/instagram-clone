import { combineReducers, createStore } from "redux";
import { postsReducer } from "./posts/reducer";
import { userReducer } from "./user/reducer";

const reducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
