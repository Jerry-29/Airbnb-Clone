import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { FilterReducer } from "./FilterReducer";
import {SearchReducer} from './Search/SearchReducer'
const rootReducer = combineReducers({
  FilterReducer,
  SearchReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
console.log(store.getState());
