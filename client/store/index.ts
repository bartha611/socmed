import { combineReducers, createStore, applyMiddleware } from "redux";

import userReducer from "./Users/reducer";
import postReducer from "./Posts/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer
});

const store = createStore(rootReducer);

export default store;
