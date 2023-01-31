import { createStore } from "redux";
import { reducers as combineReducer } from "./store.reducers";

export const store = createStore(combineReducer);