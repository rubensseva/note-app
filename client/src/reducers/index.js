import { combineReducers } from 'redux';
import cardReducer from './cardReducer';

const appReducer = combineReducers({
  cards: cardReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;
