import { combineReducers } from "redux";
import cardReducer from "./cardReducer";
import userReducer from "./userReducer";

const appReducer = combineReducers({
  cards: cardReducer,
  user: userReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
