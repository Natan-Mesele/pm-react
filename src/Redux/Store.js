import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
} from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { projectReducer } from "./project/Reducer";
import ChatReducer from "./Chat/Reducer";
import commentReducer from "./comment/Reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  Chat: ChatReducer,
  comment: commentReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
