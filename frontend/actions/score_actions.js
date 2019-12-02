import * as ScoreAPIUtil from '../util/score_api_util';
import { receiveErrors } from '../actions/error_actions';

export const RECEIVE_SCORES = "RECEIVE_SCORES";
export const RECEIVE_SCORE = "RECEIVE_SCORE";

export const receiveScores = scores => ({
  type: RECEIVE_SCORES,
  scores
});

export const receiveScore = score => ({
  type: RECEIVE_SCORE,
  score
});

export const fetchScores = () => dispatch => (
  ScoreAPIUtil.fetchScores().then(
    scores => dispatch(receiveScores(scores))
  )
);

export const createScore = formScore => dispatch => (
  ScoreAPIUtil.createScore(formScore).then(
    score => dispatch(receiveScore(score)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const updateScore = formScore => dispatch => (
  ScoreAPIUtil.updateScore(formScore).then(
    score => dispatch(receiveScore(score))
  )
);
