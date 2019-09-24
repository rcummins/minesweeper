import { connect } from 'react-redux';

import { fetchScores, createScore } from '../../actions/score_actions';
import { clearErrors } from '../../actions/error_actions';
import ScoreForm from './score_form';

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  fetchScores: () => dispatch(fetchScores()),
  createScore: score => dispatch(createScore(score)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreForm);
