// We can create many reducers as we want, but they should be combined as a unique reducer for the application
import { combineReducers } from "redux";
// Reducers
import productReducer from "./productReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
  products: productReducer,
  alert: alertReducer,
});
