import { connect } from 'react-redux';

import {
  fetchScores,
  createScore,
  updateScore
} from '../../actions/score_actions';
import { clearErrors } from '../../actions/error_actions';
import ScoreForm from './score_form';

const mapStateToProps = state => ({
  allScores: state.scores,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  fetchScores: () => dispatch(fetchScores()),
  createScore: score => dispatch(createScore(score)),
  updateScore: score => dispatch(updateScore(score)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreForm);
