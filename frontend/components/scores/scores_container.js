import { connect } from 'react-redux';

import { fetchScores, createScore } from '../../actions/score_actions';
import { scoreArray } from '../../reducers/selectors';
import Scores from './scores';

const mapStateToProps = state => ({
  scores: scoreArray(state.scores)
});

const mapDispatchToProps = dispatch => ({
  fetchScores: () => dispatch(fetchScores()),
  createScore: score => dispatch(createScore(score))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scores);
