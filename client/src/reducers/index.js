import { combineReducers } from "redux";
import cardReducer from "./cardReducer";
import userReducer from "./userReducer";
import topicReducer from "./topicReducer";

const appReducer = combineReducers({
  cards: cardReducer,
  user: userReducer,
  topics: topicReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
