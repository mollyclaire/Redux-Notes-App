import { ADD_NOTE } from '../actions/actions';

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

    default:
      return state;
  };
}

export default rootReducer;