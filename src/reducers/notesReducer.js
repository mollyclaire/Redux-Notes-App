import { ADD_NOTE, REMOVE_NOTE } from '../actions/actions';

// This reducer is slightly different from the original one we created, because the initial state is not defined here.
// We are passing a notes array as a parameter and not the state.
function notesReducer(notes = [], action) {
  switch(action.type) {
    case ADD_NOTE:
      return [
        ...notes,
        {
          title: action.title,
          content: action.content
        }
      ];

    case REMOVE_NOTE:
      return notes.filter((note, index) => index != action.id);

    default:
      return notes;
  };
}

export default notesReducer;