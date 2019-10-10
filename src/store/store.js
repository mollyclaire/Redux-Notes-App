import { createStore } from 'redux';
import reducers from '../reducers/reducers';

// Here we are just defining an initial state. This will overwrite any default values we have in our reducers.
// It's not necessary to define an initial state.
let initialState = {
    notes: [
      { title: 'Cognitive Bias', content: 'Listen to The Cognitive Bias podcast this week.' }
    ],
    visibility: 'AWESOME_TAG'
  };

// This createStore function is a part of Redux, and we are passing three arguments,
// the reducers, the initial state, and the Redux DevTools extension. Only one parameter (the reducer),
// is necessary. The third argument should reserved for such things like middleware.
export default createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

i 