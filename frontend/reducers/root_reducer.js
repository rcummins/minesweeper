import { combineReducers } from 'redux';
import scoresReducer from './scores_reducer';

const rootReducer = combineReducers({
  scores: scoresReducer
});

export default rootReducer;
