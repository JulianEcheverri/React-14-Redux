// We can create many reducers as we want, but they should be combined as a unique reducer for the application
import { combineReducers } from "redux";
// Reducers
import productsReducer from "./productsReducer";

export default combineReducers({
    products: productsReducer
});