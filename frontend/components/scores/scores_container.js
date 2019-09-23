import { connect } from 'react-redux';

import { fetchScores } from '../../actions/score_actions';
import Scores from './scores';

const mapStateToProps = state => ({
  scores: state.scores
});

const mapDispatchToProps = dispatch => ({
  fetchScores: () => dispatch(fetchScores())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scores);
