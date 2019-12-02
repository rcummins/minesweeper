import { RECEIVE_SCORES, RECEIVE_SCORE } from '../actions/score_actions';

const scoresReducer = ( oldState = [], action ) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_SCORES:
      return Object.assign({}, action.scores);

    case RECEIVE_SCORE:
      return Object.assign({}, oldState, action.score);

    default:
      return oldState;
  }
};

export default scoresReducer;
