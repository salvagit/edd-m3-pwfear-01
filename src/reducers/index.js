import { combineReducers } from "redux";
import list from "./list";
import cart from "./cart";

export default combineReducers({
  list,
  cart
});
