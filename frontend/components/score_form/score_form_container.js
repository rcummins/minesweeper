import { connect } from 'react-redux';

import { fetchScores, createScore } from '../../actions/score_actions';
import ScoreForm from './score_form';

const mapDispatchToProps = dispatch => ({
  fetchScores: () => dispatch(fetchScores()),
  createScore: score => dispatch(createScore(score))
});

export default connect(
  null,
  mapDispatchToProps
)(ScoreForm);
