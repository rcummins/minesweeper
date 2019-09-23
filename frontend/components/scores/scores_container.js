import { connect } from 'react-redux';

import { fetchScores, createScore } from '../../actions/score_actions';
import Scores from './scores';

const mapStateToProps = state => ({
  scores: state.scores
});

const mapDispatchToProps = dispatch => ({
  fetchScores: () => dispatch(fetchScores()),
  createScore: score => dispatch(createScore(score))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scores);
