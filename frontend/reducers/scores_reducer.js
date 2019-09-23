import { RECEIVE_SCORES, RECEIVE_SCORE } from '../actions/score_actions';

const scoresReducer = ( oldState = [], action ) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_SCORES:
      return action.scores;

    case RECEIVE_SCORE:
      return [...oldState, action.score];

    default:
      return oldState;
  }
};

export default scoresReducer;
