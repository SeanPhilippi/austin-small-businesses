import { TYPES } from './actions';
import { combineReducers } from 'redux';

const isAuthenticated = (state = false, { type, payload }) => {
  switch (type) {
    case TYPES.SET_AUTHENTICATED:
      return payload;
    default:
      return state;
  }
}

const user = (state = {}, { type, payload }) => {
  switch (type) {
    case TYPES.SET_CURRENT_USER:
      return payload;
    default:
      return state;
  }
}

const errors = (state = {}, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
}

const listings = (state = [], { type, payload }) => {
  switch (type) {
    case TYPES.DELETE_LISTING:
      return [...state.filter((listing, i) => i !== payload)];
    default:
      return state;
  }
};

const rootReducer = combineReducers({ isAuthenticated, user, errors, listings });

export default rootReducer;