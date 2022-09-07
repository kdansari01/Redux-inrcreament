import { combineReducers } from "redux";
import { AddReducer } from "./component/reducer";

export const RootReducer = combineReducers({
  counter: AddReducer
});
