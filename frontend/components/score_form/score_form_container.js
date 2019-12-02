import { connect } from 'react-redux';

import { createScore, updateScore } from '../../actions/score_actions';
import { clearErrors } from '../../actions/error_actions';
import { scoresArray } from '../../reducers/selectors';
import ScoreForm from './score_form';

const mapStateToProps = state => ({
  allScores: scoresArray(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  createScore: score => dispatch(createScore(score)),
  updateScore: score => dispatch(updateScore(score)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreForm);
