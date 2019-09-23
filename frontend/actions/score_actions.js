import * as ScoreAPIUtil from '../util/score_api_util';

export const RECEIVE_SCORES = "RECEIVE_SCORES";
export const RECEIVE_SCORE = "RECEIVE_SCORE";

export const receiveScores = scores => ({
  type: RECEIVE_SCORES,
  scores
});

export const receiveScore = score => ({
  type: RECEIVE_SCORES,
  score
});

export const fetchScores = () => dispatch => (
  ScoreAPIUtil.fetchScores().then(
    scores => dispatch(receiveScores(scores))
  )
);

export const createScore = formScore => dispatch => (
  ScoreAPIUtil.createScore(formScore).then(
    score => dispatch(receiveScore(score))
  )
);