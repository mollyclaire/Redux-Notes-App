import { createStore } from 'redux';
import rootReducer from '../reducers/reducers';

// This function is a part of Redux, and we are passing only one argument,
// the root reducer of the application.
export default createStore(rootReducer);