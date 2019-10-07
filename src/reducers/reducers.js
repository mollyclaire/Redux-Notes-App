// NOTE: The commented section at the bottom of the file was the previous root reducer. 
// At first, we only had one reducer, and it ended up being the state of our app.
// Once we added the visibility reducer, we needed to use the combineReducers function to manage the states
// of both the notes and the visibility.


import notesReducer from './notesReducer';
import visibilityReducer from './visibilityReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  notes: notesReducer,
  visibility: visibilityReducer
});

export default reducers;

// import { ADD_NOTE } from '../actions/actions';
// import { REMOVE_NOTE } from '../actions/actions';

// const initialState = {
//   notes: []
// };

// Reducers receive two parameters: the previous state and the action being dispatched.
// function rootReducer(state = initialState, action) {
  // We check to see what the action type is and return the new state.  
//   switch(action.type) {
//     case ADD_NOTE:
//       return {
//         notes: [
//           ...state.notes,
//           {
//             title: action.title,
//             content: action.content
//           }
//         ]
//       };
//     case REMOVE_NOTE:
//       return {
//         notes: state.notes.filter((note, index) => 
//         index != action.id)
//       };
//     default:
//       return state;
//   };
// }

// export default rootReducer;

