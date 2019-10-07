// NOTE: Each reducer has it's own state, which might be different from the app state.
// In this app, we only have one reducer (the root reducer), so it ends up being the state of our app.

import { ADD_NOTE } from '../actions/actions';
import { REMOVE_NOTE } from '../actions/actions';

const initialState = {
  notes: []
};

// Reducers receive two parameters: the previous state and the action being dispatched.
function rootReducer(state = initialState, action) {
  // We check to see what the action type is and return the new state.  
  switch(action.type) {
    case ADD_NOTE:
      return {
        notes: [
          ...state.notes,
          {
            title: action.title,
            content: action.content
          }
        ]
      };
    case REMOVE_NOTE:
      return {
        notes: state.notes.filter((note, index) => 
        index != action.id)
      };
    default:
      return state;
  };
}

export default rootReducer;