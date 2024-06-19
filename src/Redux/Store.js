import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
} from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { authReducer } from "../Auth/Reducer";
import { projectReducer } from "../project/Reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
