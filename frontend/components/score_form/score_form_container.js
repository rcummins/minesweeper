import { connect } from 'react-redux';

import { createScore } from '../../actions/score_actions';
import ScoreForm from './score_form';

const mapDispatchToProps = dispatch => ({
  createScore: score => dispatch(createScore(score))
});

export default connect(
  null,
  mapDispatchToProps
)(ScoreForm);
