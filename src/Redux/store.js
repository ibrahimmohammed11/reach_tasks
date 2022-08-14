import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./Reducers/combineReducers";

let middleWares = [thunk];

let store = createStore(rootReducer, compose(applyMiddleware(...middleWares)));
export default store;
