import { combineReducers } from "redux";
import favoriteReducer from "./favoriteReducer";
import homeReducer from "./homeReducer";

export default combineReducers({
  favorite: favoriteReducer,
  home: homeReducer,
});
