import { RECEIVE_SCORES, RECEIVE_SCORE } from '../actions/score_actions';

const scoresReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_SCORES:
      let newState = {};
      action.scores.forEach( score => newState[score.id] = score );
      return newState;

    case RECEIVE_SCORE:
      let newScore = {};
      newScore[action.score.id] = action.score;
      return Object.assign({}, oldState, newScore);

    default:
      return oldState;
  }
};

export default scoresReducer;
