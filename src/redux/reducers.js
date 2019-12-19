import { TYPES } from './actions';
import listings from '../listings.json'

const initialState = {
  isAuthenticated: true,
  user: {
    username: '',
    password: ''
  },
  errors: {
    login: {},
    register: {}
  },
  listings,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.SET_CURRENT_USER: return {
      ...state,
      isAuthenticated: payload.bool,
      user: payload.user
    };
    case TYPES.DELETE_LISTING: return {
      ...state,
      listings: [...state.listings.filter((listing, i) => i !== payload)]
    };
    default: return state;
  };
};