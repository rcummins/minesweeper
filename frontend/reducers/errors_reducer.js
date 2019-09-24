import { RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/error_actions';

const errorsReducer = ( oldState = [], action ) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.errors;

    case CLEAR_ERRORS:
      return [];

    default:
      return oldState;
  }
};

export default errorsReducer;
