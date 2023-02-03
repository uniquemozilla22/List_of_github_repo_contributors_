import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { contributors } from "./slice/contributors";
import { UserDetails as user } from "./slice/userDetail";

import thunkMiddleware from "redux-thunk";

const composedEnhancer = applyMiddleware(thunkMiddleware);
const reducer = combineReducers({
  contributors,
  user,
});
export const store = configureStore(
  { reducer, middleware: [thunkMiddleware] },
  composedEnhancer
);
