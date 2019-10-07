import { SHOW_ALL } from '../actions/actions';

// This reducer will manage only the visibility part of the state.
function visibilityReducer(visibility = SHOW_ALL, action) {
  switch(action.type) {
    case SHOW_ALL:
      return SHOW_ALL;

    default:
      return visibility;
  };
}

export default visibilityReducer;