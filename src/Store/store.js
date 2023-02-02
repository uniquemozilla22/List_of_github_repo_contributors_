import {
  applyMiddleware,
  combineReducers,
  configureStore,
  createStore,
} from "@reduxjs/toolkit";
import { contributors } from "./slice/contributors";

import thunkMiddleware from "redux-thunk";
import { createStoreHook } from "react-redux";

const composedEnhancer = applyMiddleware(thunkMiddleware);
const reducer = combineReducers({
  contributors,
});
export const store = configureStore(
  { reducer, middleware: [thunkMiddleware] },
  composedEnhancer
);
