import { combineReducers } from 'redux';
import scoresReducer from './scores_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  scores: scoresReducer,
  errors: errorsReducer
});

export default rootReducer;
