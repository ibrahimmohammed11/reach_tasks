import { combineReducers } from "redux";
import { fetchDataReducer } from "./getVideosReducer.js";
import { setSearchReducer } from "./setSearchReducer.js";

export let rootReducer = combineReducers({
  setSearchReducer,
  fetchDataReducer,
});
