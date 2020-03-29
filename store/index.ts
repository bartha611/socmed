import { combineReducers, createStore, applyMiddleware } from "redux";

import userReducer from "./Users/reducer";
import postReducer from "./Posts/reducer";
import commentReducer from "./Comments/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
  comment: commentReducer
});

const store = createStore(rootReducer);

export default store;
