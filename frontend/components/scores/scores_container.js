import { connect } from 'react-redux';

import { fetchScores } from '../../actions/score_actions';
import { scoresArraySorted } from '../../reducers/selectors';
import Scores from './scores';

const mapStateToProps = state => ({
  scores: scoresArraySorted(state)
});

const mapDispatchToProps = dispatch => ({
  fetchScores: () => dispatch(fetchScores())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scores);
