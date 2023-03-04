import { combineReducers, createStore } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { postsReducer } from "./posts/reducer";
import { userReducer } from "./user/reducer";
import { authReducer } from "./auth/reducer";
import { directReducer } from "./direct/reducer";
import { appReducer } from "./app/reducer";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  app: appReducer,
  posts: postsReducer,
  authUser: userReducer,
  auth: authReducer,
  direct: directReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default () => {
  let store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
