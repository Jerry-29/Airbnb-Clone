import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { FilterReducer } from "./FilterReducer";

const rootReducer = combineReducers({
  FilterReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
console.log(store.getState());
