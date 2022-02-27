import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { FilterReducer } from "./FilterReducer";
import { LoginReducer } from "./LoginReducer";
import {SearchReducer} from './Search/SearchReducer'
const rootReducer = combineReducers({
  FilterReducer,
  SearchReducer,
  LoginReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
console.log(store.getState());
