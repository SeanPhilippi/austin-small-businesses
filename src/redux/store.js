import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import state from './state';

// Redux store to be used in Provider component
export default createStore(
  rootReducer,
  state,
  compose(
    applyMiddleware(thunk),
    (
      window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__()
    ) || compose
  )
);